---
layout: page
title: "Q264513: Games Err Msg: Setup Encountered a Disk Error While Writing..."
permalink: /kb/264/Q264513/
---

## Q264513: Games Err Msg: Setup Encountered a Disk Error While Writing...

{% raw %}

	Article: Q264513
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kberrmsg aoe w_golf fsim kbimu msgame bball3d
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Age of Empires Expansion: The Rise of Rome, version 1.0 
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Allegiance, version 1.0 
	- Microsoft Asheron's Call, version 1.0 
	- Microsoft Baseball 2000, version 1.0 
	- Microsoft Baseball 2001, version 1.0 
	- Microsoft Flight Simulator 2000, version 1.0 
	- Microsoft Flight Simulator 2000 Professional Edition, version 1.0 
	- Microsoft Golf 2001 Edition, version 1.0 
	- Microsoft Links LS 2000, version 1.0 
	- Microsoft Links 2001 
	- Microsoft MechWarrior 4: Vengeance 
	- Microsoft Motocross Madness 2, version 2.0 
	- Microsoft NBA Inside Drive 2000, version 1.0 
	- Microsoft NFL Fever 2000, version 1.0 
	- Microsoft Pandora's Box, version 1.0 
	- Microsoft StarLancer, version 1.0 
	- the operating system: Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install one of the programs listed at the beginning of this
	article, you may receive the following error message:
	
	  Setup encountered a disk error while writing to the file <filename>.
	  Make sure that your hard disk is not full, and that the file is not in use.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions is true:
	
	- A real mode (16-bit) CD-ROM driver is installed on your computer.
	
	- Your CD-ROM drive is operating in MS-DOS Compatibility mode.
	
	- Your CD-ROM drive is unable to properly read the media.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these troubleshooting methods in the order in
	which they appear.
	
	Method 1
	--------
	
	Determine if your CD-ROM drive is using a protected mode driver:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then verify that the File System entry is
	  32-bit.
	
	  If the File System entry is "Some drives are using MS-DOS compatibility", your
	  CD-ROM drive may be using a real mode CD-ROM driver. If this is the case, you
	  may not be able to read certain files on the CD-ROM.
	
	4. Click OK, and then close Control Panel.
	
	NOTE: If the File System entry is "32-bit" (without the quotation marks), your
	CD-ROM drive may be using both a real mode CD-ROM driver and a protected mode
	CD-ROM driver.
	
	For information about how to remove the real mode CD-ROM driver, contact the
	manufacturer of your CD-ROM drive.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	If the issue continues to occur, proceed to the next method.
	
	Method 2
	--------
	
	Reduce CD-ROM Drive Caching:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click File System.
	
	4. On the CD-ROM tab, move the "Supplemental Cache Size" slider to the Small
	  position.
	
	5. In the "Optimize Access Pattern For" box, click "No Read-Ahead".
	
	6. Click OK, and then click Close.
	
	7. When you receive the prompt to restart your computer, click Yes.
	
	Method 3
	--------
	
	For additional information about more in-depth troubleshooting on the CD Read
	issues, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q218617 How to Troubleshoot CD-ROM Read Errors
	
	Additional query words: 1.00 2.00 msgame linksls2k mcm2 football basketball panbox win98se
	
	======================================================================
	Keywords          : kberrmsg aoe w_golf fsim kbimu msgame bball3d 
	Technology        : kbOSWin98SE kbOSWinSearch kbHomeProdSearch _IKkbbogus kbLinkGolfSearch kbAOE kbGamesSearch kbFlightSimSearch kbZNotKeyword kbGolf2001 kbGolfSearch kbNFLFever2000 kbNFLSearch kbMSNSearch kbAllegianceSearch kbPandoraSearch kbMotocrossSearch kbStarlancerSearch kbAsheronSearch kbBaseballSearch kbAOESearch kbAllegiance kbAsheron100 kbStarlancer kbAOEExpRome kbAOE2Kings kbBaseBall2001 kbFlightSim2000 kbPandorasBox kbMotocrossM2 kbLinks2001 kbLinksLS2000 kbNBAInsideDrive2000 kbBaseBall2000 kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
