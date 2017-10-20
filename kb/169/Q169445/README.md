---
layout: page
title: "Q169445: PRB: VisData Returns Incorrect Number of Records"
permalink: /kb/169/Q169445/
---

## Q169445: PRB: VisData Returns Incorrect Number of Records

{% raw %}

	Article: Q169445
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When entering SQL statements in Visual Basic 5.0 Visual Data Manager (VisData),
	the record count may be incorrect. The same SQL statement entered in Visual
	Basic 4.0 Data Manager will return the correct number of records.
	
	CAUSE
	=====
	
	All records do appear in some circumstances, such as with the DBGrid control,
	Data Manager, etc., because in these circumstances all records need to be
	retrieved to be displayed to the user, in which case there is no need to
	explicitly call MoveLast.
	
	RESOLUTION
	==========
	
	Always go the last record in VisData or issue a MoveLast of a recordset variable
	in order to get the correct record count using the DBGrid.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Within VisData:
	
	1. Open Nwind.mdb.
	
	2. Enter the following SQL statement:
	
	       select * from customers where customers.customerid like "*"
	
	3. Execute the statement and note that VisData will report two records being
	  returned.
	
	In Visual Basic 4.0 Data Manager:
	
	1. Open Nwind.mdb.
	
	2. Enter the same SQL Statement and note that Data Manager returns 91 records.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q109053 PRB: Using RecordCount with VB Dynasets, Snapshots, and Tables
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : 5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
