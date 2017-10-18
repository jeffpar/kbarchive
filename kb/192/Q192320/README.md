---
layout: page
title: "Q192320: WD97: Disable System Menu Button and Keyboard Close Command"
permalink: kb/192/Q192320/
---

## Q192320: WD97: Disable System Menu Button and Keyboard Close Command

	Article: Q192320
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbwordvba
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following Visual Basic for Applications code will remove the Close command
	from the Document System menu list and the keyboard commands assigned to
	"DocClose" command. By making an item not visible, it is removed from the menu
	list and unavailable to users, whether the document is docked or windowed.
	
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
	
	Remove Menu Items
	-----------------
	
	To disable the Close command or any item on the Document System menu list run the
	following lines of code. By making an item not visible, it is removed from the
	menu list and unavailable to the user, whether the document is docked or
	windowed on the screen.
	
	     Sub HideMenuItems()
	        CommandBars("System").Controls("&Close").Visible = False
	        CommandBars("System").Controls("&Restore").Visible = False
	        CommandBars("System").Controls("&Move").Visible = False
	        CommandBars("System").Controls("&Size").Visible = False
	        CommandBars("System").Controls("Mi&nimize").Visible = False
	        CommandBars("System").Controls("Ma&ximize").Visible = False
	     End sub
	
	NOTE: When you type the name of the menu item, you must type the name as it
	appears in the menu list (with no spaces and the "&" representing the "hot
	key").
	
	Restore Menu items
	------------------
	
	To restore the system menu items, you must run the following macro.
	
	NOTE: Closing and restarting Word does not restore the menu items.
	
	     Sub RestoreMenu()
	        CommandBars("System").Reset
	     End sub
	
	Disable Keyboard Shortcut
	-------------------------
	
	To disable the keyboard shortcut key assigned to the DocClose macro, run the
	following code:
	
	     Sub DisableKeyboard()
	        CustomizationContext = NormalTemplate
	        FindKey(BuildKeyCode(wdKeyW, wdKeyControl)).Disable
	        FindKey(BuildKeyCode(wdKeyF4, wdKeyControl)).Disable
	     End Sub
	
	Assign or Reset Keyboard Shortcut Keys
	--------------------------------------
	
	To assign the default values and functionality, run one of the following Visual
	Basic for Applications macros:
	
	     Sub EnableKeyBoard()
	        CustomizationContext = NormalTemplate
	
	        KeyBindings.Add KeyCode:=BuildKeyCode(wdKeyF4, wdKeyControl), _
	           KeyCategory:=wdKeyCategoryCommand, Command:="DocClose"
	
	        KeyBindings.Add KeyCode:=BuildKeyCode(wdKeyW, wdKeyControl), _
	           KeyCategory:=wdKeyCategoryCommand, Command:="DocClose"
	     End Sub
	
	-or-
	
	     Sub Macro7()
	        'Resets all keyboard key assignment to there default
	        CustomizationContext = NormalTemplate
	        KeyBindings.ClearAll
	     End Sub
	
	For more information about command bars, from the Visual Basic Editor, click the
	Office Assistant, type "Commandbars" (without the quotation marks), click
	Search, and then click to view "Using command bars".
	
	For more information about customizing Templates, from the Visual Basic Editor,
	click the Office Assistant, type "CustomizationContext" (without the quotation
	marks), click Search, and then click to view "CustomizationContext Property".
	
	For more information about keyboard key stroke assignment, from the Visual Basic
	Editor, click the Office Assistant, type "KeyBindings" (without the quotation
	marks), click Search, and then click to view "KeyBindings Collection Object".
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	Additional query words: wordcon vba toolbars dialog box
	
	======================================================================
	Keywords          : kbdta kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
