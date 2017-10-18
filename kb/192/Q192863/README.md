---
layout: page
title: "Q192863: PRB: Data Entered in Text Box with Mask Differs from Exit Method"
permalink: kb/192/Q192863/
---

## Q192863: PRB: Data Entered in Text Box with Mask Differs from Exit Method

	Article: Q192863
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using an edit mask in a text box on a form, the value of the field is
	determined by how the control is exited.
	
	RESOLUTION
	==========
	
	One way to work around this problem is to set the SelectOnEntry property of the
	textbox to True (.T.) as follows:
	
	     ********************Begin Sample - 'Works'*************
	     oX=CREATEOBJECT('myform')
	     oX.SHOW()
	     
	     DEFINE CLASS myform AS FORM
	        WINDOWTYPE=1
	        ADD OBJECT txt1 AS TEXTBOX WITH VALUE=0,INPUTMASK="99,999,999.99"
	        ADD OBJECT txt2 AS TEXTBOX WITH ;
	        TOP=30,VALUE=0,INPUTMASK="99,999,999.99"
	        PROCEDURE INIT
	           THIS.txt1.SELECTONENTRY=.T.
	           THIS.txt2.SELECTONENTRY=.T.
	        ENDPROC
	     ENDDEFINE
	     ********************End Sample - 'Works'**************
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place the following code in a new program file:
	
	        **************Begin Sample - 'Breaks'**********************
	        oX=CREATEOBJECT('myform')
	        oX.SHOW()
	
	        DEFINE CLASS myform AS FORM
	           WINDOWTYPE=1
	           ADD OBJECT txt1 AS TEXTBOX WITH VALUE=0,INPUTMASK="99,999,999.99"
	           ADD OBJECT txt2 AS TEXTBOX WITH ;
	           TOP=30,VALUE=0,INPUTMASK="99,999,999.99"
	        ENDDEFINE
	        **************End Sample - 'Breaks'************************
	
	2. Run the program.
	
	3. Press 1 and then TAB. The first field becomes 10.00.
	
	4. Press 1 and then RETURN. The 2nd field becomes 1.00.
	
	5. Press 1 and then TAB. The first field becomes 110.00.
	
	6. Tab back to the first field.
	
	7. Press 1 and then RETURN. The first field becomes 1.00.
	
	Additional query words: kbDSupport kbDSE kbVFp600 kbCtrl kbContainer
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
