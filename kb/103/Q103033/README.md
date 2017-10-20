---
layout: page
title: "Q103033: Network Trash Folder While Running SFM"
permalink: /kb/103/Q103033/
---

## Q103033: Network Trash Folder While Running SFM

{% raw %}

	Article: Q103033
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	When a Windows NT Advanced Server running Services for Macintosh (SFM)
	creates a Macintosh volume, SFM automatically creates a Network Trash
	Folder directory in the new Macintosh volume. This Network Trash Folder is
	required in SFM, and should not be removed.
	
	The Network Trash Folder is used to temporarily store files in a Macintosh
	volume that a user has thrown in the Trash. When the user empties the
	Trash, the file will actually be deleted.
	
	The Network Trash Folder cannot be removed while SFM is running.
	
	The default Macintosh permissions may not be changed. Any changes you
	attempt will not take affect as long as SFM is running.
	
	If SFM is stopped, the Network Trash Folder will be removed. It will be
	replaced when you reboot your computer. (SFM may be shut off in the
	Services Control Panel by stopping the File Server For Macintosh service.)
	
	NOTE: There is no Network Trash Folder in the MS UAM Volume, which is
	created by default when SFM is installed on an NTFS volume.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1 4.0
	
	=============================================================================
	

{% endraw %}
