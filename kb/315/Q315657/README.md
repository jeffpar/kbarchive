---
layout: page
title: "Q315657: HOW TO: Print the Contents of a WebBrowser Control"
permalink: /kb/315/Q315657/
---

## Q315657: HOW TO: Print the Contents of a WebBrowser Control

{% raw %}

	Article: Q315657
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5,5.5,6.0
	Operating System(s): 
	Keyword(s): kbPrinting kbAudDeveloper kbHOWTOmaster
	Last Modified: 22-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Internet Explorer versions 5, 5.5 for Windows 2000 
	- Microsoft Internet Explorer versions 4.0, 5, 5.5 for Windows 98 
	- Microsoft Internet Explorer version 5.5 for Windows Millennium Edition 
	- Microsoft Internet Explorer version 4.0 for Windows 95 
	- Microsoft Internet Explorer version 4.0 for Windows 3.1 
	- Microsoft Internet Explorer versions 4.0, 5 for Windows NT 4.0 
	- Microsoft Internet Explorer versions 4.0, 5 for Macintosh 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- Embedding a WebBrowser Control in a Visual Basic Form
	- Printing from the WebBrowser Control
	- Troubleshooting
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This article describes how to print the contents of an HTML document if the HTML
	control is embedded in a Visual Basic application by using the WebBrowser
	control.
	
	Requirements
	------------
	
	The following items describe the recommended hardware, software, network
	infrastructure, skills and knowledge, and service packs that you will need.
	
	- Internet Explorer 4.0 or later
	
	- A working knowledge of Visual Basic 6.0 application development for Windows
	
	Embedding a WebBrowser Control in a Visual Basic Form
	-----------------------------------------------------
	
	1. Start the Visual Basic 6.0 development environment, and then create a new
	  Standard EXE project.
	
	2. On the Project menu, click Components. Select the Microsoft Internet Controls
	  check box, and then click OK to add it to the toolbox.
	
	3. Use the new icon in the toolbox to create a control named WebBrowser1 on
	  Form1.
	
	4. On the View menu, click Code.
	
	5. Add the following code to the form to load an URL into the browser when the
	  program starts. The actual URL is not significant in this example; replace it
	  with any valid URL that you want to use:
	
	  Private Sub Form_Load()
	      WebBrowser1.Navigate2 "http://www.microsoft.com"
	  End Sub
	
	6. Run the project. The WebBrowser control appears in the form and displays the
	  Web page that you specified as the first parameter for the Navigate2 method.
	
	Printing from the WebBrowser Control
	------------------------------------
	
	1. Add a command button named Command1 to the form.
	
	2. Double-click Command1 to add a click event handler. Edit the code as follows:
	
	  Private Sub Command1_Click()
	      WebBrowser1.ExecWB OLECMDID_PRINT, _
	          OLECMDEXECOPT_PROMPTUSER, _
	          0, 0 
	  End Sub
	
	3. Run the project. After the Web page has been loaded, click Command1. A dialog
	  box appears with printer options. Click the appropriate printer, and then
	  click OK. The document in the WebBrowser control is printed.
	
	4. If you do not want the dialog box to appear, change the second parameter of
	  the ExecWB call to OLECMDEXECOPT_DONTPROMPTUSER. This causes the document to
	  be sent to the printer without further user intervention. However, printing
	  without prompting the user is not supported on Internet Explorer 5 (see the
	  "Troubleshooting" section in this article).
	
	Troubleshooting
	---------------
	
	If you use the OLECMDEXECOPT_PROMPTUSER option, it is not possible to determine
	whether the user clicked OK to print the document or Cancel to cancel printing.
	Internet Explorer 4.0 supports both OLECMDEXECOPT_PROMPTUSER and
	OLECMDEXECOPT_DONTPROMPTUSER. However, OLECMDID_DONTPROMPTUSER is ignored in
	Internet Explorer 5, because printing is considered to be a security issue; a
	Web page should not have the ability to start a print job without confirmation
	from the user. In Internet Explorer 5.5 and later, the print job is completed
	without user confirmation.
	
	REFERENCES
	==========
	
	For more information about printing with the WebBrowser control, see the
	following MSDN article:
	
	  Printing with the Internet Explorer WebBrowser Control
	  (http://msdn.microsoft.com/workshop/browser/wb_print.asp)
	
	ExecWB is supported in Internet Explorer 4.0 and later, but it is not supported
	in Internet Explorer 3.0. For additional information about printing in Internet
	Explorer 3.0, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q156732 HOWTO: Print from the Microsoft WebBrowser Control
	
	Additional query words:
	
	======================================================================
	Keywords          : kbPrinting kbAudDeveloper kbHOWTOmaster 
	Technology        : kbHWMAC kbOSMAC kbVBSearch kbIEsearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbIENT400Search kbIE95Search kbIE310Search kbIEMacSearch kbIE500Search kbIEWinMESearch kbZNotKeyword3 kbIE2000Search kbIE98Search kbIE400Mac kbIE500Mac kbIE500Win2000 kbIE550Win2000 kbIE400Win310 kbIE400Win95 kbIE400Win98 kbIE500Win98 kbIE550Win98 kbIE550WinME kbIE400WinNT400 kbIE500WinNT400 kbZnotKeyword7 kbIE550Search
	Version           : :4.0,5,5.5,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
