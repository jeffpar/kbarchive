---
layout: page
title: "Q181786: WD97: Using the INFO Field to Obtain Summary Info Data"
permalink: /kb/181/Q181786/
---

## Q181786: WD97: Using the INFO Field to Obtain Summary Info Data

	Article: Q181786
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacroexample kbfield word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to use the INFO field in Microsoft Word to write
	information to the Summary Info dialog box without opening the dialog box. By
	nesting a FILLIN field in the INFO field, you can create a template that prompts
	you for Summary Info when you create a new document.
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	For example, you can create a memo template that prompts you for sender,
	recipient, and subject information by inserting the following fields:
	
	     {INFO Author {FILLIN "Who is the memo from?"} }
	     {INFO Comments {FILLIN "Who is the memo to?"} }
	     {INFO Title {FILLIN "What is the topic of the memo?"} }
	     {INFO Subject {FILLIN "What is the subject of the memo?"} }
	     {INFO Keywords {FILLIN "What are the keywords?"} }
	
	NOTE: To create the field brackets, press CTRL+F9 (Windows) or COMMAND+F9
	(Macintosh).
	
	The information you type in response to each prompt appears in your document and
	in the Summary Info dialog box.
	
	If you want to update these fields each time you create a new document, add an
	AutoNew macro to your template.
	
	     Sub AutoNew()
	        For Each aStory In ActiveDocument.StoryRanges
	           aStory.Fields.Update
	        Next aStory
	     End Sub
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words:
	
	======================================================================
	Keywords          : kbmacroexample kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
