---
layout: page
title: "Q141058: PRB: Visual Basic .FRX File Not Added to SourceSafe"
permalink: kb/141/Q141058/
---

## Q141058: PRB: Visual Basic .FRX File Not Added to SourceSafe

	Article: Q141058
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500bug kbVBp400bug
	Last Modified: 23-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a form with both an .frm and an .frx file exists in Visual Basic and in
	SourceSafe and the form is deleted from the Visual Basic project, adding a new
	form with the same name as the deleted form will omit adding the .frx file to
	the SourceSafe project.
	
	RESOLUTION
	==========
	
	In Steps to Reproduce Problem in the MORE INFORMATION section below, do the
	following between steps 3 and 4:
	
	1. Run SourceSafe.
	
	2. Select the SourceSafe project that stores the Visual Basic project.
	
	3. From the File menu, choose Properties.
	
	4. From the Deleted Items tab, purge the .frx and .frm that were deleted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form that has both an .frm and .frx file (binary) in Visual Basic by
	  adding a control (such as a picturebox, grid, or other control) that contains
	  binary information to a form. Then put the files in SourceSafe.
	
	2. Check out the Project (.vbp file) from SourceSafe.
	
	3. In Visual Basic, delete the form. Note that both the .frm and .frx files are
	  deleted in SourceSafe.
	
	4. In Visual Basic, create a new form that has the same name as the deleted
	  form, which will require an .frx file (as described in Step 1.)
	
	5. Save the new form, and when prompted, add the form to SourceSafe.
	
	6. Answer No to the following prompt:
	
	  A deleted file with this name already exists. Recover the existing file?
	
	7. The .frm file is added to SourceSafe, but the .frx is not.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500bug kbVBp400bug 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
