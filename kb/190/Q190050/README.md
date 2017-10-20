---
layout: page
title: "Q190050: PRB: BuildFile Property of DHTML Application Is Missing"
permalink: /kb/190/Q190050/
---

## Q190050: PRB: BuildFile Property of DHTML Application Is Missing

{% raw %}

	Article: Q190050
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0;
	Operating System(s): 
	Keyword(s): kbInternet kbOSWinNT kbPageDesigner kbVBp600 kbOSWin
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are creating a silent build of a DHTML application, you get a dialog
	box that prompts you for the BuildFile. The .htm file from your DHTML
	application is not included in the package of the Package and Deployment Wizard
	by default.
	
	CAUSE
	=====
	
	No value is entered in the BuildFile property of your DHTML application.
	
	RESOLUTION
	==========
	
	By default, the BuildFile property is set to the value of the SourceFile
	property. The SourceFile Property is null if you select "Save HTML inside the VB
	Project" in the .DHTMLPage Properties dialog box. As a result, the BuildFile
	property is null by default. You need to select "Save HTML in an external file"
	in the .DHTMLPage Properties dialog box to set the SourceFile Property, which
	sets the BuildFile property. Make sure you set the BuildFile property, and
	always enter a fully qualified path.
	
	NOTE: You want to store your page as an external .html file. The DHTML Page
	designer has some editing limitations. If you do not store your page as an
	external .html file, you will not be able to use an external editor on this
	page.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information on the DHTML Page Designer, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q190249 INFO: VB 6.0 Readme Part 9: DHTML Page Designer Issues
	
	Additional query words:
	
	======================================================================
	Keywords          : kbInternet kbOSWinNT kbPageDesigner kbVBp600 kbOSWin 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0;
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
