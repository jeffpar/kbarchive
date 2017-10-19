---
layout: page
title: "Q185886: DOC: Unbndgrd Sample App Updates Wrong Row"
permalink: /kb/185/Q185886/
---

## Q185886: DOC: Unbndgrd Sample App Updates Wrong Row

	Article: Q185886
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This example is designed to demonstrate how to use the DBGrid control in an
	unbound state. There is an error in the code for this example that can cause
	strange results to occur when editing data in the example's DBGrid control. Data
	that has been changed may appear to revert to previous values, or changes
	entered in one row may be updated in another.
	
	MORE INFORMATION
	================
	
	This situation has the potential to create a variety of problems. You should
	implement the change to the sample code regardless of the behavior you are
	seeing.
	
	Resolution
	----------
	
	1. Open the code module for the Unbndgrd example's form.
	
	2. Locate the subroutine DBGrid1_UnboundReadData.
	
	3. In the subroutine, find the line of code that reads:
	
	        CurRow& = RowBuf.RowCount - 1
	
	4. Change the line of code to the following:
	
	        CurRow& = UBound(UserData, 2)
	
	5. The example should now function properly.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic (VB) and open the Unbndgrd.vbp sample project. (From the
	  VB directory go to \samples\Misc\UnBndGrd\Unbndgrd.VBP.)
	
	2. Run the project.
	
	3. Scroll the DBGrid down to the last row.
	
	4. Modify one of the cells.
	
	5. Click any row (except the last one) to update the grid.
	
	6. Note that the data reverts to its previous value.
	
	7. Scroll the DBGrid to the first row.
	
	8. Note that the changes appear in the first row.
	
	This problem occurs only if the last row of the DBGrid is the first row to be
	edited. After any other row has been edited, the DBGrid behaves correctly.
	
	Additional query words: kbDSupport kbDSD kbCtrl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	
	=============================================================================
	
