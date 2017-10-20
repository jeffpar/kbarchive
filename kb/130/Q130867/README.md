---
layout: page
title: "Q130867: FIX: Link Paste Update Causes ASSERT in AFXWIN1.INL"
permalink: /kb/130/Q130867/
---

## Q130867: FIX: Link Paste Update Causes ASSERT in AFXWIN1.INL

{% raw %}

	Article: Q130867
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbole kbMFC kbVC kbVC200 kbGrpDSMFCATLkbbuglist kbfixlist
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some containers respond to change notifications in Paste Link objects by calling
	GetData() on the linked object with a pointer to a valid DVTARGETDEVICE. This is
	usually a printer device or something other than the display context, which can
	be created by the server. In the case where the container is a 16-bit
	Windows-based application, this may cause an assertion in AFXWIN1.INL line 457.
	
	CAUSE
	=====
	
	In the case of a 16-bit Windows-based container application, MFCANS32.DLL
	attempts to translate the fields of the 16-bit DVTARGETDEVICE structure to
	32-bit equivalents and pass the new structure on to the 32-bit MFC-based server
	application. In doing this, it uses a copy of the DVTARGETDEVICE structure
	containing mis-ordered fields. Specifically, the tdDeviceNameOffset and the
	tdDriverNameOffset fields are reversed in order. This causes any server that
	attempts to use the DVTARGETDEVICE to create a valid device context to fail when
	it uses these fields to call ::CreateDC().
	
	In the MSVC20\MFC\SRC\OLEMISC.CPP module, the utility function _AfxOleCreateDC()
	does not check the return code from ::CreateDC() and returns an invalid HDC as a
	result. Later, that handle is attached to a CDC object. When AFXWIN1.INL's
	CDC::GetDeviceCaps() function is called, it validates the HDC member that was
	attached, and that is where the assertion occurs. Depending on the circumstances
	and container application being used, the symptom may be different.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++,
	32-bit Edition, version 2.1 for x86 platforms.
	
	Additional query words: 2.00 createdc dvtargetdevice mfcans32
	
	======================================================================
	Keywords          : kbole kbMFC kbVC kbVC200 kbGrpDSMFCATL kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
