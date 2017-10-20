---
layout: page
title: "Q254308: Games: Hal.dll Error Message When You Attempt to Start Program"
permalink: /kb/254/Q254308/
---

## Q254308: Games: Hal.dll Error Message When You Attempt to Start Program

{% raw %}

	Article: Q254308
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbui aoe fsim kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires Expansion: The Rise of Rome, version 1.0 
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Golf 2001 Edition 
	- Microsoft Links LS 2000, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start one of the programs listed at the beginning of this
	article, you may receive an error message similar to the following:
	
	  "STOP 0x0000000A (0x01010000, 0x00000009, 0x00000001, 0X8000741A)
	  IRQL_NOT_LESS_OR_EQUAL, ADDRESS 8000741A has base at 80001000 - hal.dll"
	
	NOTE: In Microsoft Flight Simulator 2000, you receive the error message when the
	Verifying CD screen appears.
	
	In the other programs that are listed at the beginning of this article, you
	receive the error message after the first splash screen is displayed and before
	the startup screen is displayed.
	
	When running the game you may also get the message:
	
	  Exception: c0000005(access violation) in Kernel32.dll
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- You attempt to start the program on a Microsoft Windows NT 4.0-based or a
	  Microsoft Windows 2000-based computer.
	
	- The CD-ROM drive is unable to correctly read the CD-ROM for the program.
	
	RESOLUTION
	==========
	
	To resolve this issue, ask a Microsoft Support Professional for help at the
	following Microsoft Web site:
	
	  http://go.microsoft.com/fwlink/?LinkId=376
	
	
	MORE INFORMATION
	================
	
	If you run an international version of one of the programs listed at the
	beginning of this article, please see the documentation included with the
	program to find out how to obtain technical support for your product.
	
	Additional query words: 1.00 msgame aok aoeii aoe2 flightsim fltsim fs2k linksls2k msgolf golf2001
	
	======================================================================
	Keywords          : kberrmsg kbui aoe fsim kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbLinkGolfSearch kbGamesSearch kbFlightSimSearch kbGolf2001 kbGolfSearch kbAOESearch kbAOEExpRome kbAOE2Kings kbFlightSim2000 kbLinksLS2000 kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
