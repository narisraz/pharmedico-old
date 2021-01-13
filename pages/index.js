import Head from 'next/head'

import BasicLayout from '../components/basic-layout'
import Card from '../components/card'
import CategoryList from '../components/category-list'
import Header from '../components/header'
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
        </div>
        
        <div className="py-4 my-10 bg-gray-100">
          <Top title="Top pharmacies" subTitle="Nos top 4 des pharmacies" elements={topPharmacies} />
        </div>

      </main>
    </BasicLayout>
  )
}
