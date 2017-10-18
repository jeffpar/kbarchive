---
layout: page
title: "Q169613: FPNW Service Stops Suddenly in WinNT 3.51 &amp; WinNT 4.0"
permalink: kb/169/Q169613/
---

## Q169613: FPNW Service Stops Suddenly in WinNT 3.51 &amp; WinNT 4.0

	Article: Q169613
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On computers running Windows NT 3.51 Service Pack 5 (SP5) with File and Print
	Services for NetWare (FPNW) or Windows NT 4.0 Service Pack 2 (SP2) with FPNW,
	the FPNW service suddenly stops. In some cases, it may take as long as a month
	to stop. The FPNW service can be restarted through the Services icon in Control
	Panel and will work again for a while.
	
	When the FPNW service stops, nothing logs in the Event Viewer, but you receive
	the following Dr. Watson pop-up message:
	
	  AN APPLICATION ERROR OCCURRED AND AN APPLICATION ERROR LOG IS BEING
	  GENERATED. THIS ACCESS VIOLATION IS NWSSVC.EXE. EXCEPTION VIOLATION
	  0xc0000005, ADDRESS 0x758821f0.
	
	CAUSE
	=====
	
	FPNW is made up of several components. The principal two are the Nwssvc.exe
	process running in user mode and Fpnwsrv.sys running in kernel mode. The user
	mode process is where Fpnw.dll, Nwslib.dll, and other necessary files are
	loaded. Most printing and administrative functions are handled in this process.
	
	Fpnwsrv.sys runs as a kernel mode driver and does most file I/O and connection
	functions.
	
	The access violation (AV) in the NWSSVC process fails to address a situation in
	which it must get a NULL ACL back from a security descriptor, yet still have the
	NULL ACL report back as valid.
	
	RESOLUTION
	==========
	
	Obtain the hotfix below or wait for the next service pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 4.0.
	This problem was corrected in the latest Windows NT Server 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 3.51.
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351 kbFPNW400
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
