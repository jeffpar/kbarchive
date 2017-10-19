---
layout: page
title: "Q96131: Print Conflicts Between Remote and Local MS-DOS-Based Apps"
permalink: /kb/096/Q96131/
---

## Q96131: Print Conflicts Between Remote and Local MS-DOS-Based Apps

	Article: Q96131
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbprint kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows for Workgroups, Print Manager manages all local and remote print jobs
	except for those from local MS-DOS-based applications. A conflict arises if a
	remote client sends a print job at the same time an MS-DOS- based application is
	printing.
	
	MORE INFORMATION
	================
	
	Because Print Manager does not control local MS-DOS-generated print jobs and
	MS-DOS-based programs usually do not close printer ports when their print jobs
	are complete, the redirector must use the MS-DOS-based application's idle time
	to determine when to print the remote print job. In Windows for Workgroups
	version 3.11, this value is specified using the PRINTBUFTIME= statement both in
	the [network] section of SYSTEM.INI and in the [ifsmgr] section of the
	SYSTEM.INI file on the client machine. The entry in the [network] section
	controls network printing timeout using the real-mode redirector (outside of
	Windows), while the entry in the [ifsmgr] section controls network printing
	timeout using the protected-mode redirector (within Windows). By default, this
	value is set to 45 seconds.
	
	
	NOTE: Windows for Workgroups Setup does not add the [ifsmgr] section; this
	section may have to be added manually.
	
	If the above situation occurs, you are warned that a potential device conflict
	exists, and, if you continue, the printed output may be incorrect or garbled.
	The local (print server) print job goes directly to the port, breaking up and
	potentially interrupting the remote print job.
	
	If you have a shared printer on your machine, do not override a device conflict
	warning. You may be able to work around this problem by setting PRINTBUFTIME= to
	a lower value (such as 10 seconds).
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
