---
layout: page
title: "Q111017: PRB: Multiple CEditViews on Document Don't Behave as Expected"
permalink: /kb/111/Q111017/
---

## Q111017: PRB: Multiple CEditViews on Document Don't Behave as Expected

{% raw %}

	Article: Q111017
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDocView kbMFC kbVC kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++ 32-bit Edition, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you write an application that uses multiple CEditView views for one document,
	you will find that changes to one view will not be reflected in the other views.
	This behavior will also be seen with splitter windows when the panes are
	CEditViews.
	
	CAUSE
	=====
	
	The CEditViews are effectively edit controls. This means that the text in a
	CEditView is stored in the view rather than the document object. Normally, when
	the document needs to serialize (load or save), it calls the CEditView's
	SerializeRaw() member function.
	
	RESOLUTION
	==========
	
	This is expected behavior and is not a problem in the Microsoft Foundation Class
	Library.
	
	MORE INFORMATION
	================
	
	For an application that makes use of the CEditView's SerializeRaw() member
	function, please see the SuperPad example included in the Visual C++ MFC
	samples. The following are the default installation directories or distribution
	CD directories of the SuperPad sample:
	
	   Visual C++ version  |         Directory
	 --------------------------------------------------------------
	         1.0           |  \MSVC\MFC\SAMPLES\SUPERPAD
	         1.5x          |  \MSVC15\MFC\SAMPLES\SUPERPAD
	         2.x           |  \MSVC20\SAMPLES\MFC\SUPERPAD
	         4.0           |  \MSDEV\SAMPLES\MFC\OLE\SUPERPAD
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDocView kbMFC kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
