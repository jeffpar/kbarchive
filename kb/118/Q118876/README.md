---
layout: page
title: "Q118876: PRB: USER Resource Leak when Improperly Using CFormView"
permalink: /kb/118/Q118876/
---

## Q118876: PRB: USER Resource Leak when Improperly Using CFormView

{% raw %}

	Article: Q118876
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbDocView kbMFC kbResourceEd kbVC100 kbVC150 kbVC151 kbVC152 kbVC400 kbprb kbGrpDSMFCAT
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a menu is specified for the dialog-box template of a CFormView, then a
	permanent USER resource leak occurs.
	
	CAUSE
	=====
	
	A CFormView object uses a dialog-box template with a child style. It is not
	valid for a child window to have a menu. If a menu is specified for a child
	window, the menu will be created when the template is created but it will not be
	attached to the CFormView and it will therefore not be destroyed when the
	CFormView object is destroyed.
	
	RESOLUTION
	==========
	
	Make sure none of the dialog-box templates for your CFormView objects have menus
	specified for them. To assist in this endeavor, starting with Visual C++, 32-bit
	Edition, version 4.0, the Dialog Editor will disable the Menu option on the
	Dialog Properties dialog box if the loaded dialog template has the Child style
	(WS_CHILD).
	
	MORE INFORMATION
	================
	
	If you are still encountering the resource leak, there are several other
	articles in the Knowledge Base that discuss possible causes:
	
	  Q71455 Tracking Down Lost System Resources
	
	  Q66654 Possible Causes for System Resource Reduction
	
	  Q72236 Maximizing the Use of Available Memory in Windows
	
	Additional query words: 1.00 1.50 1.51 1.52 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00 kbNoUpdate
	
	======================================================================
	Keywords          : kbDocView kbMFC kbResourceEd kbVC100 kbVC150 kbVC151 kbVC152 kbVC400 kbprb kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
