---
layout: page
title: "Q114364: Novell Compressed Drives Inaccessible Under MS-DOS 6.21"
permalink: /kb/114/Q114364/
---

## Q114364: Novell Compressed Drives Inaccessible Under MS-DOS 6.21

{% raw %}

	Article: Q114364
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you upgrade a Novell DOS 7 system that has compressed drives other than C to
	MS-DOS 6.21, the drives are inaccessible after the upgrade because Stacker is no
	longer loaded.
	
	
	CAUSE
	=====
	
	MS-DOS 6.21 Setup was not tested with Novell DOS 7 and is not designed to be
	installed over Novell DOS 7.
	
	WORKAROUND
	==========
	
	You may be able to work around this problem by renaming the STACKER.BIN file to
	DBLSPACE.BIN.
	
	Additional query words: 7.0 7.00 novell
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621
	Version           : MS-DOS:6.21
	
	=============================================================================
	

{% endraw %}
