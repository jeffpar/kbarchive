---
layout: page
title: "Q177673: XADM: Incoming PF Replication Message Causes Events in App Log"
permalink: /kb/177/Q177673/
---

## Q177673: XADM: Incoming PF Replication Message Causes Events in App Log

{% raw %}

	Article: Q177673
	Product(s): Microsoft Exchange
	Version(s): Windows:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	When an Exchange Server participating in Public Folder replication receives an
	incoming replication message, the following errors may be written in the
	application event log:
	
	 Event ID: 3027
	  Source: MSExchangeIS
	  Type: Informational
	  Description: An incoming replication message was processed.
	
	  Type: 0x10
	  Message ID: 1-24687
	  Folder(s): (44-64981) IPM_SUBTREE\<PublicFolder>\<Subfolder>
	
	  Server: /O=<org name>/OU=<site name>/CN=CONFIGURATION
	  /CN=SERVERS/CN=<server name>/CN=MICROSOFT PUBLIC MDB
	
	  Event ID: 3089
	  Source: MSExchangeIS
	  Type: Warning
	  Description: Error 0x80004005 occurred while processing an
	  incoming replication message.
	
	  Event ID: 3079
	  Source: MSExchangeIS
	  Type: Error
	  Description: Unexpected replication thread error 0x80004005.
	
	  EcLoadBinary
	  EcCmpPropCnsetSeen
	  EcUnpackStatus
	  EcReplMessageUnpack
	  FReplRcvAgent
	
	
	CAUSE
	=====
	
	Each public information store periodically constructs a status message to send
	to other public information stores with which it is participating in public
	folder replication. This status message is sent when replica changes are sent by
	any public folder. If an information store does not send any changes, this
	process will occur once per day.
	
	RESOLUTION
	==========
	
	The events stem from the source server, not the server receiving the incoming
	public folder replication message. No action is required because they are
	harmless.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : Windows:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
