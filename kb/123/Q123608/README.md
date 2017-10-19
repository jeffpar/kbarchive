---
layout: page
title: "Q123608: Olicom NIC Driver Does Not Install Correctly"
permalink: /kb/123/Q123608/
---

## Q123608: Olicom NIC Driver Does Not Install Correctly

	Article: Q123608
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
	
	During the installation of the Olicom 16/4 network interface card (NIC), not all
	the files are copied over and the following error message appears::
	
	  Setup is unable to obtain network adapter information from the associated DLL
	  files. Operation cannot continue.
	
	If you choose to continue it appears as though the installation completes, but
	the NIC never binds and the network services do not start. The error message
	reappears if you attempt to view the configuration of the NIC driver.
	
	CAUSE
	=====
	
	The Olicom 16/4 NIC requires a driver located in the DRVLIB subdirectory of the
	Windows NT CD. The full path is DRVLIB\NETCARD\X86\OCTK16. The OLINCDET.DLL file
	is not copied over during installation. Without this file the adapter
	information cannot be detected.
	
	WORKAROUND
	==========
	
	1. Copy the following files into the SYSTEM32 directory:
	
	     OTCK16.DLL
	     OTCK16.SYS
	     OTCK16.HLP
	     OEMSETUP.INF
	     OLINCDET.DLL
	     OCTKSTAT.EXE
	
	  NOTE: A copy error will occur on the files, as the source and destination are
	  the same, just ignore these errors.
	
	2. Specify SYSTEM32 as the location of the OEMSETUP.INF file.
	
	The NIC will now install and properly bind.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
