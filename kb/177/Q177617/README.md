---
layout: page
title: "Q177617: WD: Manage Fields Dialog Box Returns Incorrect Values"
permalink: kb/177/Q177617/
---

## Q177617: WD: Manage Fields Dialog Box Returns Incorrect Values

	Article: Q177617
	Product(s): Word 97 for Windows
	Version(s): MACINTOSH:98; WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbProgramming
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Word 98 Macintosh Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Visual Basic for Applications code to display the
	built-in Microsoft Word dialog box called "Manage Fields," a value of -1 is
	returned when you click either OK or Cancel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
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
	
	The following sample Visual Basic macro (Sub procedure) demonstrates the problem
	described in the "Symptoms" section of this article.
	
	     Sub ShowManageFields()
	        ' Show the dialog box.
	        x = Dialogs(wdDialogToolsManageFields).Show
	        ' The value of x returns -1 when OK or Cancel is clicked.
	        Msgbox x
	     End Sub
	
	In this example, clicking Cancel should return a value of 0 and clicking OK
	should return a value of -1. However, both OK and Cancel return a value of -1.
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon OFF98 vba header record delimiter mail merge
	
	======================================================================
	Keywords          : kbcode kbProgramming 
	Technology        : kbHWMAC kbOSMAC kbWordSearch kbWordMacSearch kbWord98Search kbWord97 kbWord97Search kbZNotKeyword2 kbZNotKeyword3 kbWord98
	Version           : MACINTOSH:98; WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
