---
layout: page
title: "Q190060: Games: Computer Hangs After You Install DirectX on CA Chipset"
permalink: kb/190/Q190060/
---

## Q190060: Games: Computer Hangs After You Install DirectX on CA Chipset

	Article: Q190060
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbimu msgame
	Last Modified: 02-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- DreamWorks Interactive, Dilbert's Desktop Games, version 1.0 
	- DreamWorks Interactive, Lost World: Jurassic Park Chaos Island, version 1.0 
	- DreamWorks Interactive, The Neverhood, version 1.0 
	- DreamWorks Interactive, Scholastic's Goosebumps Series: Attack of the Mutant, version 1.0 
	- DreamWorks Interactive, Scholastic's Goosebumps Series: Escape from Horrorland, version 1.0 
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Baseball 3D, version 1.0 
	- Microsoft CART Precision Racing, version 1.0 
	- Microsoft Close Combat: A Bridge Too Far, version 2.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 98 
	- Microsoft Fury 3 for Windows, version 1.0 
	- Microsoft Golf 1998 Edition, version 1.0 
	- Microsoft Golf 1999 Edition, version 1.0 
	- Microsoft Monster Truck Madness, version 1.0 
	- Microsoft Monster Truck Madness 2, version 2.0 
	- Microsoft Motocross Madness, version 1.0 
	- Microsoft Outwars, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a program that installs DirectX, or you install DirectX from
	the Microsoft Web site, your computer may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if a sound card based on the Crystal Audio chipset is
	installed in your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove or remark out any lines in the Autoexec.bat and
	Config.sys files that refer to the Cwcmidi.exe file.
	
	For additional information how to modify the Autoexec.bat and Config.sys files,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q130516 How to Modify the Autoexec.bat in Windows 95
	
	  Q130517 How to Modify Config.sys in Windows 95
	
	  Q190023 How to Edit the Autoexec.bat File in Windows 98
	
	  Q190024 How to Edit the Config.sys File in Windows 98
	
	When you remove or remark out the lines that refer to the Cwcmidi.exe file in the
	Autoexec.bat and Config.sys files, you may no longer hear sounds in some MS-DOS
	programs.
	
	To resolve this issue, add the lines that refer to the Cwcmidi.exe file to the
	Autoexec.dos and the Config.dos files, and then create a program information
	(.pif) file that uses the Autoexec.dos and Config.dos files when you start these
	MS-DOS programs.
	
	For additional information about how to create .pif files, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q188157 Windows 98 Sample Program Information (.pif) Files
	
	  Q131877 How to Create Default PIF for MS-DOS-Based Programs
	
	MORE INFORMATION
	================
	
	To determine the manufacturer and model of your sound card, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	  If you are using a Microsoft Windows 2000-based computer, click the Hardware
	  tab, and then click Device Manager.
	
	3. On the Device Manager tab, click to expand "Sound, video and game
	  controllers", and then note the manufacturer and model of the sound card
	  listed there.
	
	4. Click OK, and then close Control Panel.
	
	For more information about the Crystal Audio chip, contact your sound card
	manufacturer.
	
	For information about how to contact your sound card manufacturer, click the
	appropriate article number in the following list to view the article in the
	Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	Additional query words: 1.00 2.00 direct-x dx5 dx6 crash freeze msdos
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbAOE kbGamesSearch kbFlightSimSearch kbZNotKeyword kbGolf98 kbGolf99 kbGolfSearch kbMotocrossSearch kbOutwarsSearch kbOutwars kbCloseCombatSearch kbCARTRacingSearch kbBaseballSearch kbMonsterTMSearch kbAOESearch kbMonsterTM kbMonsterTM2 kbCloseCombat2 kbFlightSim2000 kbFlightSim98 kbMotocrossM kbDIDilbert kbDILostWorldJurassic kbDIGoosebumpAttack kbDIGoosebumpEscape kbDINeverhood kbBaseBall3D kbCARTRacing kbFury3 kbDISearch kbDIGoosebumpsSearch kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	
