---
layout: page
title: "Q134305: PRB: Invalid DragIcon Property Is Ignored"
permalink: /kb/134/Q134305/
---

## Q134305: PRB: Invalid DragIcon Property Is Ignored

{% raw %}

	Article: Q134305
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Specifying an invalid DragIcon property for an object on a form at run time does
	not result in an error when the object is dragged. The default DragIcon is
	used.
	
	Setting the DragIcon property to an invalid file name at design time in the
	properties sheet of the object does result in a "File does not exist" error.
	
	CAUSE
	=====
	
	This behavior occurs if the file name provided for the DragIcon property is a
	non-existing file, or if the file is neither in the default directory nor on the
	FoxPro path.
	
	WORKAROUND
	==========
	
	Check for validity of the property using the FILE() function, and display a
	warning if necessary.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add a text box to the form.
	
	3. In the Other tab of the properties sheet, set DragMode to 1 - Automatic.
	
	4. In the Init method of the form, add this code:
	
	     ThisForm.Text1.DragIcon = "anyfile.cur"
	
	5. Run the form. Note that no error occurs, and the default DragIcon is used
	  when dragging the text box.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
