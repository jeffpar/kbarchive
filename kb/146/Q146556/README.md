---
layout: page
title: "Q146556: XFOR: Method Used by IMS to Obtain IP Address"
permalink: /kb/146/Q146556/
---

## Q146556: XFOR: Method Used by IMS to Obtain IP Address

	Article: Q146556
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbnetwork kbusage
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the method that the Internet Mail Service uses to obtain
	the IP address of the recipient's server when the Internet Mail Service is
	configured to deliver messages using DNS.
	
	MORE INFORMATION
	================
	
	When the Internet Mail Service is configured to deliver messages using DNS, it
	uses the following method to obtain the IP address of the recipient's server:
	
	1. The Internet Mail Service queries the appropriate DNS server for mail
	  exchanger (MX) records.
	
	2. If the Internet Mail Service is unable to obtain the IP address by querying
	  the DNS server, it requests the following information from the Windows NT
	  server:
	
	   - Address (A) records
	
	   - Alias (CNAME) records
	
	   - WINS servers
	
	   - LMHOSTS file
	
	For information about problems that can arise when you attempt to establish
	TCP/IP connections using DNS, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q163391 Troubleshooting Problems Communicating on the Internet
	
	  Q169790 How to Troubleshoot Basic TCP/IP Problems in Windows NT 4.0
	
	
	Additional query words: internet mail connector imc resolution
	
	======================================================================
	Keywords          : kbnetwork kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	
	=============================================================================
	
