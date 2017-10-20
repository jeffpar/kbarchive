---
layout: page
title: "Q194890: BUG: Clearing ImageList From ToolBar Shrinks ToolBar Buttons"
permalink: /kb/194/Q194890/
---

## Q194890: BUG: Clearing ImageList From ToolBar Shrinks ToolBar Buttons

{% raw %}

	Article: Q194890
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbToolbar kbVBp kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When clearing the "ImageList" property of a ToolBar control, the ToolBar buttons
	unexpectedly shrink to a very small size.
	
	RESOLUTION
	==========
	
	Switching the application in and out of run-mode, or resetting the ImageList
	property will cause the ToolBar buttons to revert to the correct size.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Choose Components from the Project menu, check "Microsoft Windows Common
	  Controls 6.0," and click OK.
	
	3. Add a ToolBar and an ImageList control to Form1.
	
	4. View the ImageList's custom property page and select the "Images" tab.
	
	5. Click "Insert Picture," select one or more files from a folder under the
	  Icons folder, such as "Arw01dn.ico," and click "OK."
	
	6. View the ToolBar's custom property page.
	
	7. Set the "ImageList" property to "ImageList1."
	
	8. Click the "Buttons" tab and insert a button. Set this button's "Image"
	  property to "1" and click "Apply."
	
	9. Switch back to the "General" tab, set the "ImageList" property to
	  "<None>," and click "Apply." The button and the ToolBar shrink to a
	  very small size when no change in size was expected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCmnCtrls kbToolbar kbVBp kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
