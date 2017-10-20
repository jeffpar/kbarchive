---
layout: page
title: "Q131027: HOWTO: Encapsulate Data in the Form Builder"
permalink: /kb/131/Q131027/
---

## Q131027: HOWTO: Encapsulate Data in the Form Builder

{% raw %}

	Article: Q131027
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbOOP
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a true object-oriented programming paradigm, data used in a form is
	encapsulated from the underlying form. This hides the names of the tables and
	fields from the form. By using this approach, a table or field name could change
	before the form is run, and the form should still function properly. As a
	result, the form does not need to know specific information about the data
	tables. The tables can change independent of any form.
	
	This article describes one way to encapsulate data from the form.
	
	MORE INFORMATION
	================
	
	The sample code in this article includes a custom class definition (clMyData)
	and a subclass (clcustomer) built from this custom class. The program is saved
	in a file named DATAENC.PRG.
	
	To use this approach, add several lines of code to the form's Init procedure. If
	the form is part of a formset, place the code in the Init of the formset
	instead.
	
	     * SET PROCEDURE to file containing class definition
	
	        IF !"DATAENC"$ SET("PROCEDURE")
	        SET PROCEDURE TO dataenc ADDITIVE
	     ENDIF
	
	     * Declare public variables to hold instantiations of custom classes
	     PUBLIC oMyData, oCustomer
	
	     * Instantiate each class
	     oMyData = CREATEOBJECT("clMyData")
	     oCustomer = CREATEOBJECT("clCustomer")
	
	Program Logic
	-------------
	
	The custom class (clMyData) examines the form being loaded. It uses the form's
	control array to itemize all of the controls on the form. If a control is a
	container (for example, a command button group or a page frame), the program
	itemizes all controls within the container as well.
	
	After identifying all controls on the form, the program replaces the original
	rowsource property specified when the form was designed. The replacement value
	for each control is specified in the subclass (clCustomer).
	
	A subclass similar to clCustomer is created for each table used in the form. The
	subclass method DIFFERS creates a two-column array, with one row for each field
	contained in the table. The first column of the array contains the design-time
	rowsource. The second column of the array contains the run-time rowsource,
	usually the field name from a table.
	
	This array is passed to the parent class and used in the GETDIFFERS method to
	dynamically change the rowsource properties of all applicable controls at
	runtime. The form file on disk is never changed.
	
	All method code required to do the conversion is included in the parent class.
	Only one method in the subclass needs to be edited to add an additional table to
	the form.
	
	The class listed in this article is a simple example. It could easily be expanded
	to handle additional functionality, such as building select statements for list
	boxes.
	
	Sample Code
	-----------
	
	     *******  Begin code example
	
	     ************************************************************************
	     * Class Name   : clMyData
	     * Parent Class : Custom
	     * Subclasses   :
	     ************************************************************************
	
	     Define Class clMyData as Custom
	
	     ************************************************************************
	     *   Properties
	     ************************************************************************
	
	        lIsFormSet = .t. && logical - is this a formset?
	        nNumberofForms=1    && number of forms
	        flag = .f.
	
	     ************************************************************************
	
	     PROCEDURE OpenTables
	
	        Parameters pDBC, pTable
	        * Called from each subclass to open needed dbcs and dbfs
	        * Set buffering
	        SET MULTILOCKS ON
	
	        * Open tables
	        IF !DBUSED(pDBC)
	           OPEN DATA (pDBC)
	        ENDIF
	        IF !USED(pTable)
	           USE (pTable) IN 0
	        ELSE
	           SELECT (pTable)
	        ENDIF
	        =CURSORSETPROP("Buffering",5,(pTable))
	
	        * Populate first object
	        THIS.GETINFO(pTable, @pArray)
	
	     ************************************************************************
	     * This is called once in each subclass to create a unique array name
	
	     PROCEDURE DIFFERS
	
	        PARAMETERS pTable
	        aDiffers=SYS(2015)
	        PUBLIC &adiffers(1,2)
	        RETURN aDiffers
	
	        * Place control source property for form in first column
	        * Place  fields which make this field in second column
	
	        *********************************************************************
	     * The following procedure is called by the subclass one time for each
	     * field in the data table
	
	     PROCEDURE POPDIFFERS
	     PARAMETERS pArrayName, pControlSource,  pInputExpr
	
	        iCurrentRow = ALEN((pArrayName),1)
	        cArrayName = pArrayName + "(iCurrentRow,"
	        &cArrayName.1) = pControlSource
	        &cArrayName.2) = pInputType
	
	        nNewSize  = iCurrentRow + 1
	        DIMENSION &pArrayName.(nNewsize, 2)
	     ************************************************************************
	
	     PROCEDURE INIT
	
	        * Figure out if part of a formset by trying to generate
	        * an error number 1938 and setting HighestClass appropriately
	
	        temp = thisformset.name
	
	        * Cycle through all of the controls on the current form and find the
	        * current control source where needed.
	        * Then, the init of each subclass will refer to this cursor later on
	        * to update the control source properties
	
	        CREATE CURSOR curMyProps (cName c(75), source c(75))
	        CREATE CURSOR curContainers (cName c(75))
	        IF lIsFormset
	        nNumberofForms = _screen.FORMCOUNT
	           FOR i = 1 to nNumberofForms
	              HighestClass = "_SCREEN.FORMS(" + alltrim(str(i)) +")"
	              this.allforms(highestclass)
	           NEXT i
	        ELSE
	           HIGHESTClass = "THISFORM"
	           THIS.AllForms(HighestClass)
	        ENDIF
	
	     ENDPROC
	
	     ************************************************************************
	     * The following procedure is executed 1 time for each form
	     * by the class init method
	
	     PROCEDURE AllForms
	     PARAMETERS HighestClass
	        iNumControls = &highestclass..controlcount
	        this.enumerate(HighestClass, iNumControls)
	        DO WHILE .T.
	           SELECT * from curContainers into CURSOR TEMP
	           IF _tally = 0
	              EXIT
	           ENDIF
	              SET SAFETY OFF
	              CREATE CURSOR curContainers (cName c(75))
	              SELECT TEMP
	           SCAN
	              HighestClass = alltrim(cName)
	              iNumControls = &HighestClass..ControlCount
	              this.enumerate(HighestClass, iNumControls)
	           ENDSCAN
	        ENDDO
	
	     ENDPROC
	
	     ************************************************************************
	     * The following procedure figures out which controls exist on the
	     * container
	
	     PROCEDURE enumerate
	     Parameters HighestClass, iNumControls
	
	        FOR i = 1 TO iNumControls
	           IF &highestclass..baseclass != "Commandgroup"
	               cCurControlBase = &highestclass..controls(i).baseclass
	               cCurControl = UPPER(highestclass + "." + ;
	                  &highestclass..controls(i).name)
	               cCurControlSource = ;
	                  UPPER(&highestclass..controls(i).controlsource)
	            ELSE
	              cCurControlBase = &highestclass..buttons(i).baseclass
	              cCurControl = UPPER(highestclass + "." + ;
	                  &highestclass..buttons(i).name)
	               cCurControlSource = ;
	                  UPPER(&highestclass..buttons(i).controlsource)
	            ENDIF
	           IF  cCurControlBase = "Textbox" ;
	              OR cCurControlBase = "Check box" ;
	              OR cCurControlBase = "Commandbutton" ;
	              OR cCurControlBase = "Optionbutton" ;
	              OR cCurControlBase = "Spinner" ;
	              OR cCurControlBase = "Column" ;
	              OR cCurControlBase = "EditBox"
	              SELECT CurMyProps
	              APPEND BLANK
	              REPLACE cName WITH cCurControl
	              REPLACE source WITH cCurControlSource
	           ELSE
	              IF cCurControlBase = "Page" ;
	                 OR cCurControlBase = "PageFrame";
	                 OR cCurControlBase = "Form" ;
	                 OR cCurControlBase = "Grid" ;
	                 OR cCurControlBase = "Toolbar"
	
	                 SELECT curContainers
	                 APPEND BLANK
	                 REPLACE cName with cCurControl
	              ENDIF
	           ENDIF
	        NEXT i
	
	     ENDPROC
	
	     ************************************************************************
	     * This procedure changes the rowsource in the cursor
	
	     PROCEDURE UpdateCursor
	     Parameters pArray, cTableName
	
	        SELECT curMyProps
	        =cursorsetprop("Buffering",1,(cTableName))
	        FOR i = 1 TO ALEN((pArray),1)
	           cNewSource = &pArray.(i,2)
	           cOldSource = &pArray.(i,1)
	           REPLACE source WITH cNewSource ;
	             FOR ALLTRIM(source) = UPPER(cOldSource)
	        ENDFOR
	        SCAN
	           cNewName = alltrim(cName)
	           &cNewName..controlsource = alltrim(source)
	        ENDSCAN
	
	     ************************************************************************
	
	     PROCEDURE error
	     Parameters pErrorNum, p3, p4
	        IF pErrorNum = 1938
	           lIsFormSet = .F.
	        ENDIF
	
	     ************************************************************************
	
	     PROCEDURE destroy
	        PARAMETERS pArrayName
	        RELEASE (pArrayName)
	
	     ************************************************************************
	
	     ENDDEFINE && End Definition of clMyData
	
	    ************************************************************************
	    * END CLASS DEFINITION
	    ************************************************************************
	
	     ************************************************************************
	     * Class Name   : clCUSTOMER
	     * Parent Class : clMyData
	     * Subclasses   :
	     ************************************************************************
	
	     Define Class clCUSTOMER as clMyData
	
	     ************************************************************************
	     *   Properties
	     ************************************************************************
	
	        cTableName = "CUSTOMER"  &&Name of the .dbf file
	        cDBCName   = "POES"      &&Name of the .DBC file
	        cMyArray   = ""
	
	     ************************************************************************
	
	     PROCEDURE INIT
	        clMyData::OpenTables(THIS.cDBCName, THIS.cTableName)
	        cMyArray = clMyData::Differs()
	        clMyData::PopDifferS(cMyArray,"FullName","customer.c_Name")
	        clMyData::PopDifferS(cMyArray,"SSN","customer.c_SSN")
	        clMyData::PopDifferS(cMyArray,"STREET","customer.c_STREET")
	        clMyData::PopDifferS(cMyArray,"CITY","customer.c_CITY")
	        clMyData::PopDifferS(cMyArray,"STATE","customer.C_STATE")
	        clMyData::PopDifferS(cMyArray,"ZIP","customer.c_ZIP")
	        clMyData::PopDifferS(cMyArray,"PHONE","customer.c_PHONE")
	        clMyData::PopDifferS(cMyArray,"CCN","customer.c_CCN")
	        this.parentPopDifferS(cMyArray,"CCEXP","customer.c_CCEXP")
	
	        clMyData::UpdateCursor(cMyArray, this.cTableName)
	        PUBLIC aCustomer(1,2)
	        SELECT c_ssn, c_name FROM CUSTOMER INTO ARRAY aCustomer
	
	     ************************************************************************
	
	     ENDDEFINE && End Definition of clCustomer
	
	     ************************************************************************
	     * END CLASS DEFINITION
	     ************************************************************************
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbOOP 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	

{% endraw %}
