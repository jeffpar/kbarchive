---
layout: page
title: "Q247526: BUG: Hundreds of Icons Cause Icon Property Not to Refresh"
permalink: kb/247/Q247526/
---

## Q247526: BUG: Hundreds of Icons Cause Icon Property Not to Refresh

	Article: Q247526
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbOOP kbvfp500 kbvfp500aBUG kbvfp600 kbvfp600bug kbGrpDSFox kbDSuppo
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under rare circumstances, a Visual FoxPro form that updates the form's Icon
	property programmatically might eventually fail to refresh and show the default
	Visual FoxPro Icon instead. This behavior normally happens if you set the form's
	Icon property to hundreds of different icons within a loop.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The behavior shows up after continuously switching icons programmatically. In
	some instances, the FoxPro Icon appears intermittently.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using Windows Explorer, create a new subfolder.
	
	2. Copy 300 icons or more to that subfolder. On some computers it takes
	  approximately 500 to 600 icons to see the problem.
	
	3. Start Visual FoxPro.
	
	4. Set default to folder to the folder where you have the icons.
	
	5. Copy and paste the following code into a new program file, save it, and then
	  run it:
	
	  PUBLIC oform1
	
	  oform1=CREATEOBJECT("form1")
	  oform1.Show
	  RETURN
	  *
	  DEFINE CLASS form1 AS form
	
	  	Top = 0
	  	Left = 0
	  	Height = 250
	  	Width = 379
	  	DoCreate = .T.
	  	Caption = "Icon Test Form"
	  	TitleBar = 1
	  	Name = "Form1"
	
	  	ADD OBJECT command1 AS commandbutton WITH ;
	  		AutoSize = .F., ;
	  		Top = 63, ;
	  		Left = 144, ;
	  		Height = 40, ;
	  		Width = 90, ;
	  		Caption = "Start", ;
	  		Name = "Command1"
	
	  	ADD OBJECT command2 AS commandbutton WITH ;
	  		Top = 147, ;
	  		Left = 144, ;
	  		Height = 40, ;
	  		Width = 90, ;
	  		Caption = "Quit", ;
	  		Name = "Command2"
	
	  	PROCEDURE command1.Click
	                 *Creates an Array of Icons in the Folder
	  	        lnLength=aDir(aMyIcons,"*.ico")
	
	                 *This loops into the Array to display the Icons
	  		For lnTimeCounter = 1 to lnLength
	  		ThisForm.Caption = aMyIcons(lnTimeCounter,1)
	  		ThisForm.Icon = aMyIcons(lnTimeCounter,1)
	  		EndFor
	  	ENDPROC
	
	  	PROCEDURE command2.Click
	  		ThisForm.Release
	  	ENDPROC
	
	  ENDDEFINE
	  *
	  **************************************************
	
	6. A form titled "Icon Test Form" appears. Note that it has the Foxhead icon in
	  the top-left corner.
	
	7. Click the Start button on the form and watch the icon on the form's title bar
	  change. Eventually the Foxhead appears instead of the icons that are being
	  set to the form's Icon property.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbOOP kbvfp500 kbvfp500aBUG kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
