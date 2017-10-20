---
layout: page
title: "Q142885: How to Add the Data Environment to a Form Programmatically"
permalink: /kb/142/Q142885/
---

## Q142885: How to Add the Data Environment to a Form Programmatically

{% raw %}

	Article: Q142885
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp300b kbvfp600
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a form is created using the Form Designer, a DataEnvironment object is
	automatically added to the form. To simulate this behavior in a programmatically
	created form, a DataEnvironment property must be declared for the form. Then a
	pointer to a DataEnvironment object may be stored in the form's DataEnvironment
	property.
	
	MORE INFORMATION
	================
	
	1. Create a new program and type the following code:
	
	     oform1=CREATEOBJECT("Myform")  && Instantiate the form
	     oform1.SHOW(0)
	     oform1.refresh
	     READ EVENTS
	     RETURN
	
	     DEFINE CLASS Data1 AS dataenvironment   && DataEnvironment Class
	       Name = "Dataenvironment"
	       ADD OBJECT "Cursor1" AS MyCursor      && ADD OBJECT for each
	     ENDDEFINE                               && cursor in dataenvironment
	
	     DEFINE CLASS MyCursor AS cursor         && Cursor Class
	       Alias = "customer"
	       Database = "C:\vfp\samples\data\testdata.dbc"
	       CursorSource = "customer"
	       Name = "Cursor1"
	     ENDDEFINE
	
	     DEFINE CLASS Myform AS form
	       Top = 0
	       Left = 0
	       Height = 386
	       Width = 587
	       DoCreate = .T.
	       Caption = "Form1"
	       Name = "FORM1"
	       DataEnvironment=""                && DataEnvironment is a property
	                                         && of the form.
	       PROCEDURE Destroy
	         WAIT WINDOW PROGRAM() TIMEOUT 2
	         THISFORM.DATAENVIRONMENT.CLOSETABLES  && Close tables at the end
	       ENDPROC                                 && of destroy procedure.
	
	       PROCEDURE Unload
	         CLEAR EVENTS
	       ENDPROC
	
	       PROCEDURE Load
	         * The DataEnvironment is instantiated and the form property
	         * DataEnvironment references the object. The DataEnvironment
	         * is never actually added to the form. THISFORM.DATAENVIRONMENT
	         * is just a pointer to the DataEnvironment object.
	
	         THISFORM.DATAENVIRONMENT=CREATEOBJECT("Data1")
	
	         * Open the tables at the beginning of the LOAD.
	         THISFORM.DATAENVIRONMENT.OPENTABLES
	
	         WAIT WINDOW PROGRAM() TIMEOUT 2
	       ENDPROC
	     ENDDEFINE
	
	2. Open the Debug window.
	
	3. Type the following on the left side of the debug window
	
	     _SCREEN.ACTIVEFORM.DATAENVIRONMENT.NAME
	
	4. Run the program created in step 1.
	
	5. Note that the debug window correctly displays Dataenvironment as the value of
	  _SCREEN.ACTIVEFORM.DATAENVIRONMENT.NAME
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp300b kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : 3.00 3.00b
	
	=============================================================================
	

{% endraw %}
