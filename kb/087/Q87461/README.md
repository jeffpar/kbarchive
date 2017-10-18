---
layout: page
title: "Q87461: ErrMsg Installing Third-Party Applications: Isdel Not Launched"
permalink: kb/087/Q87461/
---

## Q87461: ErrMsg Installing Third-Party Applications: Isdel Not Launched

	Article: Q87461
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.00 3.00a 3.10 3.11
	
	WINDOWS
	
	kb3rdparty kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Central Point Anti-Virus or Norton Utilities Anti-Virus and
	you install third-party programs, the following error message is displayed:
	
	  Isdel not Launched
	
	CAUSE
	=====
	
	This problem occurs if you try to install the following products:
	
	- Altera's First Step version 1.0
	
	- Braincell version 2.0
	
	- Freddie Farcus (Game)
	
	- Grammatik version 5.0 for Windows
	
	- Johnny Castaway (Screen Saver)
	
	This problem can also occur when you try to install printer drivers and screen
	fonts for an Epson Action laser printer 1600.
	
	WORKAROUND
	==========
	
	To avoid this error, follow the steps below before you install the
	aforementioned products:
	
	1. Disable Central Point Anti-Virus by remarking out VSAFE.SYS in the CONFIG.SYS
	  file or VSAFE.COM and BOOTSAFE.EXE in the AUTOEXEC.BAT file.
	
	2. Restart your system to clear the memory.
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: gramatick grammatic gramatik grammatick five V isi islauncher launcher 3rdparty antivirus anti virus #105 - unable to start
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
