---
layout: page
title: "Q159484: WD97: Simulating a Macro Pause in Visual Basic for Applications"
permalink: /kb/159/Q159484/
---

## Q159484: WD97: Simulating a Macro Pause in Visual Basic for Applications

	Article: Q159484
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbdta kbdtacode kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Visual Basic for Applications, there is no built-in command to
	allow pausing macro execution. This article contains a Visual Basic for
	Applications routine to simulate pausing a macro.
	
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
	
	For more information about how to use the sample code in this article, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	You can simulate a pause in Visual Basic for Applications by using the following
	macro example. When the macro runs, it checks to see whether there is a command
	assigned to a specified keystroke. If there is no command assigned, the macro
	assigns itself as the command. When the key combination is used in a Word
	document, this macro example resumes running and, at the same time, disables the
	key assignment made previously.
	
	NOTE: Replace the key constants in this example with the key combination that you
	want to use.
	
	  Sub MacroPauseExample()
	
	  Dim mykey As Variant
	
	     'Set the Normal.dot to hold keyboard changes.
	     CustomizationContext = NormalTemplate
	
	     ' Determine Pause State by looking at the
	     ' specified key combination command assignment.
	     Set mykey = KeyBindings.Key(BuildKeyCode _
	        (wdKeyControl, wdKeyAlt, wdKeyA))
	
	     ' If there is no Command assignment(meaning
	     ' the macro is not in a paused state).
	     If (mykey Is Nothing) Then
	
	        ' ------------------------------------------------------
	        ' <Place your code to run, BEFORE the pause occurs, here.>
	        ' ------------------------------------------------------
	
	        ' Pause the macro.
	        KeyBindings.Add KeyCode:=BuildKeyCode _
	          (wdKeyControl, wdKeyAlt, wdKeyA), _
	          KeyCategory:=wdKeyCategoryMacro, Command:="MacroPauseExample"
	        Exit Sub
	
	     Else ' The macro has been paused. Clear the pause state.
	
	        ' Sets the Normal.dot to hold keyboard changes.
	        CustomizationContext = NormalTemplate
	
	        ' Clear Pause State.(Clear the command associated
	        ' with the specified key combination.)
	        FindKey(BuildKeyCode(wdKeyControl, wdKeyAlt, wdKeyA)).Clear
	
	     End If
	
	     ' ------------------------------------------------------------
	     ' <Place your code to run, AFTER the pause is complete, here.>
	     ' ------------------------------------------------------------
	
	  End Sub
	
	For additional information about available resources for creating custom
	solutions using Visual Basic for Applications and Microsoft Word 97, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q163425 WD97: Macro Programming Resources
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	
	Additional query words: wordcon vb vba vbe halt stop paused pausing halting stopping
	
	======================================================================
	Keywords          : kbusage kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
