---
layout: page
title: "Q68364: Mac Adm: Forcing Mail to Do a Network Scan of Servers"
permalink: /kb/068/Q68364/
---

## Q68364: Mac Adm: Forcing Mail to Do a Network Scan of Servers

{% raw %}

	Article: Q68364
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Mail, there are two methods to force a network scan:
	
	Method 1
	--------
	
	Restart the server machine. The server will initiate a network scan 60 seconds
	after restarting.
	
	Method 2
	--------
	
	Set the site name in the Mail Network Administrator application. To do this:
	
	1. Log in as Network Manager.
	
	2. Launch the Mail Network Administrator application.
	
	3. From the Admin menu, choose Set Site Name (or press COMMAND+N).
	
	4. Click OK. The server will then do a network scan.
	
	MORE INFORMATION
	================
	
	To help reduce traffic on the network, Mail version 3.00 servers only do network
	scans every six hours.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
