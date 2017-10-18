---
layout: page
title: "Q316629: XADM: 0xFFFFFC0B After Installing Sybari Antigen 6.2"
permalink: kb/316/Q316629/
---

## Q316629: XADM: 0xFFFFFC0B After Installing Sybari Antigen 6.2

	Article: Q316629
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Sybari Antigen version 6.2 for Microsoft Exchange Server, you
	may see any of the following events in the Application event log of Exchange
	Server version 5.5:
	
	  -1013 0xFFFFFC0B JET_errOutOfCursors Out of table cursors 4294966283
	
	  Database resource failure error 0xfffffc0b occurred in function
	  JTAB_BASE::EcConfig while accessing the database.
	
	  Database resource failure error 0xfffffc0b occurred in function
	  JTAB_BASE::EcUpdate while accessing the database.
	
	  Database resource failure error 0xfffffc0b occurred in function
	  JTAB_BASE::EcSetCurrentIndex while accessing the database.
	
	  Database resource failure error 0xfffffc0b occurred in function
	  JTAB_BASE::EcSetCurrentIndex while accessing the database.
	
	  Unexpected replication thread error 0xfffffc0b. EcReplSendMessages
	  EcReplSendMessagesAlways FReplAgent
	
	  The delivery of a message failed due to error FFFFFC0B. A non-delivery report
	  is being sent to the message's originator.
	
	  Database resource failure error 0xfffffc0b occurred in function
	  JTAB_BASE::EcRetrieveColumns while accessing the database.
	
	CAUSE
	=====
	
	This issue may occur if you use a build of Sybari Antigen version 6.2 dated on
	or before August 21, 2001 (builds 837 and 838).
	
	RESOLUTION
	==========
	
	To resolve this issue, remove Sybari Antigen version 6.2 from the computer that
	is running Exchange Server 5.5, and then install the latest version of the
	software.
	
	1. In Control Panel, use the Add/Remove Programs tool to remove Antigen.
	
	2. Delete the Sybari Software installation folder.
	
	3. Download and then install the latest version of Sybari Antigen. To do this,
	  visit the following Sybari Web site:
	
	http://www.sybari.com
	
	MORE INFORMATION
	================
	
	For more information about this issue, contact Sybari technical support at (631)
	630-8500.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	For additional information about how Sybari Antigen Software Interacts with
	Exchange Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q250500 XADM: Understanding How Sybari Antigen Software Interacts with
	  Exchange Server
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
