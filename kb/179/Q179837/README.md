---
layout: page
title: "Q179837: XCON: NDR from Malformed Message Not Received"
permalink: /kb/179/Q179837/
---

## Q179837: XCON: NDR from Malformed Message Not Received

	Article: Q179837
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message to an X.400 recipient, or reply to a message sent from
	an X.400 recipient, the message might not be successfully delivered and you
	might not receive a Non-Delivery Report (NDR). This can occur if an organization
	has a second X.400 connector with an overlapping address space and if the
	message cannot be converted to X.400 successfully. The Windows NT Event Viewer
	Application log on the Exchange Server with the X.400 Connector will have events
	logged such as:
	
	  Event 210: X.400 Service Event, severity 14
	  (MTA DISP:FANOUT(12) Proc 112) 01-23-98 10:24:31am
	  Content conversion failed
	  Object at fault     0600002D
	  Conversion error    258
	  MTS Identifier      C=US;A= ;P=LAB;L=LAB_RED-980123152503Z-601
	  Old content type    2A864886F7140501
	  New content type    56010A01
	  PDU dump reference  2
	
	  Event 62: X.400 Service Event, severity 12
	  (MTA DISP:FANOUT(12) Proc 112) 01-23-98 10:24:31am
	  Delivery failure
	  X.400 reason code     unable-to-transfer
	  X.400 diagnostic code content-syntax-error
	  Internal qualifier    0
	  MTS Identifier C=US;A= ;P=LAB;L=LAB_RED-980123152503Z-601
	
	  Event 287: X.400 Service Event, severity 12
	  (MTA DISP:RESULT(17) Proc 436) 01-23-98 10:24:31am
	  Successful rerouting
	  MTS Identifier    C=US;A= ;P=LAB;L=LAB_RED-980123152503Z-601
	  New Connector
	/O=LAB/OU=GREEN2/CN=CONFIGURATION/CN=CONNECTIONS/CN=SITE CONNECTOR (RED)
	  New Target entity
	/O=LAB/OU=RED/CN=CONFIGURATION/CN=SERVERS/CN=LAB_RED/CN=MICROSOFT MTA
	  Old Connector
	/O=LAB/OU=GREEN2/CN=CONFIGURATION/CN=CONNECTIONS/CN=X400 TO BECTOGO
	  Old Target entity
	/O=LAB/OU=GREEN2/CN=CONFIGURATION/CN=CONNECTIONS/CN=X400 TO BECTOGO
	
	Note: The connector names and target entity names will be different for servers.
	
	The Event 287 shows the message is being re-routed to another server that also
	has an X.400 connector on it. Further events will show the message is
	successfully transfered to the server with the second X.400 connector. At this
	point the message is corrupted by the unsuccessful conversion attempt. The
	second server cannot process it, so it logs an event and prevents further
	processing of the message. The event you will see on the second server is:
	
	  Event 200: X.400 Service Event, severity 14
	  (MTA XFER-IN(12) Proc 98) 01-21-98 02:32:39pm
	  Transfer-In failure, error in received APDU
	  Syntax server error code mandatory absent
	  Error detected at offset 892
	  Internal qualifier       2913
	  Node label               1msgt
	  PDU dump reference       3
	
	From looking at the Protocol Data Units (PDUs) saved in the BF*.log files, (in
	this case PDU reference 3), you will notice that the data is cut off at offset
	892. The sending server's PDU is exactly the same. This is the message after it
	has been corrupted by an unsuccessful conversion attempt.
	
	CAUSE
	=====
	
	The initial message is mal-formed, causing the content conversion failure. The
	Exchange Server doing the content conversion then realizes it has a second X.400
	connector available, and routes the message to it. The message routed is the
	data that failed the conversion, and is no longer a valid message.
	
	WORKAROUND
	==========
	
	One possible workaround is to remove the second X.400 connector from your
	organization.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange server,
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
