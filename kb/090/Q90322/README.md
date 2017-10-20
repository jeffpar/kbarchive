---
layout: page
title: "Q90322: Persistent Connections and Windows for Workgroups"
permalink: /kb/090/Q90322/
---

## Q90322: Persistent Connections and Windows for Workgroups

{% raw %}

	Article: Q90322
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If resource connections are persistent in Windows for Workgroups or Workgroup
	Connections, connecting to and disconnecting from resource connections in
	Windows for Workgroups and Workgroup Connections changes the list of persistent
	connections.
	
	MORE INFORMATION
	================
	
	Disconnecting from a network drive is permanent, and removes it from the list of
	persistent connections. There is no one-time-only disconnect feature, although
	you can replace a persistent connection for one session with a temporary
	connection. This can only be done in Windows for Workgroups through the Connect
	Network and Connect Network Printer dialog boxes.
	
	To use a resource for one session, without disrupting the persistent connection
	list, clear the selection of the Reconnect At Startup check box when connecting
	to that resource.
	
	The CONNECT.DAT file contains a list of persistent connections. When starting the
	network, either from Windows Connections or Windows for Workgroups, this list is
	used to keep track of the connections. These connections are established when
	you either log on to the network in Windows Connections, or when Windows for
	Workgroups is started.
	
	For example, if a persistent printer resource is set in Windows for Workgroups
	and is then disconnected from Windows Connections by using the NET command, the
	resource will not automatically reconnect when starting Windows for Workgroups.
	
	Novell Users
	------------
	
	You must log on to Novell before starting Windows for Workgroups for persistent
	connections to be established when starting Windows for Workgroups.
	
	Additional query words: 1.00 3.10 LAN Manager LANman 3.11 wc 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : :1.0,3.1,3.11
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
