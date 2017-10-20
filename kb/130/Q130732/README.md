---
layout: page
title: "Q130732: HOWTO: How to Create Data Source to Access Microsoft Excel Files"
permalink: /kb/130/Q130732/
---

## Q130732: HOWTO: How to Create Data Source to Access Microsoft Excel Files

{% raw %}

	Article: Q130732
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp600 kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a data source to access Microsoft Excel
	files by using ODBC.
	
	MORE INFORMATION
	================
	
	In the data source setup dialog box, specify the version of the Microsoft Excel
	file that you want to connect. If it is a Microsoft Excel version 5.0 file, you
	also need to specify the name of the workbook. The workbook in Microsoft Excel
	version 5.0 files is analogous to the Visual FoxPro database, and the Microsoft
	Excel worksheet is analogous to the Visual FoxPro table.
	
	If you specify a Microsoft Excel version 4.0 or 3.0 file, you must also specify
	the directory where the file is located. In this case, the directory is
	analogous to the Visual FoxPro database, and the Microsoft Excel spreadsheets
	are analogous to the Visual FoxPro table.
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP600
	Version           : WINDOWS:2.5,3.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
