---
layout: page
title: "Q185190: WD97: Find/Replace Macros Cannot Find Wingdings Characters"
permalink: kb/185/Q185190/
---

## Q185190: WD97: Find/Replace Macros Cannot Find Wingdings Characters

	Article: Q185190
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbwordvba
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word 97, when you run a macro to find or replace a character
	formatted with a decorative font such as one formatted with a Wingdings
	character, nothing happens.
	
	CAUSE
	=====
	
	This problem occurs if the macro was created in an earlier version of Word
	(Microsoft Word version 6.0 or Microsoft Word 7.0 for Windows 95) and if that
	macro uses the Asc function. In Word 97, this function returns the same ANSC
	(ANSI) or ACSII character code for all special characters.
	
	WORKAROUND
	==========
	
	To find and replace Symbol or special characters (characters from fonts not
	based on the ANSI or ASCII character set), use the FindSymbol macro, which is
	supplied with Word in the Macros8.dot template. Word Setup places this template
	in the macros folder of the Office program folder.
	
	To use the FindSymbol macro to find symbol or special characters in the current
	document, follow these steps:
	
	1. On the File menu, click Template.
	
	2. Select Macros8.dot, which is located in the <Word>\Macros directory,
	  and click OK.
	
	  Where <word> is the directory in which your Word program files are
	  located.
	
	3. On the Tools menu, click Macro.
	
	4. Select All Active Templates or Macros8.dot in the Macros Available In list.
	
	5. In the Macro Name box, select FindSymbol, and then click Run.
	
	  a. In the Find And Replace Symbols dialog box, click Find What to select the
	     symbol you want to find.
	
	  b. If you want to replace the Find What character with another symbol, select
	     the Replace With option and then click Replace With to select the
	     replacement symbol.
	
	  -or-
	
	     If you want to replace the Find What character with regular text, select
	     the Text option and type the replacement text in the Text box.
	
	For information about how to add sample macros in Word 97, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q162490 How to Access Sample Macros for Word 97
	
	MORE INFORMATION
	================
	
	The Asc function is used to return an integer representing the ANSI value of a
	Symbol character in a macro. When this function is used in Microsoft Word 97, it
	returns the same value (40 or 63 depending on the method you use to insert the
	character into your document) for all the decorative font characters.
	
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
	
	You can use the following macro to return the ANSI code for a Wingdings
	character:
	
	     Sub ShowANSI()
	        'Returns a message box with the ANSI value of the selected character.
	        MsgBox Str(Asc(Selection.Range))
	     End Sub
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	ANSI Value of 40
	----------------
	
	If you insert a Windgings font from the Symbol dialog box, the ANSI value for
	that character is always 40.
	
	To insert the Wingdings font from the Symbol dialog box, follow these steps:
	
	1. On the Insert menu, click Symbol and then click the Symbol tab.
	
	2. In the Font list, select Wingdings.
	
	3. Click any symbol, click Insert, and then click Close.
	
	If you select the inserted character and run the ShowANSI macro, Word displays a
	message box on the screen with the value 40. If you repeat steps 1-3 and insert
	a different Winding character, the value will remain 40.
	
	ANSI Value of 63
	----------------
	
	The ANSI character for a Wingdings character is always 63 if you insert the
	character by doing any of the following:
	
	- Use the Character Map
	
	- Use a keystroke (such as ALT+0245)
	
	- Manually change the character font (using the Font list or dialog box)
	
	To see an example of this, follow these steps:
	
	1. In blank document, click the drop-down arrow in the Font box, and select the
	  Wingdings font.
	
	2. Press the "K" key.
	
	  A fancy ampersand is added to your document.
	
	3. Select the character and run the macro.
	
	The ANSI value returned is 63.
	
	For more information about Unicode, visit the Unicode Web site at:
	
	  http://www.unicode.org/
	
	REFERENCES
	==========
	
	For more information about the CHRW function, from the Visual Basic Editor,
	click the Office Assistant, type "CHR function," click Search, and then click to
	view "CHR function."
	
	For more information about the ASCW function, from the Visual Basic Editor, click
	the Office Assistant, type ASC function," click Search, and then click to view
	"ASC function."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: vba symbol webdings monotype12
	
	======================================================================
	Keywords          : kbdta kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
