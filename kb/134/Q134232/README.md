---
layout: page
title: "Q134232: PC WSPlus: Frequently Asked Questions for Schedule+"
permalink: /kb/134/Q134232/
---

## Q134232: PC WSPlus: Frequently Asked Questions for Schedule+

{% raw %}

	Article: Q134232
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	1.00 1.00a
	WINDOWS
	kbref
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	Below is a list of frequently asked questions and the answers about
	versions 1.0 and 1.0a of Microsoft Schedule+ for Windows.
	
	1. Q. Can you customize the display of time intervals in the daily calendar (for
	  example, to display the day in 15 minute intervals)?
	
	  A. It is not possible to customize the view; however, you can schedule
	  appointments to start or end at any time. To alter a start or end time to
	  something other than :00 or :30, double-click the appointment and use the
	  Start or End controls to change the time. The start time is displayed in the
	  appointment description and is used to set off the reminder at the
	  appropriate time.
	
	2. Q. Do tasks "roll over" from one day to the next if they are not completed?
	
	  A. Schedule+ has a model for tasks that is different from most programs of
	  this type. Tasks are not associated with a particular day; however, you can
	  assign a due date.
	
	  You enter and view tasks in Tasks mode, which is completely different from
	  Appointment Book mode. By the nature of this model, tasks are always present
	  until you complete them or delete them from the list.
	
	3. Q. Is there any interaction between Microsoft Project and Microsoft Schedule+
	  so that tasks assigned to me in Project can be put in my task list?
	
	  A. No. In the current version of Schedule+, other applications cannot make
	  calls to Schedule+.
	
	4. Q. Are meetings entered by someone other than myself distinguished in any
	  way?
	
	  A. Yes. If you double-click an appointment created by someone else, the name
	  of the person who created it is displayed at the bottom of the appointment
	  details. However, the appointment is not identified by an icon or special
	  color in the Appointment Book.
	
	5. Q. How do you sign in as another user in order to view or modify that
	  person's calendar?
	
	  A. You do not need to sign in as another user to open that person's calendar.
	  Schedule+ allows you to grant access privileges to other users by choosing
	  the Set Access Privileges option from the Options menu.
	
	  Once you have assigned privileges to another user, that person can view your
	  calendar while signed in under his or her own account by choosing Open
	  Other's Appointment Book from the File menu.
	
	6. Q. If I have an assistant, do we both receive meeting messages for my
	  meetings or does only my assistant receive them?
	
	  A. You can specify either of the above. If you choose General Options from the
	  Options menu, a check box that specifies Send Meeting Messages Only to My
	  Assistant is displayed.
	
	7. Q. Can you use Schedule+ if you are running the Microsoft Mail for PC
	  Networks, Macintosh workstation?
	
	  A. No. To run Schedule+, one of the following conditions must exist:
	
	   - You are running version 3.0 or later of Microsoft Mail for Windows against
	     a Microsoft Mail for PC Networks postoffice.
	
	   - You are running Microsoft Mail for AppleTalk Networks. In this case, you
	     can run Schedule+ for AppleTalk Networks.
	
	8. Q. Why is there no bridge between Schedule+ for Windows and Schedule+ for
	  AppleTalk Networks so that users on the two platforms can share Free/Busy
	  information and send meeting requests to each other?
	
	  A. If you use version 3.2 of Microsoft Mail Connection for PC and AppleTalk
	  Networks, users on both mail platforms can exchange meeting requests with
	  users on the other platform.
	
	  It is not possible to exchange Free/Busy times between mail platforms.
	
	9. Q. Does Schedule+ support OLE?
	
	  A. Schedule+ does not support OLE. You cannot embed objects in appointments,
	  in the notepad, or in the meeting request messages.
	
	10. Q. Does Schedule+ support attachments so that I can attach an agenda to my
	  meeting request or attach a note to an appointment in my daily calendar?
	
	  A. Schedule+ does not have an actual attachment feature. However, you can
	  type an unlimited amount of text into the appointment description. You can
	  even scroll through the appointment entry using the cursor key.
	
	  To see the entire note text in your calendar printout, you must print using
	  the Text View format.
	
	11. Q. Can you customize print views in Schedule+?
	
	  A. There are no printing customization capabilities built into Schedule+.
	  However, you can export your appointments from Schedule+ in text format, and
	  use a standard text editor to customize the information.
	
	12. Q. When you print from Schedule+, there are three different print sizes.
	  What are the dimensions of these print sizes?
	
	  A. The formats are designed to match the most popular appointment book
	  sizes:
	
	        Standard =   8.5 x 11 inches
	        Junior   =   5.5 x 8.5 inches
	        Pocket   =   3.75 x 6.75 inches
	
	  Several paper manufacturers have organizer pages in these sizes. Schedule+
	  prints its own form so blank pages should be used.
	
	13. Q. How does the Reminders application work?
	
	  A. Reminders is a separate application from Schedule+. The default
	  installation (that is, Express Setup) installs Reminders into the Windows
	  Startup group. Reminders continues to run until you exit Windows, exit and
	  sign out of Schedule+ or Mail for Windows, or choose Turn Off Reminders from
	  the File menu in Schedule+.
	
	14. Q. How do you take Schedule+ "on the road"?
	
	  A. If you want to take your calendar with you to another machine (for
	  example, a portable for travel), use the Move Local File option from the
	  File menu to copy the calendar to a floppy disk.
	
	  Then load Schedule+ on the destination computer. Use the Move Local File
	  option to move it back. The command moves the calendar file to the location
	  you specify and changes the SCHDPLUS.INI file so it searches for your
	  calendar in the new location.
	
	  This command might also be used if you decide you want to keep your calendar
	  in the directory where you store data instead of in the Schedule+ program
	  directory.
	
	15. Q. Does Schedule+ have a "dial-in" capability?
	
	  A. No. You can use Schedule+ offline (as described in the previous question)
	  to view your local calendar. Also, when you use Schedule+ offline, you
	  cannot use any of the group- related capabilities. You cannot generate
	  meeting requests and leave them in your Outbox.
	
	16. Q. Does Schedule+ support recurring meetings? For example, can I request a
	  weekly staff meeting with my group so that when those people accept the
	  meeting, it is automatically entered into their calendars for each week?
	
	  A. Schedule+ supports recurring appointments, but not recurring meetings.
	  Schedule+ does not allow you to request a recurring meeting with other
	  people. As a result, you must request the meeting for a single occurrence,
	  then remind the attendees to use the Recurring Appointment option to enter
	  it for each week.
	
	17. Q. How do you set up a resource, such as a conference room?
	
	  A. Schedule+ makes it easy to set up shared resources, such as conference
	  rooms and audio/visual equipment, so that they can be reserved over
	  Schedule+. The network administrator creates an account for the resource
	  using the Mail Administrator's program (ADMIN.EXE). Then he or she logs into
	  Schedule+ under that account, and selects the This Account Is for a Resource
	  check box in the General Options dialog box (accessed by choosing General
	  Options from the Options menu).
	
	  This automatically changes the default access privilege to Create Appts and
	  Tasks. That means that people can book the resource by selecting it from the
	  Address Book while they select attendees for a meeting. You can also choose
	  the Open Other's Appt Book option from the File menu to look at the calendar
	  for the resource and book time in it directly.
	
	  It is also possible to assign an assistant to a resource and alter the
	  default privilege to View Free and Busy Times if the administrator wants
	  somebody to be in control of allocating the resource.
	
	18. Q. Because each resource requires a user account, does this mean that each
	  resource requires a user license?
	
	  A. No. Microsoft licensing requires a license per workstation that runs the
	  software, not per user account.
	
	19. Q. Are there options for altering the time and date displays (for example,
	  to use a 24-hour or a European date format)?
	
	  A. Yes. From the Windows Control Panel, choose the International icon. You
	  can specify the format used for the date and the time. This change is
	  reflected in Schedule+.
	
	20. Q. Does Schedule+ account for time zone changes when you request a meeting
	  with someone in another time zone?
	
	  A. No. However, if you are using version 3.0 or later of Microsoft Mail for
	  Windows, you can modify the template files to include a field for time
	  zones. As a result, you can at least find out what time zone somebody is in
	  by selecting Details.
	
	21. Q. Can I use Microsoft Schedule+ version 1.0 with the Microsoft Exchange
	  client?
	
	  A. You can continue to use Schedule+ 1.x with the Microsoft Exchange client;
	  however, its functionality is somewhat diminished. For example, Schedule+
	  1.0 works in standalone mode, but you cannot send or receive meeting
	  requests.
	
	  For more information, see the "Using Microsoft Exchange with Schedule+ 1.0"
	  topic in the EXCHANGE.TXT file in the Windows folder.
	
	22. Q. Can I continue to use Microsoft Schedule+ version 1.0 if I use the
	  Microsoft Mail 3.x components?
	
	  A. As long as you do not install the Microsoft Exchange components, Schedule+
	  1.x works like it did in earlier versions of Windows.
	
	Additional query words: schedule plus 1.00 1.00a FAQ questions and answers
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
