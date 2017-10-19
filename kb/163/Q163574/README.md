---
layout: page
title: "Q163574: WD97: DisplayAlerts=wdAlertsNone Fails to Suppress Print Error"
permalink: /kb/163/Q163574/
---

## Q163574: WD97: DisplayAlerts=wdAlertsNone Fails to Suppress Print Error

	Article: Q163574
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbwordvba
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you set the Visual Basic for Applications DisplayAlerts Property equal to
	wdAlertsNone, you still receive an error message when printing a document whose
	margins are set outside of the printable region for your printer.
	
	MORE INFORMATION
	================
	
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
	
	To prevent the margin error from occurring, you must disable background printing
	prior to issuing the command to print the document. Once the command to print
	has completed, you can re-enable background printing.
	
	The following example Visual Basic for Applications macro demonstrates this
	process:
	
	     Sub TurnOffAlertsAndPrint()
	        ' Store current Background Printing setting.
	        Dim x As Boolean
	        x = Options.PrintBackground
	        ' Turn off error messaging and Background Printing.
	        Application.DisplayAlerts = wdAlertsNone
	        Options.PrintBackground = False
	        ' Print the active document.
	        ActiveDocument.PrintOut
	        ' Turn on error messaging and restore Background Printing
	        ' to original setting.
	        Application.DisplayAlerts = wdAlertsAll
	        Options.PrintBackground = x
	     End Sub
	
	For more information about DisplayAlerts, from the Visual Basic for Applications
	Editor, click the Office Assistant, type "DisplayAlerts," click Search, and then
	click to view "DisplayAlerts Property."
	
	
	Additional query words: wordcon 97 word8 word97 8.0 vb vbe vba
	
	======================================================================
	Keywords          : kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
