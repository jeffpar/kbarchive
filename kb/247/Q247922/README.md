---
layout: page
title: "Q247922: Server Logs Netlogon Event 5719 When Starting"
permalink: /kb/247/Q247922/
---

## Q247922: Server Logs Netlogon Event 5719 When Starting

{% raw %}

	Article: Q247922
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a server running Microsoft Windows NT Server 4.0, Event Viewer
	may record the following event:
	
	  Netlogon Event ID 5719:
	  No Windows NT Domain Controller is available for domain <domain_name>.
	  The following error occurred:
	  This event is expected and can be ignored when booting with the No Network
	  Hardware Profile.
	
	After the server logs this event at startup, you can log on to the domain
	normally. The event only occurs when you start the computer.
	
	CAUSE
	=====
	
	This behavior can occur when your server is connected to a switch that has the
	spanning tree 'portfast' setting disabled.
	
	RESOLUTION
	==========
	
	To work around this behavior, enable the spanning tree 'portfast' setting on the
	switch. For information about the proper use of the spanning tree 'portfast'
	setting, consult the documentation provided with the switch.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
