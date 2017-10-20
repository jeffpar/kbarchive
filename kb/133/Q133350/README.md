---
layout: page
title: "Q133350: Cannot Map Drives to More Than Eight NetWare Servers"
permalink: /kb/133/Q133350/
---

## Q133350: Cannot Map Drives to More Than Eight NetWare Servers

{% raw %}

	Article: Q133350
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet msnets win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to map a drive to a Novell NetWare server, you may receive the
	following message:
	
	  Before you can connect to another server, you must detach from one
	  or more of the listed servers.
	
	
	CAUSE
	=====
	
	The Microsoft Client for NetWare Networks defaults to a maximum of eight mapped
	NetWare servers.
	
	RESOLUTION
	==========
	
	To work around this behavior, use one of the following methods:
	
	Method 1
	--------
	
	Connect to the server using a Universal Naming Convention name. This bypasses the
	default connection limit because UNC connections do not use drive letters.
	
	Click the Start button, click Run, and then type "\\<server>\<share>"
	(without quotation marks) in the Open box, where <server> is the server
	name and <share> is the name of the share on the server.
	
	This is a "manual" connection that does not remain mapped to the server when you
	restart the computer.
	
	Method 2
	--------
	
	Change or add the "CONNECTIONS=" line in the Net.cfg file. A default value of 8
	is used if there is no "CONNECTIONS=" entry in the Net.cfg file. Add this line
	with a value of up to 50, or change the line to a value of up to 50. Then,
	remove the network components in Windows 95. Restart your computer and reinstall
	the network components. After you reinstall the network components you should be
	able to map as many drives as the value in the "CONNECTIONS=" line in the
	Net.cfg file.
	
	The Net.cfg file is a NetWare support file. This file is not included with
	Windows 95.
	
	
	MORE INFORMATION
	================
	
	The default maximum number of server connections that NetWare 3.1x allows is
	eight. The Microsoft Client for NetWare Networks uses the same default value.
	This restriction does not affect the number of drives that can be mapped. It
	affects only the number of servers you can map a drive to.
	
	Additional query words: detaching servers
	
	======================================================================
	Keywords          : 3rdpartynet msnets win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
