---
layout: page
title: "Q195135: WD97: Error Message: &quot;The subdocument ...is missing&quot;"
permalink: kb/195/Q195135/
---

## Q195135: WD97: Error Message: &quot;The subdocument ...is missing&quot;

	Article: Q195135
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to open a master document, the following error message appears:
	
	  The subdocument c:\<foldername>\<file name> is missing. Do you
	  want to expand the master document without this subdocument?
	
	If you click No, Word cancels the operation and does not open the master
	document. If you click Yes, Word opens the master document without the missing
	subdocument. You can then use the Insert Subdocument button on the Master
	Document toolbar to locate and reinsert the missing subdocument.
	
	CAUSE
	=====
	
	Word cannot find the subdocument if you move it to a different location relative
	to the master document, if the subdocument is located on a network drive that is
	no longer valid, or if you delete the subdocument file.
	
	MORE INFORMATION
	================
	
	If you want to move subdocuments to a new location relative to the master
	document, refer to the instructions in the "Rename a subdocument" topic in Word
	Help.
	
	When you move a master document, Word automatically searches for the subdocuments
	in a manner that is relative to the master document. This feature, which is by
	design, makes it easy for you to move an entire master document directory tree
	while preserving the subdocument references.
	
	When you open a master document, Word searches for the subdocuments relative to
	the master document. In other words, if the subdocuments are in a subdirectory
	of the master document directory, Word looks for the subdocuments in the same
	subdirectory of the new master document location. The following table
	illustrates this search pattern.
	
	                 If the former               Then Word automatically
	                 location is:                searches here:
	                 ---------------------------------------------------
	
	  Master         C:\WORD 97\MASTER          F:\CATALOG\1993
	  Subdocuments   C:\WORD 97\MASTER\SUBDOCS  F:\CATALOG\1993\SUBDOCS
	
	                                              -then-
	
	                                             C:\WORD 97\MASTER\SUBDOCS
	
	If Word cannot find the subdocuments in the relative location, it searches in the
	original subdocument location (in this case, C:\WORD 97\MASTER\SUBDOCS). If Word
	still cannot find the subdocument, the "The subdocument is missing..." error
	message appears.
	
	
	Additional query words: long docs books
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
