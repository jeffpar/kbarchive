---
layout: page
title: "Q259371: BUG: ActiveX Controls Are Disabled"
permalink: kb/259/Q259371/
---

## Q259371: BUG: ActiveX Controls Are Disabled

	Article: Q259371
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ActiveX control cannot be manipulated visually if the form containing the
	control has scrollbars and is part of a modal formset.
	
	RESOLUTION
	==========
	
	There are two known workarounds:
	
	- Set the WindowStyle property of the formset to 0 (modeless.)
	
	- Set the ScrollBars property of the form to 0 (none).
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form. From the Form menu in the Form Designer, use the Create Form
	  Set option to create a FormSet for the form.
	
	2. Set the WindowType property of the formset to "1 - Modal."
	
	3. Add an ActiveX control such as the MS Date and Time Picker or the Calendar
	  control to the form.
	
	4. Set the ScrollBar property of the form to one of the following:
	
	   - "1-Horizontal"
	   - "2-Vertical"
	   - "3-Both"
	
	5. Run the form and click on the ScrollBar property of the ActiveX control.
	
	Note that the control behaves as if it is disabled. The click of the control does
	not fire and nothing can be selected in the control.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
