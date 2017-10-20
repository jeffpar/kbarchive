---
layout: page
title: "Q135492: DSPU Through Demo Link Service Causes Scrolling 3270 Screen"
permalink: /kb/135/Q135492/
---

## Q135492: DSPU Through Demo Link Service Causes Scrolling 3270 Screen

{% raw %}

	Article: Q135492
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run DSPU through the 3270 Continuous Demo link service, your 3270
	screen scrolls.
	
	This problem occurs when you:
	
	1. Install the 3270 Continuous Demo link service using SNA Server Setup, add a
	  connection to use this link service, and add a Downstream LU to this
	  connection.
	
	2. On the same computer, you configure a Downstream 802.2 connection and assign
	  the Downstream LU in step 1 to this connection. See the "SNA Server
	  Administrator Guide" for details on configuring downstream connections.
	
	3. Save this configuration in SNA Server Admin.
	
	4. On a second computer, configure an on-demand 802.2 host connection pointing
	  to the original computer.
	
	5. Save this configuration in SNA Server Admin.
	
	6. From the second computer, activate the 3270 session using the SNA Server 3270
	  application.
	
	Because this session is associated with a connection configured for "on-demand,"
	the connection will start when the emulator requests a session. The connection
	goes active after starting the 3270 application. Let the 3270 application sit;
	notice that the DEMO SDLC connection cycles between Active and Inactive status.
	The 3270 application will display the Space Needle host signon screen over and
	over, shifting a few rows up the screen each time.
	
	If you manually activate the 802.2 connection on the second computer rather than
	letting the application activate it, the connection does not oscillate.
	
	RESOLUTION
	==========
	
	Obtain a new script file and SNACLASP.DLL file to cope with the extra NOTIFY RU
	that flows in this configuration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11 demo link service continuous
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
