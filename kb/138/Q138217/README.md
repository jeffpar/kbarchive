---
layout: page
title: "Q138217: Encarta 96 Uninstall:  Mscreate.dir Files, Folders not Deleted"
permalink: kb/138/Q138217/
---

## Q138217: Encarta 96 Uninstall:  Mscreate.dir Files, Folders not Deleted

	Article: Q138217
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setup's Remove All option does not delete all files and folders.
	
	
	CAUSE
	=====
	
	By design, the Setup Remove All option does not delete all files and folders. It
	does however, free up most of the hard drive space used by these programs.
	
	No folders will be removed by Setup. Files named Mscreate.dir are not removed. In
	addition, any files that are created after the initial installation can not be
	removed, since they were not installed by Setup.
	
	In addition, any files you might need on subsequent installations will not be
	removed by Setup. These include online update information files, and customized
	option files.
	
	RESOLUTION
	==========
	
	1. Manually delete the Mscreate.dir files. These files are created by Setup and
	  are not needed after the uninstall process completes.
	
	
	2. Manually delete any other unwanted folder or files.
	
	For more information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	MORE INFORMATION
	================
	
	If there are any files Setup did not originally install into a specific folder,
	Remove All will not remove the file. Any file not originally installed by the
	Setup routine, and the Mscreate.dir files, remains intact.
	
	For example, the Encarta.ann file is created when Encarta is executed for the
	first time. This means if Encarta has been run even one time, the Encarta.ann
	file remains even after the uninstall process completes.
	
	Additional query words: 96 1996 multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbEncartaEncycSearch kbBookShelf1996 kbBookShelf1997 kbEncartaEnCyc1996
	Version           : :
	
	=============================================================================
	
