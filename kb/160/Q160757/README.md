---
layout: page
title: "Q160757: WD97: Run-Tme Error Using True Parameter on NewTemplate Method"
permalink: /kb/160/Q160757/
---

## Q160757: WD97: Run-Tme Error Using True Parameter on NewTemplate Method

{% raw %}

	Article: Q160757
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a macro that passes True as a parameter to the NewTemplate method
	of the Dialogs property, you receive the following error message:
	
	  Run-time error '9118': Parameter value was out of acceptable range.
	
	CAUSE
	=====
	
	The NewTemplate method only takes 0 or 1 as valid parameters. Your macro may be
	using True for the parameter and the value for "True" is -1.
	
	The following Microsoft Visual Basic for Applications code demonstrates this
	problem:
	
	  Set dlgDialog = Dialogs(wdDialogFileNew)
	  dlgDialog.NewTemplate = True ' <- Attempts to set a value of -1.
	  dlgDialog.Show
	
	RESOLUTION
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
	
	To resolve this problem, use 1 as the parameter for the NewTemplate method
	instead of True or -1. For example:
	
	  oDialog.NewTemplate = 1
	
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
	Keywords          : kberrmsg kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
