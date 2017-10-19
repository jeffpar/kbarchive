---
layout: page
title: "Q166050: WV: Outlook/WordMail Tries to Use Word Viewer as Editor"
permalink: /kb/166/Q166050/
---

## Q166050: WV: Outlook/WordMail Tries to Use Word Viewer as Editor

	Article: Q166050
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbinterop kbdta kbviewer word97
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word Viewer 97-2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Outlook, the following message appears:
	
	  Starting Word as your e-mail editor.
	
	Then Outlook may appear to stop responding (hang). Finally, the following error
	message is displayed:
	
	  This form requires Word as your e-mail editor, but Word is either busy or
	  cannot be found.
	
	Outlook then uses the default Outlook e-mail editor.
	
	CAUSE
	=====
	
	This problem occurs because Outlook is attempting to use Word Viewer as your
	e-mail editor.
	
	Outlook tries to use Word Viewer 97-2000 rather than Microsoft Word as your
	e-mail editor when the following conditions are true:
	
	- You have installed Microsoft Word and Microsoft Word Viewer 97-2000 on the
	  same computer.
	
	  -and-
	
	- You have Word Viewer set as the default program for opening .doc files.
	
	  -and-
	
	- You have WordMail turned on.
	
	
	RESOLUTION
	==========
	
	Remove Microsoft Word Viewer 97-2000, reinstall it, and choose not to open
	documents with Viewer.
	
	To remove Microsoft Word Viewer 97-2000:
	
	1. On the Windows taskbar, click Start, point to Settings, and click Control
	  Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click Microsoft Word Viewer 97-2000 and click the Add/Remove button.
	
	4. After Setup starts, click Uninstall.
	
	Setup uninstalls Word Viewer and prompts you to restart Windows. Now you can run
	Setup for Word Viewer from where you originally ran it by running the Viewer.exe
	file. When prompted for the program you want to open .doc files with, click Open
	With Word.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	REFERENCES
	==========
	
	For more information on Word Viewer 97-2000, please see the following Knowledge
	Base article:
	
	  
	
	  Q165908 WV: How to Obtain Microsoft Word Viewers
	
	Additional query words: outlook ol97
	
	======================================================================
	Keywords          : kbinterop kbdta kbviewer word97 
	Technology        : kbWordViewerSearch kbViewerSearch kbWordViewer97
	Version           : WINDOWS:
	Issue type        : kbbug
	
	=============================================================================
	
