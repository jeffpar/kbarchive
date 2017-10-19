---
layout: page
title: "Q96337: Setup Fails with Tandy Sensation Shell"
permalink: /kb/096/Q96337/
---

## Q96337: Setup Fails with Tandy Sensation Shell

	Article: Q96337
	Product(s): Microsoft Home Kids Products
	Version(s): 1991 edition,1992 edition,1993 edition,1994 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Bookshelf for Windows versions 1991 edition, 1992 edition, 1993 edition 
	- Microsoft Cinemania for Windows versions 1992 edition, 1994 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you install Encarta, Bookshelf, or Cinemania on a computer using the Tandy
	Sensation shell on Windows 3.x, one of the following situations may occur.
	
	NOTE: Other applications may also experience these problems.
	
	
	1. You receive an application execution error message:
	
	  DESKTOP caused a General Protection Fault in module TANDYRTL.DLL at
	  0001:6641. GP Faults have also been caused in MSACM.DRV.
	
	2. During setup, the Group dialog box is blank.
	
	3. The multimedia application installs successfully, but when you attempt to
	  play wave files, you receive the following error message:
	
	  No wave device that can play files in the current format is installed. Use
	  the Drivers option to install the wave device.
	
	MORE INFORMATION
	================
	
	Tandy Sensation uses WinMate as the default shell. WinMate uses the Install
	command in the File menu to run the SETUP.EXE or INSTALL.EXE file of any
	application. Some applications, such as Encarta, Bookshelf, and Cinemania may
	fail during setup on this configuration. To correct the problem, run SETUP.EXE
	from the Windows Program Manager.
	
	STATUS
	======
	
	Tandy Corporation has included printed addendum notes with the Sensation manual
	that state that "some applications do not install properly with WinMate." These
	notes provide instructions on using Windows Program Manager (which is accessible
	from a button on the desktop) to install applications.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	For more information about Tandy Sensation, contact Tandy Corporation product
	support at (817) 878-6875.
	
	KBCategory: kb3rdparty kbsetup kbmm kberrmsg kbprb
	KBSubcategory:
	
	Additional query words: msn_bookshelf 1.00 multimedia multi-media multi media program group install
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbEncartaEncycSearch kbCineManiaSearch kbBookShelf1991 kbBookShelf1992 kbBookShelf1993 kbCinemania1994 kbCinemania1992 kbEncartaEnCyc1994
	Version           : :1991 edition,1992 edition,1993 edition,1994 edition
	
	=============================================================================
	
