---
layout: page
title: "Q77287: GlbEdit.exe Raises Text Size Limit for Edit Controls"
permalink: /kb/077/Q77287/
---

## Q77287: GlbEdit.exe Raises Text Size Limit for Edit Controls

	Article: Q77287
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kb16bitonly kbCtrl kbSDKPlatform kbGrpDSUser
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	GlbEdit.exe is a sample file in that demonstrates how an edit control can have
	its own data segment. By default, the buffer for an edit controls is allocated
	from the application's data segment. Because the data segment is also used to
	store information for other controls, space in the data segment is a scarce
	resource.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	GlbEdit.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Normally, edit controls in a dialog box use one common global data segment per
	dialog box. If the dialog box has style DS_LOCALEDIT, edit controls use the data
	segment pointed to by the hInstance used to create the dialog box. Edit controls
	created with CreateWindow() use the data segment pointed to by hInstance.
	
	The GLBEDIT sample shows how to change hInstance to point to a new global object.
	Multiple controls of any type can use the same memory object.
	
	To find the effected portions of the code, search for WM_CREATE in the
	MainWndProc.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kb16bitonly kbCtrl kbSDKPlatform kbGrpDSUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
