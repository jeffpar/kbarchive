---
layout: page
title: "Q158405: PRB: Properties of a Class May Be Evaluated at Design Time"
permalink: kb/158/Q158405/
---

## Q158405: PRB: Properties of a Class May Be Evaluated at Design Time

	Article: Q158405
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When placing a class on a form that has a list box or combo box that was created
	by a Builder in the Visual FoxPro Class Designer, the following error occurs:
	
	  Expression Evaluated to an Illegal Value
	
	CAUSE
	=====
	
	The Builder creates properties that reference the array, and Visual FoxPro
	evaluates these properties at design time. The error occurs because the array
	does not exist.
	
	WORKAROUND
	==========
	
	In the Visual FoxPro Class Designer, the ColumnCount property for both the list
	box and the combo box, and the NumberOfElements property in the list box can be
	changed to a specific number (for example, 0).
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual FoxPro Class library based on a container control.
	
	2. Add a ListBox object to the container and right-click the ListBox object to
	  launch the Builder.0
	
	3. Fill in the list with "Values from an array." Add an Array Name, such as
	  "MyArray."
	
	  NOTE: In the Property sheet, select "Non-Default Properties Only" and verify
	  the properties that have been changed.
	
	4. Click OK and save the new class.
	
	5. Create a new form and add the new class to the Forms Control toolbar.
	
	6. Attempt to add the new class to the form, and the error occurs.
	
	NOTE: Creating the array at this point does not clear the error. In order to add
	the unmodified class to the form, the form must be closed and a CLEAR ALL must
	be issued from the Command window. To place the unmodified new class on the
	form, the array must be created and the form must be modified. This behavior
	does not occur in Visual FoxPro 3.0.
	
	Additional query words: vfoxwin kbdse
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	
	=============================================================================
	
