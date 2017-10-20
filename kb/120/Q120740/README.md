---
layout: page
title: "Q120740: Avoid Creating Macintosh Filenames that are NT Device Names"
permalink: /kb/120/Q120740/
---

## Q120740: Avoid Creating Macintosh Filenames that are NT Device Names

{% raw %}

	Article: Q120740
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Macintosh clients should avoid creating filenames on Services for Macintosh
	(SFM) volumes that are the same as Windows NT device names (such as NUL, LPT1,
	and so on). Using the same names can lead to problems accessing files and
	directories from NT.
	
	MORE INFORMATION
	================
	
	In Windows NT, you can create any number of device names and assign them any
	name. For example, you can create a device called SomeName and alias it to
	\Device\Serial0.
	
	MS-DOS devices are actually aliases to real names. For instance, A: is really an
	alias to \Device\Floppy0. In essence there are no real "reserved" names.
	
	Additional query words: prodnt sfm
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
