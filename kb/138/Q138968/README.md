---
layout: page
title: "Q138968: PRB: UpClick and DownClick Events Do Not Work for a List Box"
permalink: kb/138/Q138968/
---

## Q138968: PRB: UpClick and DownClick Events Do Not Work for a List Box

	Article: Q138968
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	According to the Visual FoxPro documentation and online Help, the UpClick and
	DownClick events work with the ComboBox, ListBox, and Spinner objects. However,
	the UpClick and DownClick events do not work for ListBox.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form, and place a list box and a combo box on the form.
	
	2. Populate the list box and combo box with an array.
	
	3. In the UpClick events of both the list box and combo box, place the following
	  line:
	
	  " WAIT WINDOW "UpClick" " (without the quotation marks)
	
	4. In the DownClick events of both the list box and the combo box, place the
	  following line:
	
	  " WAIT WINDOW "DownClick" " (without the quotation marks)
	
	5. Save and run the form.
	
	NOTE: The Wait windows do not appear on the screen when you click the up and down
	pointers on the list box scroll bar or on a combo box scroll bar.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
