---
layout: page
title: "Q123495: BUG: MSVC20 Setup Fails to Install Books Online Only"
permalink: /kb/123/Q123495/
---

## Q123495: BUG: MSVC20 Setup Fails to Install Books Online Only

	Article: Q123495
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Visual C++ version 2.0 setup program fails to install Books Online
	if you use the setup program to try to install only Books Online. The setup
	program displays the following message box:
	
	  No options were selected. Please select the portions of Visual C++ 2.0 you
	  wish to install, or choose Exit to quit Setup.
	
	CAUSE
	=====
	
	The setup program automatically clears the check mark from the Books Online
	option when it is the only option selected during the setup.
	
	RESOLUTION
	==========
	
	There are two ways to work around this problem:
	
	- During the installation, in addition to installing Books Online, choose to
	  install one of the help files as well. Then delete the quick reference help
	  file after installation. To do this, select "Custom Installation," and clear
	  the check marks from everything except "Help Files." Then choose "Help File
	  Options" and clear the check mark from all help files except one. Then choose
	  one of the "Books Online Options."
	
	-or-
	
	- Copy the following files from your Visual C++ CD-ROM. These files are located
	  on your CD-ROM under directory MSVC20\HELP:
	
	  vc20bks.hdx        vc20bks.ind         vc20bks1.hlp
	  vc20bks2.hlp       vc20bks3.hlp        vc20bks4.hlp
	  vc20bks5.hlp       vc20bks6.hlp        vc20bks7.hlp
	
	After finishing either of these workarounds, modify your system's registry by
	using REGEDT32.EXE. To modify the keys used for Books Online under Windows NT,
	modify the following string to point to the drive where you have installed Books
	Online:
	
	  HKEY_CURRENT_USER\ 
	     Software\ 
	     Microsoft\ 
	     Visual C++ 2.0\ 
	     Help\ 
	     RemoteHelp1
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.00 network buglist2.00
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVCsearch kbAudDeveloper kbVC200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
