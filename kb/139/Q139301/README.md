---
layout: page
title: "Q139301: FIX: C2664 Error w/Property Sheet Component Added to CDocument"
permalink: kb/139/Q139301/
---

## Q139301: FIX: C2664 Error w/Property Sheet Component Added to CDocument

	Article: Q139301
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbCompGallery kbGrpDSMFCAT
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a modeless property sheet from the Property Sheet component in
	the Component Gallery into a CDocument-derived class or other non-CWnd derived
	class, the compiler generates this error:
	
	  C2664:'Create' : cannot convert parameter 5 from 'class CDocDerivedClass
	  *const' to 'class CWnd *' (new behavior; please see help).
	
	CAUSE
	=====
	
	The modeless property sheet component placed in an application includes a
	CMiniFrameWnd-derived class that actually contains the modeless property sheet.
	When using the component, the application calls Create() on the
	CMiniFrameWnd-derived class. This Create() requires a CWnd* to its parent window
	as its fifth argument. The code generated for your application passes 'this' to
	the Create() call. CDocument is not derived from CWnd; therefore, passing the
	'this' pointer from the CDocument into the CMiniFrame::Create() function causes
	the compiler error.
	
	RESOLUTION
	==========
	
	Place the property sheet component into a class that is derived from CWnd.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. The problem was corrected in Visual C++ version 5.0.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbCompGallery kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
