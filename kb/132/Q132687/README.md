---
layout: page
title: "Q132687: PC WSPlus: Documentation for Mixed Networks Dynamic Schedule"
permalink: /kb/132/Q132687/
---

## Q132687: PC WSPlus: Documentation for Mixed Networks Dynamic Schedule

{% raw %}

	Article: Q132687
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order for Schedule+ users to be able to View Free and Busy Times, create
	appointments to external resources, and have the calendar files updated
	instantly, the "dynamic connection" method must be configured via the
	ADMINSCH.EXE program.
	
	The other View Free and Busy Time method, using SCHDIST.EXE, is not suitable
	because the external resources' calendar files will not be instantly updated.
	This is because the process would depend on the time intervals and succession of
	SCHDIST.EXE and EXTERNAL.EXE.
	
	In order for dynamic connection to work, each workstation must have the
	capabilities to access the Mail servers where the Schedule+ calendar files are
	stored. The workstations need to have the capabilities to connect to an external
	Mail server, write to a calendar file as it books appointment to a resource, and
	disconnect dynamically. This configuration task can easily be achieved in a
	Microsoft Network or Novell NetWare environment. This is due to the fact that,
	in either case, the workstations would already have efficient hardware and
	software loaded to establish network connection to any server.
	
	However, Mail and Schedule+ documentation do not address the underlying steps of
	configuring a workstation to have full network connectivity in a mixed networks
	environment, such as one made up of NetWare and Microsoft Network (NTAS). In
	other words, it is assumed that the workstation network setup is already taken
	care of by the organization network administration group, where the workstations
	would already have the capability to access network resources (in this case,
	Mail servers) that are on NetWare, as well as those that are on Windows NT.
	
	MORE INFORMATION
	================
	
	In some cases, under the limitations of current technology, dual protocols may
	be required at the workstations. For example, considering the diagram below
	where a user on Windows for Workgroups machine 1 would like to use the dynamic
	connection method to View Free and Busy Times of a user's calendar on Windows
	for Workgroups Machine 2, and vice versa.
	
	  WFWG1 <---> NetWare Server      NTAS <---> WFWG2
	
	In this scenario, workstations that resemble WFWG1 that are possibly loading
	IPXODI/NETX (Real mode) must also be configured in WFWG Network Setup to
	recognize Microsoft Networks, which results in loading Netbeui (Protect mode).
	This will allow them to connect to the NTAS server. In return, workstations that
	resemble WFWG2 that are possibly loading Netbeui must also be loading IPX/SPX
	with Netbios.
	
	Perhaps in the near future, new technologies and tools will make this task more
	seamless and transparent.
	
	Additional query words: schedule plus 1.00 1.00a schedist sched protocol
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
