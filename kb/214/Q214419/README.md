---
layout: page
title: "Q214419: BUG: CHANGECP.EXE in Plus! for Windows 95 Install Incorrect OEM"
permalink: /kb/214/Q214419/
---

## Q214419: BUG: CHANGECP.EXE in Plus! for Windows 95 Install Incorrect OEM

{% raw %}

	Article: Q214419
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After running CHANGECP.EXE for OEM code pages 860, 861, 863, or 865 no error is
	reported, but the fonts are those corresponding to OEM code page 850.
	
	CAUSE
	=====
	
	The distribution for CHANGECP does not have the correct fonts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows 95 Plus!.
	
	MORE INFORMATION
	================
	
	As distributed, the font files labeled as VGA860.FON (for MS-DOS Portuguese),
	VGA861.FON (for MS-DOS Icelandic), VGA863.FON (for French Canada) and VGA865.FON
	(for Nordic languages) are the same as VGA850.FON (Latin1, for Western European
	languages).
	
	Additional query words: OEM code page
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
