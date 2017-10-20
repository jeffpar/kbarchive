---
layout: page
title: "Q192301: HOWTO: Use GENHTML to Create HTML from a Visual FoxPro Screen"
permalink: /kb/192/Q192301/
---

## Q192301: HOWTO: Use GENHTML to Create HTML from a Visual FoxPro Screen

{% raw %}

	Article: Q192301
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Genhtml.prg is a Hypertext Markup Language (HTML) generation program that
	ships with Visual FoxPro 6.0. When executed, the Genhtml.prg creates a text file
	that contains a hypertext markup language version of a form, menu, report, or
	table. The Genhtml.prg executes when the "Save as HTML" option is selected from
	the File menu.
	
	This article shows two methods of using GENHTML to create an HTML file from a
	Visual FoxPro form.
	
	MORE INFORMATION
	================
	
	1. Create a program file named "Htmlscx.prg", using the following code:
	
	        * Trap Status of Safety.
	        SafetyStatus=SET('SAFETY')
	        SET SAFETY OFF
	        Example=CREATEOBJECT('FORM')
	        Example.TOP=0
	        Example.LEFT=0
	        Example.NAME='EXAMPLE'
	        Example.AUTOCENTER=.T.
	        Example.VISIBLE=.T.
	        Example.SCALEMODE=3
	        Example.HEIGHT=150
	        Example.WIDTH=375
	        Example.FontName="Courier New"
	        Example.FontSize=10
	        * Add A label.
	        Example.ADDOBJECT('Label1','Label')
	        WITH Example.Label1
	           .TOP=6
	           .LEFT=25
	           .CAPTION="TextBox Control"
	           .AUTOSIZE=.T.
	           .FONTNAME="Courier New"
	           .FONTSIZE=10
	        ENDWITH
	        * Add a text box control.
	        Example.ADDOBJECT('Text1','textbox')
	        WITH Example.Text1
	           .TOP=24
	           .LEFT=25
	           .WIDTH=100
	           .HEIGHT=25
	           .VISIBLE=.T.
	           .FONTNAME="Courier New"
	           .FONTSIZE=10
	        ENDWITH
	        * Add an option group control.
	        Example.ADDOBJECT('Option1','OptionGroup')
	        WITH Example.Option1
	           .TOP=24
	           .LEFT=250
	           .WIDTH=100
	           .HEIGHT=45
	           .VISIBLE=.T.
	           .BUTTONCOUNT=2
	        ENDWITH
	        * Add an edit box control.
	        Example.ADDOBJECT('Edit1','Editbox')
	        WITH Example.Edit1
	           .TOP=74
	           .LEFT=25
	           .WIDTH=100
	           .HEIGHT=50
	           .VISIBLE=.T.
	           .FONTNAME="Courier New"
	           .FONTSIZE=10
	        ENDWITH
	        * Add a check box control.
	        Example.ADDOBJECT('Check1','CheckBox')
	        WITH Example.Check1
	           .TOP=74
	           .LEFT=250
	           .WIDTH=100
	           .HEIGHT=50
	           .VISIBLE=.T.
	           .AUTOSIZE=.T.
	           .CAPTION="CheckBox Control"
	           .FONTNAME="Courier New"
	           .FONTSIZE=10
	        ENDWITH
	        * Add a command group.
	        Example.ADDOBJECT('Command1','CommandGroup')
	        WITH Example.Command1
	           .TOP=148
	           .LEFT=25
	           .WIDTH=100
	           .HEIGHT=45
	           .VISIBLE=.T.
	           .BUTTONCOUNT=3
	           .AUTOSIZE=.T.
	        ENDWITH
	        * save the form
	        Example.SAVEAS(STRTRAN('EXAMPLE','DBF','SCX'))
	        RELEASE WINDOW Example
	        FLUSH
	        MODI FORM (STRTRAN('EXAMPLE','DBF','SCX')) NOWAIT SAVE
	        CLOSE ALL
	        * Generate the HTML from the form file.
	        DO (_GENHTML) WITH "EXAMPLEA","EXAMPLE.SCX"
	        CLOSE ALL
	        * Instantiate another form
	        Example=CREATEOBJECT('MYFORM')
	        Example.SHOW
	        * Generate HTML from the form
	        DO (_GENHTML) WITH "EXAMPLEB",Example
	        PUBLIC ohyperlinkobject
	        * Create a form with a hyperlink to the sample file
	        ohyperlinkobject=NEWOBJECT('hyperform',HOME()+"ffc\_hyperlink.vcx")
	        ohyperlinkobject.SHOW
	        SET SAFETY &SafetyStatus
	
	        DEFINE CLASS MYFORM AS FORM
	           TOP        = 0
	           LEFT       = 0
	           NAME       = 'EXAMPLE'
	           AUTOCENTER = .T.
	           VISIBLE    = .T.
	           SCALEMODE  = 3
	           HEIGHT     = 206
	           WIDTH      = 405
	           FONTNAME   = "Courier New"
	           FONTSIZE   = 10
	
	           ADD OBJECT 'Label1' AS 'Label' WITH ;
	              TOP=6, ;
	              LEFT=25, ;
	              CAPTION="Label", ;
	              AUTOSIZE=.T., ;
	              FONTNAME="Courier New", ;
	              FONTSIZE=10
	
	           ADD OBJECT 'Text1' AS 'textbox' WITH ;
	              TOP=24, ;
	              LEFT=25, ;
	              WIDTH=100, ;
	              HEIGHT=25, ;
	              VISIBLE=.T., ;
	              FONTNAME="Courier New", ;
	              FONTSIZE=10
	
	           ADD OBJECT 'Option1' AS 'OptionGroup' WITH ;
	              TOP=24, ;
	              LEFT=250, ;
	              WIDTH=100, ;
	              HEIGHT=45, ;
	              VISIBLE=.T., ;
	              BUTTONCOUNT=2
	
	           ADD OBJECT 'Edit1' AS 'Editbox' WITH ;
	              TOP=74, ;
	              LEFT=25, ;
	              WIDTH=100, ;
	              HEIGHT=50, ;
	              VISIBLE=.T., ;
	              FONTNAME="Courier New", ;
	              FONTSIZE=10
	
	           ADD OBJECT 'Check1' AS 'CheckBox' WITH ;
	              TOP=74, ;
	              LEFT=250, ;
	              WIDTH=100, ;
	              HEIGHT=50, ;
	              VISIBLE=.T., ;
	              AUTOSIZE=.T., ;
	              CAPTION="CheckBox Control", ;
	              FONTNAME="Courier New", ;
	              FONTSIZE=10
	
	           ADD OBJECT 'Command1' AS 'CommandGroup' WITH ;
	              TOP=148, ;
	              LEFT=25, ;
	              WIDTH=100, ;
	              HEIGHT=45, ;
	              VISIBLE=.T., ;
	              BUTTONCOUNT=3, ;
	              AUTOSIZE=.T.
	
	        ENDDEFINE
	
	        DEFINE CLASS hyperform AS FORM
	           TOP      = 0
	           LEFT     = 0
	           HEIGHT   = 100
	           WIDTH    = 250
	           DOCREATE = .T.
	           CAPTION  = "Display Example Screens"
	           NAME     = "Form1"
	           SHOWTIPS = .T.
	
	           ADD OBJECT _hyperlinklabel1 AS _hyperlinklabel WITH ;
	              LEFT       = 25, ;
	              TOP        = 10, ;
	              HEIGHT     = 25, ;
	              VISIBLE    = .T., ;
	              FONTNAME   = "Times New Roman", ;
	              FONTSIZE   = 14, ;
	              FONTITALIC = .T., ;
	              AUTOSIZE   = .T., ;
	              ctarget    = sys(5)+sys(2003)+"\EXAMPLEA.HTM", ;
	              CAPTION    = "Example Screen A", ;
	              lnewwindow = .T., ;
	              NAME       = "_HYPERLINKLABEL1"
	
	           ADD OBJECT _hyperlinklabel2 AS _hyperlinklabel WITH ;
	              LEFT       = 25, ;
	              TOP        = 60, ;
	              HEIGHT     = 25, ;
	              VISIBLE    = .T., ;
	              FONTNAME   = "Times New Roman", ;
	              FONTSIZE   = 14, ;
	              FONTITALIC = .T., ;
	              AUTOSIZE   = .T., ;
	              ctarget    = sys(5)+sys(2003)+"\EXAMPLEB.HTM", ;
	              CAPTION    = "Example Screen B", ;
	              lnewwindow = .T., ;
	              NAME       = "_HYPERLINKLABEL2"
	
	        ENDDEFINE
	
	2. When the Form captioned "Display Example Screens" appears, click the
	  hyperlink labels to launch the Internet Browser and display the HTML
	  generated by GENHTML.
	
	Please note that some controls, such as the option group, check box, list box,
	command buttons and spinners may not look or function as they would in Visual
	FoxPro. If you use a proportional font in the form, then some controls may
	overlap others when displayed in the Internet Browser. To provide functionality
	to these controls, you need to add Visual Basic or JavaScript code.
	
	REFERENCES
	==========
	
	Visual FoxPro 6.0 Books Online: Programmer's Guide; Chapter 13 Compiling an
	Application.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q185657 HOWTO: Utilize the Hyperlink Foundation Class
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words: kbVFp kbhtml kbXBase kbMiscTools
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
