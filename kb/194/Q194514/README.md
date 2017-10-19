---
layout: page
title: "Q194514: PRB: Cannot Pass Array Property of Form by Reference to OLE DLL"
permalink: /kb/194/Q194514/
---

## Q194514: PRB: Cannot Pass Array Property of Form by Reference to OLE DLL

	Article: Q194514
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbvfp600
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Trying to pass an array property of a form by reference to a COM server results
	in the following error:
	
	  "Alias 'THISFORM' is not found"
	
	RESOLUTION
	==========
	
	There are two methods of working around this limitation:
	
	1. Use the ACOPY() function to copy all the data from the array property to an
	  array variable, then pass the array variable by reference.
	
	  -or-
	
	2. If having the array be a property is not a necessity, eliminate the array
	  property, and dimension an array variable in the Init of the form. Pass that
	  array by reference to the object.
	
	  Example 1:
	
	  Modify the btnOne.Click Method to the following:
	
	           ***************Start Code Workaround 1****************
	           PROCEDURE btnOne.CLICK
	              THISFORM.oArrTest=CREATEOBJECT('frmArray.ArrTest')
	              IF TYPE('thisform.oArrTest')#'O' then
	                  WAIT WINDOW 'Did not instantiate'
	                 RETURN
	              ENDIF
	              COMARRAY(thisform.oArrTest,11)
	              ACOPY(THISFORM.MyArray,aTemp)
	              THISFORM.oArrTest.modarray(@aTemp)
	              DISPLAY MEMORY LIKE aTemp
	           ENDPROC
	           PROCEDURE btnClose.CLICK
	              CLEAR EVENTS
	              RELEASE THISFORM
	           ENDPROC
	           **********End Code Workaround 1********************
	
	  Example 2:
	
	  Replace the Client code with the following:
	
	        ***************Start Code Workaround 2********************
	        x=CREATEOBJECT("Test1")
	        x.VISIBLE=.T.
	        x.SHOW
	        READ EVENTS
	
	        DEFINE CLASS Test1 AS FORM OLEPUBLIC
	           oArrTest=.NULL.
	           ADD OBJECT btnOne AS COMMANDBUTTON WITH TOP = 1, ;
	              CAPTION = 'Test Array'
	           ADD OBJECT btnClose AS COMMANDBUTTON WITH TOP = 25, ;
	              CAPTION = 'Close'
	           PROCEDURE INIT
	           DIMENSION aMyArray(5,1)
	              I=1
	              FOR I = 1 TO 5
	                 aMyArray(I)='Form'
	              ENDFOR
	           ENDPROC
	
	           PROCEDURE btnOne.CLICK
	              THISFORM.oArrTest=CREATEOBJECT('frmArray.ArrTest')
	              IF TYPE('thisform.oArrTest')#'O' then
	                  WAIT WINDOW 'Did not instantiate'
	                 RETURN
	              ENDIF
	              COMARRAY(thisform.oArrTest,11)
	              THISFORM.oArrTest.modarray(@aMyArray)
	              DISPLAY MEMORY LIKE aMyArray
	           ENDPROC
	           PROCEDURE btnClose.CLICK
	              CLEAR EVENTS
	              RELEASE THISFORM
	           ENDPROC
	        ENDDEFINE
	        *************End Code Workaround 2*************************
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place the following Class Definition code in a program file attached to a
	  project called frmArray:
	
	        ****************Begin Class Definition*********
	        DEFINE CLASS ArrTest AS CUSTOM OLEPUBLIC
	           PROCEDURE modarray
	              PARAMETERS MyArray
	              EXTERNAL ARRAY MyArray
	              FOR I = 1 TO 5
	                 MyArray(I)="COM"
	               ENDFOR
	           ENDPROC
	        ENDDEFINE
	        **************End Class Definition************
	
	2. Build the project into a COM DLL.
	
	3. Place the following Client Code in a program file and run it:
	
	        ***************Client Code Start*******************
	        x=CREATEOBJECT("Test1")
	        x.VISIBLE=.T.
	        x.SHOW
	        READ EVENTS
	
	        DEFINE CLASS Test1 AS FORM OLEPUBLIC
	           DIMENSION MyArray(5)
	           oArrTest=.NULL.
	           ADD OBJECT btnOne AS COMMANDBUTTON WITH TOP = 1, ;
	              CAPTION = 'Test Array'
	           ADD OBJECT btnClose AS COMMANDBUTTON WITH TOP = 25, ;
	              CAPTION = 'Close'
	           PROCEDURE INIT
	              I=1
	              FOR I = 1 TO 5
	                 MyArray(I)='Form'
	              ENDFOR
	           ENDPROC
	
	           PROCEDURE btnOne.CLICK
	              THISFORM.oArrTest=CREATEOBJECT('frmArray.ArrTest')
	              IF TYPE('thisform.oArrTest')#'O' then
	                  WAIT WINDOW 'Did not instantiate'
	                 RETURN
	              ENDIF
	              COMARRAY(thisform.oArrTest,11)
	              THISFORM.oArrTest.modarray(@THISFORM.MyArray)
	              DISPLAY MEMORY LIKE THISFORM.MyArray
	           ENDPROC
	           PROCEDURE btnClose.CLICK
	              CLEAR EVENTS
	              RELEASE THISFORM
	           ENDPROC
	        ENDDEFINE
	        *****************Client Code End************************
	
	4. When the form appears, press the "btnOne" button, and note the error message.
	
	Additional query words: kbVFP600 kbComt
	
	======================================================================
	Keywords          : kbCOMt kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
