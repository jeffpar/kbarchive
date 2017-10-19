---
layout: page
title: "Q130231: PC NTMMTA: External Command Line Options Not Used with NT MMTA"
permalink: /kb/130/Q130231/
---

## Q130231: PC NTMMTA: External Command Line Options Not Used with NT MMTA

	Article: Q130231
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are several External command line options that are not used with the
	Microsoft Mail Multitasking MTA for Windows NT (NT MMTA).
	
	MORE INFORMATION
	================
	
	The following options can not be used with the NT MMTA, either on the command
	line or in the EXTERNAL.INI file:
	
	  AsyncInt
	  AsyncPort
	  DrivesNovell
	  IdleProcess
	  IdleProcessMinPeriod
	  IdleProcessMaxPeriod
	  ScreenBios
	  ScreenColor
	  ScreenSnow
	  ScreenNone
	
	The following options can not be used when you run External as a service, but
	they can be used when you run them from a CMD prompt:
	
	  DriveHomePO
	  DrivesDirectPO
	  DrivesDynamic
	  DrivesWan
	
	The options above are not used with the NT MMTA running as a service because it
	dynamically allocates drives and does not use directly mapped drives.
	
	Additional query words: 3.50 mta
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
