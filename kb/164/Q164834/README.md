---
layout: page
title: "Q164834: XADM: Empty Notification-Requests Bitstring Causes Error"
permalink: /kb/164/Q164834/
---

## Q164834: XADM: Empty Notification-Requests Bitstring Causes Error

{% raw %}

	Article: Q164834
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The Microsoft Exchange MTA fails to handle a legal encoding of the P2 field
	notification-requests. The content conversion process from P2 to MDBEF fails and
	a non-delivery report (NDR) is generated.
	
	You may see the following Event IDs:
	
	  message NMI0210: X.400 Service Event, severity 14
	
	  (MTA DISP:FANOUT(15) Proc 112) 10-30-96 02:04:35pm
	  Content conversion failed
	  Object at fault 06000046
	  Conversion error 26
	  MTS Identifier C=AT;A=ADA;L=1905031430101996/A33827/ADA1
	  Old content type 56010A00
	  New content type 2A864886F7140501
	
	  message NMI0062: X.400 Service Event, severity 12
	
	  (MTA DISP:FANOUT(15) Proc 112) 10-30-96 02:04:35pm
	  Delivery failure
	  X.400 reason code unable-to-transfer
	  X.400 diagnostic code content-type-not-supported
	  Internal qualifier 0
	  MTS Identifier C=AT;A=ADA;L=1905031430101996/A33827/ADA1
	
	  message NMI0290: X.400 Service Event, severity 12
	
	  (MTA DISP:RESULT(20) Proc 136) 10-30-96 02:04:36pm
	  Generating Non-Delivery report
	  Reason code unable-to-transfer
	  Diagnostic code content-type-not-supported
	  Recipient Number 1
	  Original recipient C=AT;A=ADA;P=282;S=POSTMASTER;
	  Reassigned to DN:/o=rac/ou=mbm-
	  1/cn=Recipients/cn=p[ASCII 167]C=AT;A=ADA;P=282;S=POSTMASTER;
	  Original MTS identifier
	  C=AT;A=ADA;L=1905031430101996/A33827/ADA1
	
	CAUSE
	=====
	
	What is happening conforms to X.400 specifications, but the Microsoft Exchange
	MTA mishandles an element.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
