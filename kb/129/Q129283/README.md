---
layout: page
title: "Q129283: RAS Error Message: &quot;Error 1: Incorrect Function&quot;"
permalink: kb/129/Q129283/
---

## Q129283: RAS Error Message: &quot;Error 1: Incorrect Function&quot;

	Article: Q129283
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the Windows NT 3.5 Remote Access client (RASPHONE.EXE)
	to connect to a RAS server, the following error appears:
	
	  Error Connecting To <servername>
	
	  Error 1: Incorrect Function
	
	  Press F1 for more information
	
	where <servername> is the name of the RAS server that you are attempting to
	connect to.
	
	CAUSE
	=====
	
	This error message appears when you incorrectly install Microsoft Windows NT 3.5
	U.S. Service Pack 2.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Download the Intel 3.5-inch Disk Set for Service Pack 2. This set includes
	  the following nine self-extracting executables:
	
	    RUNME.EXE
	    SP231.EXE
	    SP232.EXE
	    SP233.EXE
	    SP234.EXE
	    SP235.EXE
	    SP236.EXE
	    SP237.EXE
	    SP238.EXE
	
	2. Extract each of the nine into a directory on your hard disk drive.
	
	3. Run UPDATE.EXE from that directory to install Service Pack 2.
	  NOTE: You may receive error messages when attempting to copy the following
	  files:
	
	  OEMNSVSM.INF
	  OEMNXPTC.INF
	  VIDEO.INF
	
	4. When the update program prompts you to restart Windows NT, choose ignore to
	  continue the installation. These files are copied to the
	  %SYSTEMROOT%\SYSTEM32 directory, despite the error message.
	
	5. Attempt to use RASPHONE to connect to a RAS server.
	
	You receive the error message noted above.
	
	RESOLUTION
	==========
	
	To successfully use RAS to dial into a RAS server, do one of the following:
	
	- Use the MAKE35.BAT file to create a disk set for Service Pack 2. After you
	  have created the eight Service Pack 2 disks using MAKE35.BAT, run UPDATE.EXE
	  from Disk 1 and follow the prompts to complete the installation of Service
	  Pack 2.
	
	  -or-
	
	- Run Control Panel, choose Network, remove RAS, and then reinstall RAS. When
	  you are prompted for media during the reinstall, provide your original
	  Windows NT 3.5 CD-ROM or floppy disks.
	
	  This load the pre-Service Pack 2 RAS files. As soon as possible, reinstall
	  Service Pack 2 using the correct procedure to update the RAS files.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
