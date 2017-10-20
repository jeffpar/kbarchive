---
layout: page
title: "Q181174: WD97: How to Exit Windows from Word Using ExitWindows"
permalink: /kb/181/Q181174/
---

## Q181174: WD97: How to Exit Windows from Word Using ExitWindows

{% raw %}

	Article: Q181174
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	You can use the Microsoft Visual Basic for Applications ExitWindows method to
	exit Windows from Word for Windows.
	
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
	
	The ExitWindows method closes all open programs, quits Microsoft Windows, and
	logs the current user off. This method does not save changes to open Word
	documents or macros; however, it does prompt you to save changes to open
	documents in other Windows-based programs. This method is not available on the
	Macintosh.
	
	To use this command within Word for Windows and still be prompted to save any
	changes made during the current session, you can use an AutoExit macro, like the
	following, to exit Windows when you exit Word for Windows. The AutoExit macro
	runs each time you close Word for Windows.
	
	     Sub AutoExit
	        Tasks.ExitWindows
	     End Sub
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	For additional information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbdtacode word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
