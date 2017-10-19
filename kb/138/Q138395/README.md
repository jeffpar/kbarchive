---
layout: page
title: "Q138395: PRB: Visual FoxPro Gives @...GET a Default Caption"
permalink: /kb/138/Q138395/
---

## Q138395: PRB: Visual FoxPro Gives @...GET a Default Caption

	Article: Q138395
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the @...GET command to create a check box, option button, or command
	button, Visual FoxPro gives the controls a default prompt. The following list
	shows the default prompts Visual FoxPro assigns:
	
	  check box        'check1'
	  command button   'command1'
	  option button    'option1'
	
	RESOLUTION
	==========
	
	Here are three possible resolutions to this issue:
	
	1. Create a form using the form designer. For each of the controls, set the
	  caption property to spaces.
	
	2. Define a class based on the Visual FoxPro form class. Add the controls to the
	  form, and set the Caption property to "". The following code demonstrates
	  this method:
	
	      *** Start Program ***
	     *
	     * The first five lines instantiate a form named 'newform' and add
	     * the command button, option button, and check box controls to the form.
	     *
	     ***
	
	     PUBLIC newform
	     newform = CREATEOBJECT("FORM")
	     newform.Addobject("Command1","CommandButton")
	     newform.Addobject("Check1","CheckBox")
	     newform.Addobject("Option1","Optionbutton")
	
	     *
	     * The next few lines set properties for the controls.
	     *
	
	     newform.Check1.Top = 20
	     newform.Option1.Top = 40
	
	     newform.setall('Caption', "")
	     newform.setall('Visible',.T.)
	
	     newform.show     &&Shows the form
	
	     ***End Program ***
	
	3. Use a SHOW GET command in the WHEN clause of the READ, for example;
	
	     *** Start Program ***
	     *
	     DEFINE WINDOW window1 FROM 1,10 TO 40,40 FLOAT CLOSE
	     ACTIVATE WINDOW window1
	
	     @ 5,5 GET command1 ;
	          PICTURE "@*HN" ;
	          DEFAULT 1
	     @ 8,5 GET option1 ;
	          PICTURE "@*RVN" ;
	          DEFAULT 1
	     @ 11,5 GET check1 ;
	          PICTURE "@*C" ;
	          DEFAULT 1
	
	     READ CYCLE WHEN do_when()
	     RELEASE WINDOW window1
	
	     PROCEDURE do_when
	     SHOW GET command1,1 PROMPT SPACE(0)
	     SHOW GET option1, 1 PROMPT SPACE(0)
	     SHOW GET check1,1 PROMPT SPACE(0)
	     *
	     *** End Program ***
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code:
	
	     DEFINE WINDOW window1 FROM 1,10 TO 40,40 FLOAT CLOSE
	     ACTIVATE WINDOW window1
	     @ 5,5 GET command1 ;
	          PICTURE "@*HN" ;
	          SIZE 1,10 ;
	          DEFAULT 1
	     @ 8,5 GET option1 ;
	          PICTURE "@*RVN" ;
	          SIZE 1, 10;
	          DEFAULT 1
	     @ 11,5 GET check1 ;
	          PICTURE "@*C" ;
	          SIZE 1, 10;
	          DEFAULT 1
	
	     READ CYCLE
	     RELEASE WINDOW window1
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
