import Head from 'next/head'

import BasicLayout from '../components/basic-layout'
import Button from '../components/button'
import CategoryList from '../components/category-list'
import Footer from '../components/footer'
import Header from '../components/header'
import HighlightedArticle from '../components/highlighted-article'
import Top from '../components/top'

export default function Home() {
  const doctors = [
    {
      name: 'Andrea',
      speciality: 'Chirurgien',
      city: 'Antananarivo',
      photo: 'https://c.pxhere.com/photos/ff/3e/woman_coat_girl_people_laboratory_lab_face_hospital-1005258.jpg!d'
    },
    {
      name: 'Pascal',
      speciality: 'Chirurgien',
      city: 'Antananarivo',
      photo: 'https://c.pxhere.com/photos/e0/56/cardiac_people_doctor_hospital_cardio_cardiology_check_checkup-1005146.jpg!d'
    },
    {
      name: 'Claudine',
      speciality: 'Chirurgien',
      city: 'Antananarivo',
      photo: 'https://get.pxhere.com/photo/dog-male-female-fur-kitten-cat-feline-mammal-care-blue-professional-health-product-kitty-snout-vertebrate-doctor-medical-veterinarian-vet-stethoscope-dog-like-mammal-768891.jpg'
    },
    {
      name: 'Sarah',
      speciality: 'Chirurgien',
      city: 'Antananarivo',
      photo: 'https://c.pxhere.com/photos/75/bb/dentist_doctor-655882.jpg!d'
    },
  ]

  const pharmacies = [
    {
      name: 'Sabotsy Namehana',
      city: 'Antananarivo',
      photo: 'https://libreshot.com/wp-content/uploads/2016/12/pharmacy.jpg'
    },
    {
      name: 'Analamahitsy',
      city: 'Antananarivo',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Pharmacy_Morid.JPG'
    },
    {
      name: 'Ankadikely',
      city: 'Antananarivo',
      photo: 'https://cdn10.picryl.com/photo/1976/07/07/1lt-frederic-a-lombardo-fills-a-prescription-in-the-pharmacy-at-kenner-army-66e60c-1600.jpg'
    },
    {
      name: 'Analamahitsy',
      city: 'Antananarivo',
      photo: 'https://s0.geograph.org.uk/geophotos/04/81/82/4818214_2f8ca28b.jpg'
    },
  ]

  const article = {
    user: 'Naris',
    media: 'https://www.belmarrahealth.com/wp-content/uploads/2017/06/bradyphrenia-500x340.jpg',
    content: 'Headache, an almost universal human experience, is one of the most common complaints encountered in medicine and neurology. Described and categorized since antiquity, with the first classification by Aretaeus of Cappadocia, other classifications followed. The evaluation of this condition may be straightforward or challenging, and, though often benign, headache may prove to be an ominous symptom. This review discusses the current diagnosis and classification of headache disorders and principles of management, with a focus on migraine, tension-type headache, trigeminal autonomic cephalgias, and various types of daily headache.',
    date: '11/12/2020',
    avatar: 'https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg',
    title: 'Maux de tête'
  }

  const topDoctors = doctors.map(doctor => ({ name: doctor.name, media: doctor.photo, info: doctor.speciality + ' - ' + doctor.city }))
  const topPharmacies = pharmacies.map(doctor => ({ name: doctor.name, media: doctor.photo, info: doctor.city }))

  return (
    <BasicLayout>
      <Head>
        <title>Pharmedico</title>
      </Head>

      <Header />

      <main className="w-8/12 my-10 mx-auto">

        <div>
          <div className="mb-4 font-bold text-2xl text-center text-gray-600">
            Les médecins et pharmacies d'Antananarivo
          </div>
          <CategoryList />
        </div>

        <div className="py-4 my-10 bg-gray-100">
          <Top title="Top médecins" subTitle="Nos top 4 des professionnels de la santé" elements={topDoctors} />
          <div className="my-4 flex justify-center">
            <Button link className="text-green-600 text-lg font-bold">
              Voir plus de médecins
            </Button>
          </div>
        </div>
        
        <div className="py-4 my-10 bg-gray-100">
          <Top title="Top pharmacies" subTitle="Nos top 4 des pharmacies" elements={topPharmacies} />
          <div className="my-4 flex justify-center">
            <Button link className="text-green-600 text-lg font-bold">
              Voir plus de pharmacies
            </Button>
          </div>
        </div>

        <div className="py-4 px-8 my-10 bg-gray-100">
          <div className="mb-4 font-bold text-2xl text-center text-gray-600">
            Article de la semaine
          </div>
          <HighlightedArticle title={article.title} user={article.user} media={article.media} date={article.date} avatar={article.avatar} >
            {article.content}
          </HighlightedArticle>
          <div className="my-4 flex justify-center">
            <Button link className="text-green-600 text-lg font-bold">
              Voir plus d'articles
            </Button>
          </div>
        </div>

      </main>

      <Footer />
    </BasicLayout>
  )
}
