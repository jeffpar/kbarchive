---
layout: page
title: "Q75041: Deleting .ICO Files Does Not Delete Icons in Windows"
permalink: /kb/075/Q75041/
---

## Q75041: Deleting .ICO Files Does Not Delete Icons in Windows

	Article: Q75041
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you set up some third-party icon files from an icon library and change the
	icons in Windows, the icon (.ICO) files are deleted from the hard drive. Even if
	you exit and restart Windows, the third-party icons still appear in the groups
	where they were placed for specific applications.
	
	MORE INFORMATION
	================
	
	The icon (.ICO) file is merely a visual representation of the icon itself. The
	actual association for the icon is retained within the specific group (.GRP)
	file where the icon resides. Any time an icon is changed, that change is written
	to the group file. As long as the icon is not replaced with another icon, the
	association remains and Windows continues to use that icon representation.
	
	Additional query words: 3.00 3.00a 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
