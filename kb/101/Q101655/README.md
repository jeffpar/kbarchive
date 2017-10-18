---
layout: page
title: "Q101655: Copying Directory with SFM Loses Icons for Some Files"
permalink: kb/101/Q101655/
---

## Q101655: Copying Directory with SFM Loses Icons for Some Files

	Article: Q101655
	Product(s): Microsoft Windows NT
	Version(s): 3.1,4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Windows NT Services for Macintosh (SFM) to copy a directory from a
	Macintosh computer, some icons may be missing on the destination.
	
	CAUSE
	=====
	
	Some custom icons are stored on the disk as hidden files. If the hidden file
	uses a Unicode character in its filename, the File Manager uses the shortname to
	copy the file. Because the destination file has a different name, the icon is
	lost.
	
	RESOLUTION
	==========
	
	There is no method to work around this situation at this time.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : :3.1,4.0
	
	=============================================================================
	
