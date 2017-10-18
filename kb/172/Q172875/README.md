---
layout: page
title: "Q172875: WD97: General Document Properties Incorrect During Save"
permalink: kb/172/Q172875/
---

## Q172875: WD97: General Document Properties Incorrect During Save

	Article: Q172875
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you save a document for the first time, and the Prompt For Document
	Properties option is selected, the General tab of the Document Properties dialog
	box contains incorrect information or no information at all.
	
	CAUSE
	=====
	
	This behavior is by design. Word fills in the information on the General tab of
	the Document Properties dialog box before the save actually occurs. For
	example:
	
	- When you name a document for the first time, the information on the General
	  tab of the Document Properties dialog box is blank.
	
	  -or-
	
	- When you perform a Save As operation and rename the document, the information
	  on the General tab of the Document Properties dialog box is from the previous
	  Save.
	
	WORKAROUND
	==========
	
	Save your document first, and then check the document properties by clicking
	Properties on the File menu.
	
	MORE INFORMATION
	================
	
	Word can display the Document Properties dialog box the first time it saves a
	document. This allows you to enter information about the document, such as a
	title, keywords, or comments.
	
	To set these properties at any other time, click Properties on the File menu.
	
	REFERENCES
	==========
	
	For more information about document properties, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q167747 WD: Invalid Page Fault Linking Custom Document Property to Empty
	
	  Q166069 WD97: Document Properties Blank When Printed from Word Viewer
	
	  Q137356 WD: "Cannot Retrieve Properties..." or Document Opens Read-Only
	
	  Q138327 WD: Word: Properties Contents Tab Is Blank
	
	  Q155947 WD: Some Document Properties Don't Print
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
