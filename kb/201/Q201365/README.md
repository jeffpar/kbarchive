---
layout: page
title: "Q201365: WD97: How to Turn Off the Menu Bar Close Window Button"
permalink: kb/201/Q201365/
---

## Q201365: WD97: How to Turn Off the Menu Bar Close Window Button

	Article: Q201365
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Word 97 for Windows, the menu bar command bar has three buttons on
	the right side. These buttons are assigned to the following Word macro
	commands:
	
	DocClose
	DocMinimize
	DocMaximize
	DocMove
	DocRestore
	DocSize
	
	When you create a document window, the buttons are transferred to the document
	window title bar. To turn off (disable) these buttons, you must modify the
	Visual Basic for Applications commands listed above.
	
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
	
	To turn off the Close, Size, and Minimize buttons on the menu bar or the document
	window title bar, follow these steps:
	
	1. On the Tools menu, click Macro, and then click Macros (shortcut keys ALT+F8).
	
	2. In the Macro name box, type "DocClose" (without the quotation marks), and
	  then click Create. The Visual Basic Editor window opens, displaying the
	  following code:
	
	  Sub DocClose()
	     '
	     ' DocClose Macro
	     ' Prompts to save the document and then closes the active window
	     '
	     WordBasic.DocClose
	  End Sub
	
	3. Type an apostrophe (') at the beginning of each command line in the macro,
	  which will remark them out, as in the line below.
	
	    'WordBasic.DocClose
	
	4. Press ALT+F4 to close the Visual Basic Editor. You have now turned off the
	  DocClose command in Word.
	
	Repeat the above steps for the other commands (listed in the "Symptoms" section)
	that you want to turn off.
	
	To return to the default Word functionality, you must delete the name of the
	function you turned off on the menu bar in the Macros dialog box.
	
	Additional query words: vba ActiveWindow WindowState wdWindowStateNormal vbe
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
