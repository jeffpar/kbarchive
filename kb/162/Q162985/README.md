---
layout: page
title: "Q162985: WD97: Using Relative Paths in HTML Files"
permalink: /kb/162/Q162985/
---

## Q162985: WD97: Using Relative Paths in HTML Files

	Article: Q162985
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the Use Relative Paths option that is available when
	inserting a video clip or background sound into an HTML document. Another
	option, "Copy to Document Folder," can be used in conjunction with the Use
	Relative Paths option to get different types of file path functionality when
	inserting pictures and videos.
	
	MORE INFORMATION
	================
	
	The Use Relative Paths option and the Copy to Document Folder option can be
	found by clicking Video on the Insert menu, or by pointing to Background Sound
	on the Insert menu and clicking Properties.
	
	Use Relative Path
	-----------------
	
	When the Use Relative Paths option is enabled, the path to the video clip or
	background sound will contain only information about where the object is,
	relative to the HTML document the object is being inserted into.
	
	For example:
	
	Assume the HTML document is located on \\server\share\mydoc.html and assume the
	video clip is located one level deeper on \\server\share\videos\myvideo.avi.
	
	Scenerio 1: Use Relative Path is Enabled
	
	If the Use Relative Paths option is enabled, the HTML document will only contain
	path information for the video clip relative to the HTML document. In this case,
	the HTML code will be:
	
	     Dynsrc="videos\myvideo.avi"
	
	Scenerio 2: Use Relative Path is Disabled
	
	If the Use Relative Paths option is disabled, the HTML document will contain
	complete path information for the video clip. In this case, the HTML code will
	be
	
	     Dynsrc="\\server\share\videos\myvideo.avi"
	
	If the HTML document is saved or copied to a new location, the video clip will
	not work in Scenerio 1 because the path to the video clip would now be
	incorrect. In Scenerio 2, the video clip would continue to work as long as the
	computer on which the HTML file is stored has access to the server where the
	video clip is located.
	
	Copy to Document Folder
	-----------------------
	
	When the Copy to Document Folder option is enabled, the video clip or background
	sound will be copied to the same folder as the HTML file.
	
	For example:
	
	Assume the HTML document is located on \\server\share\mydoc.html and assume the
	video clip is located one level deeper on \\server\share\videos\myvideo.avi.
	
	If the "Copy to Document Folder" option is enabled, the video clip will be copied
	to the \\server\share folder so that it will be in the same folder as the HTML
	document.
	
	If the Use Relative Paths option is enabled, the HTML code will be
	
	     Dynsrc="myvideo.avi"
	
	If the Use Relative Paths option is disabled, the HTML code will contain the full
	path to the video clip:
	
	     Dynsrc="\\server\share\myvideo.avi"
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
