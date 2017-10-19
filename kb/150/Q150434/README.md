---
layout: page
title: "Q150434: PRB: Field Width Increases When Use Visual FoxPro ODBC Driver"
permalink: /kb/150/Q150434/
---

## Q150434: PRB: Field Width Increases When Use Visual FoxPro ODBC Driver

	Article: Q150434
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Visual FoxPro ODBC driver is used to create a numeric field of width 5
	with decimal 2, the driver adds two places to the width in order to ensure that
	the length is of sufficient size. Two positions are added to compensate for the
	sign and decimal that is normally included in the length in native Visual
	FoxPro.
	
	CAUSE
	=====
	
	When a table is created with a numeric field, the decimal point and sign are
	counted in the width by Visual FoxPro. However, the ODBC standards do not
	specify how the decimal and sign should be specified when creating a table.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a datasource named temp that is set up for free tables and that points
	  to the C:\Temp directory.
	
	2. Run the following program:
	
	     h=SQLCONNECT("temp","","")
	     ?SQLEXEC(h,"CREATE TABLE ztest (nfield N(5,2))")
	     ?SQLDISCONNECT(h)
	     USE c:\temp\ztest
	     MODIFY STRUCTURE
	
	Notice that the width is 7 instead of 5. The width was increased by two.
	
	Additional query words: 1.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	
