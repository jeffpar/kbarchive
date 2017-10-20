---
layout: page
title: "Q190783: Zone: Cannot Enter Zone Game Rooms"
permalink: /kb/190/Q190783/
---

## Q190783: Zone: Cannot Enter Zone Game Rooms

{% raw %}

	Article: Q190783
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu msgamekbfaq
	Last Modified: 30-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zone.com 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click a game room on the Zone, nothing may happen, and you may be
	unable to enter the game room.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods.
	
	Make sure JavaScript is Enabled
	-------------------------------
	
	To do this, use the appropriate method for your Web browser.
	
	Microsoft Internet Explorer 5 or Later:
	
	1. On the Tools menu, click Internet Options.
	
	2. On the Security tab, click Internet.
	
	3. Click Default Level, and then click OK.
	
	If the issue continues to occur:
	
	1. On the Tools menu, click Internet Options.
	
	2. On the Security tab, click Internet, and then click Custom Level.
	
	3. Under "Active scripting," click Enable or Prompt.
	
	4. Click OK, and then click Yes.
	
	5. Click OK.
	
	Internet Explorer 4.x:
	
	1. On the View menu, click Internet Options.
	
	2. Click the Security tab.
	
	3. In the Zone box, click Internet Zone, and then click Reset.
	
	4. Click OK.
	
	If the issue continues to occur:
	
	1. On the View menu, click Internet Options.
	
	2. Click the Security tab.
	
	3. In the Zone box, click Internet Zone.
	
	4. Click Custom (For Expert Users), and then click Settings.
	
	5. Under Active Scripting, click Enable or Prompt.
	
	6. Click OK, and then click OK again.
	
	Empty the Temporary Internet Files Folder
	-----------------------------------------
	
	To do this, use the appropriate method for your Web browser.
	
	Microsoft Internet Explorer 4.x and Later:
	
	1. On the View menu (Internet Explorer 4.x) or Tools menu (Internet Explorer
	  5.0), click Internet Options.
	
	2. Under Temporary Internet Files, click Delete Files, and then click Yes or OK.
	
	3. Click Settings.
	
	4. Under "Check for newer versions of stored pages," click "Every time you start
	  Internet Explorer".
	
	5. Click OK, and then click OK again.
	
	6. Quit and then restart Internet Explorer.
	
	7. Connect to the Zone.
	
	Remove and Reinstall the Lobby.exe File
	---------------------------------------
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type the following line:
	
	  "lobby.exe" (without the quotation marks)
	
	3. In the "Look in" box, click My Computer, and then click Find Now.
	
	4. On the Edit menu, click Select All.
	
	5. On the File menu, click Delete. When you are prompted to confirm the file
	  deletion, click Yes.
	
	  NOTE: By default, these files are located in the following folder:
	
	  C:\Program Files\Zone.com
	
	6. Close the Find: Files Named Lobby.exe window.
	
	7. To reinstall the Lobby.exe file, connect to the following Zone.com Web site:
	
	  http://zone.msn.com
	
	Remove and Reinstall the Zone
	-----------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click Microsoft Zone.com, and then click
	  Add/Remove.
	
	4. Follow the instructions on the screen to remove Microsoft Zone.com.
	
	5. Remove Zone.com Heartbeat ActiveX control or plug-in. For additional
	  information about how to do this, please click the article number below to
	  view the article in the Microsoft Knowledge Base:
	
	  Q225041 Zone.com: How to Remove the Heartbeat ActiveX Control
	
	6. Empty the Temporary Internet Files folder.
	
	7. Visit the following Zone.com Web site:
	
	  http://zone.msn.com
	
	  The first time you visit the Zone Web site, the Zone installs the basic Zone
	  software automatically, and installs additional software automatically when
	  you visit game rooms and chat rooms.
	
	Additional query words: msgame igz msngz ror aoe
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu msgame kbfaq
	Technology        : kbGamesSearch kbMSNSearch kbZone
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
