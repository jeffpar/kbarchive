---
layout: page
title: "Q261194: Web Services Fail with &quot;IP Address Already in Use&quot; Error Message"
permalink: kb/261/Q261194/
---

## Q261194: Web Services Fail with &quot;IP Address Already in Use&quot; Error Message

	Article: Q261194
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Web service, the following error message occurs:
	
	  Address already in use.
	
	Also, the event log contains the following:
	
	  Event 115
	  Source: w3svc
	  Description: Could not bind instance <X>
	
	CAUSE
	=====
	
	Another service or application is listening to or using one of the default TCP
	ports (80 for http connections, 443 for https connections) that the World Wide
	Web Publishing Service (W3SVC) needs to bind to.
	
	RESOLUTION
	==========
	
	Disable or uninstall the service or application that is using port 80 or 443,
	and then retest the Web sites. An example of an application that could have
	grabbed port 80 is MSProxy or some third party application.
	
	In Microsoft Windows XP you can determine the application that is using the port
	attempting to be used. To do this, issue the following command:
	
	  "netstat -ano" (without the quotation marks)
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q281336 How to Determine Which Program Uses or Blocks Specific Transmission
	  Control Protocol Ports
	
	NOTE: It may be necessary to restart the computer.
	
	Several third-party utilities are available to provide this type of functionality
	in Windows 2000 and Windows NT:
	
	  FoundStone FPort:
	
	  http://www.foundstone.com/rdlabs/termsofuse.php?filename=FPortNG.zip
	  (http://www.foundstone.com/rdlabs/termsofuse.php?filename=FPortNG.zip)
	
	  Active Ports (APORTS):
	
	  http://www.ntutility.com/freeware.html
	
	  NTSecurity.nu Inzider:
	
	  http://www.ntsecurity.nu/toolbox/inzider/
	  (http://www.ntsecurity.nu/toolbox/inzider/)
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	MORE INFORMATION
	================
	
	To determine which ports are being listened to by other services or
	applications, first stop the IISADMIN service, and then type "netstat -an"
	(without the quotation marks) at the command prompt.
	
	NOTE: If this error message occurs immediately after you install IIS 5.0 over IIS
	4.0, removing and then reinstalling the TCP/IP protocol from Windows may reset
	the TCP port registry entries to the default values, allowing the IIS 5.0 Web
	service to work again. However, be aware that doing so may prevent the other
	service or application using port 80 or 443 from operating properly.
	
	
	Additional query words: iis 5 ssl 3rd-party third-party akz
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
