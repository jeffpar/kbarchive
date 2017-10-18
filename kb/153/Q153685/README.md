---
layout: page
title: "Q153685: FP: FrontPage Appears to Hang When Using Dial-Up-Adapter"
permalink: kb/153/Q153685/
---

## Q153685: FP: FrontPage Appears to Hang When Using Dial-Up-Adapter

	Article: Q153685
	Product(s): Word Front Page
	Version(s): ; WINDOWS:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194237.
	
	SYMPTOMS
	========
	
	If you use a Dial-Up-Adapter to connect to the Internet and you are not
	currently connected, your computer may appear to hang (stop responding) when you
	use FrontPage Explorer or FrontPage TCP/IP Test.
	
	CAUSE
	=====
	
	If you are using DNS for name resolution, any call to the TCP/IP stack attempts
	to resolve to an IP address. If you are not connected to your Internet service
	provider, the DNS server available is not available. The computer attempts to
	wait until a DNS server replies.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	1. Find the Hosts file (located in the C:\Windows\ folder). If it does not
	  exist, rename Hosts.sam to Hosts.
	
	2. Open the Hosts file in a text editor (such as Notepad), and add the following
	  line to the end of the file
	
	  "127.0.0.1 <fqdn>" (without the quotation marks)
	
	  where <fqdn> is the Fully Qualified Domain Name as specified on the DNS
	  Configuration tab of the TCP/IP Properties tab (double-click the Network icon
	  in Windows Control Panel). For example, if the Host is named Example and the
	  Domain is called Microsoft.com, add the following line to the Hosts file:
	
	  "127.0.0.1 example.microsoft.com" (without the quotation marks)
	
	Additional query words: Front Page lock up freeze crash
	
	======================================================================
	Keywords          : kbnetwork kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : :; WINDOWS:1.1
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
