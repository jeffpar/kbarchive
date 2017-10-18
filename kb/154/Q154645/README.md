---
layout: page
title: "Q154645: INF: ODBC Desktop Driver Pack 2.0 Does Not Install ODBCADM"
permalink: kb/154/Q154645/
---

## Q154645: INF: ODBC Desktop Driver Pack 2.0 Does Not Install ODBCADM

	Article: Q154645
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ODBC Desktop Driver 2.0 Pack does not install ODBCADM.EXE, the Windows
	16-bit ODBC Administrator.
	
	MORE INFORMATION
	================
	
	The Microsoft Desktop Drivers are based on the Jet Database Engine, which
	requires a large stack space. Microsoft Knowledge Base article ID Q127898,
	titled "BUG: Err Msg: Control Caused Stack Fault in Module XBS200.DLL," mentions
	that when ODBC Administrator runs the Win16 Control Panel, it cannot acquire
	enough stack space to run the Desktop Drivers.
	
	The Desktop Drivers can be administered if you create a program icon for
	ODBCADM.EXE in any of their program groups, and run the ODBC Administrator from
	that program group. The executable for the Win16 ODBC Administrator is
	ODBCADM.EXE (therefore users should create an icon referencing ODBCADM.EXE).
	
	The ODBC Desktop Driver 2.0 Pack does not install ODBCADM.EXE, even though it is
	include on the disks. If you make the following changes to the ODBCJT.INF file
	on Disk 1 of the Driver Pack, you can then install ODBCADM.EXE. Find the section
	in ODBCJT.INF that reads the following:
	
	  [ODBCAdministrator]<BR/>
	     "Windows00" = 3, odbcadm.exe,,,, 1994-11-18,,,,,,,,,, 6496,,,,2.0.15.10,
	
	Remove the [ODBCAdministrator] section header and move the following line to the
	last line in the [ODBC] section:
	
	  "Windows00" = 3, odbcadm.exe,,,, 1994-11-18,,,,,,,,,, 6496,,,,2.0.15.10,
	
	The [ODBC] section now reads as follows:
	
	     [ODBC]
	     "Help" = 1, odbcinst.hlp,,,, 1994-11-18,,,,,,,,,,17412,,,,,
	     "CPanel" = 1, odbcinst.dll,,,, 1994-11-18,,,,,,,,,, 86800,,,,2.0.15.10,
	
	     "Ctl3d" = 3, ctl3dv2.dll,,,, 1994-11-18,,,,,,,,, SHARED,
	      21648,,,,2.0.5.0,
	     "Windows00" = 3, odbcadm.exe,,,, 1994-11-18,,,,,,,,,, 6496,,,,
	      2.0.15.10,
	
	Once these changes have been made to the ODBCJT.INF file on Disk 1, ODBCADM.EXE
	can be installed into the \Windows directory during the setup process. You can
	then add an icon for ODBCADM.EXE in any program group.
	
	Additional query words: odbc 2.00.2317
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	
	=============================================================================
	
