---
layout: page
title: "Q302394: XADM: NDR Sending E-Mail to Public Folder in Mixed Environment"
permalink: /kb/302/Q302394/
---

## Q302394: XADM: NDR Sending E-Mail to Public Folder in Mixed Environment

	Article: Q302394
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange 2000 Enterprise Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send e-mail to a public folder in a mixed Exchange Server
	environment (Exchange 2000 Server and Exchange Server 5.5), a non-delivery
	report (NDR) occurs on the Exchange Server 5.5 computer. The following events
	are issued by the Exchange Server 5.5 computer that receives the e-mail
	message:
	
	  Event Type: Information
	  Event Source: MSExchangeMTA
	  Event Category: X.400 Service
	  Event ID: 270
	  Description:
	  A permanent error has occurred with Entity
	  /O=ORG/OU=SITE/CN=CONFIGURATION/CN=SERVERS/CN=SERVER_NAME/CN=MICROSOFT PUBLIC
	  MDB. Entity is a Message Object is a Normal Priority Message.
	  Object: #######. Message ID: C=us;A= ;P=Company;L=Server_Name###### Content
	  length: ####, External Trace information (first ### bytes) = ##### PDU dump
	  reference ###
	
	  Event Type: Warning
	  Event Source: MSExchangeMTA
	  Event Category: X.400 Service
	  Event ID: 290
	  Description:
	  A non-delivery report (reason code transfer-failure and diagnostic code Omit
	  any diagnostic code) is being generated for message C=us;A=
	  ;P=ORG;L=Server_Name#####. It was originally destined for DN:<DN of public
	  folder>; (recipient number #), and was to be redirected to.
	
	CAUSE
	=====
	
	This behavior occurs if both of the following conditions are true:
	
	- No Exchange 2000 Server computers in the Routing or Admin group have a public
	  folder store for the Messaging Application Programming Interface (MAPI)
	  Public Folder tree.
	
	  -and-
	
	- No Exchange Server 5.5 computers in the Routing or Admin group have replicas
	  of the folder being e-mailed.
	
	If the Exchange Server 5.5 information store receives the e-mail and cannot
	"reach" a replica of the e-mailed folder, it issues an error message to the
	message transfer agent (MTA). The MTA then issues an NDR.
	
	RESOLUTION
	==========
	
	To resolve this issue, use any of the following methods:
	
	- Add a MAPI public folder store to the Exchange 2000 Server computer in the
	  Routing group or Admin group.
	
	  -or-
	
	- Add a replica of the folder in question to an Exchange Server 5.5 computer in
	  that site.
	
	  -or-
	
	- Set up an affinity from the Exchange Server 5.5 site to an Exchange Server
	  5.5 site that contains a replica of the e-mailed public folder.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000EntServ
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
