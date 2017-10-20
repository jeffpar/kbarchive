---
layout: page
title: "Q154166: PRB: ActiveX Control Painting Problems in Visual C++ 4.2"
permalink: /kb/154/Q154166/
---

## Q154166: PRB: ActiveX Control Painting Problems in Visual C++ 4.2

{% raw %}

	Article: Q154166
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbMFC kbVC420 kbVC500 kbDSupport kbGrpDSMFCATL kbNoUpdate
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ActiveX (OLE) Control may not paint correctly if it was built using Visual
	C++ 4.2. Two known issues include controls not repainting when resized, and
	control child windows not being repainted. Other painting problems have been
	observed when subclassing native Windows controls.
	
	CAUSE
	=====
	
	This behavior is caused by changes to COleControl::OnPaint which add
	optimizations to improve performance.
	
	RESOLUTION
	==========
	
	COleControl now includes a method, GetControlFlags, to control how painting will
	be handled in an ActiveX control. Removing the fastBeginPaint flag from the bit
	field returned by GetControlFlags will cause your ActiveX control to use the
	same OnPaint code found in Visual C++ 4.1
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  DWORD CMyOleControl::GetControlFlags ()
	  {
	     return COleControl::GetControlFlags() & ~fastBeginPaint;
	  }
	
	REFERENCES
	==========
	
	For an explanation of the GetControlFlags return values, see the documentation
	in Books on Line.
	
	Additional query words: OnPaint GetControlFlags OLE 96 ocx Windowless subclassed kbSweptVC600
	
	======================================================================
	Keywords          : kbole kbActiveX kbMFC kbVC420 kbVC500 kbDSupport kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:4.2,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
