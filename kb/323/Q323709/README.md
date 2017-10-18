---
layout: page
title: "Q323709: Err Msg: &quot;An exception 'Runtime Error' Has Occurred in Script&quot;"
permalink: kb/323/Q323709/
---

## Q323709: Err Msg: &quot;An exception 'Runtime Error' Has Occurred in Script&quot;

	Article: Q323709
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the system event log, you may receive the following error
	message:
	
	  Source: Application Popup
	  Event ID: 26
	  Description: Application Popup: Just-In-Time Debugging : An exception 'Runtime
	  Error' has occurred in script.
	  However no debuggers are registered that can debug this exception. Unable to
	  JIT Debug
	
	CAUSE
	=====
	
	ASP script debugging is turned on in the IIS Web site properties, but a
	Just-In-Time (JIT) debugger (such as Visual InterDev) is not installed on the
	server.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Open the IIS Management Console (MMC).
	
	2. Right-click the server name, and then click Properties.
	
	3. Under Master WWW Service, click Edit.
	
	4. Click the Home Directory tab.
	
	5. Click Configuration.
	
	6. Click the App Debugging tab.
	
	7. Click to clear the following check boxes:
	
	   - Enable ASP server-side script debugging
	
	   - Enable ASP client-side script debugging
	
	8. Click Apply, and then click OK three times. This returns you to the MMC.
	
	NOTE: After you click Apply, a dialog box may prompt you to apply these changes
	at the Web site level or the virtual directory level. If you receive this dialog
	box, click Select All, and then click OK.
	
	MORE INFORMATION
	================
	
	Script debugging can also be set at the Web site level and the virtual directory
	level. To turn off script debugging at the Web site level or the virtual
	directory level, follow these steps:
	
	1. Open the IIS Management Console (MMC).
	
	2. Right-click the Web site or the virtual directory name, and then click
	  Properties.
	
	3. Under Master WWW Service, click Edit.
	
	4. Click the Home Directory tab or the Virtual Directory tab.
	
	5. Click Configuration.
	
	6. Click the App Debugging tab.
	
	7. Click to clear the following check boxes:
	
	   - Enable ASP server-side script debugging
	
	   - Enable ASP client-side script debugging
	
	8. Click Apply, and then click OK two times. This returns you to the MMC.
	
	NOTE: After you click Apply, a dialog box may prompt you to apply these changes
	at the Web site level or the virtual directory level. If you receive this dialog
	box, click Select All, and then click OK.
	
	Additional query words: iis 5 just-in-time debugging application popup
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
