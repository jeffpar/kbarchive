---
layout: page
title: "Q149591: PPT7: PowerPoint 7.0a Stops Responding When Switching Views"
permalink: /kb/149/Q149591/
---

## Q149591: PPT7: PowerPoint 7.0a Stops Responding When Switching Views

{% raw %}

	Article: Q149591
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0a; Win95:7.0a
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 21-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you repeatedly switch between Outline view and Slide view, PowerPoint 7.0a
	may stop responding. When this happens, you must force PowerPoint to quit, and
	all unsaved work will be lost.
	
	CAUSE
	=====
	
	This is caused by a screen redraw problem in PowerPoint 95a that causes
	PowerPoint not to release GDI resources. If you exit and restart PowerPoint
	before it stops responding, all the GDI resources are released.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft
	PowerPoint for Windows 95, version 7.0b.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain Office for Windows 95 version 7.0b.
	
	If you have PowerPoint for Windows 95, version 7.0a, you can obtain a patch to
	correct this problem. For information about how to obtain this patch, please see
	the following article(s) in the Microsoft Knowledge Base:
	
	  Q136603 PPT7: Patch to Correct PowerPoint 7.0a Screen Redraw Problem
	
	MORE INFORMATION
	================
	
	The only way to obtain PowerPoint 95a is as part of Microsoft Office for Windows
	95, version 7.0a. Only a few copies of this product were released.
	
	Additional query words: 7.00 crash hangs hanging lost not responding dies dead stop break ppt powerpt powerpnt pp7 ppt7 pp95 ppt95
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbOfficeSearch kbPowerPtSearch kbZNotKeyword2 kbOffice95Search kbZNotKeyword3 kbPowerPt700Search kbPowerPt700a
	Version           : WINDOWS:7.0a; Win95:7.0a
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
