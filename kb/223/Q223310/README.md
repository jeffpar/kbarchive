---
layout: page
title: "Q223310: Zone Err Msg: Your Current Security Settings Prohibit..."
permalink: /kb/223/Q223310/
---

## Q223310: Zone Err Msg: Your Current Security Settings Prohibit...

	Article: Q223310
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg igz kbimu msgamekbfaq
	Last Modified: 30-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zone.com 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to Zone.com, you may receive the following error
	message:
	
	  Your current security settings prohibit running ActiveX controls on this
	  page. As a result, the page may not display correctly.
	
	If you continue to browse Web pages on Zone.com, you may eventually receive the
	following error message:
	
	  Please wait for page to download completely before perfoming this task.
	
	CAUSE
	=====
	
	This behavior can occur if your current security settings prohibit downloading
	signed ActiveX controls.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps.
	
	Internet Explorer 5.0
	---------------------
	
	1. On the Tools menu in Internet Explorer, click Internet Options.
	
	2. On the Security tab, click Internet.
	
	3. Click Default Level, and then click OK.
	
	If the issue continues to occur, follow these steps:
	
	1. On the Tools menu in Internet Explorer, click Internet Options.
	
	2. On the Security tab, click Internet, and then click Custom Level.
	
	3. Under Download Signed ActiveX Controls, click Enable or Prompt.
	
	4. Click OK, and then click Yes.
	
	5. Click OK.
	
	If the issue continues to occur, reinstall Internet Explorer from the following
	Microsoft Web site:
	
	  http://www.microsoft.com/windows/ie/
	
	Internet Explorer 4.0
	---------------------
	
	1. On the View menu in Internet Explorer, click Internet Options.
	
	2. Click the Security tab.
	
	3. In the Zone box, click Internet Zone, and then click Reset.
	
	4. Click OK.
	
	If the issue continues to occur, follow these steps:
	
	1. On the View menu in Internet Explorer, click Internet Options.
	
	2. Click the Security tab.
	
	3. In the Zone box, click Internet Zone.
	
	4. Click Custom (For Expert Users), and then click Settings.
	
	5. Under Download Signed ActiveX Controls, click Enable or Prompt.
	
	6. Click OK, and then click OK again.
	
	If the issue continues to occur, reinstall Internet Explorer from the following
	Microsoft Web site:
	
	  http://www.microsoft.com/windows/ie/
	
	Additional query words: msngz igz ie4 ie5 active-x msgame
	
	======================================================================
	Keywords          : kbenv kberrmsg igz kbimu msgame kbfaq
	Technology        : kbGamesSearch kbMSNSearch kbZone
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
