---
layout: page
title: "Q138593: Unable to Print to Windows NT LPR Printers After Applying SP"
permalink: /kb/138/Q138593/
---

## Q138593: Unable to Print to Windows NT LPR Printers After Applying SP

	Article: Q138593
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After applying Service Pack 2, 3, 4 or 5 to a Windows NT 3.51 print server
	installed on an Windows NT File System (NTFS) partition, Windows for Workgroups
	and other clients may no longer be able to print to shared LPR printers (print
	queues on Windows NT which are using LPR to reach their destination).
	
	
	In addition, the following application event is logged in Event Viewer:
	
	  Event ID: 2005
	  Description: LPR print monitor failed to open a temporary file while spooling
	  output to port <ip address>: the system may be low on disk space or the
	  spool directory is write protected.
	
	
	RESOLUTION
	==========
	
	Give Everyone and SYSTEM 'Full Control' permissions on the following
	directories:
	
	  %systemroot%\system32\spool
	
	  -and-
	
	  %systemroot%\system32\spool\printers
	
	Then, stop and restart the TCP/IP Printing Services and the spooler service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 This
	problem was corrected in Windows NT 4.0
	
	Additional query words: tcp/ip wfw wfwg lpd jetdirect hp unix tcpip prodnt printing sp2 sp3 sp4 sp5
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
