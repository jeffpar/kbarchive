---
layout: page
title: "Q155814: XFOR: Error 2186: Service is not Responding to Control Function"
permalink: /kb/155/Q155814/
---

## Q155814: XFOR: Error 2186: Service is not Responding to Control Function

{% raw %}

	Article: Q155814
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server version 4.0 Internet Mail Connector (IMC) service
	and the Microsoft Exchange Server version 5.0 Internet Mail Service (IMS) does
	not start automatically and the following event is logged in the Windows NT
	Server Event Viewer System log:
	
	  Event ID:7000
	  Source: Service Control Manager
	  Category: <none>
	  Description:. The Microsoft Exchange Internet Mail Connector service failed to
	  start due to the following error: The service did not respond to the start or
	  control request in a timely fashion.
	
	The following event is logged in the Application log:
	
	  Event ID 4086
	  Source MSExchange IMC
	  Category: Initialization/Termination
	  Description: Unable to start the service because the configuration could not
	  be loaded from the Microsoft Exchange directory or Windows NT Registry.
	
	If you try to start the service manually, a message window will pop up stating:
	
	  Error 2186: The service is not responding to the control function.
	
	CAUSE
	=====
	
	The IMC or the IMS has been set to log on as a system account or use the
	LocalSystem account.
	
	RESOLUTION
	==========
	
	1. Using the Services tool in Control Panel, select the Microsoft Exchange
	  Internet Mail service and click Startup.
	
	2. Under Log On As, select This Account. Select the name of the Microsoft
	  Exchange System Account or an account that has service account administrator
	  rights on the Organization, Site, and Configuration containers.
	
	Additional query words: IMC IMS
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
