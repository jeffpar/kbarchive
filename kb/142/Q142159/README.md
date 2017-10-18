---
layout: page
title: "Q142159: How to Automate SNMP Installation"
permalink: kb/142/Q142159/
---

## Q142159: How to Automate SNMP Installation

	Article: Q142159
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Unattended or Computer Profile Setup (CPS), the SNMP protocol is
	not installed to target computers (by default). However, you can accomplish
	automated installation of SNMP by modifying setup files.
	
	MORE INFORMATION
	================
	
	WARNING: Modification of INF files may cause serious, system-wide problems
	before and after Setup and may require you to reinstall Windows NT to correct
	them. Microsoft cannot guarantee that any problems resulting from the
	modification of INF files can be solved. Make INF modifications at your own
	risk. Corporate Network Systems does not support the modification of INF files.
	For more information on INF files, refer to the Programmer's Guide included in
	the Windows NT DDK or contact Microsoft Consulting Services or a Solution
	Provider.
	
	Computer Profile Setup
	----------------------
	
	On the distribution server, make these necessary modifications:
	
	1. In the Defaults.inf file, change the third parameter of
	  !TCPIpServiceMask in the [TCPIPServices] section to 1.
	
	  [TCPIPServices]
	  !TcpIpServiceMask = {"1","1","1","0","0","0","0","0"}
	
	2. (Optional) Modify the script fragment in Oemnxpsn.inf so that the SNMP
	  configuration dialog box is not displayed. With this modification, Setup will
	  not allow you to configure SNMP, so it will be installed with default
	  values.
	
	  Code fragment before modification:
	
	        LibraryProcedure Result, $(!TCPCFG_HANDLE), CPlSnmp, $(!STF_HWND)
	        ifint $(Result) == 0
	           set CommonStatus = STATUS_REBOOT
	        else-ifint $(Result) == 1
	           set CommonStatus = STATUS_REBOOT
	        else
	           set RegistryErrorIndex = $(Result)
	           goto fatalregistry
	        endif
	
	     Code fragment after modification:
	
	        ifstr(i) $(!STF_GUI_UNATTENDED) == "YES"
	           Set Result = 0
	        else
	           LibraryProcedure Result, $(!TCPCFG_HANDLE), CPlSnmp, $(!STF_HWND)
	        endif
	
	        ifint $(Result) == 0
	           set CommonStatus = STATUS_REBOOT
	        else-ifint $(Result) == 1
	           set CommonStatus = STATUS_REBOOT
	        else
	           set RegistryErrorIndex = $(Result)
	           goto fatalregistry
	        endif
	
	Uattended Setup
	---------------
	
	1. Copy the \I386 directory from the Windows NT compact disc to your hard drive.
	
	2. Expand i386\OEMNXPTC.IN_ to OEMNXPTC.INF. The Expand.exe file is located in
	  the %SystemRoot%\SYSTEM32 directory.
	
	3. Rename i386\OEMNXPTC.IN_ to OEMNXPTC.BK_.
	
	WARNING: Modification of Setup files can cause serious, system-wide problems
	before and after Setup and may require you to reinstall Windows NT tocorrect
	them. Microsoft cannot guarantee that any problems resulting from the
	modification of Setup files can be solved. Make Setup file modifications at your
	own risk.
	
	4. Modify i386\OEMNXPTC.INF:
	
	  ; Original line below
	  ;                 set InstallList = {"1","1","0","0","0","0","0","0"}
	  ; Modified line below
	                    set InstallList = {"1","1","1","0","0","0","0","0"}
	
	  NOTE: It is not necessary to rename Oemnxptc.inf to Oemnxptc.in_.
	  Windows NT Setup does not require the file to be compressed or named
	  with an .in_ extension.
	
	5. Expand i386\Oemnxpsn.in_ to Oemnxpsn.inf. The Expand.exe file is located in
	  the %SystemRoot%\System32 directory.
	
	6. Rename i386\OEMNXPSN.IN_ to OEMNXPSN.BK_.
	
	WARNING: Modification of Setup files can cause serious, system-wide problems
	before and after Setup and may require you to reinstall Windows NT to correct
	them. Microsoft cannot guarantee that any problems resulting from the
	modification of Setup files can be solved. Make Setup file modifications at your
	own risk.
	
	7. Modify i386\Oemnxpsn.inf using Step 2 in the Computer Profile Setup section.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbMSPressSearch kbWinNTS351search kbWinNTS350search kbZNotKeyword6 kbZNotKeyword2
	Version           : :3.5,3.51
	
	=============================================================================
	
