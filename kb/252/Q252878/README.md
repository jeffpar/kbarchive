---
layout: page
title: "Q252878: XCLN: Schedule+ Err Mssg: The File Req32.cfg Could Not Be Opened"
permalink: /kb/252/Q252878/
---

## Q252878: XCLN: Schedule+ Err Mssg: The File Req32.cfg Could Not Be Opened

	Article: Q252878
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0,7.0a,7.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, versions 7.0, 7.0a, 7.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a stand-alone version of Schedule+ and Microsoft Outlook is not
	running or has not been installed, you may receive the following error message:
	
	  The file <drive>:\<OS>\Forms\Configs\Req32.cfg could not be
	  opened.
	
	The Configs folder exists on the computer, but the Req32.cfg file is located in a
	different folder.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Copy the entire contents of the Schedule folder, normally found in the
	  <drive>:\MSOffice folder, to the
	  <drive>:\<OS>\Forms\Configs folder, where <drive> is the
	  hard disk drive that contains the folders, and <OS> is the type of
	  operating system that the computer is running.
	
	2. Restart the computer.
	
	3. Restart Schedule+.
	
	MORE INFORMATION
	================
	
	Another workaround for the error message in the "Symptoms" section of this
	article is available, but to use that workaround you must install Microsoft
	Exchange Client and Schedule+ version 7.5 simultaneously from a Microsoft
	Exchange Server version 5.0 CD-ROM. For additional information about that
	workaround, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q195205 Outlook/Schedule+ Error req32.cfg could not be opened
	
	The workaround in that article is only accurate if you have installed Schedule+
	from the Exchange Server 5.0 CD-ROM; it is not accurate if you installed the
	stand-alone version of Schedule+.
	
	Additional query words: Sched+ startup
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbSchedule700a kbSchedule750
	Version           : WINDOWS:7.0,7.0a,7.5
	Issue type        : kbprb
	
	=============================================================================
	
