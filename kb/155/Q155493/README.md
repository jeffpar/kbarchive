---
layout: page
title: "Q155493: PPT7: Saving in 4.0 Fails if Path Longer Than 100 Characters"
permalink: /kb/155/Q155493/
---

## Q155493: PPT7: Saving in 4.0 Fails if Path Longer Than 100 Characters

{% raw %}

	Article: Q155493
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbinterop kbdta kbconversion
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a PowerPoint for Windows 95, version 7.0 presentation in
	PowerPoint 4.0 format, you receive the following message if the filename
	(including the path) you choose is longer than 100 characters:
	
	  Sorry, either the file name is too long or PowerPoint cannot find or run the
	  Viewer, which it needs to save in PowerPoint 4.0 format. If the file name is
	  correct, you should run Setup and reinstall to get the Viewer.
	
	Saving the same file as a PowerPoint 7.0 presentation to the same path and
	filename works correctly.
	
	CAUSE
	=====
	
	This is because when saving as a PowerPoint 4.0 file, PowerPoint uses the
	Pptview.dll, which is a 16-bit DLL. PowerPoint has to shorten the filename
	before passing it to the Viewer.
	
	RESOLUTION
	==========
	
	To work around this problem, save the file in PowerPoint 7.0 format, or save it
	to a folder that has a shorter path.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft
	PowerPoint 97 for Windows.
	
	Additional query words: 7.00 long filename 256 limitation
	
	======================================================================
	Keywords          : kbinterop kbdta kbconversion 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
