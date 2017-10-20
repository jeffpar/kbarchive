---
layout: page
title: "Q193859: XFOR: How to Dump LDE WorkQueue Using SQL"
permalink: /kb/193/Q193859/
---

## Q193859: XFOR: How to Dump LDE WorkQueue Using SQL

{% raw %}

	Article: Q193859
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use SQL Server's query tool to dump the current
	WorkQueue for version 3.2 of LinkAge Directory Exchange (LDE) to a file to send
	to Microsoft.
	
	MORE INFORMATION
	================
	
	There are times when it is necessary to dump the current WorkQueue of a LinkAge
	LDE environment to a file to send Microsoft. To do this, perform the following
	steps:
	
	1. Open the SQL Server query tool ISQL/w. Verify that LSDXMMD is the selected
	  database.
	
	2. Using ISQL/w, under the query window, type the following:
	
	  " setuser 'DXAdmin' " (without the quotation marks)
	
	  Carry out the command by clicking Query from the menu bar, and then click
	  Execute. This will set the user to DXAdmin. If this does not complete
	  successfully, the next step will not function properly.
	
	3. Using ISQL/w, in the query window, type the following:
	
	  " SELECT * FROM WorkQueue " (without the quotation marks)
	
	  Carry out the command by clicking Query from the menu bar, and then click
	  Execute. In the Results window, this will return the current WorkQueue for
	  LinkAge LDE. Save the results in a .rpt file called WorkQueue.rpt by clicking
	  Save As from the File menu.
	
	Additional query words: LDE Linkage Dirsync
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
