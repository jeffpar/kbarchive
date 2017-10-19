---
layout: page
title: "Q157632: XADM: Client Hangs or Prompts for Domain Credentials"
permalink: /kb/157/Q157632/
---

## Q157632: XADM: Client Hangs or Prompts for Domain Credentials

	Article: Q157632
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to start the Microsoft Exchange client, the client may
	temporarily stop responding or you may be prompted multiple times for domain
	credentials. These credentials are for the domain where the Microsoft Exchange
	site that owns the Organization Forms folder is located (for example, let's call
	it Site B). The domain credentials dialog box also appears when you attempt to
	open a read receipt, delivery receipt, or non- delivery report (NDR). (For a
	more complete description of the symptoms, see the More Information section
	below.) This behavior is by design. When the client logs on to Site A, there is
	an attempt to locate a forms library and to bind to it if it exists within the
	Microsoft Exchange Organization. If the only instance of the Forms Library
	exists in Site B and affinity is set, the Microsoft Exchange client attempts to
	connect to a server (containing the Forms Library) in Site B.
	
	NOTE: If no Organization Forms folder instances are available in the Site, but
	there is at least one Site available with instances, the affinity to the Sites
	is used to rank the order in which connections to the Sites will be attempted.
	The affinity is set on the site Public Folder Affinity page. Clients must have
	RPC connectivity to the servers in the affinity sites. Otherwise, the clients
	will not be able to access the Public Folders in the other sites, even though
	the affinity has been correctly set, thus causing possible client slowdown. Do
	one of the following:
	
	- Remove the affinity to the site that owns the Organization Forms folder (Site
	  B).
	
	  -or-
	
	- Create a local site instance of the Organization Forms folder by replicating
	  the folder from Site B to Site A.
	
	If an Organizations Forms folder is created within the organization, it is
	recommended this folder is replicated to Sites that may not have a physical
	connection (ie dial up connection) or are connected via slow link to the
	Organization Forms folders Home Site. For more information, refer to the
	following articles in the Microsoft Knowledge Base:
	
	  Q152958 Organizational Forms Unavailable to Other Servers in Site
	
	  Q154941 How to Determine Which Public Folder Replica is Used
	
	
	MORE INFORMATION
	================
	
	You will be prompted for domain credentials when all of the following conditions
	are met:
	
	- An Organization Forms Folder has been created.
	
	- A Public Folder Affinity has been established between the sites.
	
	- No local instance of the Organization Forms folder exists.
	
	The symptoms of this problem may include:
	
	- Microsoft Exchange clients in Site A are slow when attempting to open a read
	  receipt, delivery receipt, or non-delivery report but Microsoft Exchange
	  clients in Site B open them at normal speed.
	
	- When affinity is set to Site B, but the Microsoft Exchange client in Site A
	  has no physical LAN connection to servers in Site B, Microsoft Exchange
	  clients in Site A and Site B are slow when attempting to open a read receipt,
	  delivery receipt, or non-delivery report.
	
	- When the server containing the only instance of the Organization Forms folder
	  is not available. Microsoft Exchange clients in Site A are prompted for
	  Domain credentials but Microsoft Exchange clients in Site B are not prompted.
	
	- When a trust does not exist between Site A Windows NT Domain and Site B
	  Windows NT Domain, the following symptom occurs. When a Site A client
	  attempts to access the Organization Forms folder on a server in Site B, it is
	  prompted for domain credentials for a valid Windows NT account in Site B.
	
	Additional query words: hang receipts exclnfaqold prompt
	
	======================================================================
	Keywords          : kbusage exc4 exc55 
	Technology        : kbExchangeSearch kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.5
	
	=============================================================================
	
