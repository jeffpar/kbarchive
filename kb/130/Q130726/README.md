---
layout: page
title: "Q130726: Some Menu Options Unavailable in Distributed Applications"
permalink: /kb/130/Q130726/
---

## Q130726: Some Menu Options Unavailable in Distributed Applications

{% raw %}

	Article: Q130726
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Professional Edition of Visual FoxPro allows developers to create executable
	files by using the Project Manager. However, several FoxPro menu options and
	their commands are restricted outside of the FoxPro environment, so they can't
	be used in a Visual FoxPro .EXE file. This article lists the non-restricted and
	restricted Visual FoxPro menu options
	
	MORE INFORMATION
	================
	
	Menu Options and Commands Available for Use in Visual FoxPro .EXE File
	----------------------------------------------------------------------
	
	The following Visual FoxPro menu options and their commands are available when
	executed from a Visual FoxPro .EXE file:
	
	Menu         Command
	File         Close
	            Save
	            Save As
	            Exit
	
	Edit         Undo
	            Redo
	            Cut
	            Copy
	            Paste
	            Paste Special
	            Select All
	            Find
	            Replace
	
	Window       Arrange All
	            Hide
	            Hide All
	            Show All
	            Clear
	            Cycle
	            all open windows
	
	Help*        Contents
	            Search for Help on
	            Technical Support
	            About Visual FoxPro
	
	* Although the Help menu option is available to distributable .EXE's, none of the
	Visual FoxPro Help Files are distributable.
	
	Menu Options Not Available for Use in Visual FoxPro .EXE File
	-------------------------------------------------------------
	
	The following menu options are unavailable outside of the Visual FoxPro
	development environment:
	
	Database
	Form
	Menu
	Program
	Project
	Query
	Table
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
