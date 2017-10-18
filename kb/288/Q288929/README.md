---
layout: page
title: "Q288929: SAMPLE: FileDragTest.exe Drags and Drops File in and out of App."
permalink: kb/288/Q288929/
---

## Q288929: SAMPLE: FileDragTest.exe Drags and Drops File in and out of App.

	Article: Q288929
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbVC kbVC600 kbDSupport kbGrpDSMFCATL
	Last Modified: 02-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This sample demonstrates how to drag and drop files in and out of applications
	by using OLE drag and drop. It shows how to drag a file to your application and
	how to drag a file from your application to other places that can accept files.
	The information in this article supplements the following Microsoft Knowledge
	Base articles:
	
	  Q135299 Using MFC OLE Drag and Drop to Drag Text Between Windows
	
	  Q185572 HOWTO: Get Dropped File Names Using OLE Drag and Drop
	
	MORE INFORMATION
	================
	
	Developers have generally used WM_DROPFILES message to handle files dropped from
	other applications. This message is sent when the user drops a file on the
	window of an application that has registered itself as a recipient of dropped
	files.
	
	On the other hand, your application can respond to mouse event to support
	dragging files to other applications. OLE drag and drop supports this
	functionality. Both techniques involve passing a global HDROP (drop structure
	handle) from the source to the target. WM_DROPFILES passes this handle in the
	WPARAM value. OLE drag and drop passes the HDROP with the data object.
	
	In the sample project provided in this article, CFileDropListCtrl is the most
	important class. Its OnDropFiles method shows how to deal with the file that is
	dragged in. The OnLButtonDown method shows how to drag file to another
	application.
	
	The following file is available for download from the Microsoft Download Center:
	
	  FileDragTest.exe
	  (http://download.microsoft.com/download/vc60std/Sample2/1.0/WIN98MeXP/EN-US/FileDragTest.exe)
	
	Release Date: May-02-2001
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	Additional query words: FileDragTest
	
	======================================================================
	Keywords          : kbfile kbSample kbVC kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch kbVCNET
	Version           : :6.0
	
	=============================================================================
	
