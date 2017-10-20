---
layout: page
title: "Q238382: W3C Log File Format May Contain Spaces in CS-Username Field"
permalink: /kb/238/Q238382/
---

## Q238382: W3C Log File Format May Contain Spaces in CS-Username Field

{% raw %}

	Article: Q238382
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbiis400
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications which use the IIS log files in W3C format may produce errors or
	incorrect reports. This may be observed as parsing, or similar errors being
	encountered during processing.
	
	CAUSE
	=====
	
	The Windows NT SAM will permit user accounts that contain spaces in the name
	such as "JOE BLOGGS". When IIS creates the log file entry for an access to the
	site with this account, it does not delimit the cs-username field with quotes.
	As the W3C log is delimited by spaces, this can cause problems for applications,
	such as Site Server - Usage Analysis, which process these log files.
	
	WORKAROUND
	==========
	
	Make sure that user accounts used for Web authentication do not contain spaces
	in the username.
	
	If this is not be possible, then the log fie will need to be pre-processed to
	delimit the cs-username field before log file analysis can be performed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbiis400 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
