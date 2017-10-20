---
layout: page
title: "Q152925: XADM: Schedule Requests not Updated in MS Mail Clients"
permalink: /kb/152/Q152925/
---

## Q152925: XADM: Schedule Requests not Updated in MS Mail Clients

{% raw %}

	Article: Q152925
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Microsoft Exchange client, the client may
	temporarily hang or may be prompted multiple times for domain credentials. These
	credentials are for the domain where the Microsoft Exchange Site that owns the
	Organization Forms folder is located (for example, let's call it Site B). The
	pop-up dialog box also appears when you attempt to open a read receipt, delivery
	receipt, or non-delivery report.
	
	
	CAUSE
	=====
	
	This behavior is by design. When the client logs on to Site A, there is an
	attempt to locate a forms library and to bind to it if it exists within the
	Microsoft Exchange Organization. If the only instance of the Forms Library
	exists in Site B and affinity is set, then the Microsoft Exchange client will
	attempt to connect to a Microsoft Exchange Server (containing the Forms Library)
	in Site B. This may cause the following symptoms:
	
	- Clients in Site A are slow when attempting to open a read receipt, delivery
	  receipt, or non-delivery report but clients in Site B open them at normal
	  speed.
	
	  Affinity is set to Site B, but the client in Site A has no physical LAN
	  connection to Servers in Site B.
	
	- Clients in Site A and Site B are slow when attempting to open a read receipt,
	  delivery receipt, or non-delivery report.
	
	  The Server conatining the only instance of the Organization Forms folder is
	  not available.
	
	- Clients in Site A are prompted for Domain credentials but clients in Site B
	  are not prompted.
	
	  A trust does not exist between Site A NT Domain and Site B NT Domain.
	  Therefore, when a Site A client attempts to access Organization Forms folder
	  on a Server in Site B, it will be prompted for Domain credentials for a valid
	  NT account in Site B.
	
	IMPORTANT - If no Organization Forms folder instances are available in the Site,
	but there is at least one Site available with instances, the Affinity to the
	Sites is used to rank the order in which connections to the Sites will be
	attempted. The affinity is set on the site Public Folder Affinity page. Clients
	must have RPC connectivity to the servers in the Affinity Sites. Otherwise, the
	clients will not be able to access the public folders in the other Sites, even
	though the Affinity has been correctly set. Thus causing possible client slow
	down.
	
	WORKAROUND
	==========
	
	Do one of the following:
	
	- Remove the affinity to the Site that owns the Organization Forms folder (Site
	  B).
	
	  -or-
	
	- Create a local Site instance of the Organization Forms folder by replicating
	  the folder from Site B to Site A.
	
	If an Organizations Forms folder is created within the Organization, it is
	recommended this folder is replicated to Sites that may not have a physical
	connection (ie dial up connection) or are connected via slow link to the
	Organization Forms folders Home Site.
	
	MORE INFORMATION
	================
	
	You will be prompted for domain credentials when all of the following conditions
	are met:
	
	- An Organization Forms Folder has been created.
	
	- A Public Folder Affinity has been established between the sites.
	
	- No local instance of the Organization Forms folder exists.
	
	
	For more information, please refer to the following articles in the Microsoft
	Knowledge Base:
	
	  Q152958 XADM: Organizational Forms Unavailable to Other Servers in Site
	
	  Q154941 XADM: How to Determine Which Public Folder Replica is Used
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
