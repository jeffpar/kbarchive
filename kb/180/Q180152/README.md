---
layout: page
title: "Q180152: HOWTO: Print from an Active Document Server"
permalink: /kb/180/Q180152/
---

## Q180152: HOWTO: Print from an Active Document Server

{% raw %}

	Article: Q180152
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0, 6.0
	Operating System(s): 
	Keyword(s): kbole kbprint kbwizard kbVC500 kbVC600
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to print from an Active Document (DocObject) server
	while the server is in-place activated in an Active Document container.
	
	MORE INFORMATION
	================
	
	An Active Document server provides a mechanism for viewing the contents of a
	document within a single container, such as Microsoft Internet Explorer or
	Microsoft Office Binder. Active documents are displayed in the entire client
	area of the container, are involved in menu merging, and are always in-place
	active.
	
	Microsoft Visual C++ provides an AppWizard that can help you create an Active
	Document server implemented using the Microsoft Foundation Classes (MFC).
	
	When an Active document is in-place activated, a user may want to print the
	contents of the document using the Print menu item available on the container
	File menu. To provide this functionality in an MFC Active document server,
	perform the following steps:
	
	1. Declare an OLE command map in the declaration file for your
	  COleServerDoc-derived class as follows:
	
	        class CMyOleServerDoc : public COleServerDoc
	        {
	           ...
	        protected:
	           DECLARE_OLECMD_MAP()
	        };
	
	2. Implement the OLE command map in the implementation file for your
	  COleServerDoc-derived class as follows:
	
	        BEGIN_OLECMD_MAP(CMyOleServerDoc, COleServerDoc)
	           ON_OLECMD_PRINT()    // Implements OLE printing
	        END_OLECMD_MAP()
	
	REFERENCES
	==========
	
	"Inside OLE" by Kraig Brockschmidt, published by Microsoft Press. "Understanding
	ActiveX and OLE" by David Chappell, published by Microsoft Press.
	
	Additional query words: print ON_OLECMD_PRINT Active document DocObj
	
	======================================================================
	Keywords          : kbole kbprint kbwizard kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINNT:5.0, 6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
