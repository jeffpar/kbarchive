---
layout: page
title: "Q188047: SMS: Smsaddin.exe Description and Usage"
permalink: /kb/188/Q188047/
---

## Q188047: SMS: Smsaddin.exe Description and Usage

{% raw %}

	Article: Q188047
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Smsaddin.exe tool, included in the BackOffice Resource Kit, allows you to
	register applications so they can be started directly from the Tools menu in the
	Systems Management Server Administrator console.
	
	MORE INFORMATION
	================
	
	Starting an application from the Systems Management Server Administrator console
	requires adding information about the application to the Windows NT registry.
	
	Systems Management Server provides and checks the following key in the registry
	for starting an application:
	
	  SOFTWARE\Microsoft\SMS\Applications
	
	This key is located under both HKEY_CURRENT_USER and HKEY_LOCAL_MACHINE. Tools
	registered under HKEY_CURRENT_USER are available to all Systems Management
	Server users; tools registered under HKEY_LOCAL_MACHINE are available only to
	the user who registered the tool.
	
	Based on information you provide during the registration process, the
	Smsaddin.exe tool creates a vendor key, one application key for each application
	(each application key corresponds to a Tools menu item), and context keys that
	determine when the application appears on the Tools menu and specify the
	command-line arguments to be passed when starting the application. The data
	registered specifies the characteristics of the application, such as a
	description, command name, working directory, and so on.
	
	After it is registered, the application becomes available on the Tools menu in
	the Systems Management Server Administrator console. Systems Management Server
	uses the Registry data to determine how to start the application. Command-line
	arguments are resolved dynamically when the application is started.
	
	Smsaddin.exe registers applications in a context-specific manner. Context refers
	to the Systems Management Server multiple document interface (MDI) window that
	has the focus. Applications registered in a specific context are only available
	on the Tools menu when that context is active (that is, when the context
	corresponding MDI window has the focus).
	
	You can register an application in more than one context. You can also register
	an application in the General context, in which case the application is always
	available on the Tools menu. General Context applications always appear in the
	upper half of the Tools menu, above the separator line. Context-specific
	applications appear below the separator line. If no applications are registered
	for the current context, only the General Context applications appear on the
	menu.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
