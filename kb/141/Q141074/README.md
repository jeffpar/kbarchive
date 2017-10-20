---
layout: page
title: "Q141074: PRB: ErrMsg: &quot;DBC... Previously Opened Non-Exclusively&quot;"
permalink: /kb/141/Q141074/
---

## Q141074: PRB: ErrMsg: &quot;DBC... Previously Opened Non-Exclusively&quot;

{% raw %}

	Article: Q141074
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Form Wizard fails and displays this message:
	
	  The DBC containing the selected table was previously opened non-exclusively
	  and the field(s) you chose for sorting are not in an existing index tag.
	  Please select field(s) which already have an existing tag or exit the wizard
	  and reopen the DBC exclusively.
	
	This error message occurs if a field for which there is no index is selected for
	order by.
	
	CAUSE
	=====
	
	The database that the table belongs to has been opened shared and is read-only.
	
	WORKAROUND
	==========
	
	Close the database, and reopen it exclusively.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For more information about this, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q135117 PRB: Unable to Modify Tables in Database Flagged as Read-Only
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On the Tools menu, click Options. Click the Data tab, and clear the Open
	  Exclusive check box.
	
	2. Open the Tastrade database in the Samples\Data directory.
	
	3. Notice that it says "Read Only" next to the name of the database.
	
	4. Create a new form using the Form Wizard. Select the Orditems table.
	
	5. In step 3 (Sort Order) select the line_no field for which there is no index.
	
	The error occurs after the Finish button is clicked in step 4.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
