---
layout: page
title: "Q125048: Encarta 95 Err Msg: Encart95 Caused An Exception"
permalink: /kb/125/Q125048/
---

## Q125048: Encarta 95 Err Msg: Encart95 Caused An Exception

	Article: Q125048
	Product(s): Microsoft Home Kids Products
	Version(s): 1995 edition; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running Encarta 1995 under Microsoft Windows NT operating system
	version 3.5, you may receive the following error message when you exit the
	program:
	
	  Application Error
	  Encart95 caused an exception in the Win16 Subsystem
	
	  Click on CLOSE to terminate the application
	  Click on CANCEL to debug the application
	  Click on IGNORE to continue, you should save your work in a new file.
	
	CAUSE
	=====
	
	This error occurs if you have selected the Run In Separate Memory Space option
	for Encarta in the Properties dialog box in Program Manager.
	
	If you choose Close or Ignore, Encarta is closed, but your system may be
	unstable. If you choose Cancel, you receive the following message:
	
	  The instruction at "0x00000023" referenced memory at 0x3bd90f06. The memory
	  could not be "read".
	  Click on OK to terminate the application.
	
	RESOLUTION
	==========
	
	To resolve this problem, do not use Run In Separate Memory Space when you run
	Encarta 1995.
	
	MORE INFORMATION
	================
	
	The Run In Separate Memory Space option is used only with Windows 3.1 (16- bit)
	applications in Microsoft Windows NT. It is used to run a Windows 3.1
	application in a separate memory space from other Windows 3.1 applications.
	
	This option protects other Windows 3.1 applications if the application stops
	responding (hangs), but it does use more memory. Use this option only if the
	application you are running stops responding (hangs) regularly.
	
	Additional query words: msn_encarta 1995 multi media multimedia multi- mmtitles crash errs message prob problem leaving exit closing '95 crashes freezes up locks lockup freeze stops
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbEncartaSearch kbEncartaEnCyc1995Mac
	Version           : :1995 edition; winnt:3.5
	
	=============================================================================
	
