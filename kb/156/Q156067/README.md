---
layout: page
title: "Q156067: FIX: Setting Tooltip Text in OnToolHitTest Causes Assertion"
permalink: /kb/156/Q156067/
---

## Q156067: FIX: Setting Tooltip Text in OnToolHitTest Causes Assertion

{% raw %}

	Article: Q156067
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbMFC kbToolTip KbUIDesign kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSMFCATL kb
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to set the text for a tooltip in the OnToolHitTest function of a CWnd
	by assigning a resource ID to the TOOLINFO struct's lpszText member causes the
	following assertion to occur:
	
	  
	
	  Debug assertion failed
	  File: dbgheap.c
	  Line: 1011
	
	For example, setting the TOOLINFO struct as follows:
	
	     pTI->lpszText= MAKEINTRESOURCE(SomeId);
	     pTI->hinst=AfxGetInstanceHandle();
	
	where pTI is a pointer to the TOOLINFO struct, will cause the problem. Setting
	the TOOLINFO struct members in this manner allows the programmer to specify a
	resource that the tooltip uses to get the text for the tooltip.
	
	CAUSE
	=====
	
	The CWnd::FilterToolTipMessage() function contains the following code:
	
	     if (tiHit.lpszText != LPSTR_TEXTCALLBACK)
	         free(tiHit.lpszText);
	
	Because lpszText is not set to LPSTR_TEXTCALLBACK, the free function is called.
	However, a resource ID, rather than a string, was specified in the
	OnToolHitTest() function, and therefore the assertion occurs.
	
	RESOLUTION
	==========
	
	Instead of specifying a resource ID to load, load the resource and assign the
	text to the TOOLINFO struct's lpszText member as follows:
	
	     pTI->lpszText = (char *)malloc(200, sizeof(char));
	     if (::LoadString(AfxGetInstanceHandle(),pTI->uId, pTI->lpszText,200)==0)
	     {
	        ASSERT(FALSE);   //String resource doesn't exist
	     }
	
	MFC frees the allocated buffer after it has added the tool (that is, after it has
	sent the TTM_ADDTOOL message).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been fixed in Visual C++ version
	5.0.
	
	Additional query words: kbVC400bug tool tip
	
	======================================================================
	Keywords          : kbMFC kbToolTip KbUIDesign kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
