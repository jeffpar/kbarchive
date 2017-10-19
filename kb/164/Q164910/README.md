---
layout: page
title: "Q164910: SNAHOSTPROCESS Requires Restart With New Host Security Domain"
permalink: /kb/164/Q164910/
---

## Q164910: SNAHOSTPROCESS Requires Restart With New Host Security Domain

	Article: Q164910
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the SNA Server Host Account Synchronization service (SNAHOSTPROCESS) is
	started with an existing host security domain defined in SNA Server Manager, and
	a new host security domain is defined, the Host Account Synchronization service
	must be restarted before it will recognize the new host security domain.
	
	Until this service is restarted, password changes for this new host security
	domain are ignored.
	
	CAUSE
	=====
	
	The SNA Server Host Account Synchronization service was not detecting the
	creation of new host security domains, after it was already started.
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available to correct this problem.
	
	The Host Account Synchronization service (SNAHOSTPROCESS) now dynamically detects
	changes to the host security domain definitions (including addition and removal
	of host security domains). Note that the following restrictions apply:
	
	- Changes to existing host security domains do not take effect until the Host
	  Account Synchronization service is restarted.
	
	- When a new host security domain is added or removed, the Domains registry key
	  and values are written within the registry. When this occurs, the
	  SNAHOSTPROCESS is notified of the change, and attempts to load the associated
	  security DLL for the host security domain.
	
	  NOTE: For vendors implementing installation programs for their host security
	  agents, the installation program should copy over the security DLL at the
	  very end of their installation, before updating the registry with the new
	  configuration information. This will ensure that the SNAHOSTPROCESS will not
	  attempt to initialize the security DLL before the installation has completed.
	
	- The SNAHOSTPROCESS service will no longer exit even if there are no active
	  host security domains.
	
	The updated module is:
	
	  <Snaroot>\System\Hostproc.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
