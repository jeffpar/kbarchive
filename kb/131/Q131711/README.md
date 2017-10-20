---
layout: page
title: "Q131711: HOWTO: Browse a Table While Using Row Buffering in a Form"
permalink: /kb/131/Q131711/
---

## Q131711: HOWTO: Browse a Table While Using Row Buffering in a Form

{% raw %}

	Article: Q131711
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbvfp300 kbvfp500 kbvfp600
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a form uses row buffering, a table that is browsed from the Command window
	may display uncommitted changes. This article describes factors involved in
	browsing buffered data.
	
	MORE INFORMATION
	================
	
	When buffering is enabled, data is copied to a cursor. All the editing takes
	place in the cursor. With row buffering, data is committed when the record
	pointer moves, or when a TABLEUPDATE() function is issued. In particular, data
	is written to disk when a SKIP command is issued, another work area is selected,
	or the table is closed.
	
	The BufferMode property of a form determines the buffering mode if the
	BufferModeOverride property of a cursor is set to 1 (Default). If the BufferMode
	property is set to 1 or 2, any cursor used by a grid control is enabled for
	table buffering. Any other control bound to data uses row buffering. Buffering
	can also be set in the BufferModeOverride property of a cursor in the data
	environment.
	
	For example, consider a form that contains a text box control bound to a field in
	the table. If the BufferMode property is set to 2 (Optimistic), optimistic row
	buffering is enabled. If a BROWSE command is issued from the Command window
	while the form is running, the following can take place:
	
	- If the form uses a global data session, the BROWSE command and the form use
	  the same cursor. Any change made to the cursor is displayed in the Browse
	  window.
	
	- If the form uses a private data session, the BROWSE command and the form
	  might use different data. The BROWSE command when issued from the Command
	  window uses the global data session. Because two sessions are used, the table
	  is reopened and the values displayed in the Browse window are the values
	  stored in the table on disk. In this case, only committed changes are
	  displayed in the Browse window.
	
	Use the CURVAL() function to query the field values from disk. In a multiuser
	situation, use the OLDVAL() function to return the original values from disk.
	
	For more information about buffering, search for "Buffering Access to Data" in
	the Visual FoxPro Help menu.
	
	Additional query words: lan network multi-user
	
	======================================================================
	Keywords          : kbnetwork kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
