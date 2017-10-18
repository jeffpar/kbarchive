---
layout: page
title: "Q129308: PRB: Pivot Table in Excel Does Not Update"
permalink: kb/129/Q129308/
---

## Q129308: PRB: Pivot Table in Excel Does Not Update

	Article: Q129308
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a Pivot Table in Microsoft Excel using Visual FoxPro's Pivot Table
	Wizard and then change the data in the table on which the Pivot table is based,
	the Excel Pivot Table does not update to reflect the change in the underlying
	data.
	
	RESOLUTION
	==========
	
	To update the data, right click any cell in the Pivot Table in Excel. Then
	choose Refresh Data from the context sensitive menu.
	
	STATUS
	======
	
	This behavior is by design because of performance issues associated with
	Microsoft Query having to retrieve data from a FoxPro table in Excel.
	
	MORE INFORMATION
	================
	
	The FoxPro ODBC driver passes data to Microsoft Query. Excel then retrieves the
	data from Microsoft Query. For the data to be automatically updated in the Pivot
	Table, FoxPro would have to notify Microsoft Query every time data changes in a
	table on which a Pivot Table is based.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          : kbvfp300 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300
	Version           : WINDOWS:2.5,3.0
	Issue type        : kbprb
	
	=============================================================================
	
