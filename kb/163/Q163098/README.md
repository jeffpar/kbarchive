---
layout: page
title: "Q163098: WD97: Run-Time Error 1517 Running Converted WordBasic Macro"
permalink: /kb/163/Q163098/
---

## Q163098: WD97: Run-Time Error 1517 Running Converted WordBasic Macro

{% raw %}

	Article: Q163098
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a converted WordBasic macro, you receive the following error
	message:
	
	  Run-time error '1517':
	  Word cannot find the designated menu item.
	
	CAUSE
	=====
	
	The converted WordBasic macro may contain a command that is missing arguments.
	
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
	
	Use one of the following methods to work around this problem:
	
	Method 1: Record the Menu Action in WordBasic
	---------------------------------------------
	
	Using the version of Word that you used to create the original WordBasic macro,
	record the actions to perform the menu function, and then convert it to a Visual
	Basic for Applications macro.
	
	Method 2: Convert the Code to Visual Basic for Applications Commands
	--------------------------------------------------------------------
	
	Edit the converted macro in the Visual Basic Editor and replace the WordBasic
	commands with Visual Basic for Applications commands.
	
	For example, change this converted WordBasic command line,
	
	     WordBasic.ToolsCustomizeMenus Name:="MySubMenu", Context:=1, _
	     Menu:="MyMenu", Remove:=1
	
	to this Visual Basic for Applications command set:
	
	     ' On the custom menu "My Menu",
	     With CommandBars.ActiveMenuBar.Controls("My Menu").CommandBar
	   
	        ' Delete the custom sub menu "My Sub Menu".
	        .Controls("My Sub Menu").Delete
	   
	     End With
	
	For more information about CommandBars, from the Visual Basic Editor, click the
	Office Assistant, type "CommandBars" (without the quotation marks), click
	Search, and then click to view "CommandBars Object."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
