---
layout: page
title: "Q141888: Blocks32: Demonstrates CRectTracker Class"
permalink: /kb/141/Q141888/
---

## Q141888: Blocks32: Demonstrates CRectTracker Class

{% raw %}

	Article: Q141888
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbsample kbui kbnokeyword kbMFC KbUIDesign kbVC400 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	BLOCKS32 is a sample that demonstrates CRectTracker class. The user of the
	BLOCKS32 sample can create rectangle, ellipse, and rounded rectangle graphical
	objects. Once the objects are created, the mouse can be used to manipulate the
	objects by changing their size or position on the screen. The user can save to a
	disk file the state of objects in the document for use in another session.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Blocks32.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	MORE INFORMATION
	================
	
	BLOCKS32 demonstrates the following:
	
	- Deriving a class from the CObject class
	
	- Using virtual functions with user-defined classes
	
	- Maintaining a list of classes
	
	- Creating static data and static member functions in a class
	
	- Using the serialization feature of the CObject class to save classes to and
	  read classes from a disk file
	
	- Using CRectTracker class
	
	BLOCKS32 uses the following MFC classes: CArchive, CBrush, CClientDC, CDC, CFile,
	CFrameWnd, CPaintDC, CPen, CPoint, CRect, CWinApp, and CRectTracker.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbfile kbsample kbui kbnokeyword kbMFC KbUIDesign kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
