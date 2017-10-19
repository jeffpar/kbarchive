---
layout: page
title: "Q189270: XFOR: 4.0 Server Cannot Process Encapsulated Delivery Receipts"
permalink: /kb/189/Q189270/
---

## Q189270: XFOR: 4.0 Server Cannot Process Encapsulated Delivery Receipts

	Article: Q189270
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a message is sent from a Microsoft Exchange Server 4.0 computer to an
	Exchange Server 5.0 or 5.5 computer through the Internet Mail Connector or
	Internet Mail Service and a delivery receipt is requested, the delivery receipt
	may not be received, even though it is sent by the 5.0 or 5.5 server. When the
	delivery receipt is sent, the following event appears in the event log on the
	4.0 server:
	
	  Event: 4082
	  Description: The following message is a report from another Microsoft
	  Exchange Server computer; the report could not be decoded.
	
	Note that this problem only occurs under the following conditions:
	
	- The 4.0 server and the 5.0 or 5.5 server are in different sites. Therefore, a
	  site is included in the Simple Mail Transfer Protocol (SMTP) address
	  (<user>@<site>.<domain>.com).
	
	- You are running Build 1461.6 or later of the Internet Mail Connector on the
	  5.0 server or Build 2186.0 or later of the Internet Mail Service on the 5.5
	  server.
	
	CAUSE
	=====
	
	Later builds of the Internet Mail Connector and Internet Mail Service
	encapsulate the Request for Comments (RFC) 821 recipient information in the
	delivery receipt before it is sent. The Exchange Server 4.0 Internet Mail
	Connector cannot process delivery receipts that are formatted in this manner.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Internet Mail Connector
	
	  File Name      Version
	  ------------------------
	  Msexcimc.exe   4.0.997.1
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0.
	
	MORE INFORMATION
	================
	
	For additional information about the fixes that cause later builds of the
	Internet Mail Connector and Internet Mail Service to encapsulate the RFC 821
	recipient information in delivery receipts, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q178436 Looping Messages over Internet Mail Service Site Connector
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
