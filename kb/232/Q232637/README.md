---
layout: page
title: "Q232637: WD97: Run-Time Error 1220 Running WordBasic.Shell Statement"
permalink: /kb/232/Q232637/
---

## Q232637: WD97: Run-Time Error 1220 Running WordBasic.Shell Statement

	Article: Q232637
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a line of Visual Basic for Applications (VBA) code similar to the
	following (or when a third-party add-in does the same):
	
	  WordBasic.Shell "C:\Program Files\Microsoft Office\Office\msqry32.exe", 1
	
	the following error message appears:
	
	  Run-time error '1220': Word cannot find or run the application.
	
	
	CAUSE
	=====
	
	The WordBasic.Shell statement does not support the use of long file names and
	directory names. Only standard 8.3 file names and directory names are
	recognized.
	
	WORKAROUND
	==========
	
	To resolve this problem, replace WordBasic.Shell statements with Visual Basic
	for Applications Shell functions. The VBA Shell function fully supports long
	file and directory names. For more information about shell function, in the
	Visual Basic Editor, click Microsoft Visual Basic Help on the Help menu, type
	"shell" (without the quotation marks) in the Office Assistant or the Answer
	Wizard, and then click Search to view the topic.
	
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
	
	Additional query words: vba vbe
	
	======================================================================
	Keywords          : kbdta word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
