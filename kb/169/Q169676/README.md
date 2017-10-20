---
layout: page
title: "Q169676: XCON: DirRep Messages NDR Due to Connector Restrictions"
permalink: /kb/169/Q169676/
---

## Q169676: XCON: DirRep Messages NDR Due to Connector Restrictions

{% raw %}

	Article: Q169676
	Product(s): Microsoft Exchange
	Version(s): 5.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When attempting to submit Directory Replication (DSA) messages between Microsoft
	Exchange Sites where a delivery restriction (limiting size or
	accepting/rejecting messages from specific sender addresses) is configured for
	the connector, DSA messages may be rejected with the following Event ID in the
	Windows NT Event Viewer Application log:
	
	  MSExchangeMTA
	  Event ID: 290
	  A non-delivery report (reason code restricted-delivery and diagnostic
	  code Omit any diagnostic code) is being generated for message.
	
	CAUSE
	=====
	
	Microsoft Exchange Server version 5.0 applies any configured connector
	restrictions to system messages such as DSA and Public Folder Replication
	messages. System messages such as those described should be exempt from any
	existing delivery restrictions which may exist for a configured connector.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
