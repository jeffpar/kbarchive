---
layout: page
title: "Q170719: WD97: Using SendKeys with Dialog Boxes"
permalink: /kb/170/Q170719/
---

## Q170719: WD97: Using SendKeys with Dialog Boxes

{% raw %}

	Article: Q170719
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro kbProgramming kbdtacode kbwordvba
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you use the SendKeys function after calling a dialog box, your macro does
	not run as expected. For example, the following macro does not run correctly:
	
	     Sub SendKeysExample()
	        ChDir "C:\My Documents"           ' Change Directory.
	        Dialogs(wdDialogFileOpen).Show    ' Show the FileOpen dialog.
	        SendKeys "%A" '                   ' Send the ALT+A keystroke.
	     End Sub
	
	CAUSE
	=====
	
	Visual Basic for Applications processes code one line at a time. The SendKeys
	function sends the specified keys to the active application, just as if they
	were typed at the keyboard. If Word is not the active application, and if wait
	is set to -1, Word will wait for all the keys to be processed before
	proceeding.
	
	Whenever a Word dialog box is opened, it becomes the active foreground
	application and it is ready to take commands; it also must be terminated (with
	OK or Cancel) before the next line can be processed.
	
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
	
	In the example, the SendKeys command should come before the Dialogs command so
	that the FileOpen dialog box can process the keys and display the Advanced
	search dialog box. Then the next line of code can be processed.
	
	     Sub SendKeysExample()
	        ChDir "C:\My Documents"           ' Change Directory.
	        SendKeys "%A"                     ' Send the ALT+A keystroke.
	        Dialogs(wdDialogFileOpen).Show    ' Show the FileOpen dialog.
	     End Sub
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q165078 WD97: Some Open Shortcuts Changed
	
	For more information about SendKeys, from the Visual Basic for Applications
	Editor, click the Office Assistant, type "SendKeys," click Search, and then
	click to view "SendKeys Statement."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: offcon wordcon vba vb vbe execute
	
	======================================================================
	Keywords          : kbmacro kbProgramming kbdtacode kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
