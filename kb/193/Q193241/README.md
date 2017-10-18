---
layout: page
title: "Q193241: HOWTO: Synchronize Data Displayed on Two Different Forms"
permalink: kb/193/Q193241/
---

## Q193241: HOWTO: Synchronize Data Displayed on Two Different Forms

	Article: Q193241
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some circumstances, it is necessary to create two or more forms that are
	independent of each other while keeping the data displayed in the forms
	synchronized. This article demonstrates how to synchronize the data displayed on
	two independent forms.
	
	MORE INFORMATION
	================
	
	In order to synchronize the data display between two or more independent forms,
	it is necessary to call the refresh method of the form(s) that contain the data
	that needs to be refreshed. The methods available for refreshing a form after
	moving a record pointer are to some extent dependent on how the form is being
	instantiated.
	
	The following example illustrates use of the Refresh method between two forms:
	
	1. Create a form named TEST1 and change the Caption property to "Employee Form."
	
	2. Add the EMPLOYEE table from the \\SAMPLES\DATA directory to the form's
	  DataEnvironment and set the ORDER to EMP_ID.
	
	3. Drag the following fields from the EMPLOYEE table to the form:
	
	     EMPLOYEE.EMP_ID
	     EMPLOYEE.LAST_NAME
	     EMPLOYEE.FIRST_NAME
	     EMPLOYEE.TITLE
	
	4. Add the following code to the form's Init event:
	
	        DO FORM TEST2
	
	5. Create a form named TEST2 and change the Caption property to "Search Form."
	  Add the EMPLOYEE table from the \\SAMPLES\DATA directory to the form's
	  DataEnvironment and set the ORDER to EMP_ID. In the form's DataEnvironment
	  and set the following values:
	
	        AutoCloseTables=.F.
	        AutoOpenTables=.F.
	
	6. Add a list box control that has the following values to the form:
	
	        RowSourceType=6 - Fields
	        RowSource=EMPLOYEE.EMP_ID
	
	7. Add the following code to the Click event of the list box control:
	
	        IF !EMPTY(THIS.VALUE)
	           IF SEEK(RTRIM(THIS.VALUE))
	              * Note that TEST1 is the name of the .SCX file created earlier
	              test1.REFRESH
	           ENDIF
	        ENDIF
	
	8. Save the form.
	
	9. From the command line type "DO FORM TEST1" and use the form captioned "Search
	  Form" to move the record pointer. After you click a value in the list box,
	  the data in the "Employee Form" refreshes.
	
	If the form is being instantiated from a class definition, refreshing the form
	becomes somewhat more problematic. In this case, the FORMS collection must be
	used to refresh the target form(s).
	
	The following code illustrates use of the FORMS collection to refresh another
	form:
	
	1. Create a program file called Demo.prg that contains the following code:
	
	        * Begin Code
	        PUBLIC ox
	        ox=CREATEOBJECT('SYNCHED1')
	        ox.SHOW
	
	        DEFINE CLASS synched1 AS FORM
	           TOP = 50
	           LEFT = 162
	           HEIGHT = 160
	           WIDTH = 310
	           DOCREATE = .T.
	           CAPTION = "Employee Form"
	           NAME = "Form1"
	           AUTOCENTER=.T.
	
	           ADD OBJECT lblemp_id AS LABEL WITH ;
	              AUTOSIZE = .T., ;
	              BACKSTYLE = 0, ;
	              CAPTION = "Employee ID", ;
	              LEFT = 11, ;
	              TOP = 0, ;
	              TABINDEX = 3, ;
	              NAME = "lblEmp_id"
	
	           ADD OBJECT lbllast_name AS LABEL WITH ;
	              AUTOSIZE = .T., ;
	              BACKSTYLE = 0, ;
	              CAPTION = "Last Name", ;
	              LEFT = 11, ;
	              TOP = 36, ;
	              TABINDEX = 5, ;
	              NAME = "lblLast_name"
	
	           ADD OBJECT lblfirst_name AS LABEL WITH ;
	              AUTOSIZE = .T., ;
	              BACKSTYLE = 0, ;
	              CAPTION = "First Name", ;
	              LEFT = 11, ;
	              TOP = 72, ;
	              TABINDEX = 7, ;
	              NAME = "lblFirst_name"
	
	           ADD OBJECT lbltitle AS LABEL WITH ;
	              AUTOSIZE = .T., ;
	              BACKSTYLE = 0, ;
	              CAPTION = "Title", ;
	              LEFT = 11, ;
	              TOP = 108, ;
	              TABINDEX = 9, ;
	              NAME = "lblTitle"
	
	           ADD OBJECT txtemp_id AS TEXTBOX WITH ;
	              CONTROLSOURCE = "employee.emp_id", ;
	              HEIGHT = 23, ;
	              LEFT = 84, ;
	              MAXLENGTH = 6, ;
	              TABINDEX = 4, ;
	              TOP = 0, ;
	              WIDTH = 53, ;
	              NAME = "txtEmp_id"
	
	           ADD OBJECT txtlast_name AS TEXTBOX WITH ;
	              CONTROLSOURCE = "employee.last_name", ;
	              HEIGHT = 23, ;
	              LEFT = 84, ;
	              MAXLENGTH = 20, ;
	              TABINDEX = 6, ;
	              TOP = 36, ;
	              WIDTH = 149, ;
	              NAME = "txtLast_name"
	
	           ADD OBJECT txtfirst_name AS TEXTBOX WITH ;
	              CONTROLSOURCE = "employee.first_name", ;
	              HEIGHT = 23, ;
	              LEFT = 84, ;
	              MAXLENGTH = 10, ;
	              TABINDEX = 8, ;
	              TOP = 72, ;
	              WIDTH = 80, ;
	              NAME = "txtFirst_name"
	
	           ADD OBJECT txttitle AS TEXTBOX WITH ;
	              CONTROLSOURCE = "employee.title", ;
	              HEIGHT = 23, ;
	              LEFT = 84, ;
	              MAXLENGTH = 30, ;
	              TABINDEX = 10, ;
	              TOP = 108, ;
	              WIDTH = 218, ;
	              NAME = "txtTitle"
	
	           PROCEDURE LOAD
	              PUBLIC varval
	              IF ATC("Visual FoxPro 06.",VERSION())>0
	              USE Home(2)+"Employee.dbf"
	              Else
	              USE home()+"\samples\data\employee"
	              ENDIF
	              SET ORDER TO TAG emp_id
	              GO TOP
	              STORE SPACE(LEN(employee.emp_id)) TO m.varval
	           ENDPROC
	
	           PROCEDURE DESTROY
	              FOR i=1 TO _SCREEN.FORMCOUNT
	                 * Look for the Search Form in the FORMS collection.
	                 IF _SCREEN.FORMS(i).CAPTION="Search Form"
	                    * If the Search Form exists, release it
	                    _SCREEN.FORMS(i).RELEASE
	                 ENDIF
	              ENDFOR
	              * Close the table.
	              SELECT employee
	              USE
	           ENDPROC
	
	           PROCEDURE INIT
	              * Launch the Search Form.
	              PUBLIC search
	              search=CREATEOBJECT('SYNCHED2')
	              search.SHOW
	           ENDPROC
	        ENDDEFINE
	
	        DEFINE CLASS synched2 AS FORM
	           TOP = 0
	           LEFT = 0
	           HEIGHT = 118
	           WIDTH = 205
	           DOCREATE = .T.
	           CAPTION = "Search Form"
	           NAME = "Form2"
	
	           ADD OBJECT list1 AS LISTBOX WITH ;
	              ROWSOURCETYPE = 0, ;
	              HEIGHT = 96, ;
	              LEFT = 24, ;
	              TOP = 12, ;
	              WIDTH = 145, ;
	              NAME = "List1"
	
	           PROCEDURE INIT
	              THIS.list1.ROWSOURCETYPE=1
	              IF USED('EMPLOYEE')
	                 SELECT employee
	                 currec=RECNO()
	                 GO TOP
	                 SCAN
	                    * Load the list box with data from the table.
	                    THIS.list1.ADDLISTITEM(employee.emp_id)
	                 ENDSCAN
	                 GOTO currec
	              ENDIF
	           ENDPROC
	
	           PROCEDURE list1.CLICK
	              IF !EMPTY(THIS.VALUE)
	                 SELECT employee
	                 IF SEEK(RTRIM(THIS.VALUE))
	                    * Move the record pointer
	                    FOR i=1 TO _SCREEN.FORMCOUNT
	                       * Look for the Employee Form in the FORMS collection.
	                       IF _SCREEN.FORMS(i).CAPTION="Employee Form"
	                          * If the Employee Form exists, Refresh it
	                          _SCREEN.FORMS(i).REFRESH
	                       ENDIF
	                    ENDFOR
	                 ENDIF
	              ENDIF
	           ENDPROC
	
	           PROCEDURE DESTROY
	              FOR i=1 TO _SCREEN.FORMCOUNT
	                 * Look for the Employee Form in the FORMS collection.
	                 IF _SCREEN.FORMS(i).CAPTION="Employee Form"
	                    * If the Employee Form exists, release it
	                    _SCREEN.FORMS(i).RELEASE
	                 ENDIF
	              ENDFOR
	           ENDPROC
	        ENDDEFINE
	        * End Code.
	
	2. From the command line type "DO DEMO" and use the form captioned "Search Form"
	  to move the record pointer. After clicking a value in the list box, the data
	  in the Employee Form refreshes.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by John
	Desch, Microsoft Corporation
	
	
	Additional query words: kbVFp300 kbVFp500 kbVFp600 kbVFp500a kbContainer kbCtrl
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
