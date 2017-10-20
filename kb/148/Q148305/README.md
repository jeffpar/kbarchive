---
layout: page
title: "Q148305: PRB: AfxFindResourceHandle Fails w/ Icons, Cursors, &amp; Strings"
permalink: /kb/148/Q148305/
---

## Q148305: PRB: AfxFindResourceHandle Fails w/ Icons, Cursors, &amp; Strings

{% raw %}

	Article: Q148305
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbcode kbCursor kbDLL kbIcon kbMFC kbResource kbString kbVC150 kbVC200 kbVC400 kbGrpDSM
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	AfxFindResourceHandle() fails when searching for icon (RT_ICON), cursor
	(RT_CURSOR), and string resources (RT_STRING).
	
	CAUSE
	=====
	
	This occurs because of how the Windows API function FindResource, which is
	called by AfxFindResourceHandle(), is designed.
	
	RESOLUTION
	==========
	
	For icons and cursors, use the RT_GROUP_ICON or RT_GROUP_CURSOR resource type
	with AfxFindResourceHandle() to return the EXE or DLL instance where the
	resource is located, and then call ::LoadIcon() or ::LoadCursor() to load the
	resource.
	
	For string resources, call CString::LoadString(). It will search the EXE and MFC
	extension DLLs for the string resource, and load it into the CString.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	AfxFindResourceHandle is an _AFXDLL-specific API for walking the resource list
	to look for a given match. It takes the name and type of a resource and returns
	the resource handle where it was first found (or NULL). It is documented in MFC
	Technote TN033: DLL Version of MFC.
	
	Sample Code
	-----------
	
	The following sample code shows successful uses of RT_GROUP_ICON and
	RT_GROUP_CURSOR:
	
	  // This sample code can be placed in any MFC application or DLL
	  // that links with the DLL version of MFC. Create an icon with ID
	  // IDI_ICON1 and a cursor with ID IDC_CURSOR1. Call TestLoadIconCursor
	  // from CWinApp::Initinstance().
	
	  HICON MyLoadIcon( LPCTSTR  lpIconName )
	  {
	      return ::LoadIcon(AfxFindResourceHandle(lpIconName, RT_GROUP_ICON),
	                        lpIconName);
	  }
	
	  HCURSOR MyLoadCursor ( LPCTSTR  lpCursorName )
	  {
	      return ::LoadCursor(AfxFindResourceHandle(lpCursorName,
	                          RT_GROUP_CURSOR),
	                          lpCursorName);
	  }
	
	  void TestLoadIconCursor(void)
	  {
	      HICON   hIcon;
	      HCURSOR hCur;
	      LPCTSTR lpcszRes;
	
	      lpcszRes = MAKEINTRESOURCE(IDI_ICON1);
	      hIcon = MyLoadIcon( lpcszRes );
	      ASSERT (hIcon != NULL);
	
	      lpcszRes = MAKEINTRESOURCE(IDC_CURSOR1);
	      hCur = MyLoadCursor( lpcszRes );
	      ASSERT (hCur != NULL);
	  }
	
	Additional query words: 2.5 2.50 2.51 2.52 3.0 3.00 3.1 3.10 3.2 3.20 AfxFindResourceHandle FindResource
	
	======================================================================
	Keywords          : kbcode kbCursor kbDLL kbIcon kbMFC kbResource kbString kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
