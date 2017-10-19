---
layout: page
title: "Q181106: WD97: FileFind Command Does Not Open Advanced Find Dialog Box"
permalink: /kb/181/Q181106/
---

## Q181106: WD97: FileFind Command Does Not Open Advanced Find Dialog Box

	Article: Q181106
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Visual Basic for Applications Dialogs(wdDialogFileFind).Show command opens
	the Open dialog box, but it does not display the Advanced Find dialog box.
	
	CAUSE
	=====
	
	The FileFind command has limited functionality. The Find File dialog box used in
	earlier versions of Word has been replaced by the Advanced Find feature in Word
	versions 7.x and later.
	
	RESOLUTION
	==========
	
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
	
	To use the Advanced Find feature, use the FileSearch property with the
	PropertyTests collection object to set or retrieve Advanced Find values.
	
	For more information about FileSearch and PropertyTests, click the Office
	Assistant in the Visual Basic Editor, type "FileSearch PropertyTests" (without
	the quotation marks), click Search, and then click to view the "FileSearch
	Object" or "PropertyTests Collection Object" topic.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon FindFile fileopen
	
	======================================================================
	Keywords          : kbdta kbdtacode word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
