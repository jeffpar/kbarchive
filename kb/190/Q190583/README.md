---
layout: page
title: "Q190583: BUG: No Data Source Name Generates Run-Time Error Using RDC"
permalink: /kb/190/Q190583/
---

## Q190583: BUG: No Data Source Name Generates Run-Time Error Using RDC

{% raw %}

	Article: Q190583
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Microsoft's Remote Data Control 2.0 (RDC) without a User or System
	DSN in the ODBC Data Source Administrator, trying to set the RDC's
	DataSourceName property generates a run-time error.
	
	RESOLUTION
	==========
	
	Create a DSN under ODBC or upgrade from MSRDC20.ocx version 5.00.3714 (or
	5.01.4319), which is "Microsoft Remote Data Control 2.0," to MSRDC20.ocx version
	6.00.816, which is "Microsoft Remote Data Control 6.0."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Please make sure that there are no User or System Data Source Names in the ODBC
	Data Source Administrator.
	
	1. Start a new Standard EXE project. Form1 is added by default.
	
	2. From the Project menu, click Components, and select the Microsoft Remote Data
	  Control 2.0 if it is not already loaded.
	
	3. In Property browser, click DataSouceName. This will result in the following
	  run-time error message:
	
	  "Class not registered. Looking for object with CLSID
	  {00000000-0000-0000-000000000000}"
	
	Additional query words: kbDSupport kbdse kbVBp kbVBp500bug kbVBp600bug kbRDC200 kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
