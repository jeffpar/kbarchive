---
layout: page
title: "Q296086: XCON: Error Message: The Service Did Not Respond to the Start..."
permalink: /kb/296/Q296086/
---

## Q296086: XCON: Error Message: The Service Did Not Respond to the Start...

{% raw %}

	Article: Q296086
	Product(s): Internet Information Server
	Version(s): 3.0,3.5,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Simple Mail Transfer Protocol (SMTP) Service in
	the Microsoft Management Console that is included in Microsoft Internet
	Information Server 4.0, you may receive the following error message:
	
	  The Service did not respond to the start or control request in a timely
	  fashion.
	
	CAUSE
	=====
	
	This behavior can occur due to the inability of the SMTP Service in Internet
	Information Server to bind to port 25 when the service starts. Port 25 must be
	available to the end point mapper so that it can assign port 25 to the SMTP
	Service when the SMTP Service starts.
	
	RESOLUTION
	==========
	
	To resolve this behavior, verify if another program installed on the server is
	using port 25. To do so, perform the following procedure:
	
	1. Click Start, click Run, type "cmd" (without the quotation marks), and then
	  click OK.
	
	2. Right-click the blue border along the top of the C:\Winnt\System32\cmd.exe
	  window, and then click Properties.
	
	3. Click the Layout tab, increase the Screen Buffer Size Height from 25 to 250,
	  click OK, and then click OK. This procedure adds a scroll bar to the DOS
	  window.
	
	4. Click Start, click Run, type "netstat -an" (without the quotation marks),
	  click OK, and then all the sockets allocated by the end point mapper scrolls
	  up the screen.
	
	5. The sockets are displayed in ascending order under the Local Address heading.
	  Locate the socket for port 25 under the State heading, and then verify the
	  sockets state. If the word "listening" is displayed then another program is
	  using port 25 and you are unable to start the SMTP Service.
	
	WORKAROUND
	==========
	
	To work around this behavior, perform one of the appropriate procedures:
	
	- Click Start, point to Settings, click Control Panel, double-click Add/Remove
	  Programs, and then remove the program that is using port 25.
	
	  -or-
	
	- Click Start, point to Settings, click Control Panel, double-click Services,
	  stop the service associated with the program using port 25, and then stop and
	  restart the SMTP Service in Internet Information Server.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search kbiisSearch kbiis400 kbiis300
	Version           : :3.0,3.5,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
