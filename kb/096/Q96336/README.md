---
layout: page
title: "Q96336: &quot;Call to Undefined Dynalink&quot; Errors"
permalink: kb/096/Q96336/
---

## Q96336: &quot;Call to Undefined Dynalink&quot; Errors

	Article: Q96336
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1993 edition,1994 edition,1995 edition,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows, 1991, 1992, 1993, 1994, 1995 editions 
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Musical Instruments for Windows, version 1.0 
	- the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Encarta 92 Multimedia Encyclopedia 
	- Microsoft Encarta for Windows versions 1993 edition, 1994 edition, 1995 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A "Call to Undefined Dynalink" error occurs if you run or work within a
	multimedia program with an older version of the Mmsystem.dll file in your
	Windows System folder (directory).
	
	NOTE: This problem can also be caused by older versions of Mscpydis.dll or
	Ctl3d.dll.
	
	The problem should not occur in Windows 95.
	
	MORE INFORMATION
	================
	
	An older version of Mmsystem.dll will be present in your system if you replace
	parts of your Windows 3.1 installation by reinstalling Microsoft Windows with
	Multimedia Extensions version 1.0, or if other similar modifications are made to
	a Windows 3.1 installation.
	
	RESOLUTION
	==========
	
	To avoid this problem, make sure that older versions of Mmsystem.dll,
	Mscpydis.dll, or Ctl3d.dll are not present in your Windows System folder.
	
	To restore the proper version of Mmsystem.dll, use one of the following
	procedures:
	
	Windows 3.1
	-----------
	
	To correct the problem:
	
	- Delete Mmsystem.dll from the Windows System folder, and then recopy and
	  decompress Mmsystem.dl_ from your original Windows 3.1 disks.
	
	-or-
	
	- Reinstall Windows 3.1 into the existing Windows folder.
	
	Windows with Multimedia Extensions
	----------------------------------
	
	If you are using Windows with Multimedia Extensions, install Windows to an empty
	directory.
	
	
	Additional query words: msn_bookshelf 1.00 multimedia multi-media multi media wfw
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbZNotKeyword6 kbEncartaSearch kbZNotKeyword kbBookshelfSearch kbEncartaEncycSearch kbBookShelf1995 kbBookShelf1996 kbBookShelf1997 kbMusicalInst kbEncarta1994 kbEncarta1992 kbEncarta1993 kbEncarta1995 kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbOSWin310 kbOSWin311
	Version           : :1.0,1993 edition,1994 edition,1995 edition,3.1,3.11
	
	=============================================================================
	
