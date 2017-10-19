---
layout: page
title: "Q196673: WD97: Window Stays on Screen Using Shell to Start MS-DOS Program"
permalink: /kb/196/Q196673/
---

## Q196673: WD97: Window Stays on Screen Using Shell to Start MS-DOS Program

	Article: Q196673
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using Visual Basic for Applications, if you use the Shell command to run an
	MS-DOS program, the MS-DOS box remains on the screen, and you must manually
	close the box.
	
	CAUSE
	=====
	
	The Close On Exit property is not set for the MS-DOS window.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1
	--------
	
	1. Start the MS-DOS Prompt (click the Start button, point to Programs, and then
	  click MS-DOS Prompt).
	
	2. On the toolbar, click Properties.
	
	3. On the Program tab, click to select the Close On Exit check box, and then
	  click OK.
	
	Method 2
	--------
	
	Start the program using the MS-DOS command interpreter, Command.com, with the /C
	switch. This switch closes the window after the program quits. For example, to
	run a batch file, use the following command:
	
	  Shell "command.com /c example.bat"
	
	The following example VBA code closes the window after the batch command
	executes:
	
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
	
	     Sub TextShell
	        Dim RetVal
	        RetVal = Shell ("C:\WINDOWS\command.com /c  example.bat ", 1)
	     End Sub
	
	REFERENCES
	==========
	
	For help with Command.com switches, start MS-DOS Prompt, type "command /?"
	(without the quotation marks), and press ENTER.
	
	Additional query words: 8.0 doesn't remains stays open
	
	======================================================================
	Keywords          : kbdta kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
