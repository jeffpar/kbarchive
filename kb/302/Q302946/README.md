---
layout: page
title: "Q302946: Train Sim: Err Msg Cmd Create Mpeg32 Task_cmd Was Not Successful"
permalink: kb/302/Q302946/
---

## Q302946: Train Sim: Err Msg Cmd Create Mpeg32 Task_cmd Was Not Successful

	Article: Q302946
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Train Simulator, version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Train Simulator, you may receive an error
	message similar to the following
	
	  MPEG16: Create MPEG32 Task_CMD is not successfull.
	
	(This will repeat up to three times after clicking OK) followed by
	
	  Video not available. Cannot find VIDS:MP42 decompressor.
	
	and you are unable to view videos.
	
	CAUSE
	=====
	
	This behavior occurs if the video codec is not installed or correctly
	configured.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Method 1: Reset Train Simulator MPEG Video Setting
	--------------------------------------------------
	
	NOTE: If you uninstall and then reinstall the game, you need to repeat these
	steps.
	
	Use the appropriate set of steps for your version of Microsoft Windows.
	
	Microsoft Windows 95, Microsoft Windows 98, or Microsoft Windows Millennium Edition (Me)::
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "system.ini" (without the quotation marks), and then
	  press ENTER.
	
	3. In the [MCI] section, delete the following line:
	
	  Tsmpegvideo=<drive letter>:\Program Files\Microsoft Games\Train
	  Simulator\tsqtz.drv
	
	4. In place of the deleted line, type the following:
	
	  Tsmpegvideo=tsqtz.drv
	
	5. On the File menu, click Exit. Click Yes to save the file.
	
	6. Restart the computer.
	
	7. Test the game.
	
	Windows 2000:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Click Start, click Run, and then type "regedit" (without the quotation marks)
	  in the Open box.
	
	2. Click OK.
	
	3. Locate and select the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\MCI32
	
	4. In the left pane, double-click "tsmpegvideo" under the Name column.
	
	5. Delete the Value data, and then type "tsqtz32.dll" (without the quotation
	  marks).
	
	6. Click OK.
	
	7. If you do not see "tsmpegvideo" in the Name column, click Edit, and then
	  click New.
	
	8. Click String Value, and then type "tsmpegvideo" (without the quotation
	  marks).
	
	9. Double-click "tsmpegvideo", type "tsqtz32.dll" (without the quotation marks),
	  and then click OK.
	
	10. Quit Registry Editor.
	
	11. Restart your computer
	
	12. Test the game.
	
	If the issue continues to occur, proceed to the next method.
	
	Method 2: Install the Latest Version of Windows Media Player
	------------------------------------------------------------
	
	To install the latest version of Windows Media Player, browse to the following
	Microsoft Web site:
	
	  http://www.microsoft.com/windows/windowsmedia/en/download/default.asp
	
	After you install Windows Media Player, test the game.
	
	Additional query words: msgame trainsim
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch _IK kbTrainSim kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
