---
layout: page
title: "Q236078: BUG: Mouse Clicks on Scrollbar of Open ComboBox are Trapped"
permalink: /kb/236/Q236078/
---

## Q236078: BUG: Mouse Clicks on Scrollbar of Open ComboBox are Trapped

{% raw %}

	Article: Q236078
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp300bBUG kbvfp500aBUG kbvfp600bug kbGrpDSFox kbDSupport
	Last Modified: 02-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An object other than a list item in a combobox traps mouse clicks on the
	scrollbar of the drop-down list of a combobox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This behavior occurs under the following conditions:
	
	1. The drop-down list of a combobox is opened by clicking on the combobox.
	
	2. The mouse pointer is moved down the center of the drop-down list,
	  highlighting the drop-down list items as the mouse pointer is moved.
	
	3. The mouse is clicked more than one time, while the mouse pointer is
	  positioned over the scroll bar of the combobox drop-down list and another
	  control, such as a text box, command button, option group, check box, etc.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program named "CBODROP.PRG" using the following code:
	
	  Public cboForm
	  cboForm=CreateObject("DemoForm")
	  cboForm.Show()
	
	  Define Class DemoForm as Form
	     Caption   = "ComboBox Down Arrow Navigation"
	     MinButton = .f.
	     MaxButton = .f.
	     Width     = 300
	     height    = 200
	     AutoCenter=.t.
	
	     Add Object Combo1 as ComboBox with;
	        RowSourcetype = 0, ;
	        Style         = 2, ;
	        Top           = 5, ;
	        Left          = 5
	
	     Add Object Command1 as CommandButton with;
	        Caption = "Click Me", ;
	        left    = thisform.Combo1.left+(thisform.Combo1.width/2), ;
	        top     = 135, ;
	        Height  = 25, ;
	        Width   = 100
	
	     Procedure init
	        For i=1 to 10
	           Thisform.Combo1.addlistitem(alltrim(str(i)))
	        Endfor
	     Endproc
	
	     Procedure Command1.Click
	        =MessageBox("Command Button Clicked.")
	     Endproc
	
	  Enddefine
	
	2. From the Command window, type "DO CBODROP."
	
	3. Click the combobox.
	
	4. Drag the mouse pointer down the center of the combobox drop-down list.
	
	5. Move the mouse pointer so that it is positioned over the combobox drop-down
	  scrollbar and the command button.
	
	6. Click the mouse three or more times.
	
	7. Press the ESC key and observe that the MessageBox appears from the
	  Command1.Click method.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by John Desch, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp300bBUG kbvfp500aBUG kbvfp600bug kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
