---
layout: page
title: "Q139618: Err Msg: &quot;Cannot Access Printer&quot; and &quot;Cannot Print&quot;"
permalink: /kb/139/Q139618/
---

## Q139618: Err Msg: &quot;Cannot Access Printer&quot; and &quot;Cannot Print&quot;

	Article: Q139618
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to print in Notepad, the following error message may appear:
	
	  Cannot access your printer. Be sure that your printer is connected properly
	  and use Control Panel to verify that the printer is configured properly.
	
	When you start Write, the following error message may appear:
	
	  Cannot print.
	
	  Be sure that your printer is connected properly, and use the Printers option
	  in Control Panel to verify that the printer is configured properly.
	
	CAUSE
	=====
	
	This problem can occur if the printer driver is corrupt.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. If you have multiple printers installed, please see the following article(s)
	  in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q136812
	  TITLE : How to Determine What Print Drivers a Print Driver Requires
	
	  If you have one printer installed, please see the following article(s) in the
	  Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q135406
	  TITLE : Steps to Manually Remove and Reinstall a Printer Driver
	
	2. Expand the original printer drivers from the Windows NT CD-ROM disc to the
	  following directory:
	
	  %SystemRoot%\System32\spool\drivers\%Platform%\1).
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
