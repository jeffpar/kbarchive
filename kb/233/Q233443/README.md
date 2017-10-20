---
layout: page
title: "Q233443: Business Planner: Data Is Deleted from Field in Wizard Interview"
permalink: /kb/233/Q233443/
---

## Q233443: Business Planner: Data Is Deleted from Field in Wizard Interview

{% raw %}

	Article: Q233443
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbtool kbui kbimu
	Last Modified: 27-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Business Planner 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type or paste data into a wizard interview in Microsoft Business
	Planner, some of the data may be deleted.
	
	CAUSE
	=====
	
	This behavior occurs if the following conditions are true:
	
	- The field is limited to one line of text.
	
	- The typed or pasted data does not fit within the visible area of the field.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, do not type or paste more data into the
	wizard interview than can fit within the visible area of the field.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Business Planner.
	
	MORE INFORMATION
	================
	
	Fields limited to one line of text are placed next to questions that do not
	require long answers.
	
	Questions that may require longer answers are placed next to fields that can
	store more than one line of text. Because you can scroll through these fields,
	you can type or paste more data than can fit within the visible area of the
	field.
	
	Additional query words: msbp cut off truncated lost
	
	======================================================================
	Keywords          : kbtool kbui kbimu 
	Technology        : kbHomeMMsearch kbBusPlanner
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
