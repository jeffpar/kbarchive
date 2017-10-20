---
layout: page
title: "Q140194: PC WSPlus: Tuning a Schedule+ 1.0 Installation"
permalink: /kb/140/Q140194/
---

## Q140194: PC WSPlus: Tuning a Schedule+ 1.0 Installation

{% raw %}

	Article: Q140194
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbref
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article outlines some of the tuning considerations to think about when you
	implement Microsoft Schedule+. You should have a general understanding of
	Schedule+ server and clients to obtain value from this section.
	
	NOTE: The following information is from the Microsoft Mail Resource Kit, Chapter
	4, pages 129-131.
	
	
	The Schedule Distribution Process
	---------------------------------
	
	Schedule distribution is the process by which an administrator can send snapshots
	of user's appointment books to another postoffice so users on that postoffice
	can view the data. These snapshots--schedule distribution mail messages,
	actually--contain the following information:
	
	- Free/busy bits for each user on the postoffice.
	
	- Flags specifying which accounts on the postoffice are resources.
	
	- A list of the assistants for those users on the postoffice who have
	  assistants.
	
	This information is sent only if a change occurs. For example, if there are 150
	users on a postoffice but only 10 users have modified their schedule since the
	last schedule distribution message was sent, only 10 new sets of free/busy bits
	are sent in the next schedule distribution message.
	
	The schedule distribution information is kept in the CAL directory of the
	receiving postoffice. On every postoffice, there is one postoffice file (POF)
	for each postoffice that sends it schedule distribution messages.
	
	Schedule distribution is configured through the Schedule+ administration program.
	The actual work of distributing schedule information is done when the schedule
	distribution program is run.
	
	With schedule distribution, users can view free/busy information for users on
	another postoffice without having network access or access privileges to the
	other postoffice. Once the user has viewed the free/busy time of users on other
	postoffices, they can send a meeting request.
	
	Limitations
	-----------
	
	The network traffic caused by schedule distribution is predictable, as explained
	below. Schedule distribution allows Schedule+ to quickly find out if users on
	other postoffices have assistants or are resources. Schedule+ needs to know this
	information to decide where to send meeting requests. Schedule distribution uses
	the mail system to route information across different LANs. Schedule
	distribution can cause a large amount of consistent network traffic.
	
	This process does not allow users on one postoffice to see anything more than
	free/busy time of users on other postoffices. Schedule distribution alone cannot
	enable a user on one postoffice to view appointment details, modify appointment
	books, or act as an assistant for a user on another postoffice.
	
	Additionally, schedule distribution alone does not let users on one postoffice
	automatically book resources on another postoffice. The process of schedule
	distribution requires the schedule distribution program to be run, either
	manually or continuously, on a dedicated machine or with other processes using
	the DISPATCH.EXE program.
	
	Message size
	------------
	
	The size of each schedule distribution message is determined by:
	
	1. the number of Schedule+ users on the postoffice
	
	2. the number of schedule changes the average user makes each day
	
	3. the frequency with which schedule distribution messages are sent
	
	4. the number of months of data sent by schedule distribution.
	
	Each schedule distribution message contains the following data:
	
	Information                                 Size
	Message header                              100 bytes
	
	Assistant/resource information
	for each user whose free/busy
	information has changed                      25 bytes
	
	One month of free/busy
	information for one user                     20 bytes
	
	For example, if an administrator chooses to distribute 3 months of schedule data
	and 10 users on the postoffice have changed their appointments since the last
	schedule distribution, the schedule distribution message will be
	100+{10x[25+(3x20)]}=950 bytes. Of course, these numbers will vary depending on
	the frequency of schedule distribution, number of months of data propagated, and
	the frequency of schedule activity per user on the postoffice.
	
	Each schedule distribution message is very small. On a large network, however,
	these messages can really add up. On a mail network with 100 postoffices all
	participating in schedule distribution, for instance, each postoffice could send
	up to 99 schedule distribution messages per "round" of schedule distribution. If
	every postoffice sends to every other, 9,900 messages are sent during every
	round of schedule distribution.
	
	Optimizing the Performance of a Schedule+ 1.0 Installation
	----------------------------------------------------------
	
	This section outlines the tuning options available for a Schedule+ 1.0
	installation.
	
	Server:
	
	Do not over-send free/busy information. If you do not need to have each others
	free/busy information updated every 10 minutes, then do not set up SchDist to
	send this information so often. A user's free/busy information may not change
	very often, and an organization may need just an idea of when a user might be
	free of busy. Find a reasonable interval for your organization, recognizing that
	decreasing the interval to give users more up-to-the-minute information
	increases the messages that must be processed. Also, send free/busy information
	only where it makes sense. If users on two postoffices do not schedule meetings
	with each other very often (or at all), do not set up SchDist between them.
	
	Do not run SchDist across time zones. Because Schedule+ does not work across time
	zones, there is no need to run schedule distribution across time zones. In fact,
	doing so will cause confusion for the users.
	
	Use dynamic postoffice connections very sparingly. Dynamic postoffice connection
	establishes network connections between postoffices. Therefore, it may cause
	network traffic to increase, because every Schedule+ user could connect to
	multiple postoffices. Limiting the number of dynamic postoffice connections will
	help limit the amount of network traffic. A common practice is to allow everyone
	to be able to dynamically connect to the postoffice that contains the conference
	rooms and other resources, but that is all.
	
	When using dynamic postoffice connections, still run SchDist between the two
	postoffices. Most users will not need to dynamically connect to other
	postoffices to see detailed, up-to-the-second information on other calendars.
	Free/busy information as recent as the last SchDist cycle is usually enough.
	Running SchDist at least once a day will make the Schedule+ system run more
	efficiently by reducing network traffic.
	
	Client:
	
	When working remotely, work offline. Schedule+ performs slowly across dial- up
	connections because of its infrastructure. Working offline keeps Schedule+ from
	trying to update the user's calendar (CAL) file on the postoffice. Then, when
	the user is back online, Schedule+ updates the user's CAL file with the changes
	they made while working offline.
	
	Change how often Schedule+ updates the user's CAL file. By changing the CopyTime
	parameter in the SCHDPLUS.INI file, a user can control how often (in minutes)
	that the online CAL file is copied to the local CAL file. The default time is 15
	minutes.
	
	MORE INFORMATION
	================
	
	For additional information regarding the Schedule Distribution process, please
	see the following articles in the Microsoft Knowledge Base:
	
	  Q94183 Schedule Distribution Command-Line Parameters
	
	  Q100032 Free/Busy Times Are Not Received
	
	  Q101403 Running SCHDIST.EXE as Idle Process in Dispatch
	
	  Q101752 Dispatch Cannot Spawn Batch File Without COMMAND.COM
	
	  Q104249 Setting Up Schedule Distribution
	
	  Q98977 Setting up Dynamic Connections
	
	Additional query words: fine tune sched plus dist setting mrk
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
