---
layout: page
title: "Q253785: PRB: Error When Setting DateTimePicker Control Programmatically"
permalink: /kb/253/Q253785/
---

## Q253785: PRB: Error When Setting DateTimePicker Control Programmatically

{% raw %}

	Article: Q253785
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to set the date of a DateTimePicker control programmatically,
	the following error message might appear:
	
	  OLE IDispatch exception code 0 from DTPicker: Invalid Property Value.
	
	CAUSE
	=====
	
	When using the DateTimePicker control's Calendar interface to change the date,
	the control handles adjusting the Day, Month, and Year properties to create a
	valid date. If a value is assigned that creates an invalid date, the error
	message above is displayed.
	
	RESOLUTION
	==========
	
	Use the GOMONTH() function to return a valid date, which can then be used to set
	the Day, Month, and Year properties of the DateTimePicker control as follows:
	
	  olddate=exampledate
	  exampledate=exampledate+(number_of_days_to_change)
	  IF MONTH(exampledate)<>MONTH(olddate)
	     olddate=GOMONTH(olddate,-1)
	     THISFORM.DTPicker1.DAY=DAY(olddate)
	     THISFORM.DTPicker1.MONTH=MONTH(olddate)
	     THISFORM.DTPicker1.YEAR=YEAR(olddate)
	  ENDIF
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named "DTP_DEMO" (without the quotation marks) using
	  the following code:
	
	  PUBLIC OX
	  OX=CREATEOBJECT('MYFORM')
	  OX.SHOW
	  READ EVENTS
	
	  DEFINE CLASS myform AS FORM
	     CAPTION = "DateTimePicker Form"
	     HEIGHT = 150
	     LEFT = 0
	     TOP = 0
	     WIDTH = 230
	     NAME = "myform"
	
	     ADD OBJECT DTPicker1 AS OLECONTROL WITH ;
	        OLECLASS="MSComCtl2.DTPicker.2",;
	        TOP = 5, ;
	        LEFT = 5, ;
	        HEIGHT = 25, ;
	        WIDTH = 100, ;
	        NAME = "DTPicker1"
	
	     ADD OBJECT commandbutton1 AS COMMANDBUTTON WITH ;
	        TOP=45, ;
	        LEFT=115, ;
	        HEIGHT=25, ;
	        AUTOSIZE=.T., ;
	        CAPTION="Add One Day", ;
	        NAME="commandbutton1"
	
	     ADD OBJECT commandbutton2 AS COMMANDBUTTON WITH ;
	        TOP=75, ;
	        LEFT=115, ;
	        HEIGHT=25, ;
	        AUTOSIZE=.T., ;
	        CAPTION="Subtract One Day", ;
	        NAME="commandbutton2"
	
	     ADD OBJECT commandbutton3 AS COMMANDBUTTON WITH ;
	        TOP=125, ;
	        LEFT=125, ;
	        HEIGHT=25, ;
	        CAPTION="\<Close", ;
	        NAME="commandbutton3"
	
	     PROCEDURE INIT
	        PUBLIC exampledate
	        exampledate=CTOD("02/01/00")
	        THISFORM.DTPicker1.DAY=DAY(exampledate)
	        THISFORM.DTPicker1.MONTH=MONTH(exampledate)
	        THISFORM.DTPicker1.YEAR=YEAR(exampledate)
	     ENDPROC
	
	     PROCEDURE commandbutton1.CLICK
	        olddate=exampledate
	        exampledate=exampledate+1
	  *!*	      IF MONTH(exampledate)<>MONTH(olddate)
	  *!*	         olddate=GOMONTH(olddate,1)
	  *!*	         THISFORM.DTPicker1.DAY=DAY(olddate)
	  *!*	         THISFORM.DTPicker1.MONTH=MONTH(olddate)
	  *!*	         THISFORM.DTPicker1.YEAR=YEAR(olddate)
	  *!*	      ENDIF
	        THISFORM.DTPicker1.DAY=DAY(exampledate)
	        THISFORM.DTPicker1.MONTH=MONTH(exampledate)
	        THISFORM.DTPicker1.YEAR=YEAR(exampledate)
	     ENDPROC
	
	     PROCEDURE commandbutton2.CLICK
	        olddate=exampledate
	        exampledate=exampledate-1
	  *!*	      IF MONTH(exampledate)<>MONTH(olddate)
	  *!*	         olddate=GOMONTH(olddate,-1)
	  *!*	         THISFORM.DTPicker1.DAY=DAY(olddate)
	  *!*	         THISFORM.DTPicker1.MONTH=MONTH(olddate)
	  *!*	         THISFORM.DTPicker1.YEAR=YEAR(olddate)
	  *!*	      ENDIF
	        THISFORM.DTPicker1.DAY=DAY(exampledate)
	        THISFORM.DTPicker1.MONTH=MONTH(exampledate)
	        THISFORM.DTPicker1.YEAR=YEAR(exampledate)
	     ENDPROC
	
	     PROCEDURE commandbutton3.CLICK
	        RELEASE THISFORM
	     ENDPROC
	
	     PROCEDURE UNLOAD
	        CLEAR EVENTS
	     ENDPROC
	
	  ENDDEFINE
	
	2. Save and run DTP_DEMO.
	
	3. Click the Command button captioned Subtract One Day, and note the error
	  message that appears.
	
	4. Uncomment the commented lines of code in the commandbutton1.click and
	  commandbutton2.click methods.
	
	5. Save and run DTP_DEMO.
	
	6. Click the Command button captioned Subtract One Day, and note that the error
	  message does not appear.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	For additional information DTPicker ActiveX Control, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q189991 PRB: Error Setting DateTimePicker's Month Programmatically
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
