---
layout: page
title: "Q185196: WD97: Sample Macro to Print All Open Documents"
permalink: kb/185/Q185196/
---

## Q185196: WD97: Sample Macro to Print All Open Documents

	Article: Q185196
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbmacroexample
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The following sample Visual Basic for Applications procedure uses the Documents
	collection object to print all documents that are open in Word.
	
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
	
	The following example prints all open documents one after another to the default
	printer.
	
	     Sub PrintAll()
	        Dim aDoc as Document
	        For Each aDoc In Documents
	           aDoc.PrintOut
	        Next
	     End Sub
	
	You may want to close each document after printing; however, the updating of
	certain field codes in the process of repagination will modify the document
	causing Word to prompt you to save the document. To automate the closing of
	documents without the save changes message, add the SaveChanges argument to Line
	3 as shown:
	
	Method 1: Do Not Save Changes at Closing
	----------------------------------------
	
	     For Each aDoc In Documents
	        aDoc.PrintOut
	        aDoc.Close SaveChanges:=wdDoNotSaveChanges
	     Next
	
	Method 2: Save Changes at Closing
	---------------------------------
	
	     For Each aDoc In Documents
	        aDoc.PrintOut
	        aDoc.Close SaveChanges:=wdSaveChanges
	     Next
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	Additional query words: vba word97 word8
	
	======================================================================
	Keywords          : kbdta kbmacroexample 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
