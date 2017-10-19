---
layout: page
title: "Q138426: How to Make a Dynamic Rectangle Expand/Shrink to Fit the Data"
permalink: /kb/138/Q138426/
---

## Q138426: How to Make a Dynamic Rectangle Expand/Shrink to Fit the Data

	Article: Q138426
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a report, you can show information in a grouped format surrounded by a
	rectangle that expands (stretches) or shrinks dynamically according to the
	amount of data to be printed. This article covers the steps necessary to add
	such a floating rectangle.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure to Add Floating Rectangle
	------------------------------------------------
	
	1. Enter each of the following commands in the Command window:
	
	     SET DEFAULT TO SYS(2004)+"\SAMPLES\DATA"
	     OPEN DATA testdata
	     CREATE REPORT TestRepo
	
	2. With the report selected, on the View menu, click Data Environment.
	
	3. With the Data Environment selected, on the DataEnvironment menu, click Add.
	  In the Add dialog box, choose the Employee table.
	
	4. Drag the Notes field from the Employee table, and drop it on the report. Size
	  the field so it takes up little horizontal space. With the field selected,
	  right-click to bring up the properties sheet. Select "Fix relative to Top of
	  Band" and "Stretch with overflow." Then click OK.
	
	5. From the Report Controls toolbar, select the Rectangle tool and draw a
	  rectangle around the employee.notes field. With the rectangle still selected,
	  right-click to bring up the properties sheet. Select "Fix Relative to Top of
	  Band" from the Object Position dialog box, and select "Stretch relative to
	  tallest object in group" from the Stretch Downwards dialog box. Then click
	  OK.
	
	6. With the rectangle still selected, hold down the SHIFT key, and click the
	  employee.notes field to select it and to add it to the list of selected
	  objects.
	
	7. On the Format menu, click Group to group the two objects together. Save and
	  run the report. You should see the rectangle stretch to accommodate the data
	  printed in the employee.notes field.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
