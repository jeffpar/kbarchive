---
layout: page
title: "Q255272: BUG: CE: CommandBar Settings May Keep Key Events from Firing"
permalink: kb/255/Q255272/
---

## Q255272: BUG: CE: CommandBar Settings May Keep Key Events from Firing

	Article: Q255272
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.11,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 05-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft Windows CE versions 2.11, 3.0 for the Handheld PC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the position of a CommandBar control is set to a non-zero value at design
	time through either the Left or Top property and then is subsequently changed at
	run time through either the Move method or the setting of the Top or Left
	property, the Key events (KeyPress, KeyDown, KeyUp) of the form upon which the
	CommandBar control is sited do not fire.
	
	NOTE: This only occurs on the remote device and not in emulation.
	
	RESOLUTION
	==========
	
	Ensure that the Top and Left properties of the CommandBar control are both set
	to zero at design time and then set the position of the control at run time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. From the Project menu, select Components, and then select the Microsoft CE
	  CommandBar Control.
	
	3. Add a CommandBar Control to Form1. Ensure that either the Top or Left
	  property is set to a non-zero value.
	
	4. Paste the following code into Form1:
	
	  Private Sub Form_KeyDown(KeyCode As Integer, Shift As Integer)
	      MsgBox "KeyCode= " & KeyCode
	  End Sub
	
	  Private Sub Form_KeyPress(KeyAscii As Integer)
	      MsgBox "KeyAscii= " & KeyAscii
	  End Sub
	
	  'Private Sub Form_Load()
	  '    CommandBar1.Move 0, 0
	  'End Sub
	
	5. Run the application, targeting the remote device.
	
	6. Ensure that Form1 is active, and then press a key on the keyboard. Note that
	  two message boxes appear.
	
	7. Uncomment the Form_Load event, and run the project again.
	
	8. Ensure that Form1 is active, and then press a key on the virtual keyboard.
	  Note that the message boxes no longer appear.
	
	Additional query words: wce vbce vbce6 eVB
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCE211HPC kbWinCE300HPC kbWinCETK100VB600
	Version           : :1.0,2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
