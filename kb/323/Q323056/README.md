---
layout: page
title: "Q323056: &quot;Error Opening Sub-Domain&quot; Error Message When You Open SNA Manag"
permalink: kb/323/Q323056/
---

## Q323056: &quot;Error Opening Sub-Domain&quot; Error Message When You Open SNA Manag

	Article: Q323056
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbsna400sp4 Kbhostintegserv2000
	Last Modified: 05-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you open SNA Manager and you expand the Microsoft SNA Manager folder, you
	may receive the following error message:
	
	  <Error opening sub-domain>
	
	If this message appears, the following event is also posted in the application
	log of the Event Viewer:
	
	  Event ID: 5149 - Source: SNA Manage Agent
	
	  Manage base error - error in accessing the domain table. The local domain name
	  is not valid
	
	CAUSE
	=====
	
	Though there may be more than one reason for this problem to occur, two known
	causes are:
	
	- The Remote Registry Service is stopped or unavailable.
	
	- The SNA subdomain name is not listed in the registry. This error is seen only
	  if the value is blank.
	
	NOTE: By default, the SNA subdomain name is the Windows NT or Windows 2000 Server
	name.
	
	RESOLUTION
	==========
	
	Resolving this problem involves these steps:
	
	- Start the Remote Registry Service.
	
	- Verify that the SnaDomain:REG_SZ: <subdomain_name> value is listed in
	  the registry.
	
	To resolve this problem, follow these steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the SnaDomain value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaBase\Parameters
	
	3. On the Edit menu, click Multi String, type "<Subdomain_Name>" (without
	  the quotation marks), and then click OK.
	
	4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	If SNA Management tracing was turned on during this time, the Expintx.atf trace
	file shows that after the MngGetLocalDomain call is made, the value name (SNA
	subdomain name) that comes back is <blank>.
	
	  
	
	  mngglobl.cpp(1556) MngGetLocalDomain Local Domain is <blank>
	  manage.cpp(443)    CreateDomainManageObject Call to CreateDomainManageObject
	  mngglobl.cpp(1556) MngGetLocalDomain Local Domain is <blank>
	
	For additional information about Event Id 5149, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q321159 Event IDs 5125 and 5149 After You Start SNA Manager in HIS 2000
	
	  Q296839 Administrator Client Fails to Open Subdomain in SNA Manager
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbsna400sp4 Kbhostintegserv2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
