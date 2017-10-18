---
layout: page
title: "Q166056: WV: Word Viewer Upgrade Doesn't Prompt for Document Open Option"
permalink: kb/166/Q166056/
---

## Q166056: WV: Word Viewer Upgrade Doesn't Prompt for Document Open Option

	Article: Q166056
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbsetup kbdta kbviewer word97
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word Viewer 97-2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Setup program for Microsoft Word Viewer 97-2000 does not provide the option
	of deciding whether to use Microsoft Word or Word Viewer 97-2000 to open
	documents with a .doc file extension.
	
	CAUSE
	=====
	
	This problem occurs if you have a previous version of Microsoft Word Viewer
	installed on your computer when you upgrade to Microsoft Word Viewer 97-2000.
	
	RESOLUTION
	==========
	
	To work around this problem, remove Microsoft Word Viewer 97-2000 and reinstall
	it. Then choose not to open documents with Word Viewer.
	
	To remove Microsoft Word Viewer 97-2000:
	
	1. On the Windows taskbar, click Start, point to Settings, and click Control
	  Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click Microsoft Word Viewer 97-2000 and click the Add/Remove button.
	
	4. After Setup starts, click Uninstall.
	
	Setup uninstalls Word Viewer and prompts you to restart Windows. Now you can run
	Setup for Word Viewer 97-2000 from where you originally ran it by running the
	Setup.exe file. When prompted for the application you want to open .doc files
	with, click the option you prefer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	REFERENCES
	==========
	
	For more information about Word Viewer 97-2000, please see the following
	Knowledge Base article:
	
	  
	
	  Q165908 WV: How to Obtain Microsoft Word Viewers
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbdta kbviewer word97 
	Technology        : kbWordViewerSearch kbViewerSearch kbWordViewer97
	Version           : WINDOWS:
	Issue type        : kbbug
	
	=============================================================================
	
