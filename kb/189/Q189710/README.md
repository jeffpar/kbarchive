---
layout: page
title: "Q189710: FIX: ActiveX Control Shows Through Page After Modal Form Runs"
permalink: kb/189/Q189710/
---

## Q189710: FIX: ActiveX Control Shows Through Page After Modal Form Runs

	Article: Q189710
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you display a modal form from a calling form that has an
	OleContainer/ActiveX control in an inactive Pageframe page, the ActiveX control
	bleeds through and displays on the active page.
	
	RESOLUTION
	==========
	
	After you display and then close the modal form, set the Visible property of the
	OleContainer control holding the ActiveX control to .F., then back to .T.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	        PUBLIC OFORM1
	        OFORM1=CREATEOBJECT("form1")
	        OFORM1.SHOW()
	
	        DEFINE CLASS FORM1 AS FORM
	           AUTOCENTER = .T.
	           NAME = "Form1"
	           HEIGHT = 300
	
	           ADD OBJECT PF1 AS PAGEFRAME WITH ;
	              PAGECOUNT = 2
	
	           ADD OBJECT CMD1 AS COMMANDBUTTON WITH ;
	              TOP = 275, ;
	              NAME = 'cmd1', ;
	              CAPTION = 'Do form 2', ;
	              LEFT = 140
	
	           PROC INIT
	              THIS.PF1.PAGE2.ADDOBJECT('olecls1','olecls')
	              THIS.PF1.PAGE2.OLECLS1.VISIBLE = .T.
	           ENDPROC
	
	           PROC CMD1.CLICK
	              OY = CREATEOBJECT('form')
	              OY.CAPTION = "Click on the X to close me!"
	              OY.SHOW(1)
	           ENDPROC
	
	        ENDDEFINE
	
	        DEFINE CLASS OLECLS AS OLECONTROL
	           HEIGHT = 100
	           WIDTH = 100
	           NAME = "olecls"
	           OLECLASS = 'RICHTEXT.RichtextCtrl'
	        ENDDEFINE
	
	2. Note that the ActiveX control is not visible.
	
	3. Click Page2 to display the ActiveX control, and then click Page1.
	
	4. Next, click the "Do Form 2" button.
	
	5. Close the second form by clicking the Close button in the upper right corner
	  of the screen.
	
	RESULTS:
	
	- The ActiveX control now displays on Page1.
	
	- You can hide the control by clicking Page2, then clicking back to Page1.
	
	To demonstrate the solution described in the RESOLUTION section using the
	preceding example, place the following code in the CMD1.CLICK procedure,
	immediately after the line OY.SHOW(1):
	
	     THISFORM.PF1.PAGE2.OLECLS1.VISIBLE = .F.
	     THISFORM.PF1.PAGE2.OLECLS1.VISIBLE = .T.
	
	Toggling the ActiveX control's visible property prevents the control from
	incorrectly displaying on Page1.
	
	Additional query words: kbVFp500 kbVFp500a kbVFp600fix kbActiveX kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
