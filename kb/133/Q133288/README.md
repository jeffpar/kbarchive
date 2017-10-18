---
layout: page
title: "Q133288: PRB: Codepage Does Not Show in Project Information Screen"
permalink: kb/133/Q133288/
---

## Q133288: PRB: Codepage Does Not Show in Project Information Screen

	Article: Q133288
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Codepages for free tables and databases do not show in Project Information under
	the Data tab. Codepages do show for text files.
	
	RESOLUTION
	==========
	
	To determine the codepage of a table, open the table and type ?CPDBF() in the
	Command window. The Codepage will be displayed on desktop.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	MORE INFORMATION
	================
	
	Databases are also listed in the Project Information screen without a codepage.
	However, the tables in a database are not listed.
	
	In the Project screen, using the right mouse button, click a file to bring up a
	menu with a codepage. The codepage can be selected and changed. The codepage
	choice is grayed out, when you use the right mouse button to click a table in a
	database or a free table.
	
	REFERENCES
	==========
	
	Visual FoxPro Developer's Guide, pp. 451-453, 462-463
	
	Additional query words: VFoxWin cpdialog cpzero code page international
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
