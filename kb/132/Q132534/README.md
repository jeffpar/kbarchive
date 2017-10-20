---
layout: page
title: "Q132534: FIX: Error Changing Grid s DynamicBackColor &amp; DynamicForeColor"
permalink: /kb/132/Q132534/
---

## Q132534: FIX: Error Changing Grid s DynamicBackColor &amp; DynamicForeColor

{% raw %}

	Article: Q132534
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You get the following error when changing the DynamicBackColor and
	DynamicForeColor in a grid that has a class object added to a column and that
	class object is the active control with the Sparse Property set to false (.F.):
	
	  Expression evaluated to an illegal value
	
	RESOLUTION
	==========
	
	Change either the DynamicBackColor or the DynamicForeColor but not both. Or use
	the default controls that the Form Builder offers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new class named CenterChk based on Container, and store it in
	  Mylib.vcx.
	
	2. In the Class Designer, set the following properties for the container:
	
	  Height = 19
	  Width = 68
	  BackStyle = 0-Transparent
	  BorderWidth = 0
	
	3. From the Form Controls toolbar, select the check box Control, and place a
	  check box in the container.
	
	4. Set the following Properties for the check box:
	
	  BackStyle 0-Transparent
	  Height = 16
	  Caption = ""
	  Width = 14
	
	5. With the check box selected, click Center Horizontally and Center Vertically
	  on the Format menu. Then save and close the class.
	
	6. Open the Tastrade.dbc in the VFP\Samples\Mainsamp\Data directory.
	
	7. Create a new form called TestGrid, and add a new property to the form called
	  nCurRec.
	
	8. Using the right mouse button, click the form to bring up the Data
	  Environment. Then using the right mouse button, click the Data Environment.
	  Click Add, and add the Products table.
	
	9. From the Form Controls toolbar, select the Grid control, and add a grid to
	  the form.
	
	10. Using the right mouse button, click the grid, and choose Builder. From the
	  Grid Builder, select the Products table. From the Available Fields, select
	  Product_id, Product_name, and Discontinued.
	
	11. Close the Builder by clicking OK.
	
	12. Set the following Property for the grid:
	
	  RowHeight = 19
	
	13. Using the right mouse button, click the grid, then click Edit.
	
	14. From the Form Controls toolbar, click the View Classes button and choose
	  Add. Select Mylib.vcx from the Open dialog box. From the Form Controls
	  Toolbar, select the CenterChk control, and add it to the Discontinued Column
	  on the grid.
	
	15. Set the following Properties for Column 3 in the grid:
	
	  CurrentControl CenterChk1
	  Width = 68
	  Sparse = .F.
	
	16. Set the following Property for Column 3 CenterChk1 Check1 in the grid:
	
	      ControlSource = products.discontinued
	
	17. Add the following code to the Init event of the grid:
	
	      THISFORM.nCurRec = RECNO()
	      THISFORM.Grid1.SETALL('DynamicBackColor',;
	         'IIF(THISFORM.nCurRec == RECNO(), rgb(0,0,128), rgb(255,255,0))',;
	         'Column')
	         THISFORM.Grid1.SETALL('DynamicForeColor', ;
	            'IIF(THISFORM.nCurRec == RECNO(), rgb(0,0,255), rgb(0,0,0))', ;
	            'Column')
	         THIS.REFRESH
	
	18. Add the following code to the AfterRowColChange event of the grid:
	
	      THISFORM.nCurRec = RECNO()
	      THIS.REFRESH
	
	19. Save and run the form.
	
	For more information on creating forms, please see Chapter 9 in the Developer's
	Guide. For more information on creating classes, please see Chapt1er 10 in the
	Developer's Guide. And for more information on using controls on a form, please
	see Chapter 11 in the Developer's Guide.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
