---
layout: page
title: "Q158192: XCLN: Error When Opening File Posted to Public Folder"
permalink: kb/158/Q158192/
---

## Q158192: XCLN: Error When Opening File Posted to Public Folder

	Article: Q158192
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a file embedded in Public Folder with some older
	applications, the following error message may appear:
	
	  A problem occurred while working with, or connecting to, an embedded object
	  or its source application.
	
	This is known to be a problem with the following applications:
	
	  Microsoft Word 2.0
	  Microsoft Excel 4.0
	  Microsoft Powerpoint 3.0
	  Microsoft Project 4.0
	  Microsoft Excel 5.0, 32-bit version only
	
	RESOLUTION
	==========
	
	To work around the problem, do one of the following:
	
	- Copy or move the document to the file system and open the document.
	
	  -or-
	
	- Upgrade to the newest version of the application.
	
	MORE INFORMATION
	================
	
	This problem will occur even if you use a later version of an application but
	post to the public folder in an older file format. For example, you create a
	presentation in PowerPoint version 7.0 and save it in PowerPoint version 4
	format. If the file is placed into a public or private folder using a
	drag-and-drop operation, the same error occurs when you attempt to open it.
	
	This issue is documented in the Readme.wri on the Microsoft Exchange Server
	compact disc as follows:
	
	  1.4 Opening Files in Folders
	  If you cannot open a file in a Microsoft Exchange folder, highlight it, save
	  it on your hard disk, and then use the appropriate application to open it.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
