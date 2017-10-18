---
layout: page
title: "Q168745: PPT7: &quot;The File Cannot Be Removed...&quot; Error Running Pack And Go"
permalink: kb/168/Q168745/
---

## Q168745: PPT7: &quot;The File Cannot Be Removed...&quot; Error Running Pack And Go

	Article: Q168745
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbpng
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Pack And Go feature in PowerPoint, you may receive the
	following error:
	
	  The file <path>\<filename> cannot be removed. Please remove it
	  and re-run Pack and Go.
	
	where <path> and <filename> represent the location and the file you
	are trying to pack, respectively.
	
	CAUSE
	=====
	
	This problem occurs when the temporary location used by Pack And Go (the
	<path>) contains a file with the same name as one of the temporary files
	created by the Pack And Go Wizard. The most common cause of this problem is that
	the presentation you are attempting to pack is in that location.
	
	RESOLUTION
	==========
	
	To resolve this problem, save the presentation to a different location before
	you use the Pack And Go feature.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: 97 PNG
	
	======================================================================
	Keywords          : kbpng 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	
	=============================================================================
	
