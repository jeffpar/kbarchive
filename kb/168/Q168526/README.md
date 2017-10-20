---
layout: page
title: "Q168526: FIX: Top-Level Form Releases Undocked Toolbars in VFP 5.0"
permalink: /kb/168/Q168526/
---

## Q168526: FIX: Top-Level Form Releases Undocked Toolbars in VFP 5.0

{% raw %}

	Article: Q168526
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbcode kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.0, clicking the Close button (the "x" in the upper-right
	corner of the form) of a Top-Level form destroys undocked toolbars. However, a
	docked toolbar is not destroyed. Pressing the Close button should not destroy
	the undocked toolbar. This happens prior to the QueryUnload event of the form
	and cannot be controlled by the developer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Microsoft Visual
	FoxPro version 5.0a for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place the following code in a .prg file and run it. A Top-Level form,
	  Myform1, with a docked toolbar appears.
	
	        **** Program Example****
	
	         PUBLIC goForm
	         goForm = CREATEOBJECT("myform")
	         goForm.Show()
	
	         DEFINE CLASS myform AS form
	           BackColor = RGB(255,255,255)
	           ShowWindow = 2
	           oToolbar = .NULL.
	
	           PROCEDURE Activate()
	             IF ISNULL(THIS.oToolbar)
	               THIS.oToolbar = CREATEOBJECT("mytoolbar")
	               THIS.oToolbar.Show()
	             ENDIF
	           ENDPROC
	
	           PROCEDURE QueryUnload()
	             NODEFAULT
	           ENDPROC
	         ENDDEFINE
	
	         DEFINE CLASS mytoolbar AS toolbar
	           ShowWindow = 1
	           ADD OBJECT mybutton AS commandbutton WITH ;
	            Top = 5, ;
	            Left = 5, ;
	            Height = 22, ;
	            Width = 24, ;
	            Caption = ""
	
	           PROCEDURE Init()
	             THIS.Dock(0)
	           ENDPROC
	         ENDDEFINE
	
	         ****End of Code Example****
	
	2. While the toolbar is docked, attempt to close Myform1 by clicking the close
	  button of the form. Since the QueryUnload contains the NODEFAULT command, the
	  form does not close.
	
	3. Now, undock the toolbar and attempt to close Myform1 again by clicking the
	  close button of the form. The undocked toolbar disappears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
