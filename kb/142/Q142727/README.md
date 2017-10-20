---
layout: page
title: "Q142727: System Agent Reports a Stacker Drive Error with ScanDisk"
permalink: /kb/142/Q142727/
---

## Q142727: System Agent Reports a Stacker Drive Error with ScanDisk

{% raw %}

	Article: Q142727
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
	
	After System Agent runs ScanDisk on a drive compressed with Stacker that is the
	last drive scanned, the Last Result column in System Agent displays the
	following message:
	
	  Errors were found and some were not fixed
	
	
	CAUSE
	=====
	
	ScanDisk checks Stacker volumes for only non-compression related errors. The
	message stated above is returned to System Agent when ScanDisk is finished, even
	if no errors are found.
	
	RESOLUTION
	==========
	
	Run ScanDisk from the Start menu to check Stacker volumes for non- compression
	related errors. To do so, click the Start button, point to programs, point to
	Accessories, and then click ScanDisk.
	
	Or, use Stacker's disk tools to check the integrity of Stacker volumes. For
	information about how to do so, please consult the Stacker documentation.
	
	WARNING: The tools included with Stacker versions 4.0 and earlier are not aware
	of the long file names that Windows 95 supports and may damage them.
	
	For additional information about Stacker and long file names, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q136274 Stacker 4.0 or Earlier May Damage Long File Names
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: sage
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
