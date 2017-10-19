---
layout: page
title: "Q295658: XADM: Directory Service Does Not Start with Event ID 1171"
permalink: /kb/295/Q295658/
---

## Q295658: XADM: Directory Service Does Not Start with Event ID 1171

	Article: Q295658
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server directory service may not start, and the following error
	message may be logged in the Application event log:
	
	  Event ID: 1171
	  Source: MSExchangeDS
	  Type: Error
	  Category: Internal Processing
	
	  Description:
	  Exception e0010002 has occurred with parameters 9 and 2 (internal ID
	  30c043f).
	  Contact Microsoft Technical Support for assistance.
	
	CAUSE
	=====
	
	This problem can occur if the buffer length is miscalculated and used in a
	search for duplicate server names. If server names are sufficiently similar (for
	example, server1, server2, and server3), they may interpreted as the same name
	because the comparison may not use the entire string in the comparison.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.5 service pack that contains this fix.
	
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
	
	+---------------------------+
	| File name   | Version     | 
	+---------------------------+
	| Dsamain.exe | 5.5.2655.18 | 
	+---------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP4
	Version           : :5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
