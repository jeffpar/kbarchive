---
layout: page
title: "Q259404: BUG: MFC OLE Container May Merge Server Menus Incorrectly"
permalink: /kb/259/Q259404/
---

## Q259404: BUG: MFC OLE Container May Merge Server Menus Incorrectly

{% raw %}

	Article: Q259404
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbole kbContainer kbMFC kbVC600bug kbDSupport kbGrpDSMFCATLkbbuglist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Foundation Class Library (MFC) Active Document Container programs may
	improperly merge server menus when in-place activating an Active Document
	object. Top-level menu items may not appear in the expected order.
	
	CAUSE
	=====
	
	Some Active Document Servers (such as Microsoft Excel) do not always pass a
	zero-initialized array of OLEMENUGROUPWIDTHS to the container's
	IOleInPlaceFrame::SetMenus function. The way in which MFC implements
	IOleInPlaceFrame::SetMenus makes use of the AfxMergeMenus function, which is
	used by both MFC containers and servers. When the OLEMENUGROUPWIDTHS array
	contains non-zeros, the AfxMergeMenus call runs the server code path instead of
	the code path for containers, which causes the menus to be merged in the wrong
	order.
	
	RESOLUTION
	==========
	
	To work around this problem, override the container's COleDocObjectItem-derived
	class's OnInsertMenus function, initialize the OLEMENUGROUPWIDTHS structure with
	zeros, and then call the base COleDocObjectItem::OnInsertMenus. For example:
	
	  void CTestAppCntrItem::OnInsertMenus(CMenu* pMenuShared, LPOLEMENUGROUPWIDTHS lpMenuWidths)
	  {
	     memset(lpMenuWidths,0,sizeof(OLEMENUGROUPWIDTHS));
	     COleDocObjectItem::OnInsertMenus(pMenuShared,lpMenuWidths);	
	  }
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a generic MFC (MDI) Active Document Container with the MFC AppWizard.
	
	2. Build and run the application, and then insert an Excel Chart object into the
	  document. Note that the menu items are merged properly.
	
	3. Switch from the Chart tab to the Sheet tab, and note that the menus are no
	  longer in the proper order.
	
	When you click the Sheet tab, a different view of the object is displayed, which
	causes a different set of menus to be displayed. This problem occurs for any MFC
	container that supports more than just the File group of menu items. A
	wizard-generated MDI application contains both the File and Window groups of
	menus. You can also have a Window group if you add it manually. If you only have
	a File group, however, the menus merge properly.
	
	This problem does not occur in a generic SDI application, because the AppWizard
	only adds the File menu group to your menu resource.
	
	REFERENCES
	==========
	
	Chapter 22, Inside OLE 2nd Edition. Kraig Brockschmidt, Microsoft Press.
	
	Additional query words: OLEMENUGROUPWIDTHS COleDocObjectItem codepath
	
	======================================================================
	Keywords          : kbole kbContainer kbMFC kbVC600bug kbDSupport kbGrpDSMFCATL kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
