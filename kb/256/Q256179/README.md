---
layout: page
title: "Q256179: PRB: BackColor of Shape Bleeds Through on Top-Level Form w/ Grid"
permalink: /kb/256/Q256179/
---

## Q256179: PRB: BackColor of Shape Bleeds Through on Top-Level Form w/ Grid

{% raw %}

	Article: Q256179
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 08-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a form with the ShowWindow property equal to 2 (As Top-Level Form) and
	the form contains a grid and text boxes on top of a shape object. As you tab
	through the text box objects, the background color of the shape may bleed
	through into your text boxes even if the shape object's BackColor property is
	set to the default.
	
	RESOLUTION
	==========
	
	To avoid this problem, either avoid the use of shapes to group affected text
	boxes, or run the form in another top-level form.
	
	If you are using a transparent shape, as in the following sample, another
	workaround is to set the shape's BackColor property in the form's Init event to
	be the same as the back color of the text boxes.
	
	NOTE: This workaround does not allow for changes in the Windows color settings in
	the middle of the application but should cover most cases.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Use the following steps to reproduce this behavior:
	
	1. Create and run a program with the following code:
	
	  PUBLIC oform1
	
	  oForm1 = NEWOBJECT("form1")
	  oForm1.Show()
	
	  RETURN
	
	  DEFINE CLASS form1 AS form
	
	  	Top = 0
	  	Left = 0
	  	Height = 443
	  	Width = 622
	  	ShowWindow = 2  && As Top-Level Form
	  	Caption = "Bleedthrough Demonstration"
	  	Name = "Form1"
	
	  	ADD OBJECT grdDemo AS grid WITH ;
	  		ColumnCount = 1, ;
	  		Height = 180, ;
	  		Left = 30, ;
	  		Top = 30, ;
	  		Width = 555, ;
	  		Name = "grdDemo"
	
	  	ADD OBJECT txtOne AS textbox WITH ;
	  		Height = 23, ;
	  		Left = 177, ;
	  		Top = 255, ;
	  		Width = 100, ;
	  		Name = "txtOne"
	
	  	ADD OBJECT txtTwo AS textbox WITH ;
	  		Height = 23, ;
	  		Left = 177, ;
	  		Top = 294, ;
	  		Width = 100, ;
	  		Name = "txtTwo"
	
	  	ADD OBJECT txtThree AS textbox WITH ;
	  		Height = 23, ;
	  		Left = 177, ;
	  		Top = 333, ;
	  		Width = 100, ;
	  		Name = "txtThree"
	
	  	ADD OBJECT shpGroup AS shape WITH ;
	  		Top = 225, ;
	  		Left = 33, ;
	  		Height = 186, ;
	  		Width = 552, ;
	  		BackStyle = 0, ;
	  		BackColor = RGB(255,0,128), ;
	  		Name = "shpGroup"
	
	  	PROCEDURE Init
	  		*!* Uncomment next line for a workaround
	  		*!* This.shpGroup.BackColor = This.txtOne.BackColor
	  	ENDPROC
	  ENDDEFINE
	
	2. After the form appears, tab through the text boxes.
	
	3. Notice that the background color of the text boxes changes.
	
	4. Close the form, uncomment the code in the Init procedure and then run the
	  program again to see the workaround.
	
	For additional information on automatically running a form in a top-level form,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q257230 HOWTO: Display a Form in a Top-Level Form on Startup
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
