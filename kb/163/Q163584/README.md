---
layout: page
title: "Q163584: FP: Unable to Save to IIS Server if Permissions Incorrect"
permalink: /kb/163/Q163584/
---

## Q163584: FP: Unable to Save to IIS Server if Permissions Incorrect

	Article: Q163584
	Product(s): Word Front Page
	Version(s): ; WINDOWS:1.1
	Operating System(s): 
	Keyword(s): kberrmsg kbdta
	Last Modified: 01-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194444.
	
	SYMPTOMS
	========
	
	As either author or administrator, when you attempt to save a file on a
	Microsoft Internet Information Server (IIS), you receive the following error
	message
	
	  The directory that would hold URL '<filename.htm>' does not exist on
	  the server.
	
	where <filename.htm> is the name of the file that you attempted to save.
	
	CAUSE
	=====
	
	You do not have the correct access permissions to the IIS directory structure in
	which you are trying to save your file.
	
	When FrontPage attempts to write the file, it calls the Author.dll or Author.exe
	program in the Web it is trying to write to. FrontPage passes sufficient
	arguments to Author.dll to enable it to create the file. When the account is not
	granted at least LIST access permission to the directories enclosing the
	location of the Web documents, Author.dll is not able to access sufficient
	information to construct the proper path in the file system. Enabling LIST
	rights simply allows the account to "see" the name of the directory. Once
	Author.exe can do this, it has sufficient information to place the new file in
	the file system of the Web server.
	
	RESOLUTION
	==========
	
	In File Manager (Windows NT 3.51) or Windows Explorer (Windows NT 4.0), select
	each directory that encloses the IIS document root (home) directory, and grant
	LIST permissions to the author or administrator account or to a group in which
	the author or administrator is a member.
	
	MORE INFORMATION
	================
	
	For more information on the NTFS file permission requirements for FrontPage on
	an IIS server with the FrontPage Server Extensions installed, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q162144 FP97: Minimum NTFS File Permission Requirements
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kberrmsg kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : :; WINDOWS:1.1
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
