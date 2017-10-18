---
layout: page
title: "Q83543: DragDrop.exe - Implementing the Drag-Drop Protocol"
permalink: kb/083/Q83543/
---

## Q83543: DragDrop.exe - Implementing the Drag-Drop Protocol

	Article: Q83543
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly _IK kbGrpDSUser kbOSWin310
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 3.1 supports four new functions and one new message that enable an
	application to implement the drag-drop protocol. DragDrop.exe is a sample that
	demonstrates how to use all four functions and the message. When the user drags
	and drops a file onto Dragdrop.exe, the name of the file is added to a list box
	in Dragdrop.exe
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	DragDrop.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	An application that can accept files dragged from the File Manager calls the
	DragAcceptFiles function specifying one or more of its windows. When the user
	drags a file from the File Manager into the window specified in the
	DragAcceptFiles call, and releases the left mouse button, File Manager sends the
	application a WM_DROPFILES message. (File Manager sends a WM_DROPFILES message
	only to applications that have registered a window with DragAcceptFiles.)
	
	One of the parameters to WM_DROPFILES contains a handle to an internal data
	structure. The DragQueryFile function retrieves a number of dropped files and
	their names from the data structure and returns this information to the
	application. Likewise, DragQueryPoint retrieves the position of the mouse cursor
	when the file(s) was dropped.
	
	To release the memory allocated by Windows for the WM_DROPFILES data structure,
	the application must call the DragFinish function after it retrieves the
	applicable data.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly _IK kbGrpDSUser kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
