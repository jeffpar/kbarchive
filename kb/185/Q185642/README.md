---
layout: page
title: "Q185642: WD97: Cannot Specify Password Using RecentFiles.Open Method"
permalink: kb/185/Q185642/
---

## Q185642: WD97: Cannot Specify Password Using RecentFiles.Open Method

	Article: Q185642
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the RecentFiles property with the Open method in Microsoft Visual
	Basic for Applications, you cannot specify a password for a document you open
	from the most recently used file list (on the File menu).
	
	WORKAROUND
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
	
	To work around this problem, use the following Visual Basic for Applications
	sample macro.
	
	The following macro passes the RecentFiles(1).Name to the Documents.Open command,
	with which you can specify a document password. The macro opens the first item
	in the Most Recently Used(MRU) list. To specify another item in the list, use a
	different number, such as RecentFiles(3).Name.
	
	     Sub OpenRecentFileWithPassWord()
	
	        If RecentFiles.Count >= 1 Then
	
	           ' Replace "YourDocumentPassWord" with the password
	           ' of the document to open.
	           Documents.Open FileName:=RecentFiles(1).Name, _
	              PasswordDocument:="YourDocumentPassWord"
	
	        End If
	     End Sub
	
	For more information about the RecentFiles Object, from the Visual Basic Editor,
	click the Office Assistant, type "RecentFiles" (without the quotation marks),
	click Search, and then click to view "RecentFiles Object."
	
	For more information about the Documents Object, from the Visual Basic Editor,
	click the Office Assistant, type "Documents" (without the quotation marks),
	click Search, and then click to view "Documents Object."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vba vb vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
