---
layout: page
title: "Q198148: WD97: INSERT (INS) Key Doesn't Switch Between Modes"
permalink: kb/198/Q198148/
---

## Q198148: WD97: INSERT (INS) Key Doesn't Switch Between Modes

	Article: Q198148
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you press the INSERT (INS) key on the keyboard, the typing mode does not
	switch from insert to overtype or vice versa.
	
	CAUSE
	=====
	
	By default, this key is not assigned to switch between overtype and insert mode.
	
	RESOLUTION
	==========
	
	To correct this problem in Windows, install Microsoft Word 97 Service Release 1
	(SR-1).
	
	
	To work around this problem, use the method appropriate for your situation.
	
	Method 1: Assigning the Overtype Command to a Shortcut Key
	----------------------------------------------------------
	
	To activate the INSERT key, do the following:
	
	1. On the Tools menu, click Customize, and then click the Commands tab.
	
	2. Click the Keyboard button.
	
	3. In the Categories box, select All Commands.
	
	4. In the Commands list, select Overtype.
	
	5. Position the insertion point in the "Press New Shortcut Key" box, and then
	  press the INSERT key on the keyboard.
	
	  NOTE: If the keys you press are already assigned to a different command, Word
	  will indicate the assignment with a message below the "Press New Shortcut
	  Key" box, similar to the following message:
	
	  Currently assigned to: <command>
	
	6. Click the Assign button.
	
	7. Click the Close button.
	
	NOTE: OVR appears unavailable (dimmed) when overtype mode is off.
	
	Method 2: Select the Overtype Option
	------------------------------------
	
	1. On the Tools menu, click Options, and then click the Edit tab.
	
	2. Under Editing Options, clear or select the Overtype Mode check box.
	
	Method 3: Use the Status Bar
	----------------------------
	
	With the status bar displayed, double-click OVR. This method sets the typing mode
	for the current session only.
	
	Method 4: Use a Macro to Switch Between Overtype and Insert Modes
	-----------------------------------------------------------------
	
	Create the following Visual Basic for Applications macro:
	
	     Sub ToggleOverType()
	        Options.Overtype = Not Options.Overtype
	     End Sub
	
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
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q163547 Word 97: How to Create Custom Toolbars and Toolbar Buttons
	
	  Q165517 Overview of Visual Basic Editor Debugging Tools
	
	
	STATUS
	======
	
	This behavior does not occur in Microsoft Word 97 for Windows, Service Release 1
	(SR-1). In Service Release 1, this feature behaves the way it did in Word for
	Windows versions 7.0 and earlier.
	
	MORE INFORMATION
	================
	
	To disable the use of the INSERT key to change the Overtype mode in Microsoft
	Word 97 for Windows SR-1, follow these steps:
	
	1. On the Tools menu, click Customize, and click the Commands tab.
	
	2. Click the Keyboard button.
	
	3. In the Categories box, select All Commands.
	
	4. In the Commands list, select Overtype.
	
	5. In the Current Keys list, click on Ins.
	
	6. Click the Remove button.
	
	7. Click the Close button.
	
	The INSERT key will no longer switch between Insert and Overtype modes.
	
	Additional query words: overwrite
	
	======================================================================
	Keywords          : kbualink97 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
