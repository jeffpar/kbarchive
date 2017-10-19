---
layout: page
title: "Q223760: Zone Err Msg: Please Wait for Page to Download Completely..."
permalink: /kb/223/Q223760/
---

## Q223760: Zone Err Msg: Please Wait for Page to Download Completely...

	Article: Q223760
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
	
	When you connect to the Zone, you may receive the following error message:
	
	  Please wait for page to download completely before performing this task.
	
	You may also be prompted to go to another page to download the Zone software.
	When you view the page, the picture of the Spade is not displayed.
	
	CAUSE
	=====
	
	This behavior can occur for any of the following reasons:
	
	- You are not allowing enough time for the Heartbeat ActiveX object to be
	  downloaded or initialized on your computer.
	
	- Your browser security settings are set too high.
	
	- Files in your Temporary Internet Files folder point to outdated Zone pages.
	
	- The Heartbeat ActiveX object on your computer is damaged.
	
	- Your Downloaded Program Files folder is marked as read-only.
	
	- You are using a browser that is not compatible with the Zone.
	
	RESOLUTION
	==========
	
	To resolve this issue, use a browser that is compatible with the Zone. To see
	the System Requirements of the Zone visit the following Zone web page:
	
	  http://zone.msn.com/zzzz/help/zonehelpsystem.asp
	
	If the issue still continues use the following methods in the order in which they
	are presented. If the issue continues to occur, proceed to the next method.
	
	Wait for Your Web Browser to Finish Downloading the Page
	--------------------------------------------------------
	
	The Zone occasionally requires your browser to finish downloading or initializing
	certain components, such as the Heartbeat ActiveX object, before you can proceed
	to other pages on the Zone.
	
	You may need to refresh the current page, and then wait for your Web browser to
	finish downloading the page before you click on a link.
	
	NOTE: When you download an ActiveX control, the process takes place in the
	background. Depending on your browser security settings, you may not be notified
	that the download process is taking place.
	
	When your browser is finished downloading the page, a status of "Done" is
	displayed on the Microsoft Internet Explorer status bar.
	
	Change Your Internet Browser's Security Setting
	-----------------------------------------------
	
	To configure your browser to use the default security settings, use the
	appropriate method for your version of Microsoft Internet Explorer:
	
	Internet Explorer 6.0:
	
	1. On the Tools menu, click Internet Options.
	
	2. On the Privacy tab, ensure the slider is set to Medium.
	
	3. Click Apply, and then click OK.
	
	Internet Explorer 5.0:
	
	1. On the Tools menu in Internet Explorer, click Internet Options.
	
	2. On the Security tab, click Internet.
	
	3. Click Default Level, and then click OK.
	
	If the issue continues to occur:
	
	1. On the Tools menu in Internet Explorer, click Internet Options.
	
	2. On the Security tab, click Internet, and then click Custom Level.
	
	3. Under Download Signed ActiveX Controls, click Enable or Prompt.
	
	4. Click OK, and then click Yes.
	
	5. Click OK.
	
	Internet Explorer 4.0:
	
	1. On the View menu in Internet Explorer, click Internet Options.
	
	2. Click the Security tab.
	
	3. In the Zone box, click Internet Zone, and then click Reset.
	
	4. Click OK.
	
	If the issue continues to occur:
	
	1. On the View menu in Internet Explorer, click Internet Options.
	
	2. Click the Security tab.
	
	3. In the Zone box, click Internet Zone.
	
	4. Click Custom (For Expert Users), and then click Settings.
	
	5. Under Download Signed ActiveX Controls, click Enable or Prompt.
	
	6. Click OK, and then click OK again.
	
	If the issue continues to occur, use the appropriate method for your version of
	Microsoft Internet Explorer.
	
	Internet Explorer 5.0 and 6.0:
	
	1. On the Tools menu in Internet Explorer, click Internet Options.
	
	2. On the Security tab, click Internet, and then click Custom Level.
	
	3. Under Run ActiveX Controls And Plug-ins, click Enable or Prompt.
	
	4. Under "Script ActiveX controls marked safe for scripting," click Enable or
	  Prompt.
	
	5. Click OK, and then click Yes.
	
	6. Click OK.
	
	Internet Explorer 4.0:
	
	1. On the View menu in Internet Explorer, click Internet Options.
	
	2. Click the Security tab.
	
	3. In the Zone box, click Internet Zone.
	
	4. Click Custom (For Expert Users), and then click Settings.
	
	5. Under Run ActiveX Controls And Plugins, click Enable or Prompt.
	
	6. Under "Script ActiveX controls marked safe for scripting," click Enable or
	  Prompt.
	
	7. Click OK, and then click OK again.
	
	Empty Your Temporary Internet Files Folder
	------------------------------------------
	
	To ensure that you are using the latest Zone.com Web pages, empty your Temporary
	Internet Files folder. To do this, use the appropriate method for your Web
	browser.
	
	Microsoft Internet Explorer 4.x and Later:
	
	1. On the View menu (Internet Explorer 4.x) or Tools menu (Internet Explorer
	  5.0), click Internet Options.
	
	2. Under Temporary Internet Files, click Delete Files, and then click Yes or OK.
	
	3. Click Settings.
	
	4. Under "Check for newer versions of stored pages," click "Every time you start
	  Internet Explorer."
	
	5. Click OK, and then click OK again.
	
	6. Quit and then restart Internet Explorer.
	
	7. Connect to the Zone.
	
	Remove the Heartbeat ActiveX Control
	------------------------------------
	
	To remove the Heartbeat ActiveX Control from your computer, use the appropriate
	method for your Web browser.
	
	Microsoft Internet Explorer 4.0 or Later:
	
	1. Quit Internet Explorer if it is running.
	
	  NOTE: If the ZoneFriends icon is displayed on the taskbar, right-click the
	  icon and then click Exit.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Internet.
	
	4. Under Temporary Internet Files, click Settings, and then click View Objects.
	
	5. Click the HearbeatCtl Class program file.
	
	  NOTE: If the HeartbeatCtl Class program file is damaged, it may be displayed
	  as a string of characters or numbers, such as:
	
	  {AE1C01E3-0283-11D3-9B3F-00C04F8EF466}
	
	  instead of HeartbeatCtl Class.
	
	6. On the File menu, click Remove Program File. When you are prompted to confirm
	  the removal of the program file, click Yes.
	
	Remove Read-Only Attribute from Downloaded Program Files Folder
	---------------------------------------------------------------
	
	To remove the read-only attribute from the Downloaded Program Files folder:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "downloaded program files" (including the quotation
	  marks), and then click Find Now.
	
	3. In the list of found folders, right-click the Downloaded Program Files
	  folder, and then click Properties.
	
	4. Click to clear the Read-Only check box, and then click OK.
	
	Additional query words: msgame igz msngz active-x ie4 ie5
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu msgame kbfaq
	Technology        : kbGamesSearch kbMSNSearch kbZone
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
