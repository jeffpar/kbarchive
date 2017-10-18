---
layout: page
title: "Q155930: FIX: Grid on Page2 Does Not Refresh After ColumnCount Change"
permalink: kb/155/Q155930/
---

## Q155930: FIX: Grid on Page2 Does Not Refresh After ColumnCount Change

	Article: Q155930
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbusagekbbuglist kbfixlist
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new form as a subclass of a custom Form class, changing the
	number of columns in a Grid object located on a page other than the first page
	of a PageFrame object results in refresh inconsistencies.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been corrected in Microsoft
	Visual FoxPro version 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project:
	
	  a. Click New from the File menu.
	
	  b. Click Project.
	
	  c. Click the New File button.
	
	  d. Assign a file name for new project.
	
	2. Create a new class in a new class library:
	
	  a. Click the Classes tab.
	
	  b. Click New.
	
	  c. Assign a new class name.
	
	  d. Click Form from the "Based On" drop-down list box.
	
	  e. Assign a class library name in the "Store In" text box.
	
	  f. Click OK.
	
	3. Create a new Form:
	
	  a. From the Form Controls toolbar, click the PageFrame control and draw a
	     PageFrame object on the Form.
	
	  b. From the shortcut menu, click Edit (right-click the PageFrame object).
	
	  c. Click the Page2 tab.
	
	  d. From Form Controls toolbar, click the Grid control from Form Controls
	     toolbar and place a Grid object on the second page of the PageFrame
	     object.
	
	  e. From the File menu, click Save.
	
	  f. From the File menu, click Close.
	
	4. Make this new class the default Form class:
	
	  a. From the Tools menu, click Option.
	
	  b. Click the Forms tab.
	
	  c. Under the Template Classes section, select the Form check box. Select or
	     type the path and name of the new class you created in Step 2.
	
	  d. Click OK.
	
	5. Create a new Form based on the class you created in Step 2:
	
	  a. In the Project Manager, click the Documents tab.
	
	  b. Click Forms.
	
	  c. Click New.
	
	  d. Click the New Form button.
	
	6. Change the Grid object's ColumnCount on Page2:
	
	  a. Click the PageFrame object.
	
	  b. From the shortcut, menu Click Edit (right-click the PageFrame object).
	
	  c. Click the Page2 tab of the PageFrame object.
	
	  d. Click the Grid object.
	
	  e. From the shortcut menu, click Properties (right-click the Grid object).
	
	  f. From the Property window, click the ColumnCount property.
	
	  g. Change the ColumnCount property value to 3.
	
	Notice that the Grid object does not refresh immediately. (The Grid does not
	refresh until the Page1 tab is selected and the Page2 tab is reselected.)
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Perry Newton, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
