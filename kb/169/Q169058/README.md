---
layout: page
title: "Q169058: OFF97: IPF in Module KERNEL32.DLL Saving File with Long Name"
permalink: /kb/169/Q169058/
---

## Q169058: OFF97: IPF in Module KERNEL32.DLL Saving File with Long Name

{% raw %}

	Article: Q169058
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbother winword word97
	Last Modified: 22-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Photo Editor 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a file in Microsoft Photo Editor with a file name longer than 255
	characters (the limit for Microsoft Windows 95), you will receive the following
	error message:
	
	  Invalid file name in <drive>:\<file name>
	
	Clicking the Cancel button will cause the following error:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	Clicking Details shows:
	
	  PHOTOED caused an invalid page fault in module KERNEL32.DLL at
	  0137:<address>
	
	Clicking Close will shut down Microsoft Photo Editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Microsoft Photo Editor is a standalone product that is installed by a
	complete installation of Office 97. It allows you to customize graphic images
	you create, scan, or open.
	
	For additional information about installing the Photo Editor, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q165812 OFF97: Photo Editor not Installed Through the Valupack
	
	
	For additional information about Microsoft Windows 95 filename limits, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q148754 File Names Seem to Be Limited to Less Than 255 Characters
	
	  Q132737 WW1195: Commonly Asked Windows 95 Questions and Answers
	
	
	Additional query words: 8.0 ipf
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbother winword word97 
	Technology        : kbWordSearch kbHomeProdSearch kbPowerPtSearch kbWord97Search kbPowerPt97Search kbPhotoEd97
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
