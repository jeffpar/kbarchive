---
layout: page
title: "Q129865: Limitations of the AINSTANCE Function"
permalink: /kb/129/Q129865/
---

## Q129865: Limitations of the AINSTANCE Function

{% raw %}

	Article: Q129865
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The AINSTANCE function places all instances of a class into a memory variable
	array. The function also returns the number of instances of a class. The
	function does not, however, report information about "member objects" added by
	the ADD OBJECT method. "Member objects" are not, in themselves, instances; they
	are a part (member) of a container.
	
	This article provides an explanation of this function to clarify what the
	AINSTANCE function does and does not do.
	
	MORE INFORMATION
	================
	
	The AINSTANCE function places all instances of a class into a memory variable
	array:
	
	     =AINSTANCE(aMyArray,"Form") &&  Places all instances of the base class
	                                 &&  Form into an array called "aMyArray"
	
	In the following example, AINSTANCE places all "created" instances into an array.
	The WAIT WINDOWS will show how many "created" instances exist. The list box will
	show "0" because it is added to the Form by the ADD OBJECT method and is not
	"created." As an alternative to the AINSTANCE function, you can use the AMEMBERS
	function to return information about whether or not an object exists. The
	AMEMBERS function is used to populate the list box in the following example:
	
	     && Start of the Example:
	
	     frmMyForm=CREATEOBJECT("FORM")
	        WITH frmMyForm
	            .Left = 200
	            .Top  = 100
	        ENDWITH
	
	     cmdMyQuitButton=CREATEOBJECT("cmdQuitButton")
	
	     && If the above line is changed to a comment, the form and button
	     && still work the same but the AINSTANCE function will not
	     && return information for the commandbutton.
	
	     frmMyForm.ADDOBJECT("cmdMyQuitButton", "cmdQuitButton")
	     frmMyform.ADDOBJECT("cmdMyButton","commandbutton")
	     &&The above button will not be visible on the Form
	
	     frmMyForm.ADDOBJECT("lstMyList","ListBox")
	
	     frmMyForm.SHOW
	
	     nMvar=AINSTANCE(aMyArray,"Form")
	     WAIT WINDOW "Forms = "+ALLTRIM(str(nMvar))
	
	     nMvar=AINSTANCE(aMyArray,"cmdQuitButton")
	     WAIT WINDOW "QuitButtons = "+ALLTRIM(str(nMvar))
	
	     nMvar=AINSTANCE(aMyArray,"lstMyList")
	     WAIT WINDOW "List Boxes = "+ALLTRIM(str(nMvar))
	
	     =AMEMBERS(aMarray,frmMyForm,1)
	
	     nX=ASUBSCRIPT(aMarray,(ASCAN(aMarray,"Object")),1)
	
	     nMPos   = 1
	     nMySize = 2
	
	     FOR i = 1 to ALEN(aMarray)*2
	        nMPos    = ASCAN(aMarray,"Object",nMPos)
	        IF nMPos = 0
	            EXIT
	        ELSE
	            DIMENSION aMarray2(nMySize/2,2)
	        ENDIF
	
	        WAIT WINDOW aMarray(ASUBSCRIPT(aMarray,;
	        (ASCAN(aMarray,"Object",nMPos)),1),1)+"  "+;
	        aMarray(ASUBSCRIPT(aMarray,;
	        (ASCAN(aMarray,"Object",nMPos)),1),2)
	
	        =ACOPY(aMarray,aMarray2,nMPos-1,2,nMySize-1)
	
	        nMPos   = nMPos+1
	        nMySize = nMySize+2
	
	     ENDFOR
	
	     WAIT WINDOW "No Other Objects Found"
	
	     && The list box displays the members of the Form or rather the objects
	     && that are contained on the Form.
	
	     WITH frmMyForm.lstMyList
	          .visible = .T.
	          .width   = 300
	          .height  = 150
	          .top     = 30
	          .left    = 30
	          .rowsourcetype = 5
	          .rowsource     = "aMarray2"
	          .columncount   = 2
	          .columnwidths  = "150"
	     ENDWITH
	
	     READ EVENTS
	
	     DEFINE CLASS cmdQuitButton AS CommandButton
	        PROCEDURE Click
	           RELEASE ThisForm
	           CLEAR EVENTS
	        ENDPROC
	
	        Visible = .T.
	        Caption = "Quit"
	
	        Top    = 200
	        Left   = 300
	        Width  = 60
	        Height = 30
	     ENDDEFINE
	
	     && End of the Example.
	
	The AINSTANCE function returns object information only on those objects that have
	been instantiated programmatically by the CREATEOBJECT function or through the
	interface, even though the object is a member of a defined class. The AINSTANCE
	function can not return object information on "member objects."
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
