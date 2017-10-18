---
layout: page
title: "Q85543: Windows Err Msg: Bookmarks are Damaged. Delete WINHELP.BMK"
permalink: kb/085/Q85543/
---

## Q85543: Windows Err Msg: Bookmarks are Damaged. Delete WINHELP.BMK

	Article: Q85543
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear when starting Windows 3.0 or 3.1:
	
	  Bookmarks are damaged. Delete WINHELP.BMK. Choose OK to delete the bookmark
	  and continue. The bookmark has been damaged or corrupted.
	
	CAUSE
	=====
	
	A bookmark allows quick return to a specific location in a Windows Help topic.
	The bookmark menu defines shortcuts to find specific topics in Help instead of
	looking through two or three levels to find the information.
	
	If the bookmarks are damaged or corrupt, the above error message is displayed. To
	correct this problem, delete the WINHELP.BMK file.
	
	RESOLUTION
	==========
	
	To keep the error from recurring, delete the file WINHELP.BMK from the Windows
	directory. (Note that you may need to do this from the MS-DOS command prompt.)
	Then, exit exiting and restart Windows to reset the bookmarks.
	
	NOTE: Deleting the WINHELP.BMK file removes all the existing bookmarks. Previous
	bookmarks should be redefined.
	
	MORE INFORMATION
	================
	
	To define a bookmark, do the following:
	
	1. From the Help Index, select a topic where a bookmark is desired.
	
	2. From the Bookmark menu, choose Define.
	
	3. Enter a Bookmark name (up to 20 characters in length).
	
	4. Choose OK to add it to the list of bookmarks at the bottom of the Bookmark
	  menu.
	
	Help automatically puts a number next to the bookmark for quick keyboard access.
	To return to a topic of interest, open the Bookmark menu and choose the defined
	Bookmark name (or type the number next to the bookmark). Help displays the
	topic.
	
	WINHELP.BMK is placed in the Windows directory and must remain there for Windows
	Help to be able to retrieve defined bookmarks.
	
	Windows Help is unable to generate a list of defined bookmarks if WINHELP.BMK is
	removed from the Windows directory (even if the file is placed in a directory
	that lies within the search path).
	
	Additional query words: 3.00 3.00a 3.0 3.0a 3.1 3.11 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
