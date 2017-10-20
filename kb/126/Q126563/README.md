---
layout: page
title: "Q126563: PRB: SetItemRects Causes Server to Change Zoom Factor"
permalink: /kb/126/Q126563/
---

## Q126563: PRB: SetItemRects Causes Server to Change Zoom Factor

{% raw %}

	Article: Q126563
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbole kbnokeyword kbActiveX kbCOMt kbMFC kbVC150 kbVC200 kbVC210 kbGrpDSMFCATL kbNoUpda
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, versions 1.50, 1.51 
	   - Microsoft Visual C++ 32-bit Edition, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling COleClientItem::SetItemRects() causes the server to change its
	zoom-factor.
	
	RESOLUTION
	==========
	
	In some cases, you may find it advantageous to have a container change the area
	provided to an in-place active object without changing the zoom factor of the
	object. To do this, have the container first set the object's extents by calling
	COleClientItem::SetExtent and then set the in-place item's window size by
	calling COleClientItem::SetItemRects.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	COleClientItem::SetItemRects() calls IOleInPlaceObject::SetObjectRects() and
	passes its parameters. The following is the description of
	IOleInPlaceObject::SetObjectRects() in Volume 2 of the OLE2 Programmer's
	Reference:
	
	  The object should compare its width and height with those provided by its
	  container (conveyed through lprcPosRect). If the comparison does not result
	  in a match, the container is applying either scaling or zooming to the
	  object. The object must then decide whether it should continue the in-place
	  editing in the scale/zoom mode or deactivate."
	
	The object's width and height are determined by the extent information passed to
	it via COleClientItem::SetExtent() -- which calls IOleObject::SetExtent on the
	in-place object). Therefore if you want the client application to change the
	rectangle used by an in-place active object, have it first set the extent of the
	object in HIMETRIC units to the size of the new rectangle and then set the
	rectangle.
	
	The following sample code demonstrates this technique. It assumes that
	CMyClientItem is derived from COleClientItem and that rect has coordinates
	specified with respect to the view which contains the object. It returns true if
	SetItemRects was successful.
	
	Sample Code
	-----------
	
	  BOOL CMyClientItem::MySetObjectRects(CRect &rect)
	  {
	    ASSERT_VALID(this);
	    ASSERT(m_lpObject != NULL);
	    ASSERT(IsInPlaceActive());
	
	    // get the size of this new rectangle
	    CSize size = rect.Size();
	
	    // now convert this size to HIMETRIC units
	    size.cx = XformHeightInPixelsToHimetric(NULL, size.cx);
	    size.cy = XformWidthInPixelsToHimetric(NULL, size.cy);
	
	    // use this size to set the extent of the object
	    SetExtent(size);
	
	    // finally set the new size for the in-place window
	    return SetItemRects(rect, rect);
	  }
	
	Additional query words: 1.00 1.50 2.00 2.10 2.50 2.51 3.00 3.10 scale zoom size ole
	
	======================================================================
	Keywords          : kbole kbnokeyword kbActiveX kbCOMt kbMFC kbVC150 kbVC200 kbVC210 kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
