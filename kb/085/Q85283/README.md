---
layout: page
title: "Q85283: Application Shows Microsoft Foundation Classes"
permalink: kb/085/Q85283/
---

## Q85283: Application Shows Microsoft Foundation Classes

	Article: Q85283
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbfile kbOSWin310 kbDSupport kbSDKWin16
	Last Modified: 23-JUL-2001
	
	3.10
	WINDOWS
	kbprg kbfile
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	BLOCKS is a file in the Microsoft Download Center that demonstrates using the
	Microsoft Foundation Classes (MFC). The user of the BLOCKS sample can create
	rectangle, ellipse, and rounded rectangle graphical objects. Once the objects
	are created, the mouse can be used to manipulate the objects by changing their
	size or position on the screen. The user can save to a disk file the state of
	objects in the BLOCKS window for use in another session.
	
	The BLOCKS sample illustrates the structure of an MFC application. It
	demonstrates the following:
	
	- Deriving a class from the CObject class
	
	- Using virtual functions with user-defined classes
	
	- Maintaining a list of classes
	
	- Creating static data and static member functions in a class
	
	- Using the serialization feature of the CObject class to save classes to and
	  read classes from a disk file
	
	BLOCKS demonstrates the following MFC classes: CArchive, CBrush, CClientDC, CDC,
	CFile, CFrameWnd, CPaintDC, CPen, CPoint, CRect, and CWinApp.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Blocks.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: 3.10 softlib BLOCKS.EXE kbDSupport s_mfc
	
	======================================================================
	Keywords          : kbfile kbOSWin310 kbDSupport kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	Issue type        : kbinfo
	
	=============================================================================
	
