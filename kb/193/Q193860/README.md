---
layout: page
title: "Q193860: XFOR: How to Dump LDE Schedule Using SQL Server"
permalink: /kb/193/Q193860/
---

## Q193860: XFOR: How to Dump LDE Schedule Using SQL Server

{% raw %}

	Article: Q193860
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
	schedule for LinkAge Directory Exchange (LDE) version 3.2 to Microsoft.
	
	MORE INFORMATION
	================
	
	There are times when it is necessary to dump the current schedule of a LinkAge
	LDE environment to send to Microsoft. To do so, complete the following steps:
	
	1. Open the SQL Server query tool ISQL/w. Verify that LSDXMMD is the selected
	  database.
	
	2. Using ISQL/w, under the query window type:
	
	  " setuser 'DXAdmin' " (without the quotation marks)
	
	  And on the Query menu, click Execute. This will set the user to DXAdmin. If
	  this does not complete successfully, the next step will not function
	  properly.
	
	3. Using ISQL/w, under the query window type:
	
	  " SELECT * FROM schedule " (without the quotation marks)
	
	  And on the Query menu, click Execute. In the Results window, this will return
	  the current schedule for LinkAge LDE. Save the results in an .rpt file called
	  Schedule.rpt by selecting Save As on the File menu.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
