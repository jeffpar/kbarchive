---
layout: page
title: "Q124936: Application in VDM May Receive Overrun Error"
permalink: /kb/124/Q124936/
---

## Q124936: Application in VDM May Receive Overrun Error

	Article: Q124936
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
	
	MS-DOS-based applications that use serial communications may receive a serial
	overrun error when running in a Windows NT version 3.5 virtual DOS machine
	(VDM), even though the application ran correctly under MS-DOS. In a Basic
	application, this would be seen as Error 57.
	
	This has generally been seen after several hours of heavy communications at 9600
	bits per second (bps).
	
	CAUSE
	=====
	
	Because MS-DOS-based applications running under Windows NT are subject to CPU
	time-slicing; they may not execute for extended periods of time (in Windows NT,
	the highest priority task that is able to run always runs). To prevent lost
	characters from serial communications ports, Windows NT virtualizes the port and
	presents the characters to the MS-DOS-based application as that application
	receives CPU time. The virtualization includes code to detect that an
	application is ignoring the serial port; a problem in this code sometimes
	incorrectly reports a serial overrun error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest U.S. Service Pack for Windows NT version
	3.5. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
