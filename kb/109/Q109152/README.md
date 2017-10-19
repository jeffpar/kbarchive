---
layout: page
title: "Q109152: How to Create a Data Grouping on Every Nth Record"
permalink: /kb/109/Q109152/
---

## Q109152: How to Create a Data Grouping on Every Nth Record

	Article: Q109152
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.6,2.6a; MS-DOS:2.5,2.5a,2.5b,2.6,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the FoxPro Report Writer, you can create a data grouping that will break
	after a certain number of records.
	
	For example, the following procedure will create a data grouping that breaks
	after every fifth record.
	
	1. Create a quick report based on the CUSTOMER database in the TUTORIAL
	  subdirectory.
	
	2. From the Report menu, choose Variables.
	
	3. Choose Add to add a variable.
	
	4. For the variable name, type "cntr" (without the quotation marks).
	
	5. For the value to store, type "Customer.state" (without the quotation marks).
	
	6. Select the Count radio button in the Calculate box and choose OK twice to
	  return to the report.
	
	7. From the Report menu, choose Data Grouping.
	
	8. Choose Add to add a Data Grouping.
	
	9. Enter the following expression to group on:
	   - "INT(cntr/5)" (without the quotation marks)
	
	10. Select OK twice to return to the report. You can now place fields and text
	  in the group header and footer, which will print every fifth record.
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin RWriter
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300
	Version           : MACINTOSH:2.5b,2.6,2.6a; MS-DOS:2.5,2.5a,2.5b,2.6,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	
	=============================================================================
	
