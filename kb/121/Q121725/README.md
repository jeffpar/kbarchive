---
layout: page
title: "Q121725: Alert for &quot;&lt;&quot; Condition Fails to Run Batch File"
permalink: /kb/121/Q121725/
---

## Q121725: Alert for &quot;&lt;&quot; Condition Fails to Run Batch File

	Article: Q121725
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbtool kbbug3.50 kbfix3.50.sp2
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Performance Monitor is capable of correctly detecting conditions where the value
	of a parameter falls below the specified limit. When this condition occurs an
	alert can be generated and a batch file run. However, Performance Monitor will
	not run the batch file correctly.
	
	For example, if Performance Monitor is configured to send an alert and run a
	batch file any time CPU utilization falls below 5%, the alert will be sent but
	the batch file won't run.
	
	CAUSE
	=====
	
	Performance Monitor allows parameters to be passed to the batch job. The "<"
	parameter is being interpreted as a redirection from the STDIN port, confusing
	the job.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
