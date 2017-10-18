---
layout: page
title: "Q161953: XFOR: Unable to Forward Schedule+ Messages"
permalink: kb/161/Q161953/
---

## Q161953: XFOR: Unable to Forward Schedule+ Messages

	Article: Q161953
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbinterop kbusage
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Mail for Windows, version 3.0 
	- Microsoft Schedule+, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Assume that a user on a Microsoft Mail postoffice (PO1) sends a Schedule+
	meeting request to a user on Microsoft Mail PO2 and another user on Microsoft
	Mail PO3. The user on PO2 is able to forward the message if he or she wants, but
	the user on PO3 is not able to forward the message, and may receive the
	following error:
	
	  The message could not be forwarded.
	
	This problem occurs when you are using the following messaging architecture (the
	important link being that Microsoft Exchange Server is the backbone for the
	Microsoft Mail environment):
	
	MSMail PO1 <-->
	               Exchange Server1  <-->  Exchange Server2  <-->  MSMail PO3
	MSMail PO2 <-->
	
	CAUSE
	=====
	
	A property of the Schedule+ message is not properly converted during the
	conversion from FIPS to MDBEF, and this property is dropped.
	
	The message going from PO1 to PO2 does not have to traverse the Microsoft Mail
	Connector Interchange (MSMI), and therefore does not experience this problem.
	
	The message going from PO1 to P03 must traverse the MSMI, and is therefore
	converted once it is on its way into Microsoft Exchange Server, and once again
	on its way out of Microsoft Exchange Server and back to Microsoft Mail.
	
	When a message from Microsoft Mail is sent, it uses a FIPS message format.
	Microsoft Exchange Server uses a message format called MDBEF, and all messages
	coming from Microsoft Mail must be converted from FIPS to MDBEF by the MSMI.
	When a message is sent from Microsoft Exchange Server to Microsoft Mail, it is
	converted from DBEF format to FIPS format.
	
	The property is not properly saved or converted from FIPS to MDBEF when coming
	into Microsoft Exchange Server through the MSMI; therefore, when it is converted
	back to FIPS when it leaves Microsoft Exchange Server through the MSMI, the
	property is not retained.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	For more information on a related issue, see the following article in the
	Microsoft Knowledge Base:
	
	  Q161954 XFOR: When Field Not Printed
	======================================================================
	Keywords          : kbinterop kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2 kbMailSearch kbScheduleSearch kbZNotKeyword3 kbSchedule100 kbMail300
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
