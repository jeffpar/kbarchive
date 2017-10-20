---
layout: page
title: "Q294205: Additional SNA Services Not Functional After Restoring Com.cfg"
permalink: /kb/294/Q294205/
---

## Q294205: Additional SNA Services Not Functional After Restoring Com.cfg

{% raw %}

	Article: Q294205
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbsna400sp4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Restoring a SNA Server or Host Integration Server 2000 configuration file
	containing multiple SNA Server services will result in only the first SNA Server
	Service being functional. Subsequent SNA Server services (SNA Service 02, SNA
	Service 03, SNA Service 04, and so on) will appear correctly in SNA Server
	Manager, but only the initial SNA Server Service will be able to start.
	
	CAUSE
	=====
	
	The registry entries that are required by the additional SNA Server services are
	not created when an SNA Server or Host Integration Server 2000 configuration
	that contains additional SNA Server services is restored.
	
	WORKAROUND
	==========
	
	The following steps can be used to restore a configuration that includes
	multiple SNA Server services:
	
	1. Install SNA Server or Host Integration Server 2000 if it has been removed.
	  When the installation is complete, a default configuration file is created.
	
	2. Open SNA Manager and insert the additional SNA Server services that are
	  required.
	
	3. Save the changes.
	
	4. Use SNA Manager to restore the configuration file that includes the previous
	  configuration information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, and Host Integration Server 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
