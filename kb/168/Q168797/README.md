---
layout: page
title: "Q168797: FIX: ImageList Control Does Not Accept Small Icons"
permalink: /kb/168/Q168797/
---

## Q168797: FIX: ImageList Control Does Not Accept Small Icons

{% raw %}

	Article: Q168797
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to insert a 16x16 icon into the ImageList Control, the control
	recreates the icon into a 32x32 icon and uses the larger icon instead.
	
	RESOLUTION
	==========
	
	To work around this bug, click 16x16 in the General Tab of the ImageList Control
	Properties dialog box prior to loading your icon.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	To reproduce this bug, you will need a 16x16 icon file.
	
	1. Start 32-bit Visual Basic 4.0, or, if it is already running, click New
	  Project on the File menu.
	
	2. Add an ImageList control to the Form1 form.
	
	3. Right-click the ImageList control and click Properties. The ImageList Control
	  Properties dialog box appears.
	
	4. In the Images tab, click the Insert Picture button and insert your 16x16 icon
	  into the ImagesList control. Click the General tab and note that the size
	  remains at 32x32.
	
	Additional query words: kbVBp400bug kbVBp600fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
