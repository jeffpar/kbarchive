---
layout: page
title: "Q234284: &quot;Path not found&quot; Error Occurs When Saving Component Library"
permalink: /kb/234/Q234284/
---

## Q234284: &quot;Path not found&quot; Error Occurs When Saving Component Library

{% raw %}

	Article: Q234284
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp2
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	- Microsoft SNA Server, version 4.0SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the COM Transaction Integrator for CICS and IMS (COMTI) Component
	Builder (CB), an attempt is made to save a component library, which produces the
	following error message:
	
	  Path not found.
	
	The same error message may also be displayed when you use functions like copy,
	paste, or drag and drop.
	
	CAUSE
	=====
	
	The application seeks a directory to store temporary files it uses. It gets this
	directory by calling GetTempPath (a windows base services function). It first
	looks for a TMP environment variable, then a TEMP environment variable, and if
	neither of these is defined, GetTempPath returns the path to the Windows
	directory. It does not check to see if the path actually exists. This article
	describes the situation where the environment variable has a path to a directory
	that does not exist.
	
	WORKAROUND
	==========
	
	Create the directory specified by the TEMP or TMP environment variable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2
	Version           : WINDOWS:4.0 SP2,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
