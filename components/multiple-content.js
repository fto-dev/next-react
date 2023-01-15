import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';

export default function MultipleContent() {
    const { t } = useTranslation(process.env.localesFiles);
    const router = useRouter();
    const multipleContent = t('multipleContent', { returnObjects: true, ns: "common" });

    // Common Content Components

    return (
        <>
            <ul className="list-none mt-3">
            {
                multipleContent.map((item , index) => (
                    <li className={index == 0 ? '' : 'mt-5'} key={index}>
                        <b className='mb-5'>{item.title}</b>
                        <br></br>
                        {item.description}
                    </li>
                ))
            }
            </ul>
        </>
    )
}
