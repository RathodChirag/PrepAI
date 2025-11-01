import React from 'react';
import dayjs from 'dayjs';
import { getRandomInterviewCover } from "@/lib/utils";
import Image from "next/image";
import Link from 'next/link';
import { Button } from './ui/button';
import DisplayTechIcons from './DisplayTechIcons';

const interviewCard = ({ id, userId, role, type, techstack, createdAt }: InterviewCardProps) => {
    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');
  return (
      <div className='card-border w-full min-h-96'>
          <div className='card-interview'>
              <div className='flex flex-col gap-4'>
                  <div className='flex justify-between items-start'>
                      <Image src={getRandomInterviewCover()} alt="cover" width={60} height={60} className="rounded-full object-cover size-[60px]" />
                      <div className='px-3 py-1 rounded-full bg-light-600'>
                          <p className='badge-text text-xs'>{normalizedType}</p>
                      </div>
                  </div>
                  
                  <h3 className='text-xl font-semibold capitalize'>{role} Interview</h3>

                  <div className='flex items-center gap-2 text-sm'>
                      <Image src="/calendar.svg" alt='calendar' width={16} height={16}/>
                      <span>{formattedDate}</span>
                      <Image src='/star.svg' alt='star' height={16} width={16} className='ml-4' />
                      <span className='ml-1'>{feedback?.totalScore || '---'}/100</span>
                  </div>

                  <p className='text-sm text-gray-400 line-clamp-2'>
                      {feedback?.finalAssessment || "You haven't taken the interview yet. Take it now to improve your skills."}
                  </p>
              </div>

              <div className='flex justify-between items-center mt-auto'>
                  <DisplayTechIcons techStack={techstack}/>
                  <Button className="btn-primary text-sm px-4 py-2">
                      <Link href={feedback
                          ? `/interview/${id}/feedback`
                          : `/interview/${id}`
                        }>
                          {feedback ? 'Check Feedback' : 'View Interview'}
                          </Link>
                  </Button>
              </div>
          </div>
    </div>
  )
}

export default interviewCard 