---
layout: page
title: "Q103843: Cannot Manage Files with Trailing Spaces"
permalink: /kb/103/Q103843/
---

## Q103843: Cannot Manage Files with Trailing Spaces

{% raw %}

	Article: Q103843
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One of the following messages will appear if you try to move, delete, copy, or
	rename a file whose name contains a trailing space:
	
	- File Manager cannot move <filename and path>: The system cannot find
	  the file specified. Make sure the correct path and filename are specified and
	  the network is started.
	
	- The system cannot find the file specified <filename and path>
	
	- Could not find <filename and path>
	
	CAUSE
	=====
	
	Windows NT cannot handle trailing spaces in filenames. This problem usually only
	occurs on domains that are connected to Macintosh computers. Under the Macintosh
	operating system, filenames with trailing spaces are support. Windows NT
	Advanced Server computers connected via Services for Macintosh (SFM) can obtain
	files with trailing spaces. However, once the files have been created, it is
	difficult to manager them. The filename is not touched by Windows NT and no
	MS-DOS FAT-compatible (8.3) filename is created.
	
	RESOLUTION
	==========
	
	Rename files with trailing spaces from a Macintosh computer, removing trailing
	spaces.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1. This
	problem was corrected in Windows NT 3.5
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
