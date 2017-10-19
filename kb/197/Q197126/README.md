---
layout: page
title: "Q197126: BUG: IPF Referencing Default Property of Nonexistent Image Ctrl"
permalink: /kb/197/Q197126/
---

## Q197126: BUG: IPF Referencing Default Property of Nonexistent Image Ctrl

	Article: Q197126
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access the default property of a nonexistent Image Control in a
	control array in Visual Basic 6.0, an Invalid Page Fault (IPF) or application
	error occurs instead of a run-time error.
	
	RESOLUTION
	==========
	
	Specify the Picture property of the Image1(<index>).Picture explicitly,
	instead of depending on the default property.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE Project. Form1 is created by default.
	
	2. Place an Image Control on Form1.
	
	3. Set the Index Property of the Image Control to "0."
	
	4. Add the following code in the General Declarations section of Form1:
	
	        Private Sub Form_Load()
	           Dim p As StdPicture
	           Set p = Pic()
	        End Sub
	
	        Private Function Pic() As StdPicture
	           Set Pic = Image1(1) ' NOTE THAT IMAGE1(1) DOESN'T EXIST!
	        End Function
	
	5. Press the F8 key to start the project. Press F8 to step through the project.
	
	6. Close Form1.
	
	7. Repeat steps 5 and 6 several times to get the IPF.
	
	8. To avoid the page fault, specify Image1(1).Picture explicitly instead of
	  depending on the default property. So, repeat steps 1 through 4, replacing
	  the Pic Function with the following:
	
	        Private Function Pic() As StdPicture
	           Set Pic = Image1(1).Picture
	        End Function
	
	9. Run the project.
	
	RESULT: Notice that it throws the following error as expected, because the array
	element specified by the index does not exist:
	
	  Run-time Error '340:
	  Control array element '1' doesn't exist
	
	Additional query words: GPF IPF
	
	======================================================================
	Keywords          : kbCtrl kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
