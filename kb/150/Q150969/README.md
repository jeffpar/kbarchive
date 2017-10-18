---
layout: page
title: "Q150969: XFOR: All Messages Sent Over IMC Result in NDRs"
permalink: kb/150/Q150969/
---

## Q150969: XFOR: All Messages Sent Over IMC Result in NDRs

	Article: Q150969
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 26-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Microsoft Exchange Internet Mail Connector (IMC) to send SMTP
	mail the IMC may try to send messages to itself. When this happens, users will
	receive non-delivery reports (NDRs).
	
	MORE INFORMATION
	================
	
	The following is an NDR that a user might receive:
	
	  FROM: System Administrator [postmaster@Org.Site.Com]
	  DATE: Monday, May 13, 1996 9:29 AM
	  TO: Test User
	  SUBJECT: Undeliverable:
	
	  Your message did not reach some or all of the intended recipients.
	
	  To: user@microsoft.com
	  Subject: Subject of message
	  Sent: 5/13/96 9:29:16 AM
	
	  The following recipients(s) could not be reached:
	
	  user@microsoft.com on 5/13/96 9:29:16 AM
	  Recipient Not Found
	  [MSEXCH:IMC:Organization:Site:SERVER]
	
	This problem occurs if the IMC is using DNS for the host name resolution. When
	the IMC attempts to resolve a host, it will attempt to query the DNS server for
	the host's IP address. If a site uses an MX wildcard record, it will direct all
	mail to that site. This could mean that the IMC will try to send mail to it's
	own IP address. The following scenario could help explain this:
	
	The computer running the IMC is located in the a.com domain and there's an MX
	wildcard record of *.a.com in the DNS.
	
	The IMC will add a.com to any address except ones ending in a.com. Any address
	that ends in a.com will use the address expressed through the MX wildcard
	record.
	
	Since every address the Microsoft Exchange Message Transfer Agent (MTA) tries to
	resolve will end in a.com, all mail will go to the same Microsoft Exchange
	Server. This may be the Microsoft Exchange Server that the IMC is running on.
	
	RESOLUTION
	==========
	
	If you are experiencing this problem with the IMC, you can add a registry value
	to prevent it. The registry key is:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\ 
	  Services\MSExchangeIMC\PARAMETERS
	
	From the Registry Editor menu, click on Edit, then the Add Value option from
	there.
	
	  Value Name: DisableResolverSearchList
	  Data Type: REG_DWORD
	  Value: 1 (or any non-zero value)
	
	This is case sensitive and should be typed exactly as show above. You will need
	to restart the IMC for the registry key to take effect. Then you can use
	Restest.exe to see if it worked. This utility can be found on the Microsoft
	Exchange Server CD-ROM in the Support\Utils\I386 directory.
	
	
	Additional query words: loop looping resolve
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
