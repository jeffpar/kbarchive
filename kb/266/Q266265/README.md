---
layout: page
title: "Q266265: HOWTO: Implement MatchedWithList Validation Check in ComboBox"
permalink: /kb/266/Q266265/
---

## Q266265: HOWTO: Implement MatchedWithList Validation Check in ComboBox

{% raw %}

	Article: Q266265
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbGrpDSVBDB kbDSupport
	Last Modified: 31-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A simple ComboBox control whose Style property has been set to 0-Dropdown Combo
	permits a user to manually make an entry into its text edit portion without
	selecting a value displayed in its drop-down list. The simple ComboBox control
	does not expose a Boolean property (identical to the MatchedWithList property of
	the OLEDB DataCombo control) that can be used to determine if the value that is
	keyed into the edit portion matches one of the elements in the list. This is an
	important validation check that can be very useful when using a simple drop-down
	ComboBox.
	
	A generic, reusable routine can be written by using Visual Basic code to
	implement this validation check for a simple drop-down ComboBox control. This
	article documents the reusable code that can be used to address this
	requirement.
	
	MORE INFORMATION
	================
	
	Code to Implement the MatchedWithList Validation Check 
	------------------------------------------------------
	
	Copy-and-paste the following code into the Change event procedure of a simple
	drop-down ComboBox (whose Style has been set to 0-Dropdown Combo for which you
	wish to implement the MatchedWithList validation check. You can modify the
	message to be displayed to the user when the check fails. The validation check
	fails when a character that is keyed into the edit portion results in a string
	that does not match an initial substring of any of the elements in the list
	portion. The initial substring that is extracted from each of the list elements
	comprises of the first "N" characters, "N" being the length of the string in the
	edit portion of the ComboBox.
	
	  Dim listcount As Integer
	  Dim textlen As Integer
	  Dim matchexists As Boolean
	
	  textlen = Len(Combo1.Text)
	  For listcount = 0 To Combo1.listcount - 1
	   If UCase(Mid(Combo1.List(listcount), 1, textlen)) = UCase(Combo1.Text) Then
	     matchexists = True
	     Exit For
	   End If
	  Next
	
	  If Not matchexists Then
	   MsgBox "Value not present in the list... Kindly enter a valid value.."
	  End If
	
	Steps to Test the Routine
	-------------------------
	
	1. Create a new standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a ComboBox control to Form1 from the toolbox.
	
	3. Cut-and-paste the following code into the Form module:
	
	  Private Sub Combo1_Change()
	
	  Dim listcount As Integer
	  Dim textlen As Integer
	  Dim matchexists As Boolean
	
	  textlen = Len(Combo1.Text)
	  For listcount = 0 To Combo1.listcount - 1
	   If UCase(Mid(Combo1.List(listcount), 1, textlen)) = UCase(Combo1.Text) Then
	     matchexists = True
	     Exit For
	   End If
	  Next
	
	  If Not matchexists Then
	   MsgBox "Value not present in the list... Kindly enter a valid value.."
	  End If
	
	  End Sub
	
	  Private Sub Form_Load()
	  Combo1.AddItem "Sam"
	  Combo1.AddItem "Paul"
	  Combo1.AddItem "Peter"
	  Combo1.Text = ""
	  End Sub
	
	4. Run the project, and then type in appropriate values in the edit portion of
	  the ComboBox to test the routine.
	
	  For example, try typing the following to evaluate the outcome of the
	  validation:
	
	  "Same, Pater, Paul, Paul" (without the quotation marks)
	
	  Note that in the first three cases, the validation message pops up as soon as
	  the first character (e,a, and d) that results in a NoMatch is keyed into the
	  edit portion.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
