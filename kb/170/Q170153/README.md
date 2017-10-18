---
layout: page
title: "Q170153: FIX: Excel Automation Samples Cause Errors with Excel 97"
permalink: kb/170/Q170153/
---

## Q170153: FIX: Excel Automation Samples Cause Errors with Excel 97

	Article: Q170153
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp kbvfp500aFIX
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The OLE automation script in the Olexl.scx example form that creates a chart in
	Microsoft Excel fails with Microsoft Excel 97. Several lines of code contain the
	incorrect syntax for use with Microsoft Excel 97. Executing the code causes the
	following error message to appear:
	
	  OLE error code: 0x80020006:Unknown name.
	
	This OLE automation code is part of the Olexl.scx sample located in the
	Samples\Solution\Ole folder.
	
	CAUSE
	=====
	
	The syntax for referencing objects in Microsoft Excel 97 has changed.
	
	RESOLUTION
	==========
	
	Open the Olexl.scx form and click on the Example 2 command button. In the
	properties sheet, open the Click event of the Example 2 object. Locate the
	following three lines of code, which are interspersed throughout the code in the
	Click event:
	
	     oXLChart1.autoformat(11,1)
	     nTotSeries = oXLChart1.SeriesCollection().count
	     oXLChart1.SeriesCollection(m.i).delete
	
	Change the lines of code to the following:
	
	     oXLChart1.application.charts[1].autoformat(-4100,1)
	     nTotSeries = oXLChart1.application.charts[1].SeriesCollection().count
	     oXLChart1.application.charts[1].SeriesCollection(m.i).delete
	
	To help locate these lines of code, open the Click event code, click Edit on the
	system menu and select Properties. In the Edit Properties dialog box, check the
	Show line/column position check box and click OK. Line numbers now appear in the
	status bar. The three lines listed above have the following line numbers: 16,
	19, and 21.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Microsoft Visual
	FoxPro version 5.0a for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On a machine with both Visual FoxPro 5.0 and Excel 97 installed, run the
	  Olexl.scx located in the Samples\Solution\Ole folder.
	
	2. Click the Example 1 button, which runs a cross tab query and populates the
	  cells of the Excel spreadsheet.
	
	3. Press the Example 2 button. The OLE automation commands create the Excel bar
	  chart. After Excel gains focus and the code stops executing, switch back to
	  Visual FoxPro 5.0. The error message appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbvfp kbvfp500aFIX 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
