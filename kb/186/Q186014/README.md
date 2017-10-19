---
layout: page
title: "Q186014: WV: Setting Up Quick View to Preview Word Files with Word Viewer"
permalink: /kb/186/Q186014/
---

## Q186014: WV: Setting Up Quick View to Preview Word Files with Word Viewer

	Article: Q186014
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word Viewer 97-2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Quick View utility shipped with Microsoft Windows 95 or Windows NT 4.0
	cannot preview files created in any of the Microsoft Office 97 programs.
	
	This article describes how you can modify the options in Windows Explorer so that
	you can use the Microsoft Word Viewer 97-2000 to preview files.
	
	MORE INFORMATION
	================
	
	Windows Explorer lets you customize the items in the shortcut menu that appears
	when you right-click a file. For those file formats that cannot be opened in the
	Windows Quick View utility, you can use Word Viewer to preview files using Quick
	View.
	
	Before you use the following procedure, download and install Microsoft Word
	Viewer 97-2000. Word Viewer 97-2000 is contained in a self-extracting .exe file
	called Wd97vwr32.exe on the Microsoft World Wide Web site. For additional
	information about obtaining and installing Word 97-2000 Viewer, please see the
	following article in the Microsoft Knowledge Base:
	
	  
	
	  Q165908 WV: How to Obtain Microsoft Word Viewers
	
	After the Setup program has completed, Word Viewer 97-2000 is listed on the
	shortcut menu when you right-click a file that has a .doc or file extension or
	WordView file type.
	
	To change the shortcut menu so that Word Viewer is started when you click Quick
	View on the shortcut menu, follow these steps:
	
	1. On the Windows Start menu, point to Program, and then click Windows Explorer.
	
	2. On the View menu, click Folder Options, and then click the Files Types tab.
	
	3. Under Registered File Types, select Microsoft Word Document, and then click
	  Edit.
	
	4. In the Edit File Type dialog box, follow these steps:
	  a. Click to clear the Enable Quick View option.
	
	  b. Under Actions, click WordView, and then click Edit.
	
	  c. Select the path and file name listed in the "Application used to perform
	     action" box, and press CTRL+C to copy it to the clipboard. Click Cancel.
	
	5. In the Edit File Type dialog box, follow these steps:
	  a. Click New.
	
	  b. Under Action, type "&Quick View" (without the quotation marks). The
	     ampersand (&) indicates that the following letter (in this case Q) can
	     be used as a shortcut key to run the command.
	
	  c. In the "Application used to perform action," press CTRL+V.
	
	  d. Click OK.
	
	6. In the Edit File Type dialog box, under Actions, select WordView and then
	  click Remove. When you are prompted to remove WordView from the menu, click
	  Yes.
	
	7. Click OK twice.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  
	
	  Q158748 OFF97: Unable to Preview File Using Quick View
	
	Additional query words: word97 word8
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordViewerSearch kbViewerSearch kbWordViewer97
	Version           : WINDOWS:
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
