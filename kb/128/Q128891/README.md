---
layout: page
title: "Q128891: Project Info Dialog"
permalink: /kb/128/Q128891/
---

## Q128891: Project Info Dialog

{% raw %}

	Article: Q128891
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the Project Manager's Files tab and the Files tab
	capabilities (sorting, including files, excluding files, and setting Code
	Pages). You'll find the Files tab in the Project Manager's "Project Information"
	dialog.
	
	MORE INFORMATION
	================
	
	To get to the Project Manager's Files tab, open an existing project such as
	TASTRADE.PJX, which you'll find in the \VFP\SAMPLES\MAINSAMP subdirectory. Then
	either choose Project Information from the Project menu, or click the right
	mouse button anywhere over the Project Manager.
	
	The Project Information dialog is a tabbed dialog. The second Tab is the Files
	option; choose it to bring it forward. The Files dialog is a summary listing of
	all the files used by the project.
	
	In the Files tab, there are five columns titled, left to right:
	
	  Type
	  Name
	  Last Modified
	  Included
	  Code Page
	
	These columns are sizable. To size a column, place the mouse pointer (cursor) on
	the indented line that separates the two column headers. The pointer should
	change shapes to become a left and right pointing arrow. Click and hold the left
	mouse button as you drag to the left or the right. The columns will adjust
	accordingly.
	
	The columns are also sortable in either ascending or descending order. Click a
	column header to sort the column in ascending order, or hold down the CTRL key
	as you click the column header, to sort the column in descending order. The Code
	Page Column, however, is not sortable.
	
	You can also use the Files dialog to mark and unmark files for inclusion in the
	project. To do this, click the check box in the Include column or use the Right
	Mouse menu options. If a box is checked, the file will be included or compiled
	into the project.
	
	To set the Main program and Code Pages, use the Right mouse menu options. The
	Main program is shown as a solid black box in the Include column.
	
	The Code Page and Set Main options are enabled only if an appropriate file type
	is currently selected. For example, if a table is the currently selected file
	and a Right mouse click is executed, the Set Main option is not enabled.
	
	Additional query words: interface VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
