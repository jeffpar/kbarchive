---
layout: page
title: "Q151805: Files Appear Twice in the Recycle Bin"
permalink: /kb/151/Q151805/
---

## Q151805: Files Appear Twice in the Recycle Bin

{% raw %}

	Article: Q151805
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open the Recycle Bin, you may see two entries for some files.
	
	CAUSE
	=====
	
	This behavior can occur if you are using the SUBST command to assign a
	substitute drive letter to the root folder of a drive that contains a Recycle
	folder.
	
	STATUS
	======
	
	This behavior is by design. When you use the SUBST command to substitute a drive
	letter for a folder that contains a Recycle folder, the Recycle Bin is mirrored
	on the substituted drive. This can result in deleted files appearing twice in
	the Recycle Bin.
	
	Additional query words: duplicate
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
