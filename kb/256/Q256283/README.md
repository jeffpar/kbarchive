---
layout: page
title: "Q256283: Error Message: The Pipe Has Ended"
permalink: /kb/256/Q256283/
---

## Q256283: Error Message: The Pipe Has Ended

{% raw %}

	Article: Q256283
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose full or summary hit highlighting for one of your search results,
	you may receive the following error message:
	
	  The pipe has ended
	
	CAUSE
	=====
	
	This error message occurs if the document you are trying to run hit highlighting
	against is located on a virtual root that points to a UNC path on another
	computer. By default, the folder that contains the hit highlighting code
	(Inetpub/Iissamples/Issamples/Oop) is set to run out of process. When it id run
	out of process, it cannot access data on remote computers.
	
	RESOLUTION
	==========
	
	To resolve this issue, perform the following steps:
	
	1. In the IIS Microsoft Management Console (MMC), locate the Web site that the
	  search is under.
	
	2. Right-click the Inetpub/Iissamples/Issamples/Oop folder, and then click
	  Properties.
	
	3. On the Directory tab, click to uncheck the Run in separate memory space
	  (isolated process) check box.
	
	The folder will now execute in process and allow the hit highlighting code to
	successfully work on data that is on virtual roots pointing to UNC shares.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : winnt:2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
