---
layout: page
title: "Q178821: XCON: Content Conversion Failure 4096"
permalink: /kb/178/Q178821/
---

## Q178821: XCON: Content Conversion Failure 4096

	Article: Q178821
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An X.400 message arriving at a Microsoft Exchange Server computer message
	transfer agent (MTA) from a non-Exchange MTA is rejected. The sender receives a
	non-delivery report similar to the following:
	
	  From:    System Administrator
	  Sent:    <date>
	  To:   <original sender>
	  Subject:    Non Delivery Report
	
	  Your Message
	
	     To:      <recipient>
	     Subject: <Subject of message>
	
	  Was not delivered for the following reasons:
	
	   Delivery failed to X400:C=c;A=admd;P=prmd;O=org;S=surname;G=givenname;.
	   Reason: 1 (transfer impossible)
	   diagnostic:  15 (unsupported content type).
	   MSEXCH:MSExchangeMTA:<MTA Name>.
	
	The following Event appears in the Event Log:
	
	  9/12/97  1:44:17 PM  MSExchangeMTA  Warning  X.400 Service  210   N/A
	<MTA Name>  An internal MTA error occurred. Content conversion for
	  message C=C;A=admd;P=prmd;L=<ID> failed. Conversion error: 4096, Object
	  at fault: 0600006C, Original content type: 56010A01, New content type:
	  2A864886F7140501. PDU dump reference 23224 [MTA DISP:RESULT 22 112] (14)
	
	CAUSE
	=====
	
	The incoming message has a Transport-Neutral Encapsulated Format (TNEF) body
	part (usually called Winmail.dat) in which the named properties for subject are
	missing.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.0.
	
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: bodypart
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
