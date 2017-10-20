---
layout: page
title: "Q268847: PRB: Assign Method/Optimistic Buffering Makes GetFieldState = 2"
permalink: /kb/268/Q268847/
---

## Q268847: PRB: Assign Method/Optimistic Buffering Makes GetFieldState = 2

{% raw %}

	Article: Q268847
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbOOP kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The GetFldState() value for the record of a buffered table has changed to 2 -
	(Field has been edited or deletion status has changed). This behavior occurs
	when any of the data controls on the form are based on a class where an Assign
	method has been added for the Value property (resulting in a Value_Assign
	method), and the ControlSource property of the data control is set to a field of
	a buffered table.
	
	CAUSE
	=====
	
	Any Assign method contains the following code by default:
	
	  LPARAMETERS vNewVal
	  *To do: Modify this routine for the Assign method
	  THIS.Value = m.vNewVal
	
	This code assigns the value passed into the Assign method (vNewVal) to be that of
	the Value property of the data control. Because the data control is bound to the
	table through the ControlSource property, then the data in the table is
	re-written even though it is the same value. This can be verified by checking
	the GetFldState() return value of the bound field.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The ability to create an Assign method for the property of an object is new to
	Microsoft Visual FoxPro 6.0. An Assign method can be created in the following
	ways:
	
	- For intrinsic properties or existing custom properties:
	
	  Use either the Class or Form Designer interface to add a new method that
	  consists of the name of a property followed by the suffix "_Assign" (without
	  the quotes).
	
	- For non-existing custom properties:
	
	  Use either the Class or Form Designer interface so that the developer can
	  click the Assign method check box while adding a new property. This creates a
	  new method that consists of the name of the newly added property followed by
	  the suffix "_Assign" (without the quotes).
	
	- Classes defined by program code:
	
	  Use the following naming convention rule for an Assign method because it
	  always applies: The Assign method starts with the name of the applicable
	  property and is followed by the suffix "_Assign" (without the quotes).
	
	Once an Assign method has been created, it is impossible to circumvent it during
	run time when any attempt is made to write data to the property for which it was
	established. Also note that commenting or removing the Assign method's code
	results in errors. The only means by which the affects of an Assign method can
	be eliminated are to rename it or delete it.
	
	The following code displays the value of GetFldState() in the parent code when
	the Value_Assign method fires. The GetFldState() value can also be checked by
	clicking the Command bottom labeled "Get Field State."
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create and run a new program with the following code:
	
	  PUBLIC ox
	  ox=CREATEOBJECT("frmGetFieldState")
	  ox.show
	
	  DEFINE CLASS BaseText AS TextBox
	      Height = 23
	      Width = 100
	      Value = ""
	      Name = "BaseText"
	
	      PROCEDURE Value_Assign
	          LPARAMETERS vNewVal
	          *To do: Modify this routine for the Assign method
	          Wait window "In parent assign" timeout 1
	          THIS.Value = m.vNewVal
	          WAIT WINDOW TRANSFORM(GetFldState("cust_id")) TIMEOUT 1
	      ENDPROC
	  ENDDEFINE
	
	  DEFINE CLASS frmGetFieldState AS Form
	      Top = 65
	      Left = 194
	      Height = 87
	      Width = 251
	      DoCreate = .T.
	      Caption = "frmGetFieldState"
	      Name = "Form1"
	
	      ADD OBJECT cmdRefresh AS CommandButton WITH ;
	          Top = 48, ;
	          Left = 17, ;
	          Height = 27, ;
	          Width = 90, ;
	          Caption = "Refresh", ;
	          Name = "cmdRefresh"
	
	      ADD OBJECT cmdGetFieldState AS CommandButton WITH ;
	          Top = 48, ;
	          Left = 149, ;
	          Height = 27, ;
	          Width = 90, ;
	          Caption = "Get Field State", ;
	          Name = "cmdGetFieldState"
	
	      ADD OBJECT txtBaseClass AS BaseText WITH ;
	          ControlSource = "customer.cust_id", ;
	          Left = 75, ;
	          Top = 12, ;
	          Name = "txtBaseClass"
	
	      PROCEDURE Load
	          OPEN DATABASE HOME(2)+"data\testdata.dbc" SHARED
	          USE customer IN 0
	          SET MULTILOCKS ON
	          =CURSORSETPROP("Buffering",5)
	      ENDPROC
	
	      PROCEDURE Unload
	          USE IN customer
	          CLOSE DATABASE 
	      ENDPROC
	
	      PROCEDURE cmdRefresh.Click
	          ThisForm.Refresh()
	      ENDPROC
	
	      PROCEDURE cmdGetFieldState.Click
	          WAIT WINDOW TRANSFORM(GetFldState("cust_id")) TIMEOUT 1
	      ENDPROC
	  ENDDEFINE
	
	NOTE: The Assign method, Value_Assign runs when the form is initialized.
	
	2. Click the Get Field State button to display the current value of
	  GetFldState().
	
	3. Click the Refresh button and note that the Assign method is called and that
	  GetFldState() = 2.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q128205 HOWTO: Set Buffering Mode in Visual FoxPro
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kenneth
	Robison, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbOOP kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
