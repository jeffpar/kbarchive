---
layout: page
title: "Q187892: WD97: Macro to Determine If a File Exists on Disk"
permalink: /kb/187/Q187892/
---

## Q187892: WD97: Macro to Determine If a File Exists on Disk

{% raw %}

	Article: Q187892
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The following sample macros determine if a specified file exists in the current
	folder.
	
	These macros can help you avoid receiving error messages such as "File not found"
	and "Document does not exist" when you open or delete specific files using
	Visual Basic for Applications.
	
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
	
	This example uses the Dir function to check if a certain file exists.
	
	Dir Function Syntax:
	
	  Dir[(pathname[,attributes])]
	
	Visual Basic for Applications Sample Code:
	
	     Sub DoesFileExist()
	        Dim MyFile as String
	        ' Returns "WIN.INI" if it exists.
	        MyFile = Dir("C:\WINDOWS\WIN.INI")
	        If MyFile <> "" Then MsgBox "File Exists."
	     End Sub
	
	NOTE: To avoid getting an error, you must specify pathname the first time you
	call the Dir function.
	
	Dir returns the first file name that matches pathname. When no more file names
	match, Dir returns a zero-length string (""). Once a zero-length string is
	returned, you must specify pathname in subsequent calls or an error occurs.
	
	For more information about the Dir Function, while in the Visual Basic for
	Applications Editor, click the Office Assistant, type "Dir" (without the
	quotation marks), click Search, and then click to view "Dir Function."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	For more information about running sample code, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	Additional query words: wordcon vba vb
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
