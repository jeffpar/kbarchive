---
layout: page
title: "Q161919: WD97: Word Still Runs After OLE Automation Session"
permalink: /kb/161/Q161919/
---

## Q161919: WD97: Word Still Runs After OLE Automation Session

{% raw %}

	Article: Q161919
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you control Word for Windows 97 from another application using OLE
	Automation, as in the following example:
	
	  Sub WordTask()
	     Dim appWd As Object
	     Set appWd = CreateObject("Word.Application")
	     Set appWd = Nothing
	  End Sub
	
	Word remains loaded in memory (even though the code uses the Set statement to set
	the instance of Word to "Nothing").
	
	NOTE: IF you press CTRL+ALT+DELETE to bring up the Windows Task List, you see
	that "Winword" is still running.
	
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
	
	The proper method to use when ending a Word OLE Automation session is to use the
	Quit method. For example:
	
	  Sub WordTask()
	     Dim appWd As Object
	     Set appWd = CreateObject("Word.Application")
	     ' Quit the Word session.
	     appWd.Quit
	     ' Set the Word OLE Object to nothing to free
	     ' the appWd object memory.
	     Set appWd = Nothing
	  End Sub
	
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
	Keywords          : kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
