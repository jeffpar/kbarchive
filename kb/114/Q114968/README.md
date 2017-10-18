---
layout: page
title: "Q114968: HOWTO: Making Visual C++ 32-bit Edition Books Online Run Faster"
permalink: kb/114/Q114968/
---

## Q114968: HOWTO: Making Visual C++ 32-bit Edition Books Online Run Faster

	Article: Q114968
	Product(s): Microsoft C Compiler
	Version(s): 1.00 2.00 2.10 4.00
	Operating System(s): 
	Keyword(s): kbsetup kbVC100 kbVC200 kbVC210 kbVC400 kbGrpDSTools
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Books Online may start slowly because its index file must be read from
	the CD-ROM drive. CD-ROM drives are usually much slower than hard drives. By
	putting part or all of the help files on your hard drive, you can decrease the
	time you spend waiting for Books Online to access information.
	
	In the Setup of Visual C++ version 4.0, there are three options: leave all Books
	Online files on the CD, the CD-ROM installation; copy just the Books Online
	indices and some relatively small help file to the hard drive, the Typical
	installation; or, copy all Books Online files to the hard drive, a Custom
	installation that includes at least the Microsoft Developer Studio and the Books
	Online. The Typical installation is the default.
	
	In Visual C++ version 2.x, the Setup program provides similar options: keeping
	all of the help on the distribution CD, copying just the indices to the hard
	drive, or copying all of the help files in their entirety to the hard drive.
	Copying just the indices is the default action.
	
	The Setup for Visual C++ 32-bit edition version 1.0 does not afford these
	options. The remainder of this article explains how to place part or all of the
	online help onto a hardrive for Visual C++ 32-bit edition version 1.0.
	
	This article assumes you are familiar with the registry editor, REGEDT32. For
	more information, type "start REGEDT32" at a command prompt and view the online
	help for the utility.
	
	MORE INFORMATION
	================
	
	Windows NT keeps track of the locations of the Books Online files in the
	registry. Using the REGEDT32 registry editor, you can change these registry
	entries to allow you to keep the books that you access most frequently on your
	local drive.
	
	It is recommended that any help files moved from the CD are located in a single
	directory, such as "MSVCNT\HELP", for simplicity.
	
	All of the registry references have the root registry path of:
	
	  HKEY_CURRENT_USER\ 
	     Software\ 
	     Microsoft\ 
	     Viewer
	
	Make the following changes in the registry:
	
	1. Change BOOKSONL\Path to refer to the location of the BOOKS.HDX and BOOKS.IND
	  files. The .HDX index file allows the Books Online Viewer to start up while
	  the .IND file is used in the Search Plus help file option.
	
	2. Change VCXXBKS1\Path to refer to the location of VCXXBKS1.HLP. Books listed
	  before the "C++ Language Reference" in the viewer window are included in this
	  help file.
	
	3. Change VCXXBKS2\Path to refer to the location of the VCXXBKS2.HLP file. All
	  books in the viewer window that are not in VCXXBKS1.HLP are in this help
	  file.
	
	4. Change SDKBKS\Path to refer to SDKBKS.HLP. This help file contains all five
	  volumes of the "Win32 Programmer's Reference."
	
	NOTE: that Visual C++ 2.0 and later also have entries in similar places to hold
	Books Online information in the registry.
	
	HKEY_CURRENT_USER\Software\Microsoft\Viewer
	HKEY_CURRENT_USER\Software\Microsoft\Visual C++ 2.0
	
	You can change these entries individually to place the most used portions of the
	Books online on your hard drive if you wish, but this will require that you
	experiment on your own. Microsoft does not directly support custom Books Online
	configurations past those offered in the Visual C++ 2.0 setup.
	
	Additional query words: kbinf 1.00 2.00 2.10 4.00
	
	======================================================================
	Keywords          : kbsetup kbVC100 kbVC200 kbVC210 kbVC400 kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC200 kbVC210
	Version           : 1.00 2.00 2.10 4.00
	Issue type        : kbhowto
	
	=============================================================================
	
