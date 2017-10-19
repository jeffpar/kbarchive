---
layout: page
title: "Q158348: WD97: How to Change the Default File Name and Directory"
permalink: /kb/158/Q158348/
---

## Q158348: WD97: How to Change the Default File Name and Directory

	Article: Q158348
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro kbusage kbdta kbdtacode word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Word, you can change the default folder and file names that appear
	when you click Open on the File menu.
	
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
	
	Changing the Default Directory
	------------------------------
	
	To change the default directory that appears when you click Open on the File
	menu, use either of the following methods.
	
	Method 1: Manually change the default directory.
	
	1. On the Tools menu, click Options.
	
	2. Click the File Locations tab.
	
	3. Under File types, select Documents, and then click Modify.
	
	4. Change to the location you want.
	
	Method 2: Use a macro to change the default directory.
	
	NOTE: When you quit Word after you modify or add these changes, you may be
	prompted to save the changes to the Normal template. Click Yes to save your
	changes.
	
	Macro to change the default documents folder:
	
	  Sub SetDefaultFolder()
	     ' Set the default directory.
	     ' Note: Substitute any existing directory.
	     Options.DefaultFilePath(Path:=wdDocumentsPath) = "D:\My Documents"
	  End Sub
	
	Changing the Default FileOpen Extension
	---------------------------------------
	
	
	Use the following sample Visual Basic for Applications macro to set the Default
	FileOpen Extension:
	
	NOTE: The name of the macro must be FileOpen.
	
	  Sub FileOpen()
	     With Dialogs(wdDialogFileOpen)
	        ' Use any valid extension type, i.e.: "*.RTF"
	        .Name = "*.RTF"
	        .Show
	     End With
	  End Sub
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	
	Additional query words: vb vba vbe grey gray unavailable set filespec filetype format
	
	======================================================================
	Keywords          : kbmacro kbusage kbdta kbdtacode word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
