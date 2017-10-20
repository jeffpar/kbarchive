---
layout: page
title: "Q94892: FIX: GPF When Making .EXE File If Forms Saved as Binary"
permalink: /kb/094/Q94892/
---

## Q94892: FIX: GPF When Making .EXE File If Forms Saved as Binary

{% raw %}

	Article: Q94892
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 2.0, a general protection (GP) fault can occur when you replace text
	boxes originally created in version 1.0 with the new version 2.0 Masked Edit
	Text boxes, and then use the existing code. The GP fault occurs in version 2.0
	when you try to turn the Visual Basic project into an executable (.EXE) program.
	
	WORKAROUND
	==========
	
	To work around the problem, save the project's forms and code in Text format
	rather than the default Binary format.
	
	Use the following steps to save the code in Text format:
	
	1. Select each form one by one from the Project window.
	
	2. With each form, go to a code window of that form by double-clicking the form
	  or by pressing the F7 key.
	
	3. From the File menu, choose Save Text... to save each form's code as a .TXT
	  file. Then from the File menu, choose Load Text... and highlight the .TXT
	  file just created; then choose the Replace button.
	
	4. After completing steps 1 through 3 for each form in the project, restart
	  Visual Basic and load the project by choosing Open Project... from the File
	  menu.
	
	5. From the File menu, choose Make Exe...
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Visual Basic version 2.0
	for Windows. This problem was corrected in Microsoft Visual Basic version 3.0
	for Windows.
	
	Additional query words: buglist2.00 fixlist3.00 2.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
