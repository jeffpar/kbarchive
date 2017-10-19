---
layout: page
title: "Q197510: FIX: Poor Performance with Forms Containing Many Objects"
permalink: /kb/197/Q197510/
---

## Q197510: FIX: Poor Performance with Forms Containing Many Objects

	Article: Q197510
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbOOP kbPerfMon kbvfp600 kbvfp600bug kbVS600sp3fix kbvfp600QFE
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Instantiating a form or container that contains many objects, may be much slower
	in Visual FoxPro version 6.0 than in Visual FoxPro version 5.0.
	
	If the form contains a pageframe with multiple pages, page activation may be much
	slower in Visual FoxPro 6.0 than in Visual FoxPro 5.0.
	
	Normally, this behavior does not manifest itself unless the form or container
	instantiated contains at least several hundred objects.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in Visual Studio 6.0 Service
	Pack 3..
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	     * This program creates a number of forms that each
	     * add a pageframe at run-time. Each page activates
	     * after the pageframe is instantiated. The number of forms,
	     * pages in the pageframe, and text boxes on each page
	     * are set from the #DEFINE statements. The times in seconds for
	     * each form to add its objects, and activate each page
	     * are echoed to the Debug Output window. The total time in
	     * seconds for all forms is echoed last.
	        
	     #DEFINE NO_OF_FORMS          10
	     #DEFINE NO_OF_PAGES          20
	     #DEFINE NO_OF_TEXTBOXES      10
	
	     DEBUG
	     DEBUGOUT ''
	
	     PUBLIC gnStart
	     gnStart = SECONDS()
	     FOR lni = 1 TO NO_OF_FORMS
	        lcfrmName = 'oform'+ALLTR(STR(lni))
	        &lcfrmName = CREATEOBJECT('perfform')
	        &lcfrmName..CAPTION = SUBSTR(lcfrmName,2)
	        &lcfrmName..SHOW()
	     ENDFOR
	
	     FOR lnj = 1 TO _SCREEN.FORMCOUNT
	        lcfrmName = 'oform'+ALLTR(STR(lnj))
	        &lcfrmName..SHOW()
	        lnstart = SECONDS()
	        FOR lnk = 1 TO &lcfrmName..pf1.PAGECOUNT
	           &lcfrmName..pf1.ACTIVEPAGE = lnk
	        ENDFOR
	        DEBUGOUT 'Form '+ ALLTR(STR(lnj)) + ;
	           ':                 '+alltr(str(SECONDS() - lnstart,5,2))
	     ENDFOR
	    DEBUGOUT 'All forms:             '+alltr(str(SECONDS() - gnStart,5,2))
	     READ EVENTS
	
	      DEFINE CLASS perfform AS FORM
	       HEIGHT = 350
	       ADD OBJECT pf1 AS PAGEFRAME WITH ;
	         PAGECOUNT = 0
	       PROC pf1.INIT()
	          THIS.HEIGHT = THIS.PARENT.HEIGHT - 5
	          FOR lnj = 1 TO NO_OF_PAGES
	             THIS.ADDOBJECT('pg'+ALLTR(STR(lnj)), 'pg')
	          ENDFOR
	       ENDPROC
	     ENDDEFINE
	
	     DEFINE CLASS pg AS PAGE
	       PROC ACTIVATE()
	          IF TYPE('this.cntPage') # 'O'
	             THIS.ADDOBJECT("cntPage", "cnPageContainer")
	          ENDIF
	       ENDPROC
	     ENDDEFINE
	
	     DEFINE CLASS cnpagecontainer AS CONTAINER
	        NAME = "cnpagecontainer"
	        VISIBLE = .T.
	        Top = 5
	        ADD OBJECT cmd1 AS COMMANDBUTTON WITH ;
	           LEFT = 180, ;
	           TOP = 20, ;
	           CAPTION = 'Quit', ;
	           VISIBLE = .T.
	
	        PROC INIT()
	           THIS.HEIGHT = THIS.PARENT.PARENT.HEIGHT - 20
	           THIS.WIDTH = THIS.PARENT.PARENT.WIDTH - 5
	           FOR lnp = 1 TO NO_OF_TEXTBOXES
	              THIS.ADDOBJECT('lbl'+ALLTR(STR(lnp)), 'label')
	              WITH THIS.CONTROLS(lnp+1)
	                 .LEFT = 10
	                 .TOP = 25*(lnp-1)+ 2
	                 .WIDTH = 80
	                 .NAME = 'lbl'+ALLTR(STR(lnp))
	                 .VISIBLE = .T.
	              ENDWITH
	           ENDFOR
	           FOR lnq = lnp TO (2 * lnp) - 2
	              THIS.ADDOBJECT('txt'+ALLTR(STR(lnq)), 'textbox')
	              WITH THIS.CONTROLS(lnq+1)
	                 .HEIGHT = 23
	                 .LEFT = 90
	                 .TOP = 25*(lnq-lnp)+ 2
	                 .WIDTH = 80
	                 .NAME = 'txt'+ALLTR(STR(lnq))
	                 .VISIBLE = .T.
	              ENDWITH
	           ENDFOR
	        ENDPROC
	
	        PROC cmd1.CLICK
	           gnStart = SECONDS()
	           CLEAR EVENTS
	        ENDPROC
	     ENDDEFINE
	
	2. Note the "All forms:" time in the Debug Output window. This will be around
	  five times higher in Visual FoxPro 6.0 than in Visual FoxPro 5.0.
	
	This example is specifically designed to exhibit the behavior. As written, it
	instantiates over 2000 objects and activates 200 pages. The impact of this issue
	on your application is likely to be much less, since most applications do not
	simultaneously instantiate 200 pages with 10 objects each.
	
	Steps to Reproduce Behavior
	---------------------------
	
	REFERENCES
	==========
	
	
	
	Additional query words: kbVFP6QFE
	
	======================================================================
	Keywords          : kbOOP kbPerfMon kbvfp600 kbvfp600bug kbVS600sp3fix kbvfp600QFE 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
