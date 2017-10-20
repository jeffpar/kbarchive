---
layout: page
title: "Q315988: HOW TO: Use HTML Help from Visual Basic 6.0"
permalink: /kb/315/Q315988/
---

## Q315988: HOW TO: Use HTML Help from Visual Basic 6.0

{% raw %}

	Article: Q315988
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAPI kbHTMLHelp130 kbAudDeveloper kbHOWTOmaster
	Last Modified: 10-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	
	- SUMMARY
	
	   - Requirements
	- Create a Hypertext Markup Language (HTML) Help File
	- Validate the Help File
	- Create a Visual Basic Application that Uses the Help File
	- Verify That It Works
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This article describes how to call HTML Help from a Visual Basic 6.0
	application.
	
	The principal entry point for HTMLHelp operations in Microsoft Visual Basic is
	the HTMLHelp function. This application programming interface (API) function is
	declared as follows:
	
	Private Declare Function HTMLHelp Lib "HHCtrl.ocx" Alias "HTMLHelpA" _
	   (ByVal hWndCaller As Long, _
	    ByVal pszFile As String, _
	    ByVal uCommand As Long, _
	    dwData As Any) As Long
	
	The first parameter represents a parent window for your application. The second
	parameter is the name of the compiled (.chm) file that contains the help data.
	The third parameter is a value that represents an HTMLHelp command. The fourth
	parameter is additional data, the value and format of which depends on the
	HTMLHelp command.
	
	NOTE: The fourth parameter is declared "As Any" (without quotation marks). The
	actual type of data that must be supplied depends on the HTMLHelp command that
	is being used. Be careful to pass the appropriate data values for whichever
	HTMLHelp command you are using. The sample program in this article demonstrates
	how to use some of these HTMLHelp commands.
	
	Requirements
	------------
	
	The following items describe the recommended hardware, software, network
	infrastructure, skills and knowledge and service packs you will need.
	
	- HTML Help 1.3
	
	Prior Knowledge required:
	
	- You should have knowledge of Visual Basic development.
	
	Create an HTML Help File
	------------------------
	
	1. Click Start, point to Programs, and then click HTML Help Workshop two times
	  to start HTML Help Workshop.
	
	2. On the File menu, click New.
	
	3. In the New dialog box, click Project, and then click OK. The New Project
	  wizard starts.
	
	4. Follow these steps in the New Project Wizard:
	
	  a. In the first dialog box, press Next.
	
	  b. In the Destination dialog box, enter the folder and file name for the help
	     project, and then click Next. The following folder and file name are
	     examples:
	
	  C:\Documents and Settings\<your user name>\My
	  Documents\HHDemo\HHDemo.hhp
	
	  c. In the Existing Files dialog box, press Next.
	
	  d. Click Finish to create a blank project.
	
	5. On the File menu, click New.
	
	6. In the New dialog box, click HTML File, type "Default" (without the quotation
	  marks) for the title, click OK, type Default between the <BODY> and
	  </BODY> tags, and then save this file as Default.htm.
	
	7. On the File menu, click New.
	
	8. In the New dialog box, click HTML File, type "Sample Topic" (without the
	  quotation marks) for the title, click OK, type Sample Topic between the
	  <BODY> and </BODY> tags, and then save this file as Sample.htm.
	
	9. On the left toolbar in the HTML Help Workshop window, click Add/Remove topic
	  files.
	
	10. Click Add, browse for both the Default.htm file and the Sample.htm file in
	  the file selection dialog box, click Open, and then click OK. The two files
	  are now listed in the Files section at the left of the HTML Help Workshop
	  window.
	
	11. Open a text editor, such as Notepad, and then type the following context
	  IDs:
	
	  #define DEFAULT 100
	  #define SAMPLE 101
	
	  Save the file as Map.h in the same folder as the other HTMLHelp project files
	  that you have created.
	
	12. On the left toolbar in the HTML Help Workshop window HTML Help Workshop,
	  click "HtmlHelp API information", click Header File, type the file name
	  "Map.h" (without the quotation marks), and then click OK two times.
	
	13. On the File menu, click Save All Files.
	
	14. On the File menu, click Compile.
	
	15. In the "Create a compiled file" dialog box, click Compile. This creates a
	  compiled HTML help file named HHDemo.chm.
	
	Validate the Help File
	----------------------
	
	1. Open the HHDemo.chm file in Microsoft Windows Explorer.
	
	2. When the HTMLHelp window opens, one of the topic pages appears.
	
	Create a Visual Basic Application that Uses the Help File
	---------------------------------------------------------
	
	1. Start a new Visual Basic 6.0 Standard EXE Project.
	
	2. Add two Command buttons to Form1. The buttons have the default names Command1
	  and Command2.
	
	3. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Declare Function HtmlHelp Lib "HHCtrl.ocx" Alias "HtmlHelpA" _
	      (ByVal hWndCaller As Long, _
	       ByVal pszFile As String, _
	       ByVal uCommand As Long, _
	       dwData As Any) As Long
	
	  Const HH_DISPLAY_TOPIC As Long = 0
	  Const HH_HELP_CONTEXT As Long = &HF
	
	  Private Sub Form_Load()
	      ChDir App.Path
	  End Sub
	
	  Private Sub Command1_Click()
	      HtmlHelp hWnd, "HHDemo.chm", HH_DISPLAY_TOPIC, ByVal "Sample.htm"
	  End Sub
	
	  Private Sub Command2_Click()
	      HtmlHelp hWnd, "HHDemo.chm", HH_HELP_CONTEXT, ByVal 100&
	  End Sub
	
	4. Save the files for this project in the same folder as the sample HTMLHelp
	  file.
	
	Verify That It Works
	--------------------
	
	1. Build and run the application.
	
	2. Click Command1. The HTMLHelp program displays the topic Sample.htm file. This
	  technique uses a search by topic name.
	
	3. Click Command2. The HTMLHelp program displays the topic Default.htm file.
	  This technique uses a search by context ID.
	
	REFERENCES
	
	For additional information about how to use HTML Help in Visual Basic, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q183434 HOWTO: Use HTML Help API in a Visual Basic Application
	
	  Q286404 HOWTO: Add HTML Help to a Visual Basic 6.0 Application Wizard App
	
	The HTML Help SDK 1.3 contains more information about the HTMLHelp function.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbHTMLHelp130 kbAudDeveloper kbHOWTOmaster 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
