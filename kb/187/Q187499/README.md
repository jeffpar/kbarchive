---
layout: page
title: "Q187499: Performance Monitor Counters For IIS Not Available"
permalink: kb/187/Q187499/
---

## Q187499: Performance Monitor Counters For IIS Not Available

	Article: Q187499
	Product(s): Internet Information Server
	Version(s): WINNT:2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Internet Information Server, counters will be added to
	Performance Monitor for the Internet Information Services Global, the HTTP
	Service, the FTP Service and the Gopher Service. These counters only appear when
	the corresponding services are running. These counters will only be available to
	administrators.
	
	CAUSE
	=====
	
	If the counters for these services do not show under any circumstances, there
	maybe a problem with the Performance Monitor counter information files. When
	Internet Information Server installs, it will create or modify the Perfc009.dat
	and Perfh009.dat files, and create backup files of Perfc009.bak and
	Perfh009.bak.
	
	RESOLUTION
	==========
	
	To work around this problem, first make a backup of the Perf*.dat and Perf*.bak
	files. Then copy the existing Perf*.bak files to Perf*.dat files. Make sure that
	Performance Monitor is not currently accessing these files.
	
	Note: If the Perf*.bak files are corrupt, copy the Perf*.dat and Perf*.bak files
	from an existing working system with the same Performance Monitor counters
	installed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	versions 2.0 and 3.0.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : WINNT:2.0,3.0
	
	=============================================================================
	
