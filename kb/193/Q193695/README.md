---
layout: page
title: "Q193695: BUG: Right-Aligned Button Text Not Visible in Vertical Toolbar"
permalink: /kb/193/Q193695/
---

## Q193695: BUG: Right-Aligned Button Text Not Visible in Vertical Toolbar

{% raw %}

	Article: Q193695
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The caption text of buttons on a vertically-aligned toolbar will not be visible
	if the button text is right-aligned.
	
	RESOLUTION
	==========
	
	This will work correctly if you have the text aligned to the bottom, or the
	toolbar aligned top or bottom with the text aligned right.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Select Components from the Project menu, check "Microsoft Windows Common
	  Controls," and then click OK.
	
	3. Place a Toolbar on the form.
	
	4. In the properties window, set the Toolbar Align property to 3- vbAlignLeft.
	
	5. Right-click the Toolbar and select Properties to bring up the Toolbar's
	  property sheets. Click the Button tab and insert two buttons in the toolbar
	  with the Captions "One" and "Two."
	
	6. Click the General tab and set the TextAlignment property to 1-
	  tbrTextAlignRight.
	
	7. Run the project, and note that the text on the buttons will not be visible.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600bug kbVBp500bug kbToolbar
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
