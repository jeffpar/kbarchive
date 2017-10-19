---
layout: page
title: "Q236846: Zone: Error Message or Nothing Happens When You Click a Web Link"
permalink: /kb/236/Q236846/
---

## Q236846: Zone: Error Message or Nothing Happens When You Click a Web Link

	Article: Q236846
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbinterop igz kbimu msgamekbfaq
	Last Modified: 30-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zone.com 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click a link on the Zone, you may receive a JavaScript error message or
	nothing may happen.
	
	CAUSE
	=====
	
	This behavior can occur for any of the following reasons:
	
	- The JavaScript engine is disabled.
	
	- The JavaScript engine is not installed properly on your computer.
	
	- The Zone files stored in the Temporary Internet Files folder are outdated.
	
	JavaScript is used for the game room or lobbies, chat rooms, Profiles,
	Subscription, and Support links.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method.
	
	Enable JavaScript
	-----------------
	
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
	
	Reinstall the JavaScript Engine
	-------------------------------
	
	To reinstall the JavaScript engine, download and install the latest version of
	Windows Script from the following Microsoft Web site:
	
	  http://msdn.microsoft.com/downloads/sample.asp?url=/MSDN-FILES/027/001/733/msdncompositedoc.xml
	
	If the issue continues to occur, remove and reinstall your Web browser software,
	or obtain and install the latest version of your Web browser software.
	
	To obtain and install the latest version of Microsoft Internet Explorer, visit
	the following Microsoft Web site:
	
	  http://www.microsoft.com/windows/ie/
	
	Empty the Temporary Internet Files Folder
	-----------------------------------------
	
	To resolve this issue, empty the Temporary Internet Files folder. To do this, use
	the appropriate method for your Web browser.
	
	Microsoft Internet Explorer 4.0 and Later:
	
	1. On the View menu (Internet Explorer 4.x) or the Tools menu (Internet Explorer
	  5.0 and later), click Internet Options.
	
	2. Under Temporary Internet Files, click Delete Files, and then click Yes or OK.
	
	3. Click Settings.
	
	4. Under "Check for newer versions of stored pages", click "Every time you start
	  Internet Explorer".
	
	5. Click OK, and then click OK again.
	
	6. Quit and then restart Internet Explorer.
	
	7. Connect to the Zone.
	
	Additional query words: msngz igz msgame jscript java
	
	======================================================================
	Keywords          : kbenv kbinterop igz kbimu msgame kbfaq
	Technology        : kbGamesSearch kbMSNSearch kbZone
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
