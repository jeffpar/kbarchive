---
layout: page
title: "Q196428: WD97: Word Doesn't Display Each Open Document When Quitting"
permalink: /kb/196/Q196428/
---

## Q196428: WD97: Word Doesn't Display Each Open Document When Quitting

	Article: Q196428
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have multiple documents open and you click Exit on the File menu, Word
	displays the most recently opened document when you are prompted to save any
	modified files. This functionality is different from earlier versions of Word,
	which displayed each document when you were prompted to save it.
	
	WORKAROUND
	==========
	
	To display each document as Word prompts you to save it, use one of the
	following methods:
	
	Method 1: Create a Macro
	------------------------
	
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
	
	Create the following macro, and name it FileExit. Word will use this macro in
	place of the original FileExit or FileQuit command.
	
	     Sub FileExit()
	     Dim X as Document
	        For Each X In Documents
	           X.Activate
	           On Error Resume Next
	           X.Close
	        Next
	     End Sub
	
	Method 2: Use the SHIFT Key
	---------------------------
	
	Hold down the SHIFT key, click File, and then click Close All. When all documents
	are saved and closed, click Exit on the File menu.
	
	Method 3: Use the FileCloseAll Command
	--------------------------------------
	
	Customize your File menu by adding the FileCloseAll command to the File menu.
	When all documents are saved and closed, click Exit on the File menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	Additional query words: file close all closeall filecloseall quit exit save prompt documents display view
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
