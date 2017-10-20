---
layout: page
title: "Q60509: Number of Named Pipes Used Between MS-DOS Client and Server"
permalink: /kb/060/Q60509/
---

## Q60509: Number of Named Pipes Used Between MS-DOS Client and Server

{% raw %}

	Article: Q60509
	Product(s): Microsoft LAN Manager
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- DCA/Microsoft Communications Server, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DCA/Microsoft Communications Server requires Microsoft LAN Manager version 2.00
	or later to operate. The Communications Server MS-DOS and OS/2 clients use named
	pipe connections to communicate with OS/2-based Communications Server computers.
	These named pipe connections are handled transparently to the user as well as to
	the HLLAPI or APPC application programmer.
	
	The following information describes how many named pipes are used by
	Communications Server clients when communicating to a server:
	
	1. All 3270 traffic that flows between a client computer and a server is
	  multiplexed through one named pipe connection.
	
	2. All APPC traffic that flows between a client computer and a server is
	  multiplexed through one named pipe connection.
	
	3. If 3270 and APPC traffic is occurring between one client computer and one
	  server, two named pipes are used (one for 3270 traffic and one for APPC
	  traffic).
	
	4. If a client computer has 3270 sessions active with two different servers, two
	  named pipes are used (one named pipe for each server). This is also true for
	  APPC. Please note that 3270 and APPC traffic is never multiplexed through the
	  same named pipe to a server.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbSNAServSearch kbDCAMSCommServ
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
