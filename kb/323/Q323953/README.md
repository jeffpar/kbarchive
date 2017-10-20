---
layout: page
title: "Q323953: Dungeon Siege: &quot;Needs to Close&quot; Err Msg Connecting by ZoneMatch"
permalink: /kb/323/Q323953/
---

## Q323953: Dungeon Siege: &quot;Needs to Close&quot; Err Msg Connecting by ZoneMatch

{% raw %}

	Article: Q323953
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dungeon Siege, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to a multiplayer game of Dungeon Siege 1.0 by using the
	ZoneMatch server, you may receive an error message similar to the following:
	
	  Microsoft Dungeon Siege has encountered a problem and needs to close. We are
	  sorry for the inconvenience.
	
	If you click Click Here, the following log appears:
	
	  AppName: dungeonsiege.exe
	  AppVer: 0.2.3.801
	  ModName: newdot~1.dll
	  ModVer: 3.0.0.70
	  Offset: 0000ee14
	
	CAUSE
	=====
	
	This problem may occur if the third-party product New.net is installed on your
	computer. New.net may interfere with the Dungeon Siege multiplayer session.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove New.net. To do this, follow these steps:
	
	Part 1: Remove New.net
	----------------------
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. In the list of installed programs, click New.net, and then click Add/Remove.
	
	4. Follow the on-screen instructions to complete the removal process.
	
	Part 2: Remove the Downloaded File
	----------------------------------
	
	1. Start Internet Explorer.
	
	2. On the Tools menu, click Internet Options.
	
	3. Click the General tab, and then click Settings.
	
	4. Click View Objects.
	
	5. In the Downloaded Program Files folder, right-click Tldct12c Class, and then
	  click Delete.
	
	6. Close the Downloaded Program Files folder.
	
	7. Click OK to close each Internet Explorer Settings dialog box, and then close
	  Internet Explorer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch _IK kbDungeonSiege
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
