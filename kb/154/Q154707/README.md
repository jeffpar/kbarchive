---
layout: page
title: "Q154707: Error Running #COMMAND /C Capture.exe from Login Script"
permalink: /kb/154/Q154707/
---

## Q154707: Error Running #COMMAND /C Capture.exe from Login Script

	Article: Q154707
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Error 255 is reported in line 668 of Spool.c when the login script containing
	the following line is run:
	
	  #COMMAND /c CAPTURE /S=servername /Q=quename
	
	CAUSE
	=====
	
	Capture.exe is not a supported application; it often fails when run from the
	command prompt. The login script processor does not actually run Capture.exe.
	Instead, it parses the command #CAPTURE and works in the background. Therefore,
	when you use the above command, you are running the actual Capture.exe file.
	
	This is by design.
	
	RESOLUTION
	==========
	
	Replace the above line with the following:
	
	  #CAPTURE /S=<servername> /Q=<queuename>
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
