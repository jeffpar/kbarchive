---
layout: page
title: "Q178620: XCLN: Client Profile Update Doesn't Update DNS FQDN"
permalink: /kb/178/Q178620/
---

## Q178620: XCLN: Client Profile Update Doesn't Update DNS FQDN

	Article: Q178620
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 5.0, 5.5 
	- Microsoft Exchange Windows NT client, versions 5.0, 5.5 
	- Microsoft Exchange Windows 95/98 client, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After a mailbox is moved between two servers in the same Exchange site, and the
	client profile is updated properly by the original Exchange Server computer,
	Exchange Client cannot connect to the new server using the Domain Name Service
	(DNS) fully qualified domain name (FQDN) of the new Exchange Server computer
	when the original server is offline.
	
	CAUSE
	=====
	
	After a mailbox is moved successfully between two Exchange Server computers in
	the same site, the Exchange Client connects to the original server and, at that
	time, the client profile is updated properly. After the client profile is
	updated, any subsequent logon to the mailbox does not require the original
	server.
	
	During the profile update, several registry keys are updated. One of these
	registry keys holds the FQDN for the new server. However, this key does not get
	updated during the client profile update. As a result, a user cannot access the
	mailbox if DNS is the only name resolution mechanism and if the original server
	is offline.
	
	WORKAROUND
	==========
	
	You can work around this problem by manually updating the profile by performing
	checkname:
	
	1. Click the Mail and Fax icon in Control Panel.
	
	2. Select Microsoft Exchange Server.
	
	3. Click the Check Names button.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange version 5.0. This
	problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The key below holds the profile information for an Exchange Client:
	
	  HKEY_USERS\<SID>\Software\Microsoft\Windows NT\CurrentVersion\Windows
	  Messaging Subsystem\Profiles\<Profile
	  Name>\13dbb0c8aa05101a9bb000aa002fc45a
	
	The following values are used to store the server name:
	
	001e6602 stores the NetBIOS computer name where the mailbox is located and is
	updated correctly when the mailbox is moved.
	
	001e6608 stores the TCP/IP address, the NetBIOS computer name, or the DNS FQDN
	used to create the initial profile. It is not updated when the mailbox is moved
	or profile checkname is performed.
	
	101e6613 stores network names according to MSRPC binding names (obtained from
	network address attributes on server objects in DSA). It is not updated when the
	mailbox is moved but is updated when profile checkname is performed manually.
	
	The value 101e6613 is the one that needs to be updated to make sure that the FQDN
	for the new server gets updated in the profile.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT kbExchange500Win95
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
