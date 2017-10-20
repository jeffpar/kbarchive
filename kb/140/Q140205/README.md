---
layout: page
title: "Q140205: BUG: Status of Project Window Is Not Saved with .vbp File"
permalink: /kb/140/Q140205/
---

## Q140205: BUG: Status of Project Window Is Not Saved with .vbp File

{% raw %}

	Article: Q140205
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the location or size of the project window changes, these changes are
	sometimes not reflected in the .vbp file.
	
	The dimensions are always saved in Visual Basic 3.0.
	
	RESOLUTION
	==========
	
	Saving the project by clicking Save Project As on the File menu retains all
	changes in size and location of the project window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Visual Basic version 4.0. We are
	researching this bug and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic.
	
	2. On the File menu, click New Project.
	
	3. On the File menu, click Save Project to save the default form and project.
	
	4. Resize and/or move the project window to a different location on screen.
	
	5. On the File menu, click Save Project to save the project again.
	
	6. On the File menu, click New Project to remove the previous project from
	  memory.
	
	7. Reopen the previously saved project. The project window has the size and
	  location it did before it was modified and saved the second time.
	
	Additional query words: 4.00 vb4all vb4win buglist4.00
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
