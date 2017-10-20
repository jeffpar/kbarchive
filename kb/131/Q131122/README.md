---
layout: page
title: "Q131122: INFO: Report Writer Enhancements in Visual FoxPro"
permalink: /kb/131/Q131122/
---

## Q131122: INFO: Report Writer Enhancements in Visual FoxPro

{% raw %}

	Article: Q131122
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp500 kbvfp600
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual FoxPro Report Designer has been updated to include many new features.
	These new features can be incorporated into new reports created in Visual FoxPro
	as well as into reports created in any previous version of FoxPro.
	
	The following new features have been added to the Visual FoxPro Report Designer:
	
	- Private data session
	
	- Drag and drop
	
	- On Entry and On Exit report band expressions
	
	- System toolbars
	
	- Report output to an ASCII text file
	
	MORE INFORMATION
	================
	
	Private Data Session
	--------------------
	
	By choosing Private Data Session from the Report menu, you can initialize a
	separate record pointer for the databases used in the report. This feature
	allows the report to be called from a form or program without affecting the
	record pointer for that session.
	
	Drag and Drop
	-------------
	
	As with many other areas of the Visual FoxPro interface, the Report Designer now
	supports drag and drop. Fields or entire tables can be dragged from the data
	environment and dropped on the appropriate band on the report to create the
	report expressions. Likewise, fields or tables can be dragged from the Project
	Manager to achieve the same results.
	
	On Entry and On Exit Report Band Expressions
	--------------------------------------------
	
	The report band expressions provide a way to call a user-defined function at a
	specific time while the report is running. There is an On Entry and an On Exit
	band expression for each band in the report. Each expression is called once for
	every page in the report. As expected, the On Entry executes as the report
	processing enters a particular band while the On Exit executes as the report
	processing leaves a particular band. The band expressions for a given report
	band can be accessed by double-clicking the desired band.
	
	System Toolbars
	---------------
	
	The Visual FoxPro Report Designer uses several system toolbars for creating
	reports. There are four system toolbars that relate to the Report Designer.
	
	- The Report Designer toolbar helps you to create data groupings quickly and
	  access the other three toolbars (Report Controls, Layout, and Color Palette).
	
	- The Report Controls toolbar gives you quick access to the various controls
	  that can be added to a report.
	
	- The Layout toolbar enables you to adjust the layout of the various objects on
	  the report. You can use it to center, align, and size the objects.
	
	- The Print Preview toolbar helps you navigate through the pages of a report
	  while previewing the report.
	
	These toolbars can be activated and deactivated by choosing Toolbars from the
	View menu or by right-clicking any of the system toolbars.
	
	Report Output to an ASCII text file
	-----------------------------------
	
	The REPORT FORM command has been updated to include a new ASCII clause. This
	clause, used with the TO FILE clause, can be added to the report command to send
	the output to an ASCII text file devoid of printer-specific control codes or
	escape sequences. For example:
	
	     REPORT FORM MYREPORT.FRX TO FILE MYFILE.TXT ASCII
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
