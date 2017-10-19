---
layout: page
title: "Q132720: SNA Server CPIC Allocate Error 20 (CM_PRODUCT_SPECIFIC_ERROR)"
permalink: /kb/132/Q132720/
---

## Q132720: SNA Server CPIC Allocate Error 20 (CM_PRODUCT_SPECIFIC_ERROR)

	Article: Q132720
	Product(s): Microsoft SNA Server
	Version(s): 2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork kbProgramming kbusage kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna30
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a CPIC program on SNA Server, such as the CPIC sample programs
	included in the SNA Server SDK, or a custom CPIC program, the CPIC program's
	Allocate (CMALLC) call may fail with error 20 (CM_PRODUCT_SPECIFIC_ERROR).
	
	CAUSE
	=====
	
	The problem most commonly occurs when a Local APPC LU has not been configured
	for use by the CPIC program within the SNA Server configuration. If SNA Server
	APPC and CPIC API application tracing is enabled, the trace will indicate that
	the underlying APPC ALLOCATE call is failing with primary_rc = F004
	(COMM_SUBSYSTEM_NOT_LOADED). When this occurs, the CPIC interface returns Error
	20 (CM_PRODUCT_SPECIFIC_ERROR) to the CPIC application
	
	NOTE: When the CPIC interface was defined by IBM, there was no way to
	programmatically define which Local APPC LU to use, nor could it be specified in
	the CPIC side information. Because SNA Server supports configuration of many
	Local APPC LUs, the specific Local APPC LU to be used by the CPIC application
	must be defined through SNA Server product-specific methods.
	
	RESOLUTION
	==========
	
	To solve the Error 20 failure, configure a Local APPC LU. SNA Server allows the
	administrator to configure the Local APPC LU alias using any of the following
	methods (you only need to use one):
	
	1. Configure the Local APPC LU to be a member of the default pool.
	
	  SNA Server 2.x
	  --------------
	
	  a. In SNA Server Admin, go to the Servers and Connections window and select
	     the Local APPC LU that is partnered with the Remote APPC LU and Mode that
	     the CPIC application is using.
	
	  b. In the Local APPC LU Properties dialog box, select "Member of Default
	     Outgoing Local APPC LU Pool".
	
	  c. Click OK and save the SNA Server configuration file.
	
	  d. Stop and start the SNA Server service so the change can take effect.
	
	  SNA Server 3.0
	  --------------
	
	  a. In SNA Server Manager, go to the Local APPC LUs folder under the SNA
	     Server for which the Local APPC LU was created and double-click on the
	     Local LU that the CPIC application is using.
	
	  b. On the Advanced tab, in the Local APPC LU Properties dialog box, select
	     "Member of Default Outgoing Local APPC LU Pool".
	
	  c. Click OK and save the SNA Server configuration file.
	
	  d. Stop and start the SNA Server service so the change can take effect.
	
	2. Configure a default Local APPC LU alias for the user or group.
	
	  SNA Server 2.x
	  --------------
	
	Within SNA Server Admin, go to the Users and Groups window. If no users or groups
	are currently displayed, press INSERT and select New User. Add a Windows NT user
	or group account that the CPIC application will run under. If you want a
	specific Local APPC LU to be associated with any user who connects to SNA
	Server, add the "Everyone" user.
	
	After the appropriate Windows NT user, group, or Everyone entry has been added to
	SNA Server Admin, select the entry and press ENTER. Set the Default APPC LU
	Local LU Alias to an LU that is partnered with the Remote APPC LU and mode that
	the CPIC application is using, and then click OK.
	
	The SNA Server configuration file must be re-saved for the change to take effect;
	it is not necessary to stop and restart the SNA Server service.
	
	  SNA Server 3.0
	  --------------
	
	Within SNA Server Manager, go to the Configured Users folder. If no users or
	groups are currently displayed, press INSERT and select User. Add a Windows NT
	user or group account that the CPIC application will run under. If you want a
	specific Local APPC LU to be associated with any user who connects to SNA
	Server, add the "Everyone" user.
	
	After the appropriate Windows NT user, group, or Everyone entry has been added to
	SNA Server Manager, double-click on the entry. On the APPC Defaults tab, set the
	Default APPC LU Local APPC LU Alias to an LU that the CPIC application is using,
	and then click OK.
	
	The SNA Server configuration file must be resaved for the change to take effect;
	it is not necessary to stop and restart the SNA Server service.
	
	3. Configure the Local LU Alias within the SNA client configuration.
	
	  The default Local APPC LU can be set in the SNA Server client configuration,
	  as described in the SNA Server 2.1 "Reference Guide," Appendix C (page 202),
	  in the "CPIC API: Location and Names of Variables."
	
	  Windows NT Clients
	  ------------------
	
	  The Registry variable for Invoking TPs that affects the CPIC API for Windows
	  NT-based SNA Server clients is:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaBase\Parameters
	  \Client\<exename>: REG_SZ: <LocalLUalias>
	
	  where <exename> is the CPIC application name and <localLUalias> is
	  the default Local APPC LU alias.
	
	  NOTE: The above registry has been wrapped for readability.
	
	  This change will take effect as soon as the registry is updated; you do not
	  have to stop and restart the SnaBase service.
	
	
	  Windows 95/98 Clients
	  ---------------------
	
	  The Registry variable for Invoking TPs that affects the CPIC API for Windows
	  95/98-based SNA Server clients is:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SnaBase\Parameters
	  \Client\<exename>: REG_SZ: <LocalLUalias>
	
	  where <exename> is the CPIC application name and >localLUalias> is
	  the default Local APPC LU alias.
	
	  NOTE: The above registry has been wrapped for readability.
	
	  On Windows 95/98, the SnaBase process must be restarted for this change to
	  take effect.
	
	  Windows 3.x and OS/2 Clients
	  ----------------------------
	
	  The variable that affects the CPIC APIC for Windows 3.x-based or OS/2-based
	  SNA Server clients is found in the CPIC program's [ApplicationName] section
	  of the WIN.INI file is stored as follows:
	
	  [ApplicationName]
	  APPCLLU=<localLUalias>
	
	  where <localLUalias> is the default Local APPC LU alias.
	
	  If you change this entry the SNA Server Win 3.x client (WNAP.EXE) and SNA
	  Server OS/2 client (COMNAP) must be stopped and started to enable this
	  change.
	
	  Precedence Order
	  ----------------
	
	The following precedence order is used when defaulting the Local LU to the CPIC
	application:
	
	1. The registry setting takes the greatest precedence.
	
	2. If there is no registry assignment, then the default Local APPC LU is used.
	  The default Local APPC LU must be assigned to the user context (or group
	  context) under which the CPIC application is running.
	
	3. If there is no default Local APPC LU assignment, any Local LU that has the
	  Member of default outgoing Local APPC pool option configured is used.
	
	Additional query words: prodsna cmallc 20 administrator cm_product_specific_error
	
	======================================================================
	Keywords          : kbnetwork kbProgramming kbusage kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2
	Version           : :2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	
	=============================================================================
	
