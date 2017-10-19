---
layout: page
title: "Q146811: XADM: Canceling Directory Import Operation Causes STOP Event"
permalink: /kb/146/Q146811/
---

## Q146811: XADM: Canceling Directory Import Operation Causes STOP Event

	Article: Q146811
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you press the Cancel button during a Directory Import procedure in the
	Microsoft Exchange Administrator program, the following STOP error will be
	generated:
	
	  STOP: The directory import from file c:\path\file.csv was canceled by user
	  request.
	
	  One warning event was encountered but not logged.
	
	
	MORE INFORMATION
	================
	
	This is actually only a warning message. It should not appear as a STOP
	condition because this behavior is expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
