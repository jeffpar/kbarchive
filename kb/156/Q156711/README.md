---
layout: page
title: "Q156711: XCLN: Exchange Win95 Client with DNS Polls for New Mail"
permalink: /kb/156/Q156711/
---

## Q156711: XCLN: Exchange Win95 Client with DNS Polls for New Mail

{% raw %}

	Article: Q156711
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork exc4
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure a Microsoft Exchange Windows 95 client to use Domain Name
	Service (DNS), it will typically poll for new messages every 60 seconds rather
	than use push notification in which the Microsoft Exchange Server notifies the
	Microsoft Exchange client that new message(s) have arrived.
	
	CAUSE
	=====
	
	During Microsoft Exchange client initialization, it attempts to determine if any
	network cards are available that use the IPX or TCP/IP network protocols. These
	protocols can be used by the Microsoft Exchange Server to send push
	notifications to Microsoft Exchange clients informing them of new mail
	delivery.
	
	When this protocol detection mechanism succeeds, the Microsoft Exchange Server
	sends push notifications (via network datagrams) directly to the Microsoft
	Exchange client. These datagrams instruct the client to poll for new mail (which
	has just arrived). Typically, in the absence of new mail messages, an idle
	Microsoft Exchange client communicates with the Microsoft Exchange Server once
	an hour to ensure that communication with the server is still operational.
	
	When this protocol detection mechanism fails to detect the presence of IPX or
	TCP/IP, the Microsoft Exchange client will resort to polling for new mail every
	60 seconds.
	
	The protocol detection mechanism for TCP/IP uses a call to gethostname() that
	returns the host name for the local computer.
	
	Remarks in the Win32 Software Development Kit (SDK) about gethostname() state:
	
	  This routine returns the name of the local host into the buffer specified by
	  the name parameter. The host name is returned as a null- terminated string.
	  The form of the host name is dependent on the Windows Sockets provider -- it
	  may be a simple host name, or it may be a fully qualified domain name.
	
	If gethostname() is called on a computer that has DNS disabled, the returned
	value will simply be the computer name. If the computer has DNS enabled, the
	host name itself can be specified (and it could be different than the computer
	name) and a domain name suffix can be specified (something like org.com) which
	is added to the host name when forming a fully qualified domain name for the
	host.
	
	An example of a simple host name is comp01. An example of a fully qualified
	domain name is comp01.org.com
	
	In the case of the Microsoft Exchange client, the buffer provided to this call is
	sized at 15 characters, the maximum size of a NetBIOS computer name. When
	Windows NT calls gethostname(), it always returns a simple host name that is
	typically the same as the NetBIOS computer name and it will fit within the
	buffer provided. On Windows 95, a call to gethostname() returns the fully
	qualified domain name that typically exceeds the buffer length.
	
	WORKAROUND
	==========
	
	Disable DNS on Windows 95, or remove the domain name suffix entry from the
	Windows 95 TCP/IP properties DNS configuration property page, and ensure that
	the host name specified is 15 characters or less in length.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: Hostname DNS Polling Pushing Push Poll RPC MSRPC Notification
	
	======================================================================
	Keywords          : kbnetwork exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
