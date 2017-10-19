---
layout: page
title: "Q269234: XFOR: SNADS Connector Stops Processing Messages"
permalink: /kb/269/Q269234/
---

## Q269234: XFOR: SNADS Connector Stops Processing Messages

	Article: Q269234
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Connector for SNADS stops responding and messages back up
	in the Readyout folder in the private information store and in the Dia2mex.in
	folder. No errors are reported and CPU utilization does not increase. The
	following processes are logged in the Connectivity Manager Process Manager:
	
	  "LME-SNADS-MEXIN","RUNNING"
	  "Transfer to Exchange for SNADS","Idle"
	  "LME-SNADS-MEXOUT","RUNNING"
	  "Transfer from Exchange for SNADS","Idle"
	  "LME-SNADS-DIAMEX","RUNNING"
	  "SNADS To Exchange Transform","Creating Outbound Exchange Msg"
	  "LME-SNADS-OUT","RUNNING"
	  "Outbound SNADS server","Idle"
	  "LME-SNADS-IN","RUNNING"
	  "Inbound SNADS server","Read"
	  "LME-SNADS-MEXDIA","RUNNING"
	  "Exchange To SNADS Transform","Reading
	
	CAUSE
	=====
	
	This issue can occur if the correlation tables have been corrupted.
	
	RESOLUTION
	==========
	
	To resolve this issue, rename the SNADS (SNADS*.*) and the CT2 files (CT2*.*)
	that are located in the <Exchroot>\Connect\Exchconn\Tables folder. Do not
	rename the CT2 file that does not have an extension.
	
	Additional query words: IS
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
