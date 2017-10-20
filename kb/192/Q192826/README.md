---
layout: page
title: "Q192826: FIX: DeleteColumn Causes Invalid Page Fault Error in Grid"
permalink: /kb/192/Q192826/
---

## Q192826: FIX: DeleteColumn Causes Invalid Page Fault Error in Grid

{% raw %}

	Article: Q192826
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the DeleteColumn method to delete the active column in a Grid causes and
	Invalid Page Fault error in Windows 95 and Windows 98 or an Access Violation
	error in Windows NT 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	WARNING: Close all open applications and save your data before following this
	procedure. Note that following these steps may produce lost allocation units,
	lost clusters, or cross-linked files.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From the File menu pad, choose the New menu bar, and then select Menu. In the
	  New Menu dialog box, click the Shortcut button.
	
	2. In the Menu Designer, type in "Delete" for the prompt and to create a
	  procedure.
	
	3. In the procedure, type in the following commands:
	
	        lo = _SCREEN.ActiveForm
	        lo.grdcustomer.DeleteColumn(lo.grdcustomer.activecolumn)
	
	4. From the Menu pad, choose Generate, and then save the file as GrdDel.mpr.
	
	5. Create a form using the Form Designer.
	
	6. In the data environment of the form, add in the Customer.dbf table from the
	  \Samples\Data directory.
	
	7. Drag the table in the data environment onto the form to create a grid.
	
	8. Make sure the Name property of the grid is grdcustomer.
	
	9. In the Click event of the text box in the second column of the grid, place
	  the following code:
	
	        DO GrdDel.mpr
	
	10. Save and run the form. When the form shows up, right-click on the second
	  column and select the Delete option from the shortcut menu. Visual FoxPro
	  produces on the errors listed in the Summary section above.
	
	Additional query words: kbDSupport kbDse kbVFp500abug kbVFp600fix kbCtrl kbContainer
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
