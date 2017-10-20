---
layout: page
title: "Q148956: Removing SNA Server Removes Installed Transaction Programs"
permalink: /kb/148/Q148956/
---

## Q148956: Removing SNA Server Removes Installed Transaction Programs

{% raw %}

	Article: Q148956
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you remove SNA Server 2.x prior to either upgrading or reinstalling SNA
	Server, the SNA setup program will delete all registry entries related to SNA
	Services that you have installed, such as APPC or CPIC transaction programs
	(TPs), for example, the APPC Ping (APINGD) program.
	
	CAUSE
	=====
	
	The problem is that Microsoft Windows NT services defined as SNA Server TPs have
	certain data in the registry that SNA Server recognizes as its own and removes
	them when SNA Server gets removed. Also Windows NT applications that are defined
	as SNA Server TPs are configured under the SnaBase registry key that is removed
	when SNA Server is removed.
	
	
	RESOLUTION
	==========
	
	Before you remove the SNA Server, you can use Regedt32.exe to backup the
	affected subtrees. Also, you can use TPSETUP to reinstall the TPs back into the
	registry.
	
	For more information on removing SNA Server, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q133325 Upgrading from SNA Server 2.0 or 2.1 to 2.11
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.0, 2.1, 2.11, and 2.11.sp1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.00 2.10 2.11 sp1 prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2
	
	=============================================================================
	

{% endraw %}
