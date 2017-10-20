---
layout: page
title: "Q248070: BUG: VBCE: Clicking ComboBox May Trigger Command Click Event"
permalink: /kb/248/Q248070/
---

## Q248070: BUG: VBCE: Clicking ComboBox May Trigger Command Click Event

{% raw %}

	Article: Q248070
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.11,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0, used with:
	   - Microsoft Windows CE versions 2.0, 2.11 for the Handheld PC 
	   - Microsoft Windows CE version 2.11 for the Palm-size PC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When selecting an item from a combo box, the Click event for a command button
	may fire. This happens on command buttons having shortcut keys and is related to
	the relative TabIndex values between the command button and the combo box.
	
	RESOLUTION
	==========
	
	To prevent the problem remove the shortcut keys from the command buttons.
	Modifying the TabIndex property of the combo box and ensuring that it does not
	have the highest TabIndex value on the form works in some cases without removing
	the shortcut keys.
	
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
	
	2. Add a ComboBox to Form1.
	
	3. Add a Command Button to Form1. Set its Caption to "&Save".
	
	4. Paste the following code into Form1:
	
	     Private Sub Command1_Click()
	         MsgBox "In Command1_Click"
	     End Sub
	
	     Private Sub Form_Load()
	         Combo1.AddItem "Test"
	     End Sub
	
	5. Run the application.
	
	6. Drop-down the combo box and click Test. The Click event for the command
	  button will fire.
	
	Additional query words: wce vbce vbce6 evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch
	Version           : :2.0,2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
