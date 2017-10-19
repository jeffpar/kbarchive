---
layout: page
title: "Q233459: MSBP: Wizard Interview Files Are Replaced Without Warning"
permalink: /kb/233/Q233459/
---

## Q233459: MSBP: Wizard Interview Files Are Replaced Without Warning

	Article: Q233459
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbtool kbui kbimu
	Last Modified: 04-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Business Planner 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Save Plan As on the File menu in Microsoft Business Planner, you
	may overwrite a previously saved wizard interview file without being prompted to
	replace the existing file.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- You type a file name that contains one or two periods.
	
	- The file name is identical to a previously saved wizard interview file.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, do not type a file name that contains one
	or two periods.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Business Planner.
	
	Additional query words: msbp deleted lost writes over
	
	======================================================================
	Keywords          : kbtool kbui kbimu 
	Technology        : kbHomeMMsearch kbBusPlanner
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
