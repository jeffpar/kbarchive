---
layout: page
title: "Q173249: FIX: Print Preview Doesn't Honor Font Width Setting"
permalink: kb/173/Q173249/
---

## Q173249: FIX: Print Preview Doesn't Honor Font Width Setting

	Article: Q173249
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbDocView kbMFC KbUIDesign kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC4
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.52 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MFC has a Print Preview feature that shows you on the screen what your document
	should look like when it is printed. However, if you use a font with a non-zero
	width in your OnDraw routine to make the text appear "condensed" or "squished",
	then the preview MFC shows you on the screen does not appear as the document
	will look when it is actually printed.
	
	CAUSE
	=====
	
	A bug in the MFC CPreviewDC::MirrorFont forces a zero value for the font width
	which causes a normal-looking font to be used in the Print Preview.
	
	RESOLUTION
	==========
	
	Insert an exact copy of the MFC function into one of your project source files
	and make the needed corrections. A linker option override will force it to use
	your corrected version of the function and ignore MFC's function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	     void CFntWidthView::OnDraw(CDC* pDC)
	     {
	        pDC->SetMapMode(MM_LOENGLISH);
	
	        LOGFONT lfFont;
	        CFont fontNew, *fontOld;
	        ZeroMemory(&lfFont, sizeof(lfFont));
	        lstrcpy(lfFont.lfFaceName, "Arial");
	        lfFont.lfWidth = 10;
	        lfFont.lfHeight = 50;
	        fontNew.CreateFontIndirect(&lfFont);
	
	        fontOld = pDC->SelectObject(&fontNew);
	        pDC->TextOut(0, -100, "Font Width lfWidth = 10.", 24);
	        pDC->SelectObject(fontOld);
	     }
	
	Steps to Workaround
	-------------------
	
	You can work around the problem only for projects statically linked to MFC. The
	workaround uses the linker /FORCE:MULTIPLE option to override MFC's version of
	CPreviewDC::MirrorFont with your corrected version. Follow the steps below to
	work around this problem:
	
	1. Insert the following statements at the very end of one of your source files:
	
	        #include "afxpriv.h"
	        void AFXAPI AfxDeleteObject(HGDIOBJ* pObject);
	
	2. Locate MFC's CPreviewDC::MirrorFont function (in source file dcprev.cpp) and
	  copy the entire function just after the statements listed above.
	
	3. Make the following corrections to the function:
	
	Change:
	
	  logFont.lfWidth = 0;
	
	To:
	
	  logFont.lfWidth = tm.tmAveCharWidth;
	
	4. From the Build menu, click Settings, and on the General tab, select "Use MFC
	  in a static library" in the Microsoft Foundation Classes drop-down box.
	
	5. Click the Project Settings Link tab. In the Category drop-down box, select
	  Customize and make sure the "Force file output" option is set.
	
	6. Rebuild your application. When you rebuild, you will get three warnings that
	  can be ignored:
	
	  
	
	    LINK : warning LNK4075: ignoring /INCREMENTAL due to /FORCE
	      specification
	
	  
	
	    nafxcwd.lib(dcprev.obj) : warning LNK4006: "protected: void __thiscall
	      CPreviewDC::MirrorFont(void)"(?MirrorFont@CPreviewDC@@IAEXXZ)
	      already defined in FntWidthView.obj; second definition ignored
	
	  
	
	    Debug/FntWidth.exe : warning LNK4088: image being generated due to
	      /FORCE option; image may not run
	
	Now your application should behave correctly. The force option causes the linker
	to ignore MFC's version of the function and to use your function instead.
	
	For dynamically linked projects, there are no good workarounds other than
	avoiding custom-width fonts.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDocView kbMFC KbUIDesign kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
