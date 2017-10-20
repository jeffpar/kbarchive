---
layout: page
title: "Q127933: Err Msg: No Network Provider Accepted the Given Network Path"
permalink: /kb/127/Q127933/
---

## Q127933: Err Msg: No Network Provider Accepted the Given Network Path

{% raw %}

	Article: Q127933
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg msnets win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run an application, you may receive the following error
	message:
	
	  No network provider accepted the given network path.
	
	CAUSE
	=====
	
	This error message can occur when you run a program with a universal naming
	convention (UNC) name when you are not logged on to the network, or if you are
	using the wrong frame type for the IPX protocol.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method:
	
	- Log on to the network using a valid user account. To do so, follow these
	  steps:
	
	  1. Save and close any open work on your computer.
	
	  2. Click the Start button, then click Shut Down.
	
	  3. In the Shut Down Windows dialog box, click the "Close all programs and log
	     on as a different user" option button.
	
	  4. Click the Yes button.
	
	  5. When you are prompted, log on to the network with a valid user name and
	     password.
	
	- Correct the Frame Type setting in the properties for the IPX protocol.
	
	MORE INFORMATION
	================
	
	The error message stated above occurs only when you have multiple networks
	installed. The generic error message occurs because Windows 95 does not know to
	which network the connection request should go.
	
	For additional information, see the following article in the Microsoft Knowledge
	Base:
	
	  Q141858 No Windows or Network Logon Dialog Box at Startup
	
	======================================================================
	Keywords          : kbenv kberrmsg msnets win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
