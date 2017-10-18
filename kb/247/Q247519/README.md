---
layout: page
title: "Q247519: Asheron's Call: Game Does Not Start When You Click Play"
permalink: kb/247/Q247519/
---

## Q247519: Asheron's Call: Game Does Not Start When You Click Play

	Article: Q247519
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu msgame
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Asheron's Call, version 1.0 
	- Microsoft Asheron's Call: Dark Majesty, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Play to start Microsoft Asheron's Call on the MSN Gaming Zone,
	your connection to the Zone is paused but the game does not start.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions is true:
	
	- Multiple game controllers are connected to the computer.
	
	- Microsoft DirectSound is not installed properly on the computer.
	
	- Asheron's Call is not installed properly on the computer.
	
	- The WSOCK.DLL and/or WSOCK32.DLL located in the Asheron's Call folder.
	
	RESOLUTION
	==========
	
	Remove the WSOCK.DLL and/or WSOCK32.DLL located in the Asheron's Call folder.
	
	To remove the file, use the following steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open field, type "c:\Program Files\Microsoft Games\Asheron's Call"
	  (without the quotation marks), and then click OK.
	
	3. If you see either file WSOCK.DLL or WSOCK32.DLL, right-click each file found,
	  and then click Delete.
	
	4. Close the windows when done.
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Use Only One Game Controller
	----------------------------
	
	Disconnect any extra game controllers that are connected to your computer.
	
	Reinstall Microsoft DirectX
	---------------------------
	
	To reinstall Microsoft DirectX, download the latest version of DirectX from the
	following Microsoft Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	For more information about how to obtain the latest version of DirectX, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	Reinstall Asheron's Call
	------------------------
	
	To remove and reinstall Asheron's Call:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click Microsoft Asheron's Call, and then click Add/Remove.
	
	4. Follow the instructions on the screen to remove Asheron's Call.
	
	5. Insert the Asheron's Call CD-ROM into your CD-ROM drive, and then follow the
	  instructions on the screen to reinstall Asheron's Call.
	
	MORE INFORMATION
	================
	
	You may be able to identify a more specific reason as to why the program is not
	launching by manually launching the game executable. To do this:
	
	1. Browse to the Asheron's Call installation folder. By default this is:
	
	  C:\Program Files\Microsoft Games\Asheron's Call
	
	2. Double-click the program file Client.exe to manually launch the game.
	
	3. You should receive the following message:
	
	  You can only run Asheron's Call from the Microsoft Internet Gaming Zone.
	
	Any other message may give a more specific reason as to why the game is not
	launching.
	
	Additional query words: 1.00 msgame ac msngz igz asherons
	
	======================================================================
	Keywords          : kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbMSNSearch kbAsheronSearch kbAsheron100 kbAsheronDarkMaj
	Version           : :1.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
