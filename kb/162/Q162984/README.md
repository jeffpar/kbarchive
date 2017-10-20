---
layout: page
title: "Q162984: WD97: Error Inserting Video Clip In HTML Document"
permalink: /kb/162/Q162984/
---

## Q162984: WD97: Error Inserting Video Clip In HTML Document

{% raw %}

	Article: Q162984
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to insert a video clip that is stored on a different network
	path than your document, you get the following error message:
	
	  ..\..\..\..\<server>\<share>\<path to video clip>
	  The file could not be found.
	
	  The correct path should be:
	  \\<server>\<share>\<path to video clip>
	
	CAUSE
	=====
	
	An incorrect path to the video clip is created. This problem occurs when all of
	the following are true:
	
	- Your HTML document is saved to a network server.
	
	- The video clip file is saved to a different network server than the HTML
	  document.
	
	- You selected the Use Relative Path check box in the Video Clip dialog box
	  (Insert menu).
	
	- You specified a Universal Naming Convention (UNC) path when you inserted the
	  video clip.
	
	WORKAROUND
	==========
	
	To work around this problem, choose one of the following methods:
	
	Method 1
	--------
	
	Map the network drive where your video clip file is located to a drive letter.
	
	Method 2
	--------
	
	After you receive the error message described in the "Symptoms" section, click
	Change, and then correct the path to the video clip.
	
	Method 3
	--------
	
	Save the HTML document or the video clip to your local hard disk before you
	insert the video clip.
	
	Method 4
	--------
	
	Place the HTML document and the video clip on the same network drive.
	
	Method 5
	--------
	
	Do not select the Use Relative Path check box in the Video Clip dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word version 97.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
