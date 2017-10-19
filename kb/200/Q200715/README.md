---
layout: page
title: "Q200715: XFOR: How to Save Mapping Rules for LDE Using SQL"
permalink: /kb/200/Q200715/
---

## Q200715: XFOR: How to Save Mapping Rules for LDE Using SQL

	Article: Q200715
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use the SQL Server 6.5 query tool to dump the
	current Mapping Rules for version 3.2 of Linkage Directory Exchange (LDE) to
	Microsoft Product Support Services (PSS).
	
	MORE INFORMATION
	================
	
	There are times when you need to dump the current Mapping Rules of a Linkage LDE
	environment to send to Microsoft PSS. To do so:
	
	1. Start the SQL query tool, ISQL/w. Verify that LSDXMMD is the selected
	  database.
	
	2. Using ISQL/w, under the query window type "setuser DXAdmin" (without the
	  quotation marks) and on the Query menu, click Execute. This sets the user to
	  DXAdmin. If this does not complete successfully, the next step will not
	  function properly.
	
	3. Using ISQL/w, under the query window type "SELECT * FROM MapFields" (without
	  the quotation marks), and on the Query menu, click Execute. In the Results
	  window, it returns the current Mapping Rules for Linkage LDE. Save the
	  results in an .rpt file called MapRules.rpt by clicking Save As on the File
	  menu.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2
	Issue type        : kbhowto
	
	=============================================================================
	
