---
layout: page
title: "Q103712: FIX: Help, Online Books Inaccessible After Custom Install"
permalink: kb/103/Q103712/
---

## Q103712: FIX: Help, Online Books Inaccessible After Custom Install

	Article: Q103712
	Product(s): Microsoft C Compiler
	Version(s): 1.00 2.00 2.10 4.00
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a CD-ROM install, a Custom install of only the Help files or Books Online
	renders the online documentation unavailable. In Visual C++ versions 1.0 and
	2.x, if the App Studio, Visual Workbench, Build Tools, Technical Support, or
	Index option is selected from the Help menu, the following error message will be
	displayed:
	
	  The file <helpfile> cannot be found.
	
	The <helpfile> is one of the following:
	
	  MSVC.HLP
	  APSTUDIO.HLP
	  TOOLS32.HLP
	  MSVC32.IDX
	  PSSWH.HLP
	
	In Visual C++ version 4.0, upon opening the Microsoft Developer Studio, the
	following error message will be displayed:
	
	  Cannot open auxiliary information file. The title may be improperly set up.
	
	This error message also appears when the Contents and Search options are selected
	from the Help menu.
	
	CAUSE
	=====
	
	When installing just the Help files or Online Books, Setup copies only a subset
	of the online documentation files to the destination drive, assuming that
	certain files have already been installed. Setup then sets the help file search
	path to be that of only the current destination drive and directory. This
	directory does not contain all the necessary files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 4.1.
	
	RESOLUTION
	==========
	
	There are three ways to work around this problem:
	
	- Append the CD-ROM help path using Visual Workbench's Options directory.
	  Select Options, then choose Directories and append a semicolon followed by
	  the CD-ROM help directory to the Help Files Path section.
	
	  NOTE: This workaround is not available with Visual C++ version 4.0 because
	  there is no Help Files Path option in the Directories Tab of the Options
	  dialog box.
	
	-or-
	
	- For Visual C++ version 4.0, perform a Custom install of at least the
	  Microsoft Developer Studio and the Books Online. For Visual C++ versions 1.0
	  and 2.x, do a Custom install of Visual Workbench and App Studio. This will
	  install the help files to the hard drive.
	
	-or-
	
	- For Visual C++ version 4.0, copy all files from the \MSDEV\HELP directory on
	  the distribution CD to the %MsDevDir%\HELP directory. (MsDevDir is an
	  environment variable the points to the directory in which Visual C++ version
	  4.0 is installed.) For Visual C++ versions 1.0 and 2.x, copy the Help files
	  listed in the SYMPTOMS section above from the CD to the HELP directory on the
	  hard drive.
	
	MORE INFORMATION
	================
	
	With a CD-ROM installation, no Help files are copied from the CD to the
	destination drive. The help file search path correctly points to the CD-ROM
	drive.
	
	Setup does not check for a previous CD-ROM installation. So, when performing an
	online documentation only installation, Setup does not append the new help files
	search path to the existing one. Instead, it merely sets this path to that of
	help files in the destination directory.
	
	Additional query words: kbVC400bug 1.00 2.00 2.10 4.00 4.10
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC200 kbVC210
	Version           : 1.00 2.00 2.10 4.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
