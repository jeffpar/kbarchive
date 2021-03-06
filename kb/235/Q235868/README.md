---
layout: page
title: "Q235868: Invoking COMTI Method Elicits MTS Event ID 4128"
permalink: /kb/235/Q235868/
---

## Q235868: Invoking COMTI Method Elicits MTS Event ID 4128

{% raw %}

	Article: Q235868
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp2
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, versions 1.0, 4.0 SP2 
	- Microsoft SNA Server, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After successfully implementing a Microsoft COM Transaction Integrator for CICS
	and IMS (COMTI) application using SNA Server 4.0 Service Pack 1 (SP1), this
	release of SNA Server is uninstalled and SNA Server 4.0 Service Pack 2 (SP2) is
	installed.
	
	Afterwards, COMTI methods fail with the following entry appearing in the
	application Event Log:
	
	  Event ID: 4128
	  Source: Transaction Server
	  Type: Error
	  Category: Class Factory Wrapper
	
	  The run-time environment was unable to load an application component due to
	  either an error obtaining its properties from the catalog, loading the DLL or
	  getting the procedure address of DllGetClassObject. This error caused the
	  process to terminate.
	  C:\SNA\COMTI\Tagen.dll (Package: OneMoreTime) (Microsoft Transaction Server
	  Internals Information: File: d:\viper\src\runtime\cfw\ccomdll.cpp, Line: 151)
	
	MORE INFORMATION
	================
	
	The problem is related to the fact that SNA Server 4.0 SP2 is installed in a
	different directory, by default, than SNA Server 4.0 SP1, C:\Program Files\SNA,
	and C:\SNA, respectively. Those who use the defaults and have chosen to
	reinstall SNA Server instead of to upgrade SNA Server may incur this problem.
	
	There are at least two workarounds:
	
	- Install SNA Server 4.0 SP2 using the same directory structure that SNA Server
	  4.0 SP1 was installed in.
	
	- Uninstall the COMTI application component libraries from their MTS packages,
	  and then reinstall them.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI100 kbCOMTI400SP2 kbSNAServ400SP2
	Version           : WINDOWS:1.0,4.0 SP2
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
