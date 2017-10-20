---
layout: page
title: "Q201588: BUG: Custom Mouse Pointer Changes Back to Default"
permalink: /kb/201/Q201588/
---

## Q201588: BUG: Custom Mouse Pointer Changes Back to Default

{% raw %}

	Article: Q201588
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp600bug kbGrpDSVB kbDSupport kbCodeSnippet
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a custom mouse pointer is placed over a control's borders on a Visual Basic
	form, the pointer may change back to the default.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The following example uses a TextBox control, but this problem occurs with other
	controls as well. This example also uses a cursor file from the default install
	location for the Graphics option. These can be found in the
	\Common\Graphics\Cursors folder on the Visual Basic 6.0 CD. Make sure that the
	path is correct for a cursor file that is available to your system.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Basic 6.0, create a new Standard EXE project. Form1 is created by
	  default.
	
	2. Place a TextBox control on Form1.
	
	3. Double-click the form to open the code window for Form1.
	
	4. Place the following code in the Form_Load event of Form1.
	
	  Me.MousePointer = vbCustom
	  Set Me.MouseIcon = LoadPicture("C:\Program Files\Microsoft Visual Studio\Common\Graphics\Cursors\NS_04.CUR")
	
	5. Run the program.
	
	6. Move the mouse to hover over the border of the TextBox. The custom cursor
	  changes back to the default.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600bug kbGrpDSVB kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
