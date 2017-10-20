---
layout: page
title: "Q130663: PRB: ZAP Command Ignores Table's Delete Triggers"
permalink: /kb/130/Q130663/
---

## Q130663: PRB: ZAP Command Ignores Table's Delete Triggers

{% raw %}

	Article: Q130663
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running the ZAP command on a table does not fire (run) the table's Delete
	triggers.
	
	WORKAROUND
	==========
	
	Do not use the ZAP command on a table that has Delete Triggers unless you plan
	on also using the ZAP command on any related table.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a table that has Delete triggers.
	
	2. Copy the table to a backup .DBF file by using the COPY TO command.
	
	3. Use the ZAP command on the table. The table's Delete triggers do not fire.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
