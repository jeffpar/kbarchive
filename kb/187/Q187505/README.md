---
layout: page
title: "Q187505: Documents May Not Get Indexed Correctly"
permalink: /kb/187/Q187505/
---

## Q187505: Documents May Not Get Indexed Correctly

{% raw %}

	Article: Q187505
	Product(s): Internet Information Server
	Version(s): WINNT:1.1,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 1.1, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Index Server, it may take an extremely long time to index
	documents, and some documents may appear not to get indexed. Also, the abstract
	for documents may be blank or contain incorrect information.
	
	CAUSE
	=====
	
	This may be caused by third party software that places a lock on the Web content
	that you are attempting to index. Antivirus software programs and any other
	software that monitors or scans your Web content for extended periods of time
	have been known to cause this problem.
	
	WORKAROUND
	==========
	
	To work around this problem, disable any software that may be monitoring the Web
	content.
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110 kbIdxServ200
	Version           : WINNT:1.1,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
