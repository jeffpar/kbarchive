---
layout: page
title: "Q130163: PRB: Remove Button Won't Delete Stored Procedure in Proj Mgr"
permalink: /kb/130/Q130163/
---

## Q130163: PRB: Remove Button Won't Delete Stored Procedure in Proj Mgr

{% raw %}

	Article: Q130163
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While in the Visual FoxPro Project Manager, you can view or modify a database's
	stored procedures, but you can't delete it. With a stored procedure selected,
	clicking the Remove button opens the stored procedure for editing rather than
	removing the item from the project.
	
	CAUSE
	=====
	
	Stored Procedures must be deleted manually by the user. Visual FoxPro is unable
	to delete a procedure.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project, and add a database that contains stored procedures.
	
	2. Within the Project Manager, select the Data tab, select databases, open the
	  desired database, and open the Stored Procedures.
	
	3. Highlight the stored procedure, and click the Remove button.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
