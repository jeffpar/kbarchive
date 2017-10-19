---
layout: page
title: "Q88667: Creating a Running Calculation Using the Report Writer"
permalink: /kb/088/Q88667/
---

## Q88667: Creating a Running Calculation Using the Report Writer

	Article: Q88667
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 02-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may want to create a running calculation in a report that will update after
	each grouping and total the result.
	
	MORE INFORMATION
	================
	
	For example, suppose your database is called TEST.DBF. In this database are
	fields called QTY and ITEMNO. For this example, you want to group on ITEMNO and
	track the totals in QTY for each item number. You then want to track the totals
	in QTY as a running calculation within each group and display a grand total at
	the end of the report. Do the following:
	
	1. Create your grouping on ITEMNO.
	
	2. Choose Report from the menu bar, then select Memory Variable. Choose Add and
	  create a variable X that will be reset at the end of the group ITEMNO. X is
	  the expression SUM(QTY) and has an initial value of 0.
	
	3. Choose Add again and create a second variable called Y. Y also has an initial
	  value of 0 and is the expression X+Y. Y is reset at the end of the report.
	
	4. Place the cursor in the report group footer. Choose Report from the menu bar
	  to place the calculations in your report. Select Field from the list.
	
	5. Choose X as the value of the group's calculation and choose Y as the field
	  for your running calculation.
	
	Each time the group changes, the sum of QTY will be contained in the variable X
	and Y will add that value to its own value. Because Y is reset only at the end
	of the report, Y will keep a running calculation of each time the value of X
	changes.
	
	REFERENCES
	==========
	
	"Interface Guide," version 2.0
	
	Additional query words: VFoxWin FoxDos FoxWin
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
