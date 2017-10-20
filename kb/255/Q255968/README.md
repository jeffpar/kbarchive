---
layout: page
title: "Q255968: Viaserver.exe Starts and Runs When Viacompact Is Running"
permalink: /kb/255/Q255968/
---

## Q255968: Viaserver.exe Starts and Runs When Viacompact Is Running

{% raw %}

	Article: Q255968
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 07-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Viacompact is running and Viaserver is started as either a service or
	manually before Viacompact has finished the compact operation, Viacompact
	continues to run even after Viaserver has started successfully. The Genlog file
	reports that the compact operation completed successfully.
	
	CAUSE
	=====
	
	Viaserver does not detect that an occurrence of Viacompact is running.
	
	RESOLUTION
	==========
	
	Ensure that Viaserver does not begin running until Viacompact is finished.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
