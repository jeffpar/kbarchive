---
layout: page
title: "Q185628: PRB: REPORT FORM TO PRINT Results in Incorrect Data"
permalink: /kb/185/Q185628/
---

## Q185628: PRB: REPORT FORM TO PRINT Results in Incorrect Data

{% raw %}

	Article: Q185628
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a REPORT FORM <report name> TO PRINTER command is issued and a grid
	object has focus, incorrect data may be printed in the detail band of the
	report.
	
	CAUSE
	=====
	
	When the REPORT FORM command is issued from either a toolbar or a menu, while a
	grid object has focus, the grid regains focus before the print job is completed.
	When the grid regains focus, the currently selected workspace is set to the
	record source associated with the grid.
	
	RESOLUTION
	==========
	
	Here are three workarounds:
	
	- Add a command button with print functions to the form containing the grid.
	
	  -or-
	
	- Create another form to accept the focus before printing. Here is a code
	  example:
	
	        oxprint=CREATEOBJECT(prtform)
	        oxprint.SHOW
	
	        DEFINE CLASS prtform AS FORM
	           TOP = 50
	           LEFT = 50
	           HEIGHT = 2
	           WIDTH = 2
	           DOCREATE = .T.
	           CAPTION = ""
	           NAME = "Form2"
	
	           PROCEDURE ACTIVATE
	              * Insert REPORT FORM and any associated commands here.
	              RELEASE THISFORM
	           ENDPROC
	
	        ENDDEFINE
	
	  -or-
	
	- Create a user-defined function (UDF) that sets the workarea and reference the
	  UDF in the report. A code example is shown below:
	
	        PROCEDURE SETWORKAREA
	        IF USED('mytable')
	           SELECT mytable
	        ENDIF
	        retval=ALIAS()
	        RETURN retval
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Because the current workspace is effectively being reset to the grid's record
	source, the report is run using the record source associated with the grid. This
	behavior occurs even if the desired table or cursor is specified in the report's
	DataEnvironment.
	
	Steps to Reproduce Behavior
	---------------------------
	
	WARNING: Running the following code may result in the printing of large reports
	spanning several pages.
	
	1. Create a report, named Testgrid.frx, which contains the following fields:
	
	        billings.line_no
	        billings.unit_price
	        billings.quantity
	
	2. Save a copy of Testgrid.frx as Testwork.frx and add a field with the
	  following expression:
	
	        SETWORKAREA()
	
	3. Create a program file named PRNDEMO, using the following code:
	
	        CLOSE ALL
	        OPEN DATABASE home()+"samples\data\testdata"
	        USE orders IN 0
	        ocusttool=CREATEOBJECT('toolbars')
	        ocusttool.SHOW
	        ocustomer=CREATEOBJECT('customer')
	        ocustomer.SHOW
	        READ EVENTS
	
	        PROCEDURE sqlqry
	        cporder=orders.order_id
	        SELECT orditems.line_no, orditems.unit_price, ;
	           orditems.quantity ;
	           FROM orditems ;
	           WHERE orditems.order_id=cporder ;
	           ORDER BY orditems.line_no ;
	           INTO CURSOR billings
	
	        PROCEDURE prnform
	        PARAMETER prnout
	           DO sqlqry IN PRNDEMO
	        DO CASE
	           CASE prnout="PREVIEW"
	              REPORT FORM testgrid PREVIEW
	           CASE prnout="WORKAROUND1" ;
	                 OR prnout="WORKAROUND2"
	              REPORT FORM testgrid NOCONSOLE TO PRINT
	           CASE prnout="WORKAROUND3"
	              REPORT FORM testwork NOCONSOLE TO PRINT
	           OTHERWISE
	              REPORT FORM testgrid NOCONSOLE TO PRINT
	        ENDCASE
	        SELECT billings
	        USE
	
	        DEFINE CLASS prtform AS FORM
	           TOP = 50
	           LEFT = 50
	           HEIGHT = 2
	           WIDTH = 2
	           DOCREATE = .T.
	           CAPTION = ""
	           NAME = "Form2"
	           PROCEDURE ACTIVATE
	              DO prnform IN PRNDEMO WITH "WORKAROUND2"
	              RELEASE THISFORM
	           ENDPROC
	        ENDDEFINE
	
	        DEFINE CLASS customer AS FORM
	           TOP = 0
	           LEFT = 0
	           HEIGHT = 200
	           WIDTH = 385
	           DOCREATE = .T.
	           CAPTION = "Click Form to Print Illustrate Problem"
	           NAME = "Form1"
	           ADD OBJECT grid1 AS GRID WITH ;
	              COLUMNCOUNT = 12, ;
	              HEIGHT = 72, ;
	              LEFT = 25, ;
	              RECORDSOURCE = "orders", ;
	              RECORDSOURCETYPE = 1, ;
	              TOP = 24, ;
	              WIDTH = 335, ;
	              NAME = "Grid1"
	           ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	              LEFT=24, ;
	              HEIGHT=100, ;
	              CAPTION="Work Around \<1", ;
	              TOP=100, ;
	              WIDTH=335
	           PROCEDURE CLICK
	              DO prnform IN PRNDEMO WITH ""
	           ENDPROC
	           PROCEDURE command1.CLICK
	              DO prnform IN PRNDEMO WITH "WORKAROUND1"
	           ENDPROC
	        ENDDEFINE
	
	        DEFINE CLASS toolbars AS TOOLBAR
	           CAPTION = "Toolbar1"
	           HEIGHT = 29
	           LEFT = 0
	           TOP = 0
	           WIDTH = 250
	           NAME = "toolbars"
	           ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	              TOP = 4, ;
	              LEFT = 6, ;
	              HEIGHT = 22, ;
	              WIDTH = 96, ;
	              CAPTION = "\<Preview", ;
	              DEFAULT = .F., ;
	              NAME = "Command1"
	           ADD OBJECT command2 AS COMMANDBUTTON WITH ;
	              TOP = 4, ;
	              LEFT = 102, ;
	              HEIGHT = 22, ;
	              WIDTH = 96, ;
	              CAPTION = "\<Failing Print", ;
	              DEFAULT = .F., ;
	              NAME = "Command2"
	           ADD OBJECT command3 AS COMMANDBUTTON WITH ;
	              TOP = 4, ;
	              LEFT = 198, ;
	              HEIGHT = 22, ;
	              WIDTH = 96, ;
	              CAPTION = "Work Around \<2", ;
	              DEFAULT = .F., ;
	              NAME = "Command3"
	           ADD OBJECT command4 AS COMMANDBUTTON WITH ;
	              TOP = 4, ;
	              LEFT = 294, ;
	              HEIGHT = 22, ;
	              WIDTH = 96, ;
	              CAPTION = "Work Around \<3", ;
	              DEFAULT = .F., ;
	              NAME = "Command4"
	           ADD OBJECT command5 AS COMMANDBUTTON WITH ;
	              LEFT=390, ;
	              HEIGHT=22, ;
	              CAPTION="E\<xit", ;
	              TOP=4, ;
	              WIDTH=96, ;
	              NAME = "Command5"
	           PROCEDURE ACTIVATE
	              THIS.DOCK(0)
	           ENDPROC
	           PROCEDURE command1.CLICK
	              DO prnform IN PRNDEMO WITH "PREVIEW"
	           ENDPROC
	           PROCEDURE command2.CLICK
	              DO prnform IN PRNDEMO WITH ""
	           ENDPROC
	           PROCEDURE command3.CLICK
	              printfrm=CREATEOBJECT('prtform')
	              printfrm.SHOW
	           ENDPROC
	           PROCEDURE command4.CLICK
	              DO prnform IN PRNDEMO WITH "WORKAROUND2"
	           ENDPROC
	           PROCEDURE command5.CLICK
	              CLEAR EVENTS
	           ENDPROC
	        ENDDEFINE
	
	4. Create a program file named SETWORKAREA, using the following code:
	
	        IF USED('billing')
	           SELECT billing
	        ENDIF
	        retval=ALIAS()
	        RETURN retval
	
	5. In the Command window type:
	
	        DO PRNDEMO
	
	6. Clicking either the form or the "Failing Print" captioned toolbar button
	  prints a report with incorrect data in the detail band. The number of records
	  printed will be equal to the number of records contained in the orders table.
	
	7. Clicking the command buttons captioned "Preview", "Work Around 1", "Work
	  Around 2", or "Work Around 3" prints a report containing the correct data.
	
	Additional query words: FxprintGeneral kbDSupport kbdse kbcode
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
