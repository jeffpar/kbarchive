---
layout: page
title: "Q159424: WD97: FileCopy Statement Requires Destination File Name"
permalink: /kb/159/Q159424/
---

## Q159424: WD97: FileCopy Statement Requires Destination File Name

	Article: Q159424
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbwordvba
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the FileCopy statement and do not specify a destination file name,
	you get the following error message:
	
	  Run-time error '75':
	  Path/File access error
	
	CAUSE
	=====
	
	The Visual Basic for Applications FileCopy statement requires a destination file
	name.
	
	WORKAROUND
	==========
	
	Microsoft provides examples of Visual Basic for Applications procedures for
	illustration only, without warranty either expressed or implied, including, but
	not limited to the implied warranties of merchantability and/or fitness for a
	particular purpose. The Visual Basic procedures in this article are provided 'as
	is' and Microsoft does not guarantee that they can be used in all situations.
	While Microsoft support professionals can help explain the functionality of a
	particular macro, they will not modify these examples to provide added
	functionality, nor will they help you construct macros to meet your specific
	needs. If you have limited programming experience, you may want to consult one
	of the Microsoft Solution Providers. Solution Providers offer a wide range of
	fee-based services, including creating custom macros. For more information about
	Microsoft Solution Providers, call Microsoft Customer Information Service at
	(800) 426-9400.
	
	To copy a file to a folder without specifying the required file name for a
	destination, append the WordBasic property to the WordBasic CopyFile statement,
	as in the following example:
	
	     Sub CopyFileToFolder()
	        'Copies a file to a folder.
	        WordBasic.CopyFile "C:\test.doc", "C:\myfolder"
	     End Sub
	
	MORE INFORMATION
	================
	
	In earlier versions of Word, you can use the WordBasic CopyFile statement to
	copy a file directly to a folder without specifying the destination file name.
	
	In Microsoft Visual Basic for Applications, the FileCopy statement requires a
	file name for a destination. In certain cases, naming a destination folder is
	optional.
	
	In Visual Basic for Applications, use the following code to copy a file of the
	same name to a new destination:
	
	     Sub CopyFileToFolder()
	        FileCopy "C:\test.doc", "C:\myfolder\test.doc"
	        'The destination folder must be included the destination argument
	     End Sub
	
	You can use the following code to copy a file to the same folder using a
	different file name:
	
	     Sub CopyFileToFile()
	        FileCopy "C:\test.doc", "C:\copytest.doc"
	        'The folder name in the destination argument does not need to be
	        'included.
	     End Sub
	
	When you attempt to copy a file to the same folder as the source without
	specifying a different name for the destination file, or when you attempt to
	copy a file that is currently open, you will get the following error:
	
	  Run-time error '70': Permission Denied
	
	For more information about the FileCopy statement, from the Visual Basic Editor,
	click the Office Assistant, type "FileCopy" (without the quotation marks) click
	Search, and then click to view "the FileCopy Statement.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Visual Basic Help is not installed on your
	computer, please see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For information on how to do this in previous versions of Word, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q134808 CopyFile Command Altered by Hide MS-Dos extension Option
	
	Additional query words: wordcon word8 word97 8.0 vb vba vbe file copy
	
	======================================================================
	Keywords          : kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
