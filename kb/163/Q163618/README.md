---
layout: page
title: "Q163618: WD97: Writing Macro Code for VBA and WordBasic Branching"
permalink: /kb/163/Q163618/
---

## Q163618: WD97: Writing Macro Code for VBA and WordBasic Branching

	Article: Q163618
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbinterop kbole kbprogramming kbwordvbakbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article includes sample Visual Basic code that demonstrates how to
	determine the version of Word for Windows currently installed when using OLE
	automation. Based on the version of Word, the code will conditionally branch to
	use WordBasic commands if the version of Word is earlier than Word 97. If the
	version of Word returned is equal to or greater than Word 97, the code will
	branch to use Visual Basic for Applications commands.
	
	You may want to use this conditional branching if you are using more than one
	version of Word on your computer.
	
	MORE INFORMATION
	================
	
	In Microsoft Word 97 and later versions, WordBasic has been replaced with Visual
	Basic for Applications. For backward compatibility, Visual Basic for
	Applications contains a WordBasic object. To ensure that the WordBasic command
	and arguments are positioned correctly, use the Position.hlp file for Word for
	Windows version 6.x.
	
	NOTE: If your programming language was written to call WordBasic commands and you
	are anticipating interacting with the Microsoft Word Visual Basic for
	Applications language for all future development needs, you should convert your
	code from WordBasic to Microsoft Word Visual Basic for Applications.
	
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
	
	   ' ******************************************************************
	     ' MODULE NAME: Coding For WordBasic or Visual Basic Based On Version
	     ' DECLARATIONS SECTION
	     ' ******************************************************************
	     Dim oWordWB As Object
	     Dim oWordVBA As Object
	
	     ' The GetWordVersion routine creates a WordBasic object. It then
	     ' determines the currently installed version of Word for Windows.
	     ' If the version is earlier than Word 97, it branches to use a
	     ' WordBasic Code" routine.
	     ' If the version is Word 97 or later, it branches to use a Visual
	     ' Basic for Applications routine. If Word is not currently installed,
	     ' an error is trapped and the program displays a message and ends.
	
	     Sub GetWordVersion ()
	        ' *******************************************************
	        ' PURPOSE: To determine the Word version and branch
	        '          conditionally based on the version returned.
	        '
	        ' ARGUMENTS:
	        '           oWordWB - WordBasic Object
	        ' *******************************************************
	        On Error GoTo NoWord
	        Set oWOBJ = CreateObject("Word.basic")
	        If Val(oWOBJ.AppInfo(2)) < 8 Then
	           ' If earlier than version 8, branch to WordBasic code.
	           UseWordBasicCode
	        Else
	           ' If version 8 or later, branch to Visual Basic for
	           ' Applications code.
	           UseVBACode
	        End If
	     NoWord:
	        If Err <> 0 then
	           MsgBox "Word is not installed."
	           End
	        End If
	     End Sub
	
	        Sub UseVBACode ()
	           ' *********************************************************
	           ' PURPOSE: Used for Visual Basic For Applications commands.
	           '
	           ' ARGUMENTS:
	           '           oWordWB  - WordBasic Object
	           '           oWordVBA - Visual Basic for Applications Object
	           ' *********************************************************
	           ' Close the WordBasic Object that was used to determine the
	           ' Word version.
	           oWordWB.FileExit
	           Set oWordWB = Nothing
	           ' Create a Word Visual Basic For Applications object.
	           Set oWordVBA = CreateObject("Word.Application")
	           ' ***********************************************
	           ' < Visual Basic For Applications Commands Here >
	           ' ***********************************************
	           ' When quitting an OLE session with Visual Basic For Applications,
	           ' you must use the Quit command in combination with setting
	           ' the OLE object to Nothing to clear the instance from memory.
	           oWordVBA.Quit
	           Set oWordVBA = Nothing
	        End Sub
	
	        Sub UseWordBasicCode ()
	           ' *************************************
	           ' PURPOSE: Used for WordBasic commands.
	           '
	           ' ARGUMENTS:
	           '           oWordWB - WordBasic Object
	           ' *************************************
	           ' **************************
	           ' < WordBasic Commands Here>
	           ' **************************
	           ' Close the instance of Word.
	           oWordWB.FileExit
	           ' Clear the Object from memory.
	           Set oWordWB = Nothing
	        End Sub
	
	Additional query words: wordcon vb vbe vba
	
	======================================================================
	Keywords          : kbcode kbinterop kbole kbprogramming kbwordvba kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
