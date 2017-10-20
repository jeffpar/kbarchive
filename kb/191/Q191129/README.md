---
layout: page
title: "Q191129: FIX: Menu Merge Problem with Server in Active Doc Container"
permalink: /kb/191/Q191129/
---

## Q191129: FIX: Menu Merge Problem with Server in Active Doc Container

{% raw %}

	Article: Q191129
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveDocs kbActiveX kbCOMt kbMFC kbVC500bug kbVC600bug kbDSupport kbGrpDSMFCAT
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Multiple Help menus appear when an MFC server is activated within an Active
	document server that supports in-place editing (such as Microsoft Word), and
	that document is opened by an Active document container (such as Internet
	Explorer 4.0). In debug builds, an ASSERT occurs in Oledocip.cpp line 151.
	
	CAUSE
	=====
	
	This problem occurs with any in-place activation server created with MFC, where
	the server is not an Active document server.
	
	RESOLUTION
	==========
	
	One workaround is to enable your server as an Active document. See the Visual
	C++ Help topic "Upgrade to an Active Document Server" for details on adding this
	support to an existing Active document server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Build Scribble Step7, and run it to register it on the system.
	
	2. Start Microsoft Word and insert a Scribb document.
	
	3. Save the Word document, and open it in Internet Explorer.
	
	4. Double-click on the Scribb Object to activate it.
	
	RESULTS:
	
	  ASSERT in olefrm.cpp line 637.
	
	  There are also two Help menus in the Internet Explorer menu bar.
	
	REFERENCES
	==========
	
	Microsoft Visual C++ Documentation: Using Visual C++; Visual C++ Programmer's
	Guide; Porting and Upgrading; How Do I...; How Do I: Porting and Upgrading;
	click: "To Active document servers" under the "Upgrade In- Process Servers"
	section.
	
	Additional query words: DocObject
	
	======================================================================
	Keywords          : kbole kbActiveDocs kbActiveX kbCOMt kbMFC kbVC500bug kbVC600bug kbDSupport kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
