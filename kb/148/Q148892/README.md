---
layout: page
title: "Q148892: BUG: SourceSafe File Not Found Error When VB Deletes .FRX File"
permalink: /kb/148/Q148892/
---

## Q148892: BUG: SourceSafe File Not Found Error When VB Deletes .FRX File

{% raw %}

	Article: Q148892
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500bug kbVBp400
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a Visual Basic project, if a form at one time contained graphical information
	and that graphical information is removed, then the .frx file may be deleted by
	automatically Visual Basic, or deleted manually by the user. This causes the
	following error message to appear in the Source Code Control Results window when
	you check the Visual Basic project back into SourceSafe:
	
	  File "<path to .frx>.FRX" not found
	
	CAUSE
	=====
	
	Visual Basic stores text information for a form in the .frm file and binary
	information for a form in the .frx file. Every time it saves a form, Visual
	Basic determines whether or not the .frx file is needed. If it is not needed,
	the .frx file is deleted.
	
	The problem is Visual SourceSafe stores the current and historical copies of the
	Visual Basic form (.frm and .frx) files. Visual SourceSafe does not detect that
	Visual Basic has determined that the .frx file is no longer needed. Visual
	SourceSafe sees the missing .frx as an error.
	
	RESOLUTION
	==========
	
	Use one of the following to work around this problem:
	
	- Set an icon for the form. This will force Visual Basic to always keep the
	  .frx file without increasing the amount of resources used or the size of the
	  form.
	
	- Start the Visual SourceSafe Explorer, and delete (do not destroy) the .frx
	  file when it is no longer needed. This will remove the .frx file from
	  SourceSafe without destroying the history.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic 4.0.
	
	2. Add the Visual Basic project to Source Code Control.
	
	3. Check out the entire project (including the .vbp file).
	
	4. Add a new form (Form2).
	
	5. Add a bitmap to the Form2 picture property to create the .frx for Form2.
	
	6. Save and check in the entire project.
	
	7. Check out the project.
	
	8. Delete the bitmap from the Form2 picture property.
	
	9. Save the project. (The .frx for Form2 should be automatically deleted by
	  Visual Basic.
	
	10. Check in the entire project. In the Source Code Control Results window, the
	  following message appears:
	
	  File "<path to .frx>.FRX" not found
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500bug kbVBp400 
	Technology        : kbSSafeSearch kbAudDeveloper
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
