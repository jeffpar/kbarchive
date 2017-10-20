---
layout: page
title: "Q191174: HOWTO: Create a Custom HTML Help Viewer in Visual FoxPro"
permalink: /kb/191/Q191174/
---

## Q191174: HOWTO: Create a Custom HTML Help Viewer in Visual FoxPro

{% raw %}

	Article: Q191174
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbcode kbHTMLHelp kbvfp600
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how you can create a custom HTML help viewer with Visual
	FoxPro.
	
	With an understanding of how HTML help URL syntax works combined with the
	Microsoft WebBrowser control, it is possible to create a relatively simple form
	in Visual FoxPro that functions as an HTML help viewer.
	
	MORE INFORMATION
	================
	
	HTML help files are stored as compressed HTML source in .chm files. Specifically
	for Visual FoxPro, this file is called FoxHelp.chm, and it contains all of the
	HTML source and images for the Visual FoxPro help topics. Since the Visual
	FoxPro help is based on HTML, it can be viewed in Internet Explorer much like
	any other HTML document. The following code uses the Visual FoxPro HyperLink
	baseclass to launch Internet Explorer and display the main Visual FoxPro help
	topic:
	
	     oMyHyperLink = NewObject("Hyperlink")
	     cHelpPath = substr(Home(5), 1, Len(Home(5))-8)
	     cVFPHelpTopicPath = "mk:@MSITStore:" + cHelpPath + ;
	         "FOXHELP.CHM::/html/vfpstartpage.htm"
	     oMyHyperLink.NavigateTo(cVFPHelpTopicPath)
	
	The following sample code creates a form that contains the Microsoft WebBrowser
	control, and it automatically navigates to the Visual FoxPro help topic when it
	is launched. This form does not provide any navigation capabilities outside of
	those offered within the help topic. However, using the WebBrowser control's
	extensive object model, it is possible to provide this functionality.
	
	Sample Code
	
	     PUBLIC oMyHelpViewer
	
	     oMyHelpViewer = NewObject("myhtmlhelpviewer")
	     oMyHelpViewer.Show
	
	     DEFINE CLASS myhtmlhelpviewer AS form
	        Top = 0
	        Left = 0
	        Height = 454
	        Width = 633
	        DoCreate = .T.
	        BorderStyle = 2
	        Caption = "Custom HTML Help Viewer"
	        MaxButton = .F.
	        WindowState = 0
	        Name = "Form1"
	
	        ADD OBJECT olecontrol1 AS olecontrol WITH ;
	           Top = 10, ;
	           Left = 16, ;
	           Height = 433, ;
	           Width = 601, ;
	           Name = "Olecontrol1", ;
	           OLEClass = "Shell.Explorer.2"
	
	        PROCEDURE olecontrol1.Refresh
	           NODEFAULT
	        ENDPROC
	
	        PROCEDURE olecontrol1.Init
	           cHelpPath = SubSTR(Home(5), 1, Len(Home(5))-8)
	           cVFPHelpTopicPath = "mk:@MSITStore:" + cHelpPath + ;
	                  "FOXHELP.CHM::/html/vfpstartpage.htm"
	           This.Navigate(cVFPHelpTopicPath)
	        ENDPROC
	     ENDDEFINE
	
	It is important to recognize that although this HTML help viewer allows you to
	view HTML help topics, it will not provide all of the features and functionality
	that the Microsoft HTML Help Viewer provides, and there are certain HTML help
	features that will not work at all when viewing help topics using the WebBrowser
	control.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbHTMLHelp kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
