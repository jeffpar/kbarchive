---
layout: page
title: "Q254717: XADM: Event 1171: Exception e0010002 Has Occurred..."
permalink: /kb/254/Q254717/
---

## Q254717: XADM: Event 1171: Exception e0010002 Has Occurred...

	Article: Q254717
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server 5.5 directory may log the following event in the application
	event log:
	
	  Event ID: 1171
	  Source: MSExchangeDS
	  Description: Exception e0010002 has occurred with parameters 9 and 9 (internal
	  ID 3050444). Contact Microsoft Technical Support for assistance.
	
	
	CAUSE
	=====
	
	This problem can occur if the directory attempts to deliver a message that
	contains directory replication data to an adjacent intersite bridgehead server.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.5 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Directory
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Emsmdb32.dll | 5.5.2652.60 | 
	+----------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	
	Additional query words: dsa
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
