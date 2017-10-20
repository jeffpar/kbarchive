---
layout: page
title: "Q137445: How to Display View and Connection Properties"
permalink: /kb/137/Q137445/
---

## Q137445: How to Display View and Connection Properties

{% raw %}

	Article: Q137445
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Use the DISPLAY DATABASE command in the Command window to display the settings
	of all View and Connection properties for saved views. You can send the same
	information to a file by using this command:
	
	     LIST DATA TO FILE <filename>
	
	MORE INFORMATION
	================
	
	On the Query menu, click View SQL to see what's happening behind the scenes when
	you make selections in four of the five tabs in the View Designer. Selections
	you make on the fifth tab (Update Criteria) change the settings of view
	properties stored in the database (.dbc) file, so they are not reflected in the
	SQL SELECT statement that defines the view.
	
	Other settings that you can set from the Query designer but not see in the SQL
	SELECT statement are connection properties set by clicking Advanced Options on
	the Query menu.
	
	To see the setting of properties for views and connections in a database, save
	the view, and then use the DISPLAY DATA command. You must save the view before
	you are able to see view or connection property settings.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
