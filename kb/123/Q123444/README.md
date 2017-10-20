---
layout: page
title: "Q123444: UNC Connection Generates Error Message on Shutdown"
permalink: /kb/123/Q123444/
---

## Q123444: UNC Connection Generates Error Message on Shutdown

{% raw %}

	Article: Q123444
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you establish a universal naming convention (UNC) network connection with a
	Windows 95 machine and then the Windows 95 machine is shut down using the Start
	menu, you receive the following error message
	
	  There are <x> user(s) connected to your computer. Shutting down your
	  computer will disconnect them. Do you want to continue?
	
	where <x> indicates the number of users currently connected.
	
	CAUSE
	=====
	
	A client connected to a Windows 95 server needs to maintain the connection for a
	reasonable amount of time, allowing for user interaction. If the Windows 95
	machine is shut down during this time, the above error message is generated. It
	is generated even though there are no drives mapped directly to the Windows 95
	server.
	
	RESOLUTION
	==========
	
	To work around this issue, wait a short time before shutting down the Windows 95
	computer.
	
	Additional query words: err msg
	
	======================================================================
	Keywords          : kberrmsg kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
