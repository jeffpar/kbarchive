---
layout: page
title: "Q165739: WD97: How Word Determines the Name of a Saved Version"
permalink: /kb/165/Q165739/
---

## Q165739: WD97: How Word Determines the Name of a Saved Version

	Article: Q165739
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage word97
	Last Modified: 18-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you use the Versioning feature to save a version of a document, Word will
	give the version a unique name when you open the version. The "More Information"
	section of this article describes how Word decides what the unique version name
	will be.
	
	MORE INFORMATION
	================
	
	Word generates a unique version name by using the following naming scheme:
	
	                             / optional  \ /optional\         /optional\ 
	   <doc name>, <create date>  \create time/ \ AM|PM  / version \ index  / 
	
	If the version has a unique date (no other versions were created that day), then
	the create time is not used. For example:
	
	  Doc2, 9-27-96 version
	
	If another version was created on that day (making the date non-unique), then the
	create time is used. For example:
	
	  Doc2, 9-27-96 12-21 PM version
	
	If a version already exists with that date and time stamp, the optional index
	number is used to supplement the name. For example:
	
	  Doc2, 9-27-96 12-21 PM version - 2
	
	
	REFERENCES
	==========
	
	For additional information about how to use the versioning feature in Word,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q157478 What's New in Word 97
	
	  Q157775 WD97: Can't Save Version for Read-Only Document
	
	  Q159730 WD97: Word 97 Doesn't Save Version When Document Is Closed
	
	  Q162989 WD97: Can't Save Versions of a Word Document from Office Binder
	
	For more information about "versioning," click the Office Assistant, type
	"versioning," click Search, and then click one of the following topics:
	
	- Delete one or more versions of a document.
	
	- Review version information for a file.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	
