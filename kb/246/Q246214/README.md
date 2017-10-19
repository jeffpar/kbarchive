---
layout: page
title: "Q246214: XADM: Directory Logging 1349 GUID Changed Events When RPC Errors"
permalink: /kb/246/Q246214/
---

## Q246214: XADM: Directory Logging 1349 GUID Changed Events When RPC Errors

	Article: Q246214
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Servers incorrectly log the following event in the event log:
	
	  Event ID: 1349 Source: MSExchangeDS
	  Category: Replication
	  Type: warning
	  Description:
	  The GUID on server (Server Name) has changed from
	  a86a49730326d3118fb80000f806a267 (Server Name) to
	  0a964fd8e0d7d2118faf0000f806a267 (Server Name). This causes all replicas to
	  be resynced from scratch.
	
	CAUSE
	=====
	
	When there are a lot of changes to be replicated, it may take multiple calls to
	transfer the data between the servers. If during the multiple calls there is a
	remote procedure call (RPC) error, the global universal identification (GUID) on
	the REPS-FROM for the calling server is reset to the invocation ID of the local
	server. The next replication cycle detects the GUID change and logs the 1349
	error. This logic error causes unnecessary naming context resynchronizations.
	Naming context resynchronizations in a large Exchange Server environment can
	cause performance degradation.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	Not all 1349 errors in the event log are a issue. If the server is re-installed,
	it gets a new GUID and this should be expected behavior. There is a way to make
	sure that a server has the exact symptom described in the "Symptoms" section. In
	the 1349 event ID, the GUIDs are logged. With this information, you can check to
	see if the first GUID is the same as the invocation-id attribute on the
	directory object. If the first GUID is the same as the invocation-id of the
	server reporting the 1349 error, contact Microsoft Support for the fix that
	resolves this issue.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
