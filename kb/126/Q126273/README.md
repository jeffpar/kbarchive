---
layout: page
title: "Q126273: PRB: Columns Missing in .DBF File Created in Microsoft Excel"
permalink: /kb/126/Q126273/
---

## Q126273: PRB: Columns Missing in .DBF File Created in Microsoft Excel

{% raw %}

	Article: Q126273
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you save a spreadsheet as type "DBF3" in Microsoft Excel, some of the
	columns are missing when you open the file in FoxPro.
	
	CAUSE
	=====
	
	The field name for one or more columns contains invalid characters. FoxPro is
	unable to read the Excel column that contains an invalid field name, or any
	column following the invalid name.
	
	WORKAROUND
	==========
	
	Change the column heading to a valid FoxPro field name. A valid field name can
	contain up to 10 letters, digits, or underscores, and it must begin with a
	letter or an underscore.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new spreadsheet in Microsoft Excel version 4.0 (or higer) for
	  Macintosh.
	
	2. In the first row of the spreadsheet, place the following information:
	
	  Column A - CNO
	  Column B - Company
	  Column C - State
	  Column D - <CredLimit
	  Column E - Phone
	
	3. Fill cells A2 through E4 with any data. Highlight the entire range A1 through
	  E4, and name the range "database." The steps to do this will depend on the
	  Excel version. In Excel version 5.0, for example, name the range by choosing
	  Name from the Insert menu, selecting Define, and typing "database" in the
	  Define Name dialog box below the Names in Workbook: prompt. The shortcut key
	  to invoke the Define Name dialog is Command + L.
	
	4. Choose Save As from the File menu, and save the file as TEST.DBF with a DBF3
	  file format. The actual steps will depend on the Excel version.
	
	5. Close Excel. Launch FoxPro, and issue these commands:
	
	     USE <folder name>test.dbf
	     BROWSE
	
	Additional query words: VFoxMac FoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	
	=============================================================================
	

{% endraw %}
