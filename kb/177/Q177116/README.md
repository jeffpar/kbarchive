---
layout: page
title: "Q177116: ODE97: How to Create Context-Sensitive Help for an MS Access DB"
permalink: kb/177/Q177116/
---

## Q177116: ODE97: How to Create Context-Sensitive Help for an MS Access DB

	Article: Q177116
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 16-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SUMMARY
	=======
	
	Context-sensitive help offers the quickest and easiest access to information
	about what a user sees on a screen. The user can find out what an item in a
	dialog box or program does just by clicking the question-mark button in the
	title bar and then clicking the item.
	
	Context-sensitive help refers to Help that a user can access while working in a
	program such as Microsoft Access, for example, while in a form or in a text
	box.
	
	This article demonstrates how to create context-sensitive help that can be
	displayed on a form when you press the F1 key. The following topics are
	discussed in this article:
	
	  A. How Context-Sensitive Help Works
	  B. Identifying Topics in a Word Processor
	  C. Using a Common Prefix for Topic IDs
	  D. Mapping Numeric Values
	  E. Compiling Your Help Topic
	  F. Creating a Sample Context-Sensitive Help File That Opens by Pressing F1
	
	MORE INFORMATION
	================
	
	A. How Context-Sensitive Help Works
	-----------------------------------
	
	To create context-sensitive help in Microsoft Access, you create topic files in a
	Word processor such as Microsoft Word, saved them out to the RTF format, and
	then map them to numeric values in the Project file. You then assign the numeric
	values to the HelpFile and HelpContextID properties in the form or control so
	that the Help topic can be linked to that object.
	
	The HelpFile property specifies the name of a custom Help file for the current
	form or report. For the HelpFile property, you enter a string expression that
	contains the path and file name of a custom Help file created with the Windows
	Help Compiler.
	
	When you press the F1 key in Form view, Microsoft Access calls the Windows Help
	application, loads the custom Help file specified by the HelpFile property
	setting for the form or report, and displays the Help topic specified by the
	HelpContextID property setting.
	
	If a control's HelpContextID property setting is 0 (the default), Microsoft
	Access uses the form's HelpContextID and HelpFile properties to identify the
	Help topic to display. If you press F1 in a view other than Form view or if the
	HelpContextID property setting for both the form and the control is 0, a
	Microsoft Access Help topic is displayed.
	
	B. Identifying Topics in a Word Processor
	-----------------------------------------
	
	When you write context-sensitive help, you first create context-sensitive Help
	Topics in your topic files. Then you map the topic IDs to numeric values in your
	Project file.
	
	C. Using a Common Prefix for Topic IDs
	--------------------------------------
	
	If you use a common prefix for your topic IDs, such as IDH_, Microsoft Help
	Workshop automatically checks that the topics mapped in your Project file
	actually exist in your Help file. It also makes sure that your context-
	sensitive Help topics are all mapped in your Project file.
	
	You can use other prefixes for your topic IDs; however, you will need to make
	sure that you specify them in your Project file. For example, if you add a topic
	ID to your topic file that is preceded with the number sign (#) as a custom
	mark, you will need to add the number sign (#) to the "Instead of IDH_, check
	these prefixes" text box in the Map dialog box in the Help Workshop Project file
	that you create for your Help Topic.
	
	D. Mapping Numeric Values
	-------------------------
	
	You can map a topic ID to any number, but the numeric values defined in a Help
	file must all be unique. You must also make sure you map the correct topic ID to
	the correct number. For example, if you create a topic ID that contains
	information about a text box on a form, and you map that topic ID to a number
	that is added to the HelpContextID property of a text box on a report, the wrong
	information will be displayed for the user when the user presses F1. You must
	also make sure that you include the correct Help file in the HelpFile property.
	
	E. Compiling Your Help Topic
	----------------------------
	
	After mapping all the Topic IDs in your topic file to the Help Context IDs of
	your database objects, you can compile your topic file into a Help file. Once
	your Project file compiles your topic files without any errors, you can open
	your database and access your Help file from any control or object that the Help
	file is mapped to.
	
	F. Creating a Sample Context-Sensitive Help File That Opens by Pressing F1
	--------------------------------------------------------------------------
	
	The following steps demonstrate how to create context-sensitive help that can be
	opened by pressing the F1 key:
	
	1. Open the sample database Northwind.mdb. Click the Tables tab, select the
	  Employees table, and on the Insert menu, click Autoform.
	
	2. Note that the form has a Title, a Notes, and a Reports To control.
	
	3. Close the form and save it as MyEmpHelp.
	
	4. Minimize Microsoft Access and open Microsoft Word. Create a new document in
	  Word and type the following information in the document:
	
	      The Title text box contains information on the Employee's job
	      title.
	
	      The Notes menu field contains information about the Employee's
	      education.
	
	      The Reports To field contains the name of the Employee's manager.
	
	5. Place a hard return before the words "The Title." Place a hard return before
	  the words "The Notes." Place a hard return before the words "The Reports To."
	
	6. Place the insertion point before the words "The Title," and on the Insert
	  menu, click Footnote.
	
	  a. In the Footnote And Endnote dialog box, under Numbering, click Custom
	     Mark.
	
	  b. In the Custom Mark text box, type "#" (without the quotation marks), and
	     then click OK.
	
	  c. In the Footnotes window at the bottom of the screen, type "MyTitleTopic"
	     (without the quotation marks), and then click Close.
	
	7. Place the insertion point before the words "The Notes," and on the Insert
	  menu, click Footnote.
	
	  a. In the Footnote And Endnote dialog box, under Numbering, click Custom
	     Mark.
	
	  b. In the Custom Mark text box, type "#" (without the quotation marks), and
	     then click OK.
	
	  c. In the Footnotes window at the bottom of the screen, type "MyNoteTopic"
	     (without the quotation marks), and then click Close.
	
	8. Place the insertion point before the words "The Reports To," and on the
	  Insert menu, click Footnote.
	
	  a. In the Footnote And Endnote dialog box, under Numbering, click Custom
	     Mark.
	
	  b. In the Custom Mark text box, type "#" (without the quotation marks), and
	     then click OK.
	
	  c. In the Footnotes window at the bottom of the screen, type
	     "MyReportsToTopic" (without the quotation marks), and then click Close.
	
	9. Close and save the file as MyHelpTopics.rtf and place it in the Program
	  Files\Help Workshop folder.
	
	10. Open Microsoft Help Workshop, and on the File menu, click New. In the New
	  dialog box, click OK to create a new Help Project. In the File name box,
	  type MyHelpTopics, and then click OK.
	
	11. In the MyHelpTopics.hpj window, click Files. In the Topic Files dialog box,
	  click Add. In the Help Workshop folder, select MyHelpTopics.rtf and click
	  Open. In the Topic Files dialog box, click OK.
	
	12. Click the Map button. In the Map dialog box, click Add.
	
	13. Type the following values in the Add Map Entry dialog box:
	
	      Topic ID          Mapped Numeric Value
	      --------          --------------------
	
	      MyTitleTopic       1200
	      MyNoteTopic        2400
	      MyReportsToTopic   3600
	
	14. In the "Instead of IDH_, check these prefixes" text box, type "#" (without
	  the quotation marks), and click OK.
	
	  Your MyHelpTopics.hpj window should look like the following:
	
	       ; This file is maintained by HCW. Do not modify this file directly.
	
	        [OPTIONS]
	
	        LCID=0X409 0X0 0X0 ; English (United States)
	        REPORT=Yes
	        PREFIX=#
	
	        [FILES]
	        MyHelpTopics.rtf
	
	        [MAP]
	        MyNoteTopic=2400
	        MyReportsToTopic=3600
	        MyTitleTopic=1200
	
	15. Click Save And Compile to compile your Help topic file.
	
	16. Copy your Help file to the Windows\Help folder.
	
	  NOTE: This step eliminates the need for adding the path to the file in the
	  HelpFile property.
	
	17. On the taskbar, click the Microsoft Access icon and open the MyEmpHelp form
	  in Design view.
	
	18. On the View menu, click Properties. In the Form Properties box, in the
	  HelpFile property, type MyHelpTopics.hlp.
	
	19. Click to set focus on the Title text box. Set the HelpContextID property to
	  1200.
	
	20. Click to set focus on the Notes memo field. Set the HelpContextID property
	  to 2400.
	
	21. Click to set focus on the Reports To control. Set the HelpContextID property
	  to 3600.
	
	22. Save the form, and open it in Form view. Click the Title control and press
	  the F1 key. The Help topic for the Title control is displayed.
	
	23. Click the Notes control and press the F1 key. The Help topic for the Notes
	  control is displayed.
	
	24. Click the Reports To control and press the F1 key again. The Help topic for
	  the Reports To control is displayed.
	
	REFERENCES
	==========
	
	For more information about creating context-sensitive help, search the Help
	Index for "context ID for Help topics," or ask the Microsoft Access 97 Office
	Assistant.
	
	Additional query words: inf 97 create
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
