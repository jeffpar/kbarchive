---
layout: page
title: "Q183650: Schedule + Won't Print Outlook Private Appointments"
permalink: /kb/183/Q183650/
---

## Q183650: Schedule + Won't Print Outlook Private Appointments

	Article: Q183650
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0,7.5
	Operating System(s): 
	Keyword(s): kbinterop exc55sp2fix
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, versions 7.0, 7.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot use Microsoft Schedule+ 7.0, Schedule+ 7.5, or Schedule+ 95
	(Schedule+ 7.x) to print or preview private appointments, contained in a
	Microsoft Outlook calendar.
	
	Attempting to print an Outlook calendar from Schedule+, returns no error message,
	but the private appointments do not print.
	
	Attempting to preview an Outlook calendar from Schedule+, returns the following
	error message:
	
	  The print operation could not be completed. Your computer is out of memory.
	
	CAUSE
	=====
	
	When a Schedule+ client prints or previews an Outlook calendar, it receives an
	error of MAPI_E_NO_ACCESS on the private appointments and module Msoutl32.dll
	mishandles the private appointments.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Schedule+ 7.x. This problem was
	first corrected in Exchange Server 5.5 Service Pack 2.
	
	
	MORE INFORMATION
	================
	
	Schedule+ 7.x cannot read an Outlook calendar without the Outlook calendar
	access patch for Schedule+ 7.x. This patch is available from the Microsoft Web
	site at:
	
	  http://support.microsoft.com/download/support/mslfiles/MSOUTL.EXE
	
	After the driver is installed, the Schedule+ user can open an Outlook user's
	calendar (Open command, File menu, Open Other's Appointment Book submenu). The
	Schedule+ user must have Read permissions for the Outlook user's calendar, and
	that calendar must be stored on a Microsoft Exchange Server.
	
	NOTE: The Schedule+ user can only read the Outlook user's calendar, not add to or
	edit it, regardless of the permissions granted by the Outlook user.
	
	REFERENCES
	==========
	
	For more information on the Outlook calendar access patch for Schedule+ 7.x,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q170061 XGEN: Readme.txt for Msoutl32.dll
	
	Additional query words: S+ ol97 ol98
	
	======================================================================
	Keywords          : kbinterop exc55sp2fix 
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbSchedule750
	Version           : WINDOWS:7.0,7.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
