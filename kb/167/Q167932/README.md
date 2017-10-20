---
layout: page
title: "Q167932: FP: General Information About Using &quot;Localhost&quot; as Server Name"
permalink: /kb/167/Q167932/
---

## Q167932: FP: General Information About Using &quot;Localhost&quot; as Server Name

{% raw %}

	Article: Q167932
	Product(s): Word Front Page
	Version(s): WINDOWS:1.1
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q208624.
	
	For a Microsoft FrontPage 98 version of this article, see Q194214.
	
	SUMMARY
	=======
	
	Microsoft FrontPage defaults to using the Domain Name System (DNS) in TCP/IP
	networking to identify a computer. If DNS is not active but it is bound to both
	TCP/IP and the Client for Microsoft Networks, FrontPage uses the information on
	the Identification tab in the Network Neighborhood Properties dialog box. If the
	Computer Name and Domain boxes are empty, FrontPage uses whatever the TCP/IP
	stack returns.
	
	If your system is not configured properly, "Default" will be used as the server
	name. If FrontPage does not recognize the host name for your computer, you can
	use "localhost" (without the quotation marks) in place of the original host
	name.
	
	MORE INFORMATION
	================
	
	Run the FrontPage TCP/IP test to verify the host name and IP address for your
	computer.
	
	NOTE: The test should indicate that your computer is identified using the name
	"Localhost" and that the IP address is 127.0.0.1. To run the TCP/IP test, follow
	these steps:
	
	FrontPage 97
	------------
	
	1. In Windows Explorer, double-click Tcptest.exe. This file is installed in the
	  following folder by default:
	
	  C:\Program Files\Microsoft FrontPage\bin
	
	2. Click Start Test.
	
	FrontPage 1.1
	-------------
	
	1. On the Start menu, point to Programs, and click Microsoft FrontPage.
	
	2. Click FrontPage TCP_IP Test.
	
	3. Click Start Test.
	
	If the test is successful, Yes appears in all of the boxes. If No appears in any
	of the boxes, then you either do not have full network connectivity, or you do
	not have a valid TCP/IP configuration.
	
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : WINDOWS:1.1
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
