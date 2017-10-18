---
layout: page
title: "Q196435: WD97: How to Show/Hide Hidden Text"
permalink: kb/196/Q196435/
---

## Q196435: WD97: How to Show/Hide Hidden Text

	Article: Q196435
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbmacro kbdta kbdtacode word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This article explains how to show or hide hidden text in your document by using
	the menu option or by using a macro.
	
	MORE INFORMATION
	================
	
	Use one of the following methods to show or hide hidden text in your document:
	
	Method 1: Manually Turn On or Turn Off Hidden Text Viewing
	----------------------------------------------------------
	
	1. On the Tools Menu, click Options.
	
	2. Click the View tab.
	
	3. Under Nonprinting Characters, click to select or click to clear the Hidden
	  Text check box.
	
	4. Click OK.
	
	Method 2: Create a Macro to Turn On or Turn Off Hidden Text
	-----------------------------------------------------------
	
	The following sample macro turns hidden text on and off.
	
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
	
	Visual Basic for Applications Macro:
	
	     Sub ToggleShowHiddenText()
	        ActiveWindow.View.ShowHiddenText = Not _
	        ActiveWindow.View.ShowHiddenText
	     End Sub
	
	REFERENCES
	==========
	
	For additional information about getting help with Visual Basic for
	Applications, please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words:
	
	======================================================================
	Keywords          : kbmacro kbdta kbdtacode word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	
