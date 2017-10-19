---
layout: page
title: "Q105809: WFWG Error Message: 3653: The Protocol Manager Could Not Be..."
permalink: /kb/105/Q105809/
---

## Q105809: WFWG Error Message: 3653: The Protocol Manager Could Not Be...

	Article: Q105809
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may occur when you load the Windows for Workgroups
	NET command:
	
	  Error 3653: The protocol manager could not be found.
	
	CAUSE
	=====
	
	The above error message is displayed when PROTMAN.DOS does not load. The
	following are some reasons why PROTMAN.DOS may not load:
	
	- The line DEVICE=C:\WINDOWS\PROTMAN.DOS /I:C:\WINDOWS is not in the CONFIG.SYS
	  file or is remarked out.
	
	- The /I: parameter does not point to the location where PROTOCOL.INI is
	  stored.
	
	- If you are using DoubleSpace, the DEVICE command for DoubleSpace may be
	  located after the DEVICE command for PROTMAN.DOS in the CONFIG.SYS file.
	
	- If you upgraded to Windows for Workgroups 3.11, it is possible that the Setup
	  program did not correctly update the NET.EXE file. This error occurs if the
	  version 3.1 NET.EXE file is used with version 3.11. The correct NET.EXE file
	  for Windows for Workgroup 3.11 has this file stamp:
	
	    NET.EXE  433,829  11/1/93  3:11:00AM
	
	
	- If the NETADDRESS line in the PROTOCOL.INI file is entered incorrectly when
	  you are using token ring network interface cards.
	
	
	- The PROTOCOL.INI file is corrupted. Rename the file and reinstall the network
	  driver through Windows for Workgroups.
	
	PROTMAN.DOS should display an error message at startup that may help indicate
	what is causing the problem. If you have MS-DOS 6.0, you can view what error
	message is being displayed when PROTMAN.DOS loads by pressing the F8 function
	key. If you do NOT have MS-DOS 6.0, insert a PAUSE line at the top of the
	AUTOEXEC.BAT file.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
