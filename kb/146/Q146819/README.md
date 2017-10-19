---
layout: page
title: "Q146819: Diamond Stealth 64 2001 Series Video Card Support"
permalink: /kb/146/Q146819/
---

## Q146819: Diamond Stealth 64 2001 Series Video Card Support

	Article: Q146819
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Diamond Stealth 64 2001 series video cards use the S3 trio64V+ chip set and are
	not supported by the normal S3 video driver supplied with Windows NT. During
	Windows NT Setup your computer may hang while performing the video test or later
	while booting into Windows NT after the installation is complete.
	
	
	WORKAROUND
	==========
	
	In Windows NT Setup, perform a custom installation. When the computer
	configuration screen displays:
	
	  Processor:
	  video type:
	  keyboard:
	  keyboard layout:
	  pointing device:
	
	Manually change the video type from: "VGA or COMPATIBLE" to "STANDARD VGA
	640x480x16 color" during the text portion of Windows NT Setup.
	
	
	During the Graphical User Interface (GUI) portion of Setup, the display type will
	be identified as a VGA Compatible - accept this choice and finish Windows NT
	Setup.
	
	After Windows NT is installed, from the Display section of Control Panel, choose
	Change Display Type. Select the drivers provided by Diamond Multimedia systems
	Inc. to install the correct drivers.
	
	You can get these new drivers from a number of ways:
	
	Postal Service : Diamond Multimedia Systems, Inc. 2880 Junction Avenue San Jose,
	CA 95134
	
	Voice (Main) : (408) 325-7000
	
	Voice (TechSppt): (408) 325-7100 [M-F 6-7; Sat 8-4 Pacific] [plus 24hr automated
	help]
	
	FAX (Main) : (408) 325-7070
	
	FAX (Support) : (408) 325-7171
	
	BBS (to 14400) : (408) 325-7080 BBS (to 28800) : (408) 325-7175
	
	CompuServe : GO DMNDONLINE
	
	America Online : GO DIAMOND
	
	World Wide Web : WWW.DIAMONDMM.COM
	
	NOTE: The Windows NT 3.51 Service Pack 5 contains an updated S3 video driver
	which correctly supports the S3 Trio64V+ chipset.
	
	The products discussed here are manufactured by Diamond Multimedia systems Inc,
	vendors independent of Microsoft; we make no warranty, implied or otherwise,
	regarding the products' performance or reliability.
	
	Additional query words: prodnt 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
