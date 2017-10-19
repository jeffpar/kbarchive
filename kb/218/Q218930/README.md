---
layout: page
title: "Q218930: DirectX: Mismatched DirectX Files After You Reinstall Windows 98"
permalink: /kb/218/Q218930/
---

## Q218930: DirectX: Mismatched DirectX Files After You Reinstall Windows 98

	Article: Q218930
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbenv kbimu msgamekbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Age of Empires Expansion: The Rise of Rome, version 1.0 
	- Microsoft Baseball 3D, version 1.0 
	- Microsoft CART Precision Racing, version 1.0 
	- Microsoft Close Combat for Windows 1.0 
	- Microsoft Close Combat III: The Russian Front 
	- Microsoft Close Combat: A Bridge Too Far, version 2.0 
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Deadly Tide for Windows 1.0 
	- Microsoft Flight Simulator 98 
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	- Microsoft Golf 1998 Edition, version 1.0 
	- Microsoft Golf 1999 Edition, version 1.0 
	- Microsoft Monster Truck Madness, version 1.0 
	- Microsoft Monster Truck Madness 2, version 2.0 
	- Microsoft Motocross Madness, version 1.0 
	- Microsoft Outwars, version 1.0 
	- Microsoft Pinball Arcade, version 1.0 
	- Microsoft Return of Arcade for Windows, version 1.0 
	- Microsoft Revenge of Arcade, version 1.0 
	- Microsoft Urban Assault, version 1.0 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start any of the programs listed at the beginning of this article, you
	may experience any of the following symptoms:
	
	- The program may not start properly.
	
	- The program may not be displayed properly on the screen
	
	- The program may stop responding (hang), or perform poorly.
	
	- The program may quit and you may be returned to the Windows desktop.
	
	- Sounds in the program may not be played properly.
	
	- Your game controller may not function properly in the game.
	
	CAUSE
	=====
	
	This behavior can occur if you reinstall Microsoft Windows 98 after you install
	DirectX 6.1.
	
	RESOLUTION
	==========
	
	To resolve this issue, reinstall DirectX 6.1.
	
	MORE INFORMATION
	================
	
	This issue can occur because DirectX Setup does not copy the Dx6migr.inf file to
	your hard disk. If you reinstall Windows 98, several DirectX files are
	overwritten by DirectX 5.2 files that are included with Windows 98.
	
	To determine if you need to reinstall DirectX 6.1, use the DirectX Diagnostic
	Tool (Dxdiag.exe) to check the DirectX file versions installed on your
	computer.
	
	For additional information about how to use the DirectX Diagnostic Tool, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q190900 DirectX: Description of the DirectX Diagnostic Tool
	
	For additional information about how to install DirectX, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	For additional information about the files displayed in the DirectX Diagnostic
	Tool, please see the following articles in the Microsoft Knowledge Base:
	
	  Q216505 DirectX 6.1: List of Files Displayed in DirectX Diagnostic Tool
	
	Additional query words: 1.00 2.00 msgame direct-x dx6 dx6.1 win98x overwrite restore
	
	======================================================================
	Keywords          : kbenv kbimu msgame kbfaq
	Technology        : kbOSWin98 kbOSWinSearch kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbAOE kbGamesSearch kbFlightSimSearch kbArcadeRet kbArcadeRev kbZNotKeyword kbGolf98 kbGolf99 kbGolfSearch kbPinballArc kbArcadeSearch kbMotocrossSearch kbOutwarsSearch kbOutwars kbCloseCombatSearch kbCARTRacingSearch kbBaseballSearch kbMonsterTMSearch kbAOESearch kbMonsterTM kbZNotKeyword3 kbUrbanAssault kbMonsterTM2 kbAOEExpRome kbCloseCombat2 kbCloseCombat3 kbCloseCombat kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim98 kbFlightSim95 kbMotocrossM kbBaseBall3D kbCARTRacing kbDeadlyTide kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	
