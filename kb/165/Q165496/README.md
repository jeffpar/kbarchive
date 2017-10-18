---
layout: page
title: "Q165496: INFO: VSS Integration With MS Word and MS Excel"
permalink: kb/165/Q165496/
---

## Q165496: INFO: VSS Integration With MS Word and MS Excel

	Article: Q165496
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbSSafe400
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Visual SourceSafe for Windows can be integrated with Microsoft Word and
	Microsoft Excel. The self-extracting file containing the utility can be
	downloaded from the Free Downloads area at http://www.msdn.microsoft.com/ssafe
	
	MORE INFORMATION
	================
	
	This utility is manufactured by Baarns Consulting, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	These are the main points from the Readme.txt file associated with the utility.
	
	REQUIREMENTS:
	
	- Microsoft Windows '95 or Windows NT
	- Microsoft Word 7.0 (Word '95): required for Word integration
	- Microsoft Excel 7.0 (Excel '95): required for Excel integration
	- Microsoft Visual SourceSafe 4.0
	
	Any user of this integration must be fully licensed to use Microsoft Word, Excel
	and Visual SourceSafe.
	
	BASIC USE
	
	NOTE: The following instructions are given for Microsoft Word, simply as an
	example. The instructions for Excel are identical, except as noted.)
	
	Once you have installed the integration, run Word, and you will see a new
	top-level menu: "SourceSafe."
	
	NOTE: all commands in this menu operate on the *currently open* document.
	
	- "Add to SourceSafe" is used when your current document is not in Visual
	  SourceSafe at all.
	
	- "Check Out" gives you a writable copy of the document to edit.
	
	- "Check In" puts your newly changed file back into Visual SourceSafe.
	
	- "Undo Check Out" ends your checkout and voids all your changes.
	
	- "Get Latest Version" (equivalent to "Get" in the Visual SourceSafe Explorer)
	  gives you the most recent version of the file.
	
	- "Show Differences" compares your current copy of the document, against the
	  most recent document in Visual SourceSafe. After you execute this command,
	  Word revision marks are used to highlight every change you have made. To
	  clear the revision marks, click "Revisions" on the Tools menu, and click
	  "Accept All."
	
	NOTE: "Show Differences" is not available in Microsoft Excel.
	
	SourceSafe Project
	------------------
	
	Your document will be added to the "$/My Documents" project in Visual SourceSafe.
	You can then run the Visual SourceSafe Explorer and drag the file to any other
	project, or projects, that it should be a part of.
	
	Working Directory
	-----------------
	
	The Word add-in always works on a file in the directory that the file is in. For
	instance, if you open C:\Docs\Spec.doc and then check it out, Word will check
	the file out to C:\Docs.
	
	Once you have started using this add-in, it is not generally recommended to check
	Word documents out from the Visual SourceSafe Explorer. If you must use the
	SourceSafe Explorer, make sure to check your working directory before performing
	any operations on these documents.
	
	
	Login
	-----
	
	If you are prompted to log in every time you execute a SourceSafe command, there
	are several ways to avoid the prompt.
	
	1. Make your Visual SourceSafe name the same as your Windows login name. This is
	  always recommended, and will avoid any login prompt.
	
	2. Edit your Autoexec.bat to contain the following lines:
	
	     Set SSUSER=<your SourceSafe login name>
	     Set SSPWD=<your SourceSafe password>
	
	3. Edit the Word macros so that each command-line call to Sswcl.exe adds the
	  following command-line parameter:
	
	     -Y<Your SourceSafe login name>,<Your SourceSafe password>
	
	Additional query words: Office
	
	======================================================================
	Keywords          : kbSSafe400 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400
	Version           : WINDOWS:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
