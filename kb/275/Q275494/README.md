---
layout: page
title: "Q275494: PRB: IIS 4.0 Userdump Generates a Memory Dump w/ Remote PerfMon"
permalink: kb/275/Q275494/
---

## Q275494: PRB: IIS 4.0 Userdump Generates a Memory Dump w/ Remote PerfMon

	Article: Q275494
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbiis400
	Last Modified: 14-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a User Mode Process dump from the OEM Support Tools kit
	(http://www.microsoft.com/downloads/release.asp) on a Microsoft Windows NT 4.0
	Service Pack 6a (SP6a)/Internet Information Server (IIS) version 4.0 server that
	is being remotely monitored by Performance Monitor, the User Mode Process dump
	may repeatedly generate memory dump files. In addition you may see the following
	events in the event log:
	
	  Event ID: 201
	  Src: Udmpsvc
	  User Mode Process Dump service was started successfully.
	
	  Event ID: 1010
	  Source: Perflib
	  The Collect Procedure for the "InetInfo" service in DLL "infoctrs.DLL"
	  generated an exception or returned an invalid status. Performance data
	  returned by counter DLL will be not be returned in Perf Data Block. Exception
	  or status code returned is data DWORD 0.
	
	CAUSE
	=====
	
	This problem occurs because the User Mode Process dump can only be configured to
	dump a process on first chance exceptions. These dumps are being generated
	because of first chance "access violations" that are handled by the performance
	counters, which do not cause IIS to crash. However, because the User Mode
	Process dump cannot be configured to ignore these first chance exceptions (or
	first chance exceptions of any kind), it generates a dump file.
	
	RESOLUTION
	==========
	
	There are two workarounds for this issue:
	
	- Do not run performance monitor against the IIS server remotely while the User
	  Mode Process dump is being used.
	
	-or-
	
	- Use the IIS Exception Monitor and the Script file customization wizard to
	  configure the IIS Exception Monitor to ignore first chance access violations.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: perfmon
	
	======================================================================
	Keywords          : kbiis400 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
