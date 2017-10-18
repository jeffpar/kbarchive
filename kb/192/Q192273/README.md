---
layout: page
title: "Q192273: PRB: SendKeys Does Not Work with NumLock or Caplock"
permalink: kb/192/Q192273/
---

## Q192273: PRB: SendKeys Does Not Work with NumLock or Caplock

	Article: Q192273
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using SendKeys to change the state of {CAPSLOCK} or {NUMLOCK} is not effective.
	
	CAUSE
	=====
	
	Toggling {CAPSLOCK} or {NUMLOCK} with the SendKeys statement is only in effect
	for the continuous subsequent keys sent by SendKeys. The state of {CAPSLOCK} or
	{NUMLOCK} is reset when Visual Basic yields to other processes. For example,
	this occurs when the SendKeys statement's Wait parameter is set to "True", or
	when a DoEvents statement is executed.
	
	RESOLUTION
	==========
	
	Use SendKeys to toggle {CAPSLOCK} or {NUMLOCK} only when sending a series of
	keys continuously in a single or multiple number of SendKeys statements. To
	toggle the {CAPSLOCK} or {NUMLOCK} permanently:
	
	1. Use the KeyState control that comes with Visual Basic 4.0.
	
	  - or -
	
	2. Use the Win32 API. See the article in the References section for details.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project. From1 is created by default.
	
	2. Add a TextBox to Form1 and paste the following code in the code Window:
	
	      Private Sub Text1_Click()
	          SendKeys "s"
	          SendKeys "{CAPSLOCK}"  ' Turn on the CapsLock
	          SendKeys "o"  ' will be printed in caps
	          For i = 0 To 10
	          SendKeys Chr(Asc("a") + i)  'will be printed in caps
	          Next
	          'DoEvents  ' uncommenting this will print next line in smalls
	          SendKeys "o"  ' will be printed in caps
	          SendKeys "{CAPSLOCK}"  ' Turn off the caps lock
	          SendKeys "o"  ' Will be printed in smalls
	      End Sub
	
	3. Turn off the Caps Lock. Run the project. Note that the SendKeys work as
	  expected.
	
	4. Un-comment the DoEvents statement. Run the project. The Caps Lock is reset
	  after the DoEvents call.
	
	5. In any SendKeys statement after SendKeys "{CAPSLOCK}", pass "True" as the
	  second parameter. The state of Caps Lock is reset after that statement.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q177674 : HOWTO: Toggle the NUM LOCK, CAPS LOCK, and SCROLL LOCK Keys
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
