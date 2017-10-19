---
layout: page
title: "Q93619: PRB: Blank Box Where Graph Should Be in RQBE Output"
permalink: /kb/093/Q93619/
---

## Q93619: PRB: Blank Box Where Graph Should Be in RQBE Output

	Article: Q93619
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After using RQBE to create a query that sends its output to a graph, a dialog
	box containing the message "Here is your Graph" is displayed, accompanied by a
	blank box.
	
	CAUSE
	=====
	
	FoxPro cannot locate the Microsoft Graph utility using the settings currently
	listed in your WIN.INI file.
	
	RESOLUTION
	==========
	
	Use a text editor to view your WIN.INI file, which is located in your WINDOWS
	subdirectory (by default, C:\WINDOWS). In the [embedding] section, search for an
	entry such as the following:
	
	  MSGraph=Microsoft Graph,Microsoft Graph,
	  C:\Windows\msapps\MSGRAPH\graph.exe,picture
	
	NOTE: In your WIN.INI file, such entries appear on a single line.
	
	Verify that the GRAPH.EXE file exists in the path specified in this entry. If an
	MSGraph= line does not appear in your WIN.INI file, use this example as a
	template to create an entry, then specify the correct path to the Microsoft
	Graph utility.
	
	Additional query words: VFoxWin FoxWin 2.50 2.50a 2.50b 2.60 2.60a gengraph graphwizard graph wizard
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300
	Version           : WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
