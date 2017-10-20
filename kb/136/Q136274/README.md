---
layout: page
title: "Q136274: Stacker 4.0 or Earlier May Damage Long Filenames"
permalink: /kb/136/Q136274/
---

## Q136274: Stacker 4.0 or Earlier May Damage Long Filenames

{% raw %}

	Article: Q136274
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Stacker version 4.0 or earlier on a computer running Windows 95,
	long filenames in Windows 95 may be lost.
	
	Or, if you upgrade a computer running Stacker 4.0 or earlier to Windows 95 and
	then run a Stacker utility, long filenames in Windows 95 may be lost.
	
	CAUSE
	=====
	
	Stacker versions 4.0 and earlier are not aware of the long filenames that
	Windows 95 supports and may damage them.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	- Upgrade to Stacker version 4.1 or later.
	
	- Install Stacker version 4.0 or earlier before you install Windows 95, and
	  make sure not to run any Stacker utilities after you install Windows 95.
	
	MORE INFORMATION
	================
	
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	REFERENCES
	==========
	
	For more information about hard disk utilities that may damage long filenames,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q120442 Using Hard Disk Utilities with Windows 95
	
	Additional query words: corrupt
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
