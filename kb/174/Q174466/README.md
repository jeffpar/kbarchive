---
layout: page
title: "Q174466: LU1 Print Job Corrupts LU3 Print Jobs"
permalink: /kb/174/Q174466/
---

## Q174466: LU1 Print Job Corrupts LU3 Print Jobs

{% raw %}

	Article: Q174466
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an LU3 type print job is submitted to Microsoft SNA Server after an LU1 print
	job has completed, the data printed will be corrupted.
	
	CAUSE
	=====
	
	The SNA Server Print Service was not resetting its 'job is transparent' flag
	between LU1 and LU3 print jobs.
	
	RESOLUTION
	==========
	
	Microsoft has modified the print service to reset the 'job is transparent' flag
	so that it will correctly print LU3 print jobs after LU1 print jobs have been
	printed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and
	3.0sp1. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: lu1 lu3 print corrupt snafaqtop
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
