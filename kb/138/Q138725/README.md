---
layout: page
title: "Q138725: PC WSPlus: Definition of &#42;.POF Files (Access Control List)"
permalink: kb/138/Q138725/
---

## Q138725: PC WSPlus: Definition of &#42;.POF Files (Access Control List)

	Article: Q138725
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Schedule distribution is an automated process that exchanges free and busy times
	between postoffices. You can send snapshots of a user's appointment books to
	another postoffice. These snapshots are stored in access control lists with an
	extension of POF.
	
	The access control lists (POF files) contain the following information:
	
	- Free/busy times (stored as bits) for each user on the postoffice.
	
	- Flags specifying which accounts on the postoffice are resources.
	
	- A list of the assistants for those users on the postoffice who have
	  assistants.
	
	- Access rights information.
	
	MORE INFORMATION
	================
	
	Access control lists are stored in the \CAL subdirectory on the postoffice. Each
	postoffice participating in Schedule+ distribution has its own POF file that is
	always 00000000.POF. A POF file is created by the Schedule+ distribution program
	(SCHDIST.EXE) for each external postoffices that SCHDIST.EXE is configure to
	cover. The POF files for external postoffices are stored with an 8 digit ID,
	such as 00000001.POF or 00000002.POF.
	
	The Schedule+ distribution program sends updated POF information inside of an
	electronic mail message using the established Schedule+ administrator accounts
	(ADMINSCH) on each postoffice. The information is sent only if a change occurs.
	For example, if there are 150 users on a postoffice but only 10 users have
	modified their schedule since the last schedule distribution message was sent,
	only 10 new sets of free/busy bits are sent in the next schedule distribution
	message.
	
	The schedule distribution information is kept in the CAL directory of the
	receiving postoffice. On every postoffice, there is one postoffice file
	(<hexid>.POF) for each postoffice that sends it schedule distribution
	messages. Schedule distribution is configured through the Schedule+
	administration program. The actual work of distributing schedule information is
	done when the schedule distribution program, SCHEDIST.EXE, is run.
	
	For step by step instructions for setting up Schedule+ distribution, see the
	Schedule+ "Administrator's Guide," or please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q98977 Setting up Dynamic Connections
	
	  Q104249 Setting Up Schedule Distribution
	
	With schedule distribution, you can view free and busy information for users on
	another postoffice without having network access or access privileges to the
	other postoffice. Once you have viewed the free and busy time of users on other
	postoffices, they can send a meeting request, although it is possible to send a
	meeting request without first viewing free and busy times.
	
	Schedule distribution allows Schedule+ to quickly find out if users on other
	postoffices have assistants or are resources. Schedule+ needs to know this
	information to decide where to send meeting requests. Schedule distribution uses
	the Microsoft Mail system to route information across different local area
	networks (LANs).
	
	NOTE: Schedule distribution can cause an increase of consistent network traffic.
	
	This process does not allow users on one postoffice to see anything more than
	free and busy time of users on another postoffices. Schedule distribution alone
	cannot enable a user on one postoffice to view appointment details, modify
	appointment books, or act as an assistant for a user on another postoffice.
	Additionally, schedule distribution alone does not let users on one postoffice
	automatically book resources on another postoffice. The process of schedule
	distribution requires the schedule distribution program, SCHDIST.EXE, to be run,
	either manually or continuously, on a dedicated machine or with other processes
	using the DISPATCH.EXE program. In addition, SCHDIST.EXE can be run as an idle
	process to dispatch and can run on the same machine, at the same time as the
	External Mail program (EXTERNAL.EXE).
	
	For additional information, please see the Microsoft Mail Resource Kit, Chapter 4
	"Configuration Planning," pages 129-138. The Microsoft Mail Resource Kit is part
	number 068-095-475.
	
	Additional query words: 3.50 Mail Resource Kit POF Access Control List
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
