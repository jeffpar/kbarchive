---
layout: page
title: "Q98341: PROFS: How to Check VM Host ROUTE Statements"
permalink: /kb/098/Q98341/
---

## Q98341: PROFS: How to Check VM Host ROUTE Statements

	Article: Q98341
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.1,3.2,3.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, versions 3.1, 3.2, 3.3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	VM users can use the following statement used to check that the ROUTE statements
	for the PROFS gateway are correct and properly initialized.
	
	  SM rscs_nodename Q SYS RO
	
	It shows all the ROUTE statements that were initialized the last time the given
	RSCS was rerouted.
	
	Additional query words: 3.10 3.20 3.30 query
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320 kbMailGateIBMPROFS310 kbMailGateIBMPROFS330
	Version           : :3.1,3.2,3.3
	
	=============================================================================
	
