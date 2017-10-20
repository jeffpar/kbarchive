---
layout: page
title: "Q178365: XCON: Exchange Logs Content Conversion Error 4096 or 4097"
permalink: /kb/178/Q178365/
---

## Q178365: XCON: Exchange Logs Content Conversion Error 4096 or 4097

{% raw %}

	Article: Q178365
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server 4.0 may log Event 210, content conversion error. The
	error code in the event is 4096 or 4097:
	
	  Message NMI0210: X.400 Service Event, severity 14
	
	  Content conversion failed
	  Object at fault 06000050
	  Conversion error 4096 (or 4097)
	  MTS Identifier C=DE;A=TEST;P=PSSTEST;L=0039400001003278000002
	  Old content type 2A864886F7140501
	  New content type 56010A01
	
	This affects messages sent to and from the Microsoft Exchange Server computer.
	After you restart the server or the MTA service, the exact messages is delivered
	fine. The issue usually occurs when the server is under high load. After you
	restart the server or the MTA service, the server will deliver messages fine for
	several hours or days, depending on the load. There is nothing wrong with the
	messages itself.
	
	CAUSE
	=====
	
	The MTA service is very busy while performing content conversion code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
