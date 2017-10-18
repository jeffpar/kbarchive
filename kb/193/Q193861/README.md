---
layout: page
title: "Q193861: XFOR: How to Dump the LDE Propagation Table Using SQL"
permalink: kb/193/Q193861/
---

## Q193861: XFOR: How to Dump the LDE Propagation Table Using SQL

	Article: Q193861
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use SQL Server's query tool to dump the current
	propagation table for version 3.2 of LinkAge Directory Exchange (LDE) to
	Microsoft.
	
	The propagation table contains sequence and tracking numbers used by the LinkAge
	LDE Dirsync Manager (DXM) to set up and organize data sent to and received from
	LinkAge LDE agents.
	
	MORE INFORMATION
	================
	
	There are times when it is necessary to dump the current propagation table of a
	Linkage LDE environment to send to Microsoft. To dump the propagation table of
	the LinkAge LDE environment, complete the following steps:
	
	1. Open the SQL Server query tool ISQL/w. Verify that LSDXMMD is the selected
	  database.
	
	2. Using ISQL/w, in the query window, type the following:
	
	  " setuser 'DXAdmin' " (without the quotation marks)
	
	  Carry out the command by clicking Query from the menu bar, and then click
	  Execute. This will set the user to DXAdmin. If this does not complete
	  successfully, the next step will not function properly.
	
	3. Using ISQL/w, under the query window type the following:
	
	  " SELECT * FROM propagation " (without the quotation marks)
	
	  Carry out the command by clicking Query from the menu bar, and then click
	  Execute. In the Results window, this will return the current propagation
	  table for LinkAge LDE. Save the results off into a .rpt file called
	  Propagation.rpt by clicking Save As on the File menu.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
