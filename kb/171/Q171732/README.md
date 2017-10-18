---
layout: page
title: "Q171732: WD97: Control Code for Finding/Replacing with Unicode Value"
permalink: kb/171/Q171732/
---

## Q171732: WD97: Control Code for Finding/Replacing with Unicode Value

	Article: Q171732
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Word 97, you can use a search control code to search for a
	character by its Unicode value. The syntax of the control code is as follows
	
	  ^uNNNNN
	
	where NNNNN is a decimal number corresponding to the Unicode character value.
	
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
	
	The following Visual Basic for Applications macro will generate a list of the
	decimal equivalents for the unicode character values. You can use these Unicode
	decimal values with the ^uNNNNN switch.
	
	     Sub UnicodeGenerator()
	        Dim I as Integer
	        Documents.Add
	        ' Set tab stops for clarity.
	        Selection.ParagraphFormat.TabStops.ClearAll
	        ActiveDocument.DefaultTabStop = InchesToPoints(0.5)
	        Selection.ParagraphFormat.TabStops.Add Position:= _
	        InchesToPoints(1.5), Alignment:=wdAlignTabCenter, _
	        Leader:=wdTabLeaderDots
	        ' Insert column headings.
	        Selection.InsertAfter "Characters" & Chr(9) & "UniCode Values"
	        Selection.InsertParagraphAfter
	        ' Character values below 30 generate undesirable results
	        ' when inserted into a document. For example, page breaks
	        ' and column breaks.
	        For i = 30 To 255
	           ' Insert the character, a tab and the Unicode equivalent.
	           Selection.InsertAfter Chr(i) & Chr(9) & AscW(Chr(i))
	           Selection.InsertParagraphAfter
	        Next
	     End Sub
	
	NOTE: To find a character using the Unicode value, click to select the Match Case
	check box. Word will search for either uppercase or lowercase characters
	depending on the value used in the search. If you clear the Match Case check
	box, Word will search all instances of uppercase and lowercase characters
	specified by the value.
	
	For example, if the Match Case check box is cleared, ^u65 will find all uppercase
	"A" (Unicode value 65) and lowercase "a" (Unicode value 97) characters in a
	document.
	
	REFERENCES
	==========
	
	For more information about Unicode in Microsoft Word 97, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q160070 WD97: Symbol Dialog Different from Previous Versions
	
	  Q159950 WD97: General Information About International Functionality
	
	  Q157478 WD97: What's New in Word 97
	
	Additional query words: symbols
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
