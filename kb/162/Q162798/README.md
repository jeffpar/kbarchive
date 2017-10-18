---
layout: page
title: "Q162798: HOWTO: Use SET PRINTER TO NAME to Specify Report Destination"
permalink: kb/162/Q162798/
---

## Q162798: HOWTO: Use SET PRINTER TO NAME to Specify Report Destination

	Article: Q162798
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbDesigner kbPrinting kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order to specify that a Visual FoxPro report should sent to a particular
	printer, it is customary to either change the Windows default printer or use the
	PROMPT clause on the REPORT command to allow the user to select the printer.
	However, it is possible to change the desired destination printer without using
	either of these techniques. This article explains some methods for doing this
	using SET PRINTER TO NAME [printer name].
	
	MORE INFORMATION
	================
	
	The SET PRINTER TO NAME command allows the currently selected printer within
	Visual FoxPro to be set to any printer installed under Windows. The list of
	installed printers can be read into an array with the APRINTERS() function, or a
	single printer name can be returned by the GETPRINTER() dialog.
	
	NOTE: For this procedure to work, the report form must be saved with the Default
	Printer selected from the Name drop-down box within the Print Setup dialog. This
	dialog is called from the Page Setup dialog found under the File menu.
	
	Example 1
	---------
	
	The following program displays the GETPRINTER() dialog to allow selection of a
	printer from the installed printers. If OK is selected in the GetPrinter dialog,
	a report called Test is sent to the selected printer. If the Cancel button is
	selected in the GetPrinter dialog, the report is not printed.
	
	     * Beginning of program for Example 1
	     * *******************************************************
	     * This program assumes a report called Test which has been
	     * saved with the default printer in the Print Setup dialog.
	     *
	     LOCAL lcPrinter
	
	     lcPrinter = ''
	     lcPrinter = GETPRINTER()
	
	     IF !EMPTY(lcPrinter)
	        SET PRINTER TO NAME (lcPrinter)
	        REPORT FORM Test TO PRINTER NOCONSOLE
	     ELSE
	        WAIT WINDOW 'Print Job Cancelled' TIME 1
	     ENDIF
	     *
	     * End of program for Example 1
	
	Notes:
	
	Under Visual FoxPro 3.0 and 3.0b, the GETPRINTER() dialog is different, and the
	dialog allows changing portrait/landscape settings, among others. These are
	ignored when the report is printed.
	
	Example 2
	---------
	
	The following program displays a custom form that has a drop-down list populated
	with an array created with APRINTERS(). If you choose the "Print Report" command
	button, a report called Test is sent to the selected printer. If you choose the
	Cancel button, the report is not printed.
	
	     * Beginning of program for Example 2
	     *********************************************************
	     * This program assumes a report called Test which has been
	     * saved with the default printer in the Print Setup dialog.
	     *
	     PUBLIC oform
	     oform=CREATEOBJECT("form1")
	     oform.SHOW
	
	     DEFINE CLASS form1 AS FORM
	        AutoCenter = .T.
	        Height = 158
	        Width = 327
	        Caption = "Printer Dialog"
	        Name = "Form1"
	        DIMENSION aprintarray[1]
	
	        ADD OBJECT combo1 AS COMBOBOX WITH ;
	            ROWSOURCETYPE = 5, ;
	            ROWSOURCE = "thisform.aPrintArray", ;
	            HEIGHT = 25, ;
	            LEFT = 24, ;
	            STYLE = 2, ;
	            TOP = 48, ;
	            WIDTH = 276, ;
	            NAME = "Combo1"
	
	        ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	            TOP = 108, ;
	            LEFT = 48, ;
	            HEIGHT = 27, ;
	            WIDTH = 84, ;
	            CAPTION = "Print Report", ;
	            DEFAULT = .T., ;
	            NAME = "Command1"
	
	        ADD OBJECT command2 AS COMMANDBUTTON WITH ;
	            TOP = 108, ;
	            LEFT = 180, ;
	            HEIGHT = 25, ;
	            WIDTH = 84, ;
	            CANCEL = .T., ;
	            CAPTION = "Cancel", ;
	            NAME = "Command2"
	
	        PROCEDURE combo1.INIT
	            LOCAL lnI
	            FOR lnI = 1 TO APRINTERS(THISFORM.aprintarray)
	                *   Note below that you are adding a leading space. This
	                *   prevents a network printer in Windows NT from appearing
	                *   disabled in the combo due the leading "\"
	                THISFORM.aprintarray[lnI,1] = SPACE(1) + ;
	                   THISFORM.aprintarray[lnI,1]
	            ENDFOR
	            * Set initial value of combo
	            THIS.Requery()
	            IF '5.0' $ VERSION()
	                * This sets the combo initial value of the dropdown to the
	                * default printer - This will not work in 3.0/3.0b since
	                * SET('PRINTER', 2) is not available
	                FOR EACH a_element IN THISFORM.aprintarray
	                    IF UPPER(SET('PRINTER',2))$UPPER(a_element)
	                        THIS.Value = a_element
	                    ENDIF
	                ENDFOR
	            ELSE
	                * If in 3.0/3.0b, set to first element in list.
	                THIS.Value = THISFORM.aprintarray[1]
	            ENDIF
	        ENDPROC
	
	        PROCEDURE command1.CLICK
	            SET PRINTER TO NAME (ALLTRIM(THISFORM.combo1.VALUE))
	            REPORT FORM test TO PRINTER NOCONSOLE
	            RELEASE THISFORM
	        ENDPROC
	
	        PROCEDURE command2.CLICK
	            RELEASE THISFORM
	        ENDPROC
	
	     ENDDEFINE
	     *
	     * End of program for Example 2
	
	REFERENCES
	==========
	
	Visual FoxPro 5.0 Help
	Visual FoxPro 6.0 Help
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbDesigner kbPrinting kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
