---
layout: page
title: "Q192253: BUG: ImageList: Can't Insert Multiple Images from Root Directory"
permalink: kb/192/Q192253/
---

## Q192253: BUG: ImageList: Can't Insert Multiple Images from Root Directory

	Article: Q192253
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbImgList kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When adding images to the ImageList control at design-time, you may encounter
	the following error message when the files you are trying to add are located in
	the root directory of a drive:
	
	  "Error #5"
	
	CAUSE
	=====
	
	From the Insert Picture command of the ImageList property page, the Select
	Picture dialog allows you to select multiple files to add to the control. If
	these files are located in the root directory of a drive, the aforementioned
	error may occur.
	
	This problem occurs on Windows 95/98 only.
	
	RESOLUTION
	==========
	
	To avoid the error, select only one picture at a time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Select Components from the Project menu, and check the "Microsoft Windows
	  Common Controls" to add this component to your toolbox.
	
	3. Place an instance of the ImageList control on Form1. Right-click on the
	  control to bring up its context menu, and select properties option to display
	  the control's property page.
	
	4. Select the Images tab, and click the Insert Picture button. A dialog is
	  displayed asking which file(s) you want to insert.
	
	5. Find two image files located in the root directory of a drive, and select
	  both. Click Open to add the pictures. You will get the error message telling
	  you that the insert failed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCmnCtrls kbImgList kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
