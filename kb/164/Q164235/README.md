---
layout: page
title: "Q164235: WD97: Error - Cyclic References Of Projects Not Allowed"
permalink: /kb/164/Q164235/
---

## Q164235: WD97: Error - Cyclic References Of Projects Not Allowed

	Article: Q164235
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprogramming word8 kbwordvba word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you attempt to add a project as a reference in Visual Basic for
	Applications, you receive the following error message:
	
	  Cyclic references of projects not allowed
	
	You are attempting to reference a project for which a reference already exists.
	
	MORE INFORMATION
	================
	
	For example, the global template Normal.dot is the default underlying template
	for all new documents. Normal.dot contains the Visual Basic for Applications
	project, "Normal."
	
	When you create a new document based on the Word default template Normal.dot, the
	new document automatically inherits a reference to the "Normal" project. Also,
	each document is, in itself, a Visual Basic for Applications project.
	
	Because the document project contains a reference to the normal project, if you
	attempt to create a reference to the document project from the "Normal" project,
	the error described earlier in this article will occur.
	
	Also, the cyclic reference error will occur if you have made a reference to a
	project, for example, Project2 in Project1, and you then try to make a reference
	to Project1 in Project2.
	
	For example, either project may have a reference to the other:
	
	- Project1 can reference Project2
	
	-or-
	
	- Project2 can reference Project1
	
	But you cannot create a situation in which the projects reference each other. For
	example, the following will generate the cyclic reference error:
	
	- Project1 with a reference to Project2
	
	-and-
	
	- Project2 with a reference to Project1
	
	For more information about references, from the Visual Basic for Applications
	Editor, click the Office Assistant, type "references" (without the quotation
	marks), click Search, and then click to view "Check or Add an Object Library
	Reference."
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vbe vba
	
	======================================================================
	Keywords          : kbprogramming word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
