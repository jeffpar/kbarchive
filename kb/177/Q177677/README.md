---
layout: page
title: "Q177677: TSR Applications Hang While Login.exe Is Running"
permalink: kb/177/Q177677/
---

## Q177677: TSR Applications Hang While Login.exe Is Running

	Article: Q177677
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare version 3.51 
	- Microsoft Services for NetWare version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In your enterprise, you have Novell NetWare servers and Windows NT domains. Your
	clients are running MS-DOS-based redirectors by Novell. In addition, you use
	MS-DOS Terminate and Stay Resident (TSR) tools to enhance your environment.
	
	For example, you have software that pulls print jobs off a Novell NetWare print
	queue for output on a printer attached locally.
	
	When you run Login.exe from your Autoexec.bat or other scripts without parameters
	it will wait, prompting you for a user name. You notice that during this time
	the TSR application does not perform any work and appears to stop responding
	(hang).
	
	You do not experience this behavior when you use Novell's version of Login.exe.
	
	CAUSE
	=====
	
	In MS-DOS, TSR applications are only allowed to do work in the Interrupt Service
	Routine (ISR) when the so-called InDOS flag is not set. This flag can be
	retrieved through the MS-DOS call INT 21H function 34H.
	
	The Microsoft versions of Login.exe, Attach.exe, Capture.exe, and Map.exe use INT
	21H function 3FH (Read File or Device) to get the user or server name from the
	user by means of the keyboard. This function sets the InDOS flag while it is
	active.
	
	When the TSR application wakes up because of a timer or another interrupt, it
	checks the InDOS flag, sees that it is set and returns without any action. So,
	the TSR application cannot do anything while Login.exe waits for the user name.
	This problem will happen with any software using INT21H function 3FH.
	
	Both applications are programmed according to the guidelines of the MS-DOS
	operating system. The problem is because of a limitation in the MS-DOS
	programming paradigm and, thus, by design.
	
	Novell's version of Login.exe uses INT 21H function 08H (Read Keyboard without
	Echo). This is a low-level function (callable from an ISR) that does not set the
	InDOS flag and, hence, does not cause the TSR application to stop responding.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	Windows NT 3.51
	---------------
	
	In your scripts, before you call Login.exe, you can either add an echo and pause
	statement or a CHOICE call.
	
	Example:
	
	     CHOICE Do you want to logon to the company network IF errorlevel 2
	     GOTO end LOGIN :end
	
	This will prevent the computer from waiting in Login.exe.
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbServicesNetware400 kbServicesNetwareSearch kbFPNW351
	Version           : :3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
