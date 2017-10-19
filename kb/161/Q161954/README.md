---
layout: page
title: "Q161954: When Field Not Printed"
permalink: /kb/161/Q161954/
---

## Q161954: When Field Not Printed

	Article: Q161954
	Product(s): Microsoft Exchange
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbusage
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Mail Windows 3.x Client 
	- Microsoft Schedule+, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Assume that a user on a Microsoft Mail postoffice (PO1) sends a Schedule+
	meeting request to a user on Microsoft Mail PO2 and another user on Microsoft
	Mail PO3. When printing the meeting request, the user on Microsoft Mail PO2's
	WHEN field is printed, but the user on Microsoft Mail PO3 does not see a WHEN
	field when printing the meeting request.
	
	This problem occurs when you are using the following messaging architecture (the
	important link being that Microsoft Exchange Server is the backbone for the
	Microsoft Mail environment):
	
	  MSMail PO1 <-->
	  Exchange Server1 <--> Exchange Server2 <--> MSMail PO3>
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
	following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	
	MORE INFORMATION
	================
	
	For more information on a related issue, see the following article in the
	Microsoft Knowledge Base:
	
	  Q161953 XFOR: Unable to Forward Schedule+ Messages
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2 kbMailSearch kbScheduleSearch kbZNotKeyword3 kbSchedule100 kbMail3xSearch
	Version           : :1.0,4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
