---
layout: page
title: "Q223315: Zone Err Msg: An ActiveX Control on This Page Is Not Safe..."
permalink: /kb/223/Q223315/
---

## Q223315: Zone Err Msg: An ActiveX Control on This Page Is Not Safe...

	Article: Q223315
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
	
	When you browse Web pages on the Zone, you may receive the following error
	message:
	
	  An ActiveX control on this page is not safe. Your current security settings
	  prohibit running unsafe controls on this page. As a result, this page may not
	  be displayed as intended.
	
	If you continue to browse Web pages on the Zone, you may eventually receive the
	following error message:
	
	  Please wait for page to download completely before perfoming this task.
	
	CAUSE
	=====
	
	This behavior can occur if your current security settings prohibit running
	ActiveX controls and plug-ins, or scripts for ActiveX controls that are marked
	as safe for scripting.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method for your version of Microsoft
	Internet Explorer.
	
	Internet Explorer 6.0
	---------------------
	
	1. On the Tools menu, click Internet Options.
	
	2. On the Privacy tab, ensure the slider is set to Medium.
	
	3. Click Apply, and then click OK.
	
	Internet Explorer 5.0
	---------------------
	
	1. On the Tools menu in Internet Explorer, click Internet Options.
	
	2. On the Security tab, click Internet.
	
	3. Click Default Level, and then click OK.
	
	If the issue continues to occur, follow these steps:
	
	1. On the Tools menu in Internet Explorer, click Internet Options.
	
	2. On the Security tab, click Internet, and then click Custom Level.
	
	3. Under Run ActiveX Controls And Plug-ins, click Enable or Prompt.
	
	4. Under "Script ActiveX controls marked safe for scripting," click Enable or
	  Prompt.
	
	5. Under Java Permissions, click High Safety.
	
	6. Click OK, and then click Yes.
	
	7. Click OK.
	
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
	
	5. Under Run ActiveX Controls And Plugins, click Enable or Prompt.
	
	6. Under "Script ActiveX controls marked safe for scripting," click Enable or
	  Prompt.
	
	7. Under Java Permissions, click High Safety.
	
	8. Click OK, and then click OK again.
	
	MORE INFORMATION
	================
	
	If the issue continues to occur, install or reinstall the latest version of
	Internet Explorer from the following Microsoft Web site:
	
	  http://www.microsoft.com/windows/ie
	
	Additional query words: msgame msngz igz ie4 ie5 active-x
	
	======================================================================
	Keywords          : kbenv kberrmsg igz kbimu msgame kbfaq
	Technology        : kbGamesSearch kbMSNSearch kbZone
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
