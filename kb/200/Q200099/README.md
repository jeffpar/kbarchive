---
layout: page
title: "Q200099: PRB: Owner-Drawn List Control in 68K App Crashes Macintosh"
permalink: /kb/200/Q200099/
---

## Q200099: PRB: Owner-Drawn List Control in 68K App Crashes Macintosh

{% raw %}

	Article: Q200099
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:4.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbVC kbDSupportkbbuglist
	Last Modified: 06-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, version 4.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When displaying an owner-drawn ListView control in report view on a 68K
	Macintosh, the Macintosh system crashes displaying the following message:
	
	  Sorry, a system error occurred.
	  "application name"
	  divide by zero
	
	If the program is executed under the debugger, Developer Studio displays the
	following message:
	
	  Exception in xxx.exe: 0x00000004: Divide by Zero
	
	CAUSE
	=====
	
	A bug with the height initialization of the ListView item for the control causes
	the internal call to ShowWindow to perform a divide-by-zero operation.
	
	RESOLUTION
	==========
	
	Set the height of the ListView control item to an appropriate value in the
	parent window's WM_MEASUREITEM handler for the ListView control. This can be
	done through the itemHeight field of the LPMEASUREITEMSTRUCT structure pointer
	provided.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The workaround involves setting the itemHeight data member of the
	LPMEASUREITEMSTRUCT structure pointer before the control is displayed. This can
	be done only in the parent window's WM_MEASUREITEM handler. It is not necessary
	to initially create the control without the WS_VISIBLE flag.
	
	The code below shows an example for an owner-drawn ListView control in a form
	view. The default height of a ListView control item on the Macintosh is 14
	pixels.
	
	  BEGIN_MESSAGE_MAP(CMyView, CFormView)
	      ON_WM_MEASUREITEM()
	      ...
	  END_MESSAGE_MAP()
	
	  // WM_MEASUREITEM is sent to parent of list control
	  void CMyView::OnMeasureItem(int nIDCtl,
	      LPMEASUREITEMSTRUCT lpMeasureItemStruct)
	  {
	      if (nIDCtl == IDC_LIST1) {
	
	          // Calculate appropriate font height.
	          int newHeight = 0;
	          CFont* pFont = (CFont*)GetFont();
	          if (pFont) {
	              LOGFONT lf;
	              pFont->GetLogFont(&lf);
	              newHeight = (lf.lfHeight > 0) ? lf.lfHeight : -lf.lfHeight;
	          }
	
	          // Set new itemHeight, use 14 as default height.
	          lpMeasureItemStruct->itemHeight = newHeight ? newHeight : 14;
	      }
	      CFormView::OnMeasureItem(nIDCtl, lpMeasureItemStruct);
	  }
	
	IDC_LIST1 is the ID of the owner-drawn ListView control.
	
	NOTE: This problem does NOT appear on Visual C++ for the Macintosh version 4.0.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Adam Kim,
	Microsoft Corporation.
	
	
	Additional query words: ownerdrawn ownerdraw CListCtrl list view WLM 4.0 4.1 4.2 owner-draw
	
	======================================================================
	Keywords          : kbHWMAC kbVC kbDSupport kbbuglist
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev400bMac
	Version           : MACINTOSH:4.0b
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
