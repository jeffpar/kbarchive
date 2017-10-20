---
layout: page
title: "Q123794: Custom.dic Not Updated in PowerPoint"
permalink: /kb/123/Q123794/
---

## Q123794: Custom.dic Not Updated in PowerPoint

{% raw %}

	Article: Q123794
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbinterop kbproof
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In PowerPoint, when you use the spelling checker to add words to the Custom.dic
	file, the changes are not written to disk until you exit PowerPoint. Other
	programs such as Microsoft Mail, Publisher, and Word change Custom.dic each time
	you add words to this file. If you add a word to Custom.dic using one of these
	programs and add a word using PowerPoint after that, the word may not appear in
	the file after you exit PowerPoint.
	
	MORE INFORMATION
	================
	
	When you run the spelling checker for the first time in a session of PowerPoint,
	Custom.dic is copied into memory. When you check spelling in PowerPoint,
	PowerPoint reads from and writes to the copy of Custom.dic in memory. When you
	exit PowerPoint, it writes all the changes made during the session back to
	disk.
	
	If you run the spelling checker in PowerPoint, change Custom.dic from another
	program, and then exit PowerPoint, PowerPoint will sense the discrepancies, and
	will not attempt to write to Custom.dic.
	
	Additional query words: Custom.dic spelling power point powerpt winppt 4.00 4.00a 4.00c spell check
	
	======================================================================
	Keywords          : kbinterop kbproof 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
