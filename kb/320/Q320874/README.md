---
layout: page
title: "Q320874: PRB: Page Numbers Not Incremented in a Maximized Preview Window"
permalink: /kb/320/Q320874/
---

## Q320874: PRB: Page Numbers Not Incremented in a Maximized Preview Window

{% raw %}

	Article: Q320874
	Product(s): Microsoft FoxPro
	Version(s): 6.0,7.0
	Operating System(s): 
	Keyword(s): kbReportWriter kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you preview a report form that was created in Visual FoxPro 6.0 or 7.0, the
	page numbers that appear in the title bar may not be incremented when you use
	the navigation buttons in the report preview toolbar to move through the report.
	This behavior occurs on Microsoft Windows XP-based computers. This behavior
	occurs in the Visual FoxPro development environment and in compiled Visual
	FoxPro programs.
	
	
	RESOLUTION
	==========
	
	To work around this behavior, use any of the following methods:
	
	- Turn off visual themes for the Visual FoxPro program (if the behavior occurs
	  in the development environment) or in your program file (if the behavior
	  occurs in a distributable program file).
	
	For additional information about how to turn off visual themes, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q292533 HOW TO: Use Windows Program Compatibility Mode in Windows XP
	
	- Preview the report in a window that is not maximized. If the report preview
	  window is not maximized, the page number is incremented properly.
	
	- Place the report preview window in a window that you define. The following
	  sample code creates a window and previews the report full-screen in the
	  defined window:
	
	  PUBLIC ofrmPreview
	       ofrmPreview = NEWOBJECT("PreviewForm")
	          ** Replace "Report1" with the name of your report (.frx) file.
	       REPORT FORM Report1 PREVIEW WINDOW "PreviewForm" NOCONSOLE
	       RELEASE ofrmPreview
	       
	  DEFINE CLASS PreviewForm AS FORM
	       HEIGHT = _SCREEN.Height
	       WIDTH = _SCREEN.Width
	       CAPTION = ""
	       MAXBUTTON = .F.
	       NAME = "PreviewForm"
	  ENDDEFINE
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Type the following command in a command window:
	
	  report form home(2)+"tastrade\reports\listcust.frx" preview
	
	2. Maximize the report.
	
	3. On the report preview toolbar, click Next several times. The page number that
	  appears in the title bar is not incremented.
	
	Additional query words: professional home
	
	======================================================================
	Keywords          : kbReportWriter kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP700
	Version           : :6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
