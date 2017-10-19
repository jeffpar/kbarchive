---
layout: page
title: "Q177554: BUG: MousePointer Cannot Be Set to 99-Custom for Form Objects"
permalink: /kb/177/Q177554/
---

## Q177554: BUG: MousePointer Cannot Be Set to 99-Custom for Form Objects

	Article: Q177554
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MousePointer property cannot be set to "99-Custom" for any of the form
	objects under Traditional Chinese (TC) versions of Visual FoxPro 5.0x. However,
	if the form is being designed under the US version of Visual FoxPro 5.0x and the
	MousePointer property is set to "99-Custom", the form can be successfully
	executed under the Traditional Chinese version of Visual FoxPro.
	
	RESOLUTION
	==========
	
	Create the form with the United States (US) version of Visual FoxPro 5.0a and
	then move the form to the Traditional Chinese version of Visual FoxPro 5.0a to
	add or modify localized components such as captions and labels.
	
	NOTE: If you edit the MousePointer property, then the "99-Custom" setting is no
	longer available under the Traditional Chinese version of Visual FoxPro.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install the Traditional Chinese version of Visual FoxPro 5.0a on a computer
	  running Windows 95 or Windows NT.
	
	2. Create a form and view its MousePointer property.
	
	  NOTE: There is no selection for "99-Custom" in the property list.
	
	Additional query words: mousepointer
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
