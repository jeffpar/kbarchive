---
layout: page
title: "Q134225: PC DirSync: Use of the -TU and -TL Options for DISPATCH.EXE"
permalink: /kb/134/Q134225/
---

## Q134225: PC DirSync: Use of the -TU and -TL Options for DISPATCH.EXE

{% raw %}

	Article: Q134225
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides clarification and detailed information regarding optimal
	use for the IdleProcessMaxPeriod (-TU) and IdleProcessMinPeriod (-TL) command
	line options for DISPATCH.EXE.
	
	MORE INFORMATION
	================
	
	The IdleProcessMaxPeriod (-TU) parameter specifies the maximum period in minutes
	that the Dispatch idle process can run. The IdleProcessMinPeriod (-TL) parameter
	specifies the minimum period in minutes that Dispatch can remain idle. The
	following examples demonstrate how these upper and lower time limits for an idle
	process are run.
	
	A setting of -TU10, indicates that Dispatch will remain idle for up to 10
	minutes. This means that if External is running as an idle process, it has up to
	10 minutes to finish its current activity. After 10 minutes, Dispatch checks its
	tables for any processes and completes its regular cycle, if necessary. If the
	-TL option is not specified for the minimum period Dispatch is to remain idle;
	an interval of 0 is assumed. If no -TL setting is used, a default value of 60
	minutes will be used.
	
	If the -TU option is set for less than 5 minutes without the -TL option, External
	will run its process and will remain inactive (sleep) until Dispatch
	re-initializes itself every 5 minutes.
	
	In summary, the -TU option should only be used if it is desirable to interrupt an
	idle process sooner than every 60 minutes, or if it is necessary to lengthen the
	amount of time the idle process should run without interruption. The options for
	-TU and -TL can not be set greater than 10,080 minutes (one week).
	
	Refer to page 295 for version 3.2 or page 297 for version 3.5 of Microsoft Mail
	for PC Networks "Administrator's Guide" for the proper syntax of the - TU and
	-TL options.
	
	NOTE: To make use of this option, DISPATCH.EXE must also specify an idle process,
	such as running the External program. For example:
	
	  Command line option:
	
	  /IdleProcess="c:\mailexe\external.exe"
	
	
	Additional query words: 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	

{% endraw %}
