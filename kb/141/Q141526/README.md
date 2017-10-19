---
layout: page
title: "Q141526: Text1 Object in Grid Column by Default Gives You More Control"
permalink: /kb/141/Q141526/
---

## Q141526: Text1 Object in Grid Column by Default Gives You More Control

	Article: Q141526
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Text1 object is listed in a grid's column by default so that the user will
	have more control at the cell level in FoxPro's event model.
	
	MORE INFORMATION
	================
	
	If the Text1 (text box) object control is removed from the grid's column, many
	of the properties and methods that were formerly available are no longer there.
	To see this, follow these steps:
	
	1. Create a form, and add a table to the data environment. Then add a grid to
	  the form.
	
	2. Change the ColumnCount property of the grid to 2 or 3 so that individual
	  columns are visible.
	
	3. Select the Column1 object on the properties sheet. Then click the data tab,
	  and delete the Text1 control from the CurrentControl property.
	
	4. With Column1 as the selected object in the properties sheet, click the
	  Methods tab and note the difference in the number of methods available versus
	  the number of methods available with the Text1 object.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
