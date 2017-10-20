---
layout: page
title: "Q225477: How to Install BackOffice Server 4.5 as an Administration Server"
permalink: /kb/225/Q225477/
---

## Q225477: How to Install BackOffice Server 4.5 as an Administration Server

{% raw %}

	Article: Q225477
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you want to remotely manage BackOffice Server programs in a large or
	medium-sized enterprise, you can install the full version of each program on a
	single computer that can be used as an administration server. You can then
	manage the other servers in the enterprise from a single location, using the
	management tools in each program.
	
	This solution may not always be practical because of the hardware requirements of
	BackOffice Server 4.5.
	
	MORE INFORMATION
	================
	
	In situations where the computer to be used as the local administration server
	does not have enough resources for a full BackOffice Server installation, you
	can install the management tools for each program, using an "administration
	server scenario" to allow full management of the location's servers on
	underpowered computers.
	
	The following table lists the minimum components required to build an
	administration server for your BackOffice Server 4.5 network.
	
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Component                              | Notes                                                                                                               | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Windows NT Server 4.0                  | Install as a member server in the master domain.                                                                    | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Windows NT 4.0 Service Pack 4 or later |                                                                                                                     | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Internet Explorer 5                    |                                                                                                                     | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Microsoft Management Console (MMC) 1.1 |                                                                                                                     | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Windows NT 4.0 Option Pack             | Install Internet Server Manager, Microsoft Data Access Components (MDAC), the common files, and Transaction Server. | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Exchange Server 5.5                    | Install the Exchange Administrator program.                                                                         | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| SQL Server 7.0                         | Install the management tools and client connectivity components.                                                    | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| BackOffice Server                      | Install the administration tools, Web Administration, and the Help files.                                           | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	NOTE: The total disk space required for installation is between 200-250 MB.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.5
	Issue type        : kbbug kbinfo
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
