---
layout: page
title: "Q318970: FIX:Bound optionbutton Not Checked in MS Active Accessibility"
permalink: /kb/318/Q318970/
---

## Q318970: FIX:Bound optionbutton Not Checked in MS Active Accessibility

	Article: Q318970
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have an OptionGroup that contains OptionButton controls that are bound to
	a table or cursor fields, the Accessible Event Watcher from the Microsoft Active
	Accessibility SDK may not correctly reflect the "checked" state of the
	OptionButton controls. Screen readers or other accessibility aids that use
	Microsoft Active Accessibility may also be similarly affected. For example, the
	Accessible Event Watcher may display the following:
	
	OBJ_FOCUS Name="Option1" Role=radio button State=focused,focusable
	
	Instead, the Accessible Event Watcher should display the following:
	
	OBJ_FOCUS Name="Option1" Role=radio button State=focused,checked,focusable
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0.
	
	This problem was first corrected in Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Download the following files from Microsoft Active Accessibility 2.0 SDK
	  Tools
	  (http://www.msdn.Microsoft.com/downloads/default.asp?URL=/downloads/sample.asp?url=/msdn-files/027/001/785/msdncompositedoc.xml),
	  and then save them in the same folder:
	
	   - Accevent32.exe
	   - Event32.dll
	
	2. Paste the following code in a program (.prg) file, and then run the program
	  from the Command window:
	
	  PUBLIC oMyForm AS FORM
	  CREATE CURSOR MyCursor (F1 m, L1 l, L2 l)
	  APPEND BLANK
	  REPLACE L1 WITH .T., L2 WITH .F.
	  oMyForm = NEWOBJECT("MyFormClass")
	  oMyForm.SHOW
	
	  DEFINE CLASS MyFormClass AS FORM
	  	AUTOCENTER = .T.
	  	ADD OBJECT Text1 AS TEXTBOX
	  	ADD OBJECT Optiongroup1 AS OPTIONGROUP WITH TOP = 150, ;
	  		BUTTONCOUNT = 2, ;
	  		HEIGHT = 50, ;
	  		WIDTH = 150, ;
	  		Option1.CAPTION = "Option1", ;
	  		Option2.CAPTION = "Option2", ;
	  		Option1.CONTROLSOURCE = "MyCursor.L1", ;
	  		Option2.CONTROLSOURCE = "MyCursor.L2"
	
	  	PROCEDURE Optiongroup1.INIT
	  		THIS.SETALL("AutoSize",.T.)
	  		*!* THIS.SETALL("ControlSource","")
	  	ENDPROC
	  	
	  	PROCEDURE DESTROY
	  		USE IN SELECT("MyCursor")
	  	ENDPROC	
	  ENDDEFINE
	
	3. Run the Accessible Event Watcher (AccEvent32.exe), and then return to the
	  form in Visual FoxPro.
	
	4. Press the TAB key to change between the TextBox and the OptionGroup.
	
	5. Return to AccEvent32.exe and note that the output window contains entries
	  such as the following:
	
	OBJ_FOCUS	 Name="Text1" Role=editable text State=focused,focusable
	OBJ_FOCUS	 Name="Option1" Role=radio button State=focused,focusable
	
	6. Return to Visual FoxPro and exit the form. Uncomment the commented SetAll()
	  function call in the OptionGroup Init event, and then run the program again.
	  This unbinds the option buttons, and gives you the following output in
	  Accessible Event Watcher:
	
	OBJ_FOCUS	 Name="Text1" Role=editable text State=focused,focusable
	OBJ_FOCUS	 Name="Option1" Role=radio button State=focused,checked,focusable
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
