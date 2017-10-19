---
layout: page
title: "Q221772: &quot;SNABase not started&quot; if SNA Client for Windows NT is installed"
permalink: /kb/221/Q221772/
---

## Q221772: &quot;SNABase not started&quot; if SNA Client for Windows NT is installed

	Article: Q221772
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbPackage
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a package created by the Systems Management Server Installer is used to
	install the Windows NT Client for SNA Server, an error message, "SNABase not
	Started," will occur upon attempting to open a session. If a NET STOP SNABASE
	then a NET START SNABASE is executed, the connection will work correctly.
	Another indication of the problem is that it is not possible to manipulate other
	services in Control Panel, Services until the SNABASE service has timed out.
	
	CAUSE
	=====
	
	When the Systems Management Server Installer creates the package, it does not
	capture all of the necessary registry information. Specifically, two values are
	missing from the following key:
	
	  HKLM/System/CurrentControlSet/Services/SnaBase
	
	  DependOnService: REG_MULTI_SZ: LanmanWorkstation NtLmSsp
	
	  and
	
	  DependOnGroup: REG_MULTI_SZ
	
	The DependOnGroup has no associated value
	
	WORKAROUND
	==========
	
	If the above entries are manually added to the Systems Management Server
	package, then the installation will work properly. To avoid the issue, the
	Windows NT Client for SNA Server 4.0 can be used in a silent install mode.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer 1.0.11 to 1.0.45.
	
	
	Additional query words: sna client
	
	======================================================================
	Keywords          : kbPackage 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbprb
	
	=============================================================================
	
