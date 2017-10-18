---
layout: page
title: "Q161184: FIX: Combo Box Behaves Erratically with Timer Control"
permalink: kb/161/Q161184/
---

## Q161184: FIX: Combo Box Behaves Erratically with Timer Control

	Article: Q161184
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a Timer Control and a combo box simultaneously may produce erratic
	results. Under some circumstances, the combo box may not reflect the last item
	chosen from its list. However, many times it may act properly. Furthermore, if a
	check box is present, the check box may become automatically unchecked when
	certain selections are made from the combo box list.
	
	RESOLUTION
	==========
	
	The example below contains two procedures, PROCEDURE Combo1.Valid and PROCEDURE
	Check1.MouseDown, which are included in the code as comments. By removing the
	asterisks, the two procedures fix the problems. The first procedure,
	Combo1.Valid, allows the selection of any item in the combo's list. The second
	procedure, Check1.MouseDown, prevents the check box from becoming unchecked by
	selections made within the combo box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place the following code in a program and run it:
	
	     PUBLIC oform1
	     oForm1=CREATEOBJECT("Form1")
	     oForm1.Show
	
	     DEFINE CLASS form1 AS form
	        Height = 297
	        Width = 579
	        AutoCenter = .T.
	        Caption = "ComboBox/Timer Example"
	        Name = "Form1"
	
	     ADD OBJECT timer1 AS timer WITH ;
	        Top = 270, ;
	        Left = 278, ;
	        Height = 23, ;
	        Width = 23, ;
	        Interval = 1000, ;
	        Name = "Timer1"
	
	     ADD OBJECT combo1 AS combobox WITH ;
	        RowSourceType = 1, ;
	        RowSource = "Test 1,Test 2,Test 3,Test 4", ;
	        Height = 24, ;
	        Left = 239, ;
	        Style = 2, ;
	        Top = 180, ;
	        Width = 100, ;
	        Name = "Combo1"
	
	     ADD OBJECT check1 AS checkbox WITH ;
	        Top = 239, ;
	        Left = 239, ;
	        Height = 17, ;
	        Width = 100, ;
	        Caption = "Timer Enabled", ;
	        Value = .T., ;
	        Name = "Check1"
	
	     ADD OBJECT edit1 AS editbox WITH ;
	        FontBold = .T., ;
	        FontSize = 8, ;
	        BackStyle = 0, ;
	        BorderStyle = 0, ;
	        Height = 165, ;
	        Left = 6, ;
	        ReadOnly = .T., ;
	        ScrollBars = 0, ;
	        SpecialEffect = 1, ;
	        TabStop = .F., ;
	        Top = 5, ;
	        Width = 564, ;
	        Name = "Edit1"
	
	      PROCEDURE check1.Refresh
	        ThisForm.Timer1.Enabled=This.Value
	      ENDPROC
	
	      PROCEDURE check1.Click
	         This.Refresh
	      ENDPROC
	
	     PROCEDURE edit1.Init
	        This.Value="A Timer is running when Timer Enabled is checked." ;
	        +CHR(13)+CHR(13)+ ;
	        "Whenever a timer is running (Enabled=.T., Interval>0, lower values";
	        +CHR(13)+ ;
	        "make it more likely to show problem), both user defined and system";
	        +CHR(13)+ ;
	        "(VFP) dropdown list ComboBoxes (Style=2) don't work.";
	        + CHR(13) +CHR(13)+ ;
	        "When the Timer is on, select Test 1 or Test 4 and it usually";
	        +CHR(13)+ ;
	        "doesn't select."+CHR(13)+CHR(13)+ ;
	        "With the Timer control on, select Test 3 twice in a row and the" ;
	        +CHR(13)+ ;
	        "checkbox is often unchecked automatically."+CHR(13)+CHR(13)+ ;
	        "Turn off the Timer and the ComboBoxes work properly."+CHR(13)
	     ENDPROC
	
	     ****The following code fixes the problems*****
	
	     *PROCEDURE Combo1.Valid
	     *This.Refresh
	     *ENDPROC
	
	     *PROCEDURE  Check1.mousedown
	      *  LPARAMETERS nButton, nShift, nXCoord, nYCoord
	       * WAIT "" TIME .01
	     *ENDPROC
	
	     ENDDEFINE
	
	2. With the Timer enabled, the "Timer Enabled" check box is selected by default,
	  make several selections from the combo box. Select the "Test 3" item and
	  notice the check box becomes unchecked.
	
	3. Clear the "Timer Enabled" check box and make selections from the combo box.
	  The object acts normally.
	
	The following code may be used in lieu of the above workaround:
	
	     PROCEDURE Combo1.mousedown
	     LPARAMETERS nButton, nShift, nXCoord, nYCoord
	       thisform.timer1.enabled= .f.
	     ENDPROC
	
	     PROCEDURE Combo1.InteractiveChangeEvent
	     LPARAMETERS nButton, nShift, nXCoord, nYCoord
	       thisform.timer1.enabled= .t.
	     ENDPROC
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
