---
layout: page
title: "Q326245: PRB: Actv Dsktp in Win 98 Handles .NETAlerts Sign In Differently"
permalink: /kb/326/Q326245/
---

## Q326245: PRB: Actv Dsktp in Win 98 Handles .NETAlerts Sign In Differently

	Article: Q326245
	Product(s): Microsoft Developer Network
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft.NET Alerts, used with:
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the .NET Alerts Sign In button to sign in to .NET Alerts on the
	Active Desktop on a computer that is running Windows 98, a new browser window
	opens. You expect the Web site to open in the Active Desktop.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. On a computer that is running Windows 98, turn on the Active Desktop. To do
	  this, follow these steps:
	
	  a. Click Start, point to Settings, click Control Panel, and then double-click
	     Display.
	
	  b. To turn on the Active Desktop, click the Web tab, click to select the View
	     my Active Desktop as a web page check box, and then click OK.
	
	2. Add the .NET Alerts Sign In Web page to the Active Desktop.
	
	3. Click Apply to make sure that the .NET Alerts Sign In Web site is now part of
	  the Active Desktop.
	
	4. On the Active Desktop, click the .NET Alerts Sign In button.
	
	Results:
	Notice that a new browser window opens for the .NET Alerts Web site. The Active
	Desktop remains as the default page.
	
	Expected Results:
	When you click a link on the Active Desktop, you expect the Web site to open in
	the Active Desktop, and not to open in a new browser window.
	
	Additional query words: kbNETAlerts
	
	======================================================================
	Keywords          :  
	Technology        : kbNETAlerts
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
