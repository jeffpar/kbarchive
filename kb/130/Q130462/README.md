---
layout: page
title: "Q130462: INFO: Difference Between REQUERY and REFRESH in Visual FoxPro"
permalink: /kb/130/Q130462/
---

## Q130462: INFO: Difference Between REQUERY and REFRESH in Visual FoxPro

{% raw %}

	Article: Q130462
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the differences in functionality between two new functions -
	REQUERY() and REFRESH() - in Visual FoxPro.
	
	MORE INFORMATION
	================
	
	REQUERY()
	---------
	
	- Retrieves data again for a SQL view.
	
	- Throws out the current cursor and starts over, possibly with new parameters.
	
	- Pulls in all rows.
	
	- Returns 1 if data is successfully retrieved; otherwise, it returns 0.
	
	- Is typically used to refresh a SQL view when data has changed on the data
	  source.
	
	REFRESH()
	---------
	
	- Refreshes data in an updatable SQL view. It goes back to the server and gets
	  new values for any rows that you haven't edited in a buffered view. (It also
	  caches an image of the rows you have been editing, but it doesn't force these
	  values over the top of your changes.)
	
	- Is helpful for checking to see whether other users have changed data while
	  you've been buffering.
	
	- Takes an optional parameter to specify what rows to update, so you can grab
	  just the ones that are currently on the user's screen, for example.
	
	- Is a necessary precursor to issuing CURVAL() for remote data.
	
	- Returns the number of records refreshed. The records are refreshed with data
	  from the tables from which the SQL view is created. Records are refreshed in
	  the SQL view open in the currently selected work area.
	
	- Cannot refresh locked or buffered records, and the records refreshed must
	  have unique primary keys. If a record in a table does not have a primary key
	  value, the corresponding record in the SQL view is marked for deletion.
	
	REFERENCES
	==========
	
	For more information about REQUERY() and REFRESH(), search for the "REQUERY()
	function" and "REFRESH() function" topics in the Visual FoxPro Help menu.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
