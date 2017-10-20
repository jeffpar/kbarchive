---
layout: page
title: "Q152344: XCLN: Winsock Application Starts When Exchange Client Starts"
permalink: /kb/152/Q152344/
---

## Q152344: XCLN: Winsock Application Starts When Exchange Client Starts

{% raw %}

	Article: Q152344
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 30-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a Microsoft Exchange client for Windows 3.x on a computer that
	is running both the IPX/SPX and TCP/IP network protocols, even if you configure
	the Microsoft Exchange client to use just the IPX/SPX protocol, when you start
	the Microsoft Exchange client, it will make a call to Winsock.dll. This might
	cause a Winsock application to attempt to dial the modem that it is configured
	to use.
	
	
	RESOLUTION
	==========
	
	You can also remove the winsock application from the path statement.
	
	MORE INFORMATION
	================
	
	Removing TCP/IP from the binding order will not resolve this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients
	listed at the beginning of this article. This problem was corrected in Microsoft
	Exchange Server 4.0 U.S. Service Pack 2. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	If SP2 does not seem to fix this issue, you may need to add the following line to
	the MAPISVC.INF file to disable Winsock:
	
	  [MSEMS_MSMail_Section]
	  66180003=01000000
	
	To disable both Winsock and the IPX protocol, use this line:
	
	  [MSEMS_MSMail_Section]
	  66180003=03000000
	
	Once you add either of these lines, you will need to create a new profile with
	the original profile's settings.
	
	Additional query words: tcp tcpip ip sockets autodial faq proxy exclnfaq
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
