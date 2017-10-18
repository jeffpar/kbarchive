---
layout: page
title: "Q240030: PRB: Commands or Procedures on Menu Pads Do Not Run in ActiveDoc"
permalink: kb/240/Q240030/
---

## Q240030: PRB: Commands or Procedures on Menu Pads Do Not Run in ActiveDoc

	Article: Q240030
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveDocs kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 01-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a command or procedure is set to run from a user-defined Visual FoxPro menu
	pad included in an Active Document application, it does not run when the Active
	Document is hosted in Internet Explorer.
	
	RESOLUTION
	==========
	
	Create a submenu for the menu pad and have a menu option on the submenu run the
	command or procedure.
	
	MORE INFORMATION
	================
	
	NOTE: The steps to reproduce the problem assume that you have a working
	knowledge of Visual FoxPro and that Active Document applications are able to be
	run on the development computer. See the articles listed in the REFERENCE
	section of this article for more information on Active Documents.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project named ActDoc1.pjx.
	
	2. Create a new program named ActDoc1Menu.prg. Place the following code in it:
	
	  SET SYSMENU TO
	  SET SYSMENU AUTOMATIC
	
	  DEFINE PAD _s7s12qoqb OF _MSYSMENU PROMPT "Hello World" COLOR SCHEME 3 ;
	  	NEGOTIATE  MIDDLE, MIDDLE ;
	  	KEY ALT+H, ""
	  DEFINE PAD _s7s12qor6 OF _MSYSMENU PROMPT "Greetings" COLOR SCHEME 3 ;
	  	NEGOTIATE  MIDDLE, MIDDLE ;
	  	KEY ALT+G, ""
	  ON SELECTION PAD _s7s12qoqb OF _MSYSMENU MessageBox("Hello World")
	  ON PAD _s7s12qor6 OF _MSYSMENU ACTIVATE POPUP greetings
	
	  DEFINE POPUP greetings MARGIN RELATIVE SHADOW COLOR SCHEME 4
	  DEFINE BAR 1 OF greetings PROMPT "Good Evening"
	  DEFINE BAR 2 OF greetings PROMPT "Good Morning"
	  ON SELECTION BAR 1 OF greetings WAIT WINDOW "Good Evening"
	  ON SELECTION BAR 2 OF greetings =MessageBox("Good Morning")
	
	3. Create a new program named ActDoc1Form.prg. Place the following code in it:
	
	  oform1=NEWOBJECT("form1")
	  oform1.Show
	  RETURN
	
	  	**************************************************
	  *-- Form:         form1 (d:\tahoedata\actdoc\menubugs\actdoc1.scx)
	  *-- ParentClass:  form
	  *-- BaseClass:    form
	  *-- Time Stamp:   08/19/99 06:54:12 PM
	  *
	  DEFINE CLASS form1 AS form
	
	  	Top = 0
	  	Left = 0
	  	Height = 250
	  	Width = 387
	  	ScrollBars = 3
	  	DoCreate = .T.
	  	BorderStyle = 0
	  	Caption = "Form1"
	  	TitleBar = 0
	  	WindowState = 2
	  	BackColor = RGB(128,0,255)
	  	Name = "Form1"
	
	  	ADD OBJECT command1 AS commandbutton WITH ;
	  		Top = 156, ;
	  		Left = 168, ;
	  		Height = 61, ;
	  		Width = 121, ;
	  		Caption = "Quit", ;
	  		Name = "Command1"
	
	  	PROCEDURE command1.Click
	  		Thisform.Release
	  		CLEAR EVENTS
	  	ENDPROC
	
	  ENDDEFINE
	  *
	  *-- EndDefine: form1
	  **************************************************
	
	4. Create a new visual class based off the ActiveDoc base class. Call the class
	  ActDoc1 and store it in ActDoc1.vcx. You should then be in the Class
	  Designer.
	
	5. In the ContainerRelease Event, place the following line of code:
	
	  CLEAR EVENTS
	
	6. In the Destroy Event, place the following code:
	
	  SET STATUS BAR ON
	  SET SYSMENU TO DEFAULT
	
	7. In the Run Event, place the following code (note that the LPARAMETERS line
	  should already be there):
	
	  LPARAMETERS cHyperLinkTarget
	  SET STATUS BAR OFF
	  SET TALK OFF
	  oform1=""
	  DO actdoc1Menu.prg
	  DO actdoc1Form.prg
	  READ EVENTS
	
	8. Set the ContainerReleaseType property to 1 - Quit Visual FoxPro.
	
	9. If they are not already in the project, add the ActDoc1.vcx, ActDoc1Menu.prg,
	  and ActDoc1Form.prg. Make sure the ActDoc1 class is set as main. Build the
	  project into an application(.app).
	
	10. Run the ActDoc1.app in Visual FoxPro from the Program menu, the Do command,
	  or with DO ActDoc1.app in the Command window.
	
	11. There should be a Hello World menu pad and a Greetings menu pad with two
	  options on it. The Greetings menu pad is the workaround. Click on the Hello
	  World menu pad to get a "Hello World" message box. Note that this works in
	  Visual FoxPro. Also test out the commands on the Greetings menu pad. Quit
	  the application with the Quit button on the form.
	
	12. Now run the ActDoc1.app by going to the Tools menu, Run Active Document
	  command. For the Active Document, choose ActDoc1.app. For Hosting, choose In
	  Browser. This should be the default for Hosting.
	
	13. The ActDoc1.app should start up in Internet Explorer. Now click on the Hello
	  World menu pad. Note that the message box does not appear. Next, try out the
	  Greetings menu pad's commands. Both Good Evening and Good Morning should
	  work. Note that Good Evening uses a WAIT WINDOW that appears in the top
	  right corner of the browser.
	
	REFERENCES
	==========
	
	For additional information about Active Documents, please click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  
	
	  Q182579 HOWTO: Getting Started With Active Documents
	
	  
	
	  Q182580 HOWTO: Set Up a Quick Menu for an ActiveDoc App
	
	  
	
	  Q207952 PRB: Active Documents Flash and Disappear When Run
	
	  
	
	  Q186015 HOWTO: Pass Parameters to an ActiveDoc
	
	  
	
	  Q197861 SAMPLE: ADOCtl.Exe Demonstrates Active Documents, RDS and ADO
	
	  
	
	  Q190771 FILE: Vfp6rt.exe Distributing Run-Time Files w/ Active Document
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveDocs kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
