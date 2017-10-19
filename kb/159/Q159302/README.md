---
layout: page
title: "Q159302: XCLN: Exchange Server Push Notifications Generate ICMP Messages"
permalink: /kb/159/Q159302/
---

## Q159302: XCLN: Exchange Server Push Notifications Generate ICMP Messages

	Article: Q159302
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Macintosh client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange clients that use TCP/IP may generate ICMP "Destination
	Unreachable, Port Unreachable" error messages in response to push notifications
	from the Exchange Server computer. These messages are considered normal. A
	network analyzer tool, such as Microsoft's Network Monitor or Network General's
	Sniffer, is required to see these errors.
	
	MORE INFORMATION
	================
	
	The Exchange Server computer sends push notifications using datagrams (UDP) to
	notify Exchange clients of changes in the Inbox, such as the arrival of new
	mail. After a change occurs in the Inbox, the Exchange Server computer sends the
	datagrams every 60 seconds. The Exchange Server computer stops sending the push
	notifications when the Exchange client retrieves the new mail.
	
	If the Exchange client is rebooted without logging out of Exchange, The Exchange
	Server computer continues sending push notifications because it has no immediate
	way of knowing that the TCP/IP session is broken and that the client is no
	longer online. These push notifications are sent to a port where the Exchange
	client is no longer connected, and in turn generate ICMP "Destination
	Unreachable, Port Unreachable" responses from the Exchange client. The push
	notifications continue until the TCP/IP session on the Exchange Server computer
	terminates due to no response. The push notifications do not affect the
	notification of new mail for subsequent Exchange logons by the same client.
	
	TCP/IP uses some registry entries to define how long to allow an inactive session
	to continue. Default time is two hours, which is configurable. Modifying the
	KeepAlive time is not recommended.
	
	For more information on how the TCP/IP KeepAlive registry entry works, please see
	the following Microsoft Knowledge Base article:
	
	  Q102973 REG: TCP/IP Transport Entries, PART 1
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange400Mac kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
