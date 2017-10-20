---
layout: page
title: "Q157040: INFO: BackStyle=0 Is Transparent When EditBox Is Not in Focus"
permalink: /kb/157/Q157040/
---

## Q157040: INFO: BackStyle=0 Is Transparent When EditBox Is Not in Focus

{% raw %}

	Article: Q157040
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	EditBox controls that were used in the design of Visual FoxPro for Windows,
	versions 3.0 and 3.0b appear differently in Visual FoxPro for Windows 5.0 or 6.0
	if the properties include BackStyle equal to Transparent.
	
	The transparent property is not implemented properly in Visual FoxPro 3.0 and
	3.0b EditBox controls. It is correct in Visual FoxPro 5.0 and 6.0.
	
	MORE INFORMATION
	================
	
	When the EditBox's ReadOnly property is false (ReadWrite is enabled), the
	control is transparent when not in focus. However, when focus is moved to it,
	the BackStyle changes to Opaque and the BackColor property is invoked so that
	editing can be done against an opaque background. The default BackColor is white
	[RGB(255,255,255)].
	
	When the EditBox ReadOnly property is true, the control is transparent when not
	in focus. However, when focus is moved to it, the BackStyle changes to Opaque
	with the BackColor set to the same as the Windows Display 3D Object color
	settings.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form (default gray BackColor).
	
	2. Add an EditBox control and at least one other control.
	
	3. In the Properties window, set Edit1.ReadOnly = .T.
	
	4. In the Properties window, set Edit1.BackStyle = 0 Transparent.
	
	5. Add a shape to the form.
	
	6. Set Shape1.BackColor = rgb(255,255,255) white.
	
	7. Position Shape1 so it occupies at least some of the space occupied by Edit1
	  (they overlap).
	
	8. Select Shape1 and, on the Format menu, click Send to Back so the shape is
	  behind the EditBox control.
	
	9. Save and run the form, and tab through the controls.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
