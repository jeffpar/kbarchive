---
layout: page
title: "Q145696: FIX: CDC::CreatePointFont() May Create Wrong Size Font"
permalink: /kb/145/Q145696/
---

## Q145696: FIX: CDC::CreatePointFont() May Create Wrong Size Font

{% raw %}

	Article: Q145696
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbcode kbDocView kbFont kbGDI kbMFC kbVC400bug kbVC410fix kbNoUpdate
	Last Modified: 20-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling CDC::CreatePointFont() results in a font that is not of the point size
	requested. This will occur when the y component of the DC's viewport origin is
	not at 0. A common place for this to occur would be in a CScrollView class where
	the user has scrolled the view vertically.
	
	CAUSE
	=====
	
	MFC uses DPtoLP() to map the given device coordinates to logical coordinates.
	The case where the viewport origin is not at 0 is not taken into consideration
	by this code.
	
	RESOLUTION
	==========
	
	Set the y component of the viewport origin to 0 before calling
	CreatePointFont(). The following code demonstrates the workaround. Here pDC is a
	pointer to a CDC.
	
	Sample Code
	-----------
	
	  /* Compile options needed: default
	  */ 
	  POINT pt;
	  SetViewportOrgEx(pDC->GetSafeHdc(), 0, 0, &pt); // set origin to 0,0
	  CreatePointFont(120, "Courier", pDC);
	  SetViewportOrgEx(pDC->GetSafeHdc(), pt.x, pt,y, NULL); // restore origin
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	Additional query words: kbVC400bug 4.10 4.00
	
	======================================================================
	Keywords          : kbcode kbDocView kbFont kbGDI kbMFC kbVC400bug kbVC410fix kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
