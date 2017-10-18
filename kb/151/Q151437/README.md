---
layout: page
title: "Q151437: BUG: Wizard Button Display Problem with KEYCOMP Set to Windows"
permalink: kb/151/Q151437/
---

## Q151437: BUG: Wizard Button Display Problem with KEYCOMP Set to Windows

	Article: Q151437
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Microsoft Visual FoxPro for Power Macintosh, a default Command
	button, by which the Click method is called when the user presses the
	<RETURN> key), is denoted by a double outline surrounding the Command
	button.
	
	A problem occurs when using the Form Wizard. The Command buttons generated are
	not separated far enough to take into consideration the double outline
	surrounding the button with focus. This is most evident when the Visual FoxPro
	system variable (KEYCOMP) is set to Windows.
	
	CAUSE
	=====
	
	When KEYCOMP is set to Windows, the user is allowed to tab through the Command
	buttons. While doing so, the focus changes from Command button to Command button
	and the double, black outline surrounding the active Command button is not
	entirely visible.
	
	The Form Wizard for Visual FoxPro for Power Macintosh is designed to create
	Command buttons that are used on a Macintosh. The interface standard for the
	Macintosh stipulates that the user must click the mouse pointer on a Command
	button and cannot tab from Command button to Command button. When KEYCOMP is set
	to Mac, Visual FoxPro adheres to this standard and the user does not see any
	problem with the Command buttons created by the Form Wizard. When KEYCOMP is set
	to Windows, the problem appears.
	
	WORKAROUND
	==========
	
	There are two ways to work around this problem. Set KEYCOMP to Mac and the
	problem disappears because Visual FoxPro supports the Macintosh user interface.
	This option may not be viable for developers wanting to produce a seamless
	interface from Windows to the Macintosh. These developers should set KEYCOMP to
	Windows.
	
	In the cases where KEYCOMP must be set to Windows, developers need to modify
	manually the form created by the Form Wizard. This involves spreading out the
	Command buttons so there is enough room between them to display the double,
	black outline.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Set KEYCOMP to Windows.
	
	2. Start Form Wizard from the menu.
	
	3. Select a Form Wizard.
	
	4. Select a table to use, and put one field on the form.
	
	5. Finish the form and run it.
	
	6. Tab through the buttons.
	
	Note that only part of the black outline that should surround each command button
	as it receives focus is visible.
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
