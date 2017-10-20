---
layout: page
title: "Q172817: SNATRACE Unable to Purge Trace Files on Remote System"
permalink: /kb/172/Q172817/
---

## Q172817: SNATRACE Unable to Purge Trace Files on Remote System

{% raw %}

	Article: Q172817
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNATRACE utility is unable to purge trace files on a remote system when you
	select Purge All Trace Files.
	
	CAUSE
	=====
	
	SNATRACE uses the RegNotifyChangeKeyValue to purge trace files. This does not
	work on remote systems.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, SNATRACE.EXE uses the SnaServ share point and the
	WaitForMultipleObjects timeout to purge files on remote systems. A Retry dialog
	box has also been added in case of a sharing violation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
