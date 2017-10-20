---
layout: page
title: "Q180330: PRB: InvalidateRect() Yields Empty Update Region on Win95/98/Me"
permalink: /kb/180/Q180330/
---

## Q180330: PRB: InvalidateRect() Yields Empty Update Region on Win95/98/Me

{% raw %}

	Article: Q180330
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbGDI kbMFC KbUIDesign kbVC500 kbVC600 kbOSWin95 kbOSWin98 kbWndw kbGrpDSMFCATL
	Last Modified: 20-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Win32 InvalidateRect() function, or the MFC function with the same name,
	does not invalidate any region on Microsoft Windows 95, Windows 98, or Windows
	Millennium Edition (Me), even though the function's return value is nonzero. A
	call to GetUpdateRect() afterwards returns a null rectangle, as well as a return
	value of zero. The same code works correctly on Microsoft Windows NT 4.0 and
	Windows 2000.
	
	CAUSE
	=====
	
	InvalidateRect(), or the MFC function that wraps it, behaves differently
	depending on whether you use it on Windows 95, Windows 98, Windows Me, Windows
	NT 4.0, or Windows 2000. On Windows NT 4.0 and Windows 2000, InvalidateRect()
	will accept a pointer to a non- normalized RECT and invalidate a region as if
	the RECT were normalized. Windows 95, Windows 98, and Windows Me require that
	the RECT be normalized to use it successfully with InvalidateRect().
	
	RESOLUTION
	==========
	
	You can normalize the RECT yourself, or use the MFC function
	CRect::NormalizeRect() on the RECT whose pointer you are passing to
	InvalidateRect(). To normalize a RECT, you must compare the top and bottom
	values, and swap them if the top is greater than the bottom. In addition, you
	must swap the left and right values if the left is greater than the right.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	A non-normalized rectangle can often be produced unintentionally if you use
	mapping modes other than MM_TEXT. MM_HIENGLISH, MM_LOENGLISH, MM_HIMETRIC,
	MM_LOMETRIC, and MM_TWIPS cause the y-axis to have the reverse direction of that
	for the default mapping mode (MM_TEXT). This can result in non- normalized
	RECTs. In addition, you can set up the two "custom" mapping modes (MM_ISOTROPIC
	and MM_ANISOTROPIC) so that either the y-axis or x- axis, or both, are reversed
	from that in MM_TEXT. You can produce non- normalized RECTs by using functions
	such as LPtoDP or DPtoLP when using a mapping mode other than the default.
	
	Please also note that InvalidateRect uses client area device coordinates, not
	logical coordinates. This is by design.
	
	Additional query words: Invalid Update
	
	======================================================================
	Keywords          : kbGDI kbMFC KbUIDesign kbVC500 kbVC600 kbOSWin95 kbOSWin98 kbWndw kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
