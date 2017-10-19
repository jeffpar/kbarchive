---
layout: page
title: "Q139648: PRB: OLE Drop Target Does Not Permit Drop"
permalink: /kb/139/Q139648/
---

## Q139648: PRB: OLE Drop Target Does Not Permit Drop

	Article: Q139648
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbDragDrop kbMFC kbVC150 kbVC200 kbVC220 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52, 1.52a 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you drag an OLE object over a given drop target window, the cursor feedback
	indicates that a drop is not allowed. However, the same object can be dropped on
	other drop targets successfully, and other objects can be dropped on the given
	drop target.
	
	CAUSE
	=====
	
	The object descriptor for the object indicates the size of the object is (0,0),
	and the drop target window's OnDragOver method is using the object rectangle to
	determine whether the object is within the client area of the window.
	
	RESOLUTION
	==========
	
	If the computed position rectangle for a data object is empty, inflate the
	rectangle to size (1,1) before testing whether the rectangle is within the
	client area of the drop target window.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Applications that register a window as an OLE drop target should probably check
	the position of a data object that is dragged over the window before permitting
	a drop to occur. For example, the MFC sample program Oclient performs the
	following check in its OnDragOver method:
	
	     DROPEFFECT CMainView::OnDragOver(COleDataObject*,
	        DWORD grfKeyState, CPoint point)
	     {
	        // adjust target rect by original cursor offset
	        point -= m_dragOffset;
	
	        // check for point outside logical area (in hatched region)
	        // GetTotalSize() returns the size passed to SetScrollSizes
	        CRect rectScroll(CPoint(0, 0), GetTotalSize());
	
	        CRect rectItem(point,m_dragSize);
	        rectItem.OffsetRect(GetDeviceScrollPosition());
	
	        DROPEFFECT de = DROPEFFECT_NONE;
	        CRect rectTemp;
	        if (rectTemp.IntersectRect(rectScroll, rectItem))
	        {
	           //... figure out the drop effect
	        }
	
	        //...update drop effect
	
	        return de;
	     }
	
	However, for some objects, such as Microsoft Word version 6.0 Documents, the
	m_dragSize reported by the data object is (0,0). In this case, the call to
	IntersectRect returns FALSE, and the drop effect returned is DROPEFFECT_NONE.
	
	When the object position rectangle is inflated to size (1,1), IntersectRect
	returns TRUE and the correct drop effect is returned. In the previous example,
	you would inflate the rectangle by adding the following lines after the rectItem
	is declared: "
	
	     if (rectItem.IsRectEmpty())
	     {
	        // Some applications might have a null size in the object descriptor
	        rectItem.InflateRect(1,1);
	     }
	
	" (without the quotation marks)
	
	Additional query words: 0Client drag/drop Word
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbDragDrop kbMFC kbVC150 kbVC200 kbVC220 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2
	Issue type        : kbprb
	
	=============================================================================
	
