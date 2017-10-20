---
layout: page
title: "Q129258: Err Msg: The Selected Security Provider Could Not Be Found"
permalink: /kb/129/Q129258/
---

## Q129258: Err Msg: The Selected Security Provider Could Not Be Found

{% raw %}

	Article: Q129258
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select user-level security and enter the name of a server to use as a
	security provider, you receive the following error message:
	
	  Windows could not find the specified security provider on the network. Do you
	  wish to use the name you typed anyway?
	
	CAUSE
	=====
	
	This error message can occur for any of the following reasons:
	
	- You specified an incorrect server name.
	
	- The server type does not match the services selected for file and printer
	  sharing. For example, you specified a NetWare server but file and printer
	  sharing for Microsoft Networks is installed.
	
	- The server is not operational.
	
	- The network has not been started.
	
	- You are not logged on to the Microsoft LAN Manager or Windows NT domain.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Verify that the server name you entered is correct.
	
	2. Verify that the server type you specified matches the network services you
	  are running. For example, if you are running file and printer sharing for
	  NetWare Networks, make sure to specify a NetWare server.
	
	3. Verify that the server is operational.
	
	4. After you verify the items above, if the network has not been started,
	  restart the computer.
	
	Additional query words: access control
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
