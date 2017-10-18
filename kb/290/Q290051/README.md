---
layout: page
title: "Q290051: HOWTO: Determine If SSL Connectivity Is Failing on the WebServer"
permalink: kb/290/Q290051/
---

## Q290051: HOWTO: Determine If SSL Connectivity Is Failing on the WebServer

	Article: Q290051
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 08-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Determine the Cause of the Problem
	
	      - Make an SSL Request to the Server
	      - Find the Blocking Intermediate Device
	
	   - Troubleshooting
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to determine if Secure Sockets Layer
	(SSL) connectivity is not working on the Web server or on a intermediate device
	that is on the path from the client to the Web server.
	
	After you install a Secure Sockets Layer (SSL) certificate on a computer that is
	running Internet Information Server (IIS) or Internet Information Services
	(IIS), you may find that you cannot connect to the computer across the Internet.
	When you try to connect, you may receive the following error messages in the
	browser:
	
	  The page cannot be displayed
	
	and
	
	  Cannot find server or DNS error
	
	Determine the Cause of the Problem
	----------------------------------
	
	One possible cause of this error is that an intermediate device, such as a router
	or a firewall, is blocking TCP port 443 requests to the server.
	
	Make an SSL Request to the Server:
	
	To isolate this as a possible cause, first make sure that an SSL request to the
	server on the server is successful. After you install the SSL certificate, you
	can make an SSL request to the server by using the browser on the server (that
	is, connect to https://www.<commonnameonthecertificate>.com by using the
	browser on the Web server).
	
	If this step is not successful, see the Troubleshooting section.
	
	Find the Blocking Intermediate Device:
	
	If you can connect to the server, follow these steps to confirm that an
	intermediate device is blocking the SSL traffic:
	
	1. On the Web server, open a command prompt and use the Microsoft TCP/IP Tracert
	  utility to connect to a known Web server on the Internet that has an SSL
	  certificate installed (such as www.microsoft.com). This shows all of the
	  "hops" between the Web server and the destination server.
	
	  The -d switch tells Tracert not to map IP addresses to host names.
	
	  tracert www.microsoft.com -d
	    1    20 ms    10 ms    10 ms  24.25.66.1
	    2   <10 ms    10 ms    10 ms  24.93.65.149
	    3   <10 ms    10 ms   <10 ms  24.93.66.145
	    4   <10 ms    10 ms    10 ms  24.93.66.178
	    5    20 ms    20 ms    20 ms  64.240.245.81
	    6    20 ms    20 ms    20 ms  208.30.202.5
	    7    20 ms    20 ms    20 ms  144.232.8.229
	    8    40 ms    30 ms    30 ms  144.232.18.33
	    9    40 ms    30 ms    40 ms  144.232.26.1
	   10    40 ms    30 ms    30 ms  144.232.26.6
	   11    80 ms    71 ms    70 ms  144.232.18.49
	   12    70 ms    70 ms    70 ms  144.232.6.89
	
	2. When you have obtained this information, use the Microsoft TCP/IP Telnet
	  utility to determine which router is blocking the SSL traffic. First, try to
	  telnet to port 443 on the first hop that is reported from the Tracert
	  output.
	
	  For example, telnet to each hop that is listed in the Tracert output:
	
	  telnet 24.93.65.149 443
	
	When a connection is made to a listening SSL port, the telnet session shows a
	blank flashing cursor, as if the server is waiting for input. After several
	seconds, or if you press any keys, the telnet client displays the following:
	
	  Connection to host lost.
	
	A connection to a server that is not listening on SSL immediately returns the
	following message:
	
	  Could not open a connection to host on port 443 : Connect failed
	
	3. Continue this process for each item on the Tracert list until you have
	  determined the first intermediate device that is blocking SSL connections.
	  After you find that device, work with the administrator of that device to
	  correct this issue, and then try to connect to the site from the Internet.
	
	Troubleshooting
	---------------
	
	For additional information about what to do if using the browser on the Web
	server is not successful, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q260096 Page Cannot Be Displayed When You Connect through SSL
	
	  Q265847 Error Message: The Page Cannot Be Displayed . . . Cannot Find Server
	  or DNS Error
	
	
	REFERENCES
	==========
	
	For additional information about using the Microsoft TCP/IP Tracert and Telnet
	utilities, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q162326 Using TRACERT to Troubleshoot TCP/IP Problems in Windows NT
	
	  Q314868 Using TRACERT to Troubleshoot TCP/IP Problems in Windows XP
	
	  Q217014 Description of the Ping and Tracert Tools
	
	  Q279466 How to Request a Web Page Through a Telnet Client
	
	For additional information about SSL browsing failures on a Web server, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q260096 Page Cannot Be Displayed When You Connect through SSL
	
	Additional query words: iis 5 the page cannot be displayed server ssl certificate
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis510
	Version           : :3.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
