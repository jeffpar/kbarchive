---
layout: page
title: "Q244253: XFOR: No Mail Flow from GroupWise to Exchange - Event ID 6087"
permalink: /kb/244/Q244253/
---

## Q244253: XFOR: No Mail Flow from GroupWise to Exchange - Event ID 6087

{% raw %}

	Article: Q244253
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There is no mail flow from Novell GroupWise to Microsoft Exchange Server.
	Although messages are not successfully sent from GroupWise, directory
	synchronization between Exchange Server and GroupWise works. The following error
	appears in the Exchange Server computer's application event log:
	
	  Event ID: 6087
	  Source: MSExchangeGWRtr
	  Description:
	  Error: No message type can be found in the header file.
	
	On the GroupWise server, the corresponding error is in the GroupWise API
	gateway's log:
	
	  10-15-99 09:57:27 Processing outbound message...
	  10-15-99 09:57:28 Error getting information from the GroupWise message
	  10-15-99 09:57:28 Info - No active recipients
	
	CAUSE
	=====
	
	This problem is caused by a damaged Foreign domain document for Exchange Server
	in the GroupWise post office.
	
	RESOLUTION
	==========
	
	To resolve this problem, in the GroupWise Administrator program:
	
	1. In the Link Configuration utility, unlink the existing External Foreign
	  domain for Exchange Server.
	
	2. Delete the existing External Foreign domain for Exchange Server.
	
	3. Recreate a new External Foreign domain for Exchange Server.
	
	4. Run the Link Configuration utility, and link the External Foreign domain for
	  Exchange Server to the API gateway.
	
	5. Run directory synchronization between Exchange Server and GroupWise again.
	
	NOTE: For more information about creating External Foreign domains and
	configuring the link tables, refer to the documentation included with the
	Exchange Connector for Novell GroupWise.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q222550 XFOR: Mail Doesn't Flow from GroupWise to Exchange Server
	
	You can also connect to Novell's support Knowledgebase at the following Web site
	and search for document 2937080:
	
	  http://support.novell.com
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: gwise, sp3, ims, dirsync
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
