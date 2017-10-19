---
layout: page
title: "Q112878: PC WSPlus: Sched. Dist. Doesn't Propagate Free and Busy Times"
permalink: /kb/112/Q112878/
---

## Q112878: PC WSPlus: Sched. Dist. Doesn't Propagate Free and Busy Times

	Article: Q112878
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Schedule Distribution application across an SMTP (or PROFS/OV
	version 3.4) gateway, the free and busy times on the postoffices at either side
	of the gateway do not propagate. The following error message appears in the
	Schedule Distribution log file:
	
	  Could not process message
	
	CAUSE
	=====
	
	The line length in the free and busy time messages is too long for Schedule
	Distribution. When the lines are wrapped, the messages become illegible.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 1.0 and 1.0a of
	Microsoft Schedule+ for Windows. This problem was corrected in SCHDIST.EXE
	version 1.0a.2. If you do not have version 1.0a.2 (or later), a self-extracting
	file is available for download.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Schdupd.exe now
	  (http://download.microsoft.com/download/splus10win/Update/1.0a.2/WIN/EN-US/Schdupd.exe)
	
	Schdupd.exe contains the following files:
	
	  Schdist.exe  (194,154 byte)
	  Readme.txt
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words: schedule plus 1.00 1.00a SCHDIST.EXE
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : :1.0,1.0a
	
	=============================================================================
	
