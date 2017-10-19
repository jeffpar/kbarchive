---
layout: page
title: "Q126703: PRB: &quot;Cannot Access Selected Table&quot; in Query Designer or RQBE"
permalink: /kb/126/Q126703/
---

## Q126703: PRB: &quot;Cannot Access Selected Table&quot; in Query Designer or RQBE

	Article: Q126703
	Product(s): Microsoft FoxPro
	Version(s): Win:2.6x,3.0
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Visual FoxPro Query Designer query, or a FoxPro 2.x RQBE query is based
	on an underlying table that is closed while the query is still open in the RQBE
	power tool, FoxPro fails and returns this error message:
	
	  Cannot access selected table.
	
	WORKAROUND
	==========
	
	Do not close the table on which the query is based while you are in the the
	Query Designer or RQBE power tool.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior in FoxPro 2.x
	-----------------------------------------
	
	1. Use the SYS(2004)+"\TUTORIAL\CUSTOMER" database.
	
	2. In the Command window, type "Create Query Test."
	
	3. Click Window, View. Select the work area that the CUSTOMER table is open in.
	  Then click Close. Choose Ok.
	
	FoxPro fails and returns with the "Cannot access selected table" error message.
	
	Additional query words: errmsg err msg error 1152
	
	======================================================================
	Keywords          : kberrmsg kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300
	Version           : Win:2.6x,3.0
	
	=============================================================================
	
