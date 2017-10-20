---
layout: page
title: "Q186430: FIX: Intellipoint 'Snap To' Feature and VB5 Applications"
permalink: /kb/186/Q186430/
---

## Q186430: FIX: Intellipoint 'Snap To' Feature and VB5 Applications

{% raw %}

	Article: Q186430
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.2,5.0
	Operating System(s): 
	Keyword(s): kbinterop kbMouse kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport
	Last Modified: 26-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft IntelliPoint software, version 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the 'Snap To' option of Intellipoint 2.2 is in effect, you may observe a
	difference in behavior with Visual Basic 5.0 applications running under Windows
	95, Windows 98, and Windows Me versus Windows NT 4.0 or Windows 2000.
	
	Under Windows 95, Windows 98, and Windows Me, the mouse pointer moves to the
	Command button with focus when its parent form gains focus. There is no cursor
	movement under Windows NT 4.0 or Windows 2000; this is considered the correct
	behavior.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	The function of the Intellipoint 'Snap To' option is to place the mouse cursor
	over the default Command Button on a window, if any, when that window acquires
	focus. Visual Basic 5.0 is not designed to support this Intellipoint
	functionality.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Make certain you have Intellipoint 2.2 installed on your Win95 or Win98
	  computer. Open the Windows Control Panel and double-click the Mouse icon.
	  When the dialog box appears, you should see four check boxes. Make certain
	  that the upper-left checkbox is selected, and then exit the dialog box.
	
	2. Create a new Standard EXE project. Form1 is created by default.
	
	3. Add at least two CommandButtons to Form1. Add instances of several other
	  different controls for variety.
	
	4. Set the Default property of one of the CommandButtons to True.
	
	5. Click Add Form on the Project menu to add a second form to your project.
	
	6. Add the following code to the General Declarations section of Form1:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	           Form2.Show
	        End Sub
	
	7. Run the program.
	
	8. Note which control has the focus. Click a command button if one does not have
	  focus. Click on Form2 and then press the ALT-TAB key combination to give
	  Form1 the focus. The cursor will be positioned over the command button which
	  has the focus.
	
	9. Click a control other than one of the command buttons. Press the ALT-TAB key
	  combination to shift focus from Form1 to Form 2. Press the ALT-TAB key
	  combination again to shift focus back to Form1. The mouse cursor has been
	  moved to the center of the default command button.
	
	REFERENCES
	==========
	
	For more information about implementing a 'Snap To' functionality with your
	Visual Basic application, please refer to the following article in the Microsoft
	Knowledge Base:
	
	  Q186428 HOWTO: Implement the 'SnapTo' Feature in Visual Basic
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbMouse kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbPTNotAssigned kbZNotKeyword2
	Version           : :2.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
