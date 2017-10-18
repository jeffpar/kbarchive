---
layout: page
title: "Q190287: SMS: PCM Files on SMS 1.2 SP3 Are Newer Than the Files on BORK"
permalink: kb/190/Q190287/
---

## Q190287: SMS: PCM Files on SMS 1.2 SP3 Are Newer Than the Files on BORK

	Article: Q190287
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Both Systems Management Server 1.2 Service Pack 3 and the Microsoft BackOffice
	Resource Kit (BORK) come with updated Package Command Manager (PCM) files.
	However, the PCM files that come with Systems Management Server 1.2 Service Pack
	3 are a newer version than the ones from the BackOffice Resource Kit, even
	though the BackOffice Resource Kit file dates are older.
	
	MORE INFORMATION
	================
	
	The files in question are the PCM service (Pcmsvc32.exe) and PCM executable
	(Pcmwin32.exe) files. Microsoft Technical Support recommends that you use the
	PCM files provided with Systems Management Server 1.2 Service Pack 3.
	
	The file sizes and dates are shown in the table below.
	
	  Source        File Name         File Size    File Date
	  ------------------------------------------------------
	  SMS 1.2 SP3   Pcmsvc32.exe      259,520      10/08/97
	  SMS 1.2 SP3   Pcmwin32.exe      459,664      10/08/97
	  BORK          Pcmsvc32.exe      252,736      02/24/98
	  BORK          Pcmwin32.exe      455,072      02/24/98
	
	Additional query words: prodsms SP back office included shipped
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
