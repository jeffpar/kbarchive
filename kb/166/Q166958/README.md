---
layout: page
title: "Q166958: FIX: WWWQuote Sample Fails with Error Message"
permalink: /kb/166/Q166958/
---

## Q166958: FIX: WWWQuote Sample Fails with Error Message

	Article: Q166958
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbISAPI kbMFC kbVC500bug kbVC600fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to display a welcome page associated with the WWWQuote sample
	through a browser, the following error message appears:
	
	  "Could not find string 129"
	
	You will see similar errors when you try to access other pages in the sample
	directly. The IDs will be different.
	
	CAUSE
	=====
	
	This behavior is due to a bug in the resource compiler with Visual C++ 5.0.
	
	The CWWWQuote::LoadLongResource function is trying to find a custom resource of
	type "HTML." The resource compiler with Visual C++ 5.0 modifies the custom
	resource of type "HTML" to "#23." The function is unable to find the resource,
	so it displays the error message.
	
	RESOLUTION
	==========
	
	Change the custom type resource "HTML" to a different type so that the resource
	compiler does not modify it.
	
	Open the resource file as text and modify it as follows:
	
	Original lines:
	
	     ...
	     //////////////////////////////////////////////////////////////////////// 
	     // 
	     // 
	     // HTML
	     // 
	
	     IDS_HTML_WELCOME        HTML      DISCARDABLE     "HTML\\welcome.htm"
	     IDS_HTML_LOOKUPMETHOD   HTML      DISCARDABLE     "HTML\\issueerr.htm"
	     IDS_ISSUES_HEADER       HTML      DISCARDABLE     "HTML\\Selhead.htm"
	     IDS_ISSUES_TRAILER      HTML      DISCARDABLE     "HTML\\Seltail.htm"
	     IDS_GET_QUOTES_ERROR    HTML      DISCARDABLE     "HTML\\quoteerr.htm"
	     IDS_PREV_BUTTON         HTML      DISCARDABLE     "HTML\\Prev.htm"
	     IDS_NEXT_BUTTON         HTML      DISCARDABLE     "HTML\\Next.htm"
	     IDS_QUOTE_HEADER        HTML      DISCARDABLE     "HTML\\quothead.htm"
	     ...
	
	After Modification to use type "MYHTML"
	
	     ...
	     //////////////////////////////////////////////////////////////////////// 
	     // 
	     // 
	     // MYHTML
	     // 
	
	     IDS_HTML_WELCOME        MYHTML      DISCARDABLE     "HTML\\welcome.htm"
	     IDS_HTML_LOOKUPMETHOD   MYHTML      DISCARDABLE     "HTML\\issueerr.htm"
	     IDS_ISSUES_HEADER       MYHTML      DISCARDABLE     "HTML\\Selhead.htm"
	     IDS_ISSUES_TRAILER      MYHTML      DISCARDABLE     "HTML\\Seltail.htm"
	     IDS_GET_QUOTES_ERROR    MYHTML      DISCARDABLE     "HTML\\quoteerr.htm"
	     IDS_PREV_BUTTON         MYHTML      DISCARDABLE     "HTML\\Prev.htm"
	     IDS_NEXT_BUTTON         MYHTML      DISCARDABLE     "HTML\\Next.htm"
	     IDS_QUOTE_HEADER        MYHTML      DISCARDABLE     "HTML\\quothead.htm"
	     ...
	
	You also have to modify the following line in wwwquote.cpp so that you are
	looking for the correct resource type:
	
	     static const TCHAR szHTMLType[] = _T("HTML");
	
	to:
	
	     static const TCHAR szHTMLType[] = _T("MYHTML");
	
	STATUS
	======
	
	This problem was corrected in Visual C++ version 6.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Build the WWWQuote sample with Visual C++ 5.0.
	
	2. Copy the dll to the correct directory.
	
	3. Invoke the dll through the Web Browser.
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Sridhar S. Madhugiri, Microsoft Corporation
	
	
	Additional query words: WWWQuote
	
	======================================================================
	Keywords          : kberrmsg kbISAPI kbMFC kbVC500bug kbVC600fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
