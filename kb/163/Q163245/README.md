---
layout: page
title: "Q163245: BUG: StatusBar Ctrl Does Not Show Size Grip in Top-Level Form"
permalink: kb/163/Q163245/
---

## Q163245: BUG: StatusBar Ctrl Does Not Show Size Grip in Top-Level Form

	Article: Q163245
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Microsoft StatusBar control on a top-level form does not display the size
	grip--the three diagonal lines at the lower left of the status bar. Windows 95
	interface standards state that top-level forms should have size grips if they
	are resizable. A top-level form is resizable by definition.
	
	When used on a form with the ShowWindow property set to other than 2 - As
	Top-Level Form, the StatusBar does not display the size grip. But this is not a
	Windows 95 specification for 0 - In Screen, or 1 - In Top-level Form forms.
	
	CAUSE
	=====
	
	The StatusBar control is a member of Comctl32.dll. At the time Visual FoxPro for
	Windows, version 5.0 was released, the StatusBar control did display a size grip
	on a top-level form.
	
	Several other Microsoft developer's products that have been released subsequently
	replace the Comctl32.dll that was installed with Visual FoxPro 5.0.
	
	When placed in the OLE Container Control on a Visual FoxPro 5.0 form, the
	StatusBar control that is in the later version of Comctl32.dll does not exhibit
	the size grip, although the form can be resized by grabbing the lower-right
	corner with the mouse pointer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbinterop kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
