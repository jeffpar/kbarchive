---
layout: page
title: "Q250486: Running a Management Agent for a Limited Number of Entries"
permalink: /kb/250/Q250486/
---

## Q250486: Running a Management Agent for a Limited Number of Entries

{% raw %}

	Article: Q250486
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Generally, when you run a Management Agent (MA), you do not want to limit the
	maximum number of entries the MA can process. However, in certain circumstances,
	it may be necessary. For example, you may want test a construction template when
	you are writing a custom MA. Another example might be troubleshooting a problem
	with an MA by increasing the logging level, but you want to limit the output you
	receive.
	
	MORE INFORMATION
	================
	
	To limit the number of entries processed when you run an MA:
	
	1. Click Bookmarks in the list.
	
	2. Click Management Agents.
	
	3. Click the MA you want to run.
	
	4. Click Operate MA, click the Operational Settings tab, and then click the
	  Limits tab.
	
	5. In the "Process Maximum of" text box, type "5" (without the quotation marks).
	
	6. Under Tasks To Run, click the appropriate check boxes.
	
	7. Under Type Of Objects To Process, verify that only the Process Users check
	  box is selected.
	
	8. Click Run Management Agent.
	
	
	Additional query words: mms zoomit via
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
