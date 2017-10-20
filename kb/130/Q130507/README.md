---
layout: page
title: "Q130507: HOWTO: Logical Values Must Be Sent to SQL Server as 1 or 0"
permalink: /kb/130/Q130507/
---

## Q130507: HOWTO: Logical Values Must Be Sent to SQL Server as 1 or 0

{% raw %}

	Article: Q130507
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you send logical data to SQL Server via the SQLEXEC() function, true (.T.)
	and false (.F.) values must be sent as 1 and 0.
	
	MORE INFORMATION
	================
	
	The following example shows how to use the Insert command to add a record that
	has a logical field:
	
	     nHandle  = SQLCONNECT('<data source name>,'<user>,'<password>')
	     nSuccess = SQLEXEC(handle,'insert into tablename (logicalfield)
	        values (1)')
	
	This puts a logical true value into the table on SQL Server.
	
	Additional query words: VFoxWin ODBC
	
	======================================================================
	Keywords          : kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300
	Version           : WINDOWS:2.5,3.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
