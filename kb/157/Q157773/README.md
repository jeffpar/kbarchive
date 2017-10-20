---
layout: page
title: "Q157773: WD97: Macro to Disable Float Over Text Property"
permalink: /kb/157/Q157773/
---

## Q157773: WD97: Macro to Disable Float Over Text Property

{% raw %}

	Article: Q157773
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbualink97 kbdta kbdtacode kbmacroexample word97
	Last Modified: 24-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word 97, when you insert a picture or an object, by default, the
	picture or object is inserted as floating object. That is, the Float Over Text
	check box is always enabled.
	
	In addition, if you click to clear the Float Over Text check box, the check box
	is reset each time you insert a new picture or object. That is, the setting you
	choose is not retained. You must clear the check box each time you insert an
	object or picture.
	
	This article provides a sample Visual Basic for Applications macro that opens the
	InsertPicture or InsertObject dialog box with the Float Over Text check box
	deselected.
	
	Note: In Microsoft Word 97 Service Release 1, when you insert a picture or
	object, it is inserted as an inline (non-floating) object. That is, the Float
	Over Text check box is cleared by default.
	
	In addition, if you click to select the Float Over Text check box, Word will
	retain your setting. That is, the option will be set until you change it again.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q170564 WD97: Pictures and Objects Inserted as Inline by Default in SR-1
	
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
	
	If you name the following example Visual Basic for Applications macros
	"InsertPicture" and "InsertObject", Word will run these macros instead of
	opening the default dialog box when you click From File (On the Insert Picture
	menu) or when you click Object on the Insert menu. You can use another name and
	assign the macro(s) to a toolbar button or menu if you want to have access both
	to Word's built-in dialog box and the one displayed when these macros are run.
	
	Macro workaround for the Insert Picture Dialog Box
	--------------------------------------------------
	
	     Sub InsertPicture()
	        With Dialogs(wdDialogInsertPicture)
	           .FloatOverText = False
	           .Show
	        End With
	     End Sub
	
	Macro workaround for the Insert Object Dialog Box
	-------------------------------------------------
	
	     Sub InsertObject()
	        ' Turns the float over text option off.
	        SendKeys "%{t}"
	        ' Displays the Insert Object dialog.
	        Dialogs(wdDialogInsertObject).Show
	     End Sub
	
	For more information about adding a command to a menu, click Contents And Index
	on the Help menu, click the Index tab in Word Help, type the following text
	
	  menus
	
	and then double-click the selected text to go to the "Add a command or other item
	to a menu" topic. If you are unable to find the information you need, ask the
	Office Assistant.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q181058 OFF98: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: vb vba vbe
	
	======================================================================
	Keywords          : kbualink97 kbdta kbdtacode kbmacroexample word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
