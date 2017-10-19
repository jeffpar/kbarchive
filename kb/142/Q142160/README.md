---
layout: page
title: "Q142160: How to Automate FTP Installation"
permalink: /kb/142/Q142160/
---

## Q142160: How to Automate FTP Installation

	Article: Q142160
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Unattended or Computer Profile Setup (CPS), the FTP Server service
	is not installed to target computers (by default). However, you can accomplish
	automated installation of the FTP Server service by modifying setup files.
	
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
	
	1. In the Defaults.inf file, change the fifth parameter of
	  !TCPIpServiceMask in the [TCPIPServices] section to 1.
	
	  [TCPIPServices]
	  !TcpIpServiceMask = {"1","1","0","0","1","0","0","0"}
	
	2. (Optional) Modify the script fragment in Oemnsvft.inf so that the FTP
	  installation confirmation dialog box does not display.
	
	  Code fragment before modification:
	
	     installadapter = +
	        OpenRegKey $(!REG_H_LOCAL) "" $(TCPIPKeyName) $(MAXIMUM_ALLOWED)
	     TCPIPKey
	        Ifstr $(TCPIPKey) == $(KeyNull)
	          set RegistryErrorIndex = TCPIP_NONEXIST_ERROR_FTPD
	          goto fatalregistry
	        endif
	        CloseRegKey $(TCPIPKey)
	        set FLibraryErrCtl = 1
	        LibraryProcedure ResultList, $(!TCPCFG_HANDLE),
	           CPlFtpdConfirmInstall,
	     $(!STF_HWND)
	        Set Result = *($(ResultList),1)
	
	     Code fragment after modification:
	
	     installadapter = +
	        OpenRegKey $(!REG_H_LOCAL) "" $(TCPIPKeyName) $(MAXIMUM_ALLOWED)
	     TCPIPKey
	        Ifstr $(TCPIPKey) == $(KeyNull)
	          set RegistryErrorIndex = TCPIP_NONEXIST_ERROR_FTPD
	          goto fatalregistry
	        endif
	        CloseRegKey $(TCPIPKey)
	        set FLibraryErrCtl = 1
	
	     ;; Following lines added for CPS or Unattended Setup
	        ifstr(i) $(!STF_GUI_UNATTENDED) == "YES"
	           Set Result = 0
	        else
	           LibraryProcedure ResultList, $(!TCPCFG_HANDLE),
	        CPlFtpdConfirmInstall, $(!STF_HWND)
	           Set Result = *($(ResultList),1)
	        endif
	
	3. (Optional) Modify the script fragment in Oemnsvft.inf so that the FTP Service
	  dialog box does not display. With this modification, Setup does not give you
	  a chance to configure the FTP service and you have to accept the default
	  values.
	
	  Code fragment before modification:
	
	            Ifstr(i) $(RegistryErrorIndex) != NO_ERROR
	                EndWait
	                Debug-Output "Resgitry error: add value list."
	                CloseRegKey $(KeySrvMgrExt)
	                goto fatalregistry
	            endif
	        endif
	        EndWait
	        set FLibraryErrCtl = 1
	        LibraryProcedure ResultList, $(!TCPCFG_HANDLE), CPlFtpd, $(!STF_HWND)
	        Set Result = *($(ResultList),1)
	
	     Code fragment after modification:
	
	            Ifstr(i) $(RegistryErrorIndex) != NO_ERROR
	                EndWait
	                Debug-Output "Resgitry error: add value list."
	                CloseRegKey $(KeySrvMgrExt)
	                goto fatalregistry
	            endif
	        endif
	        EndWait
	        set FLibraryErrCtl = 1
	        ;; Following lines added for CPS or Unattended Setup
	        ifstr(i) $(!STF_GUI_UNATTENDED) == "YES"
	          Set Result = 0
	        else
	          LibraryProcedure ResultList, $(!TCPCFG_HANDLE), CPlFtpd,
	             $(!STF_HWND)
	          Set Result = *($(ResultList),1)
	        endif
	        ;; Previous lines added for CPS or Unattended Setup
	
	        ifint $(Result) == 0
	            set CommonStatus = STATUS_SUCCESSFUL
	        else-ifint $(Result) == 1
	            set CommonStatus = STATUS_USERCANCEL
	        else
	            set RegistryErrorIndex = $(Result)
	            goto fatalregistry
	        endif
	        Shell $(UtilityInf) SetMasterComponent Microsoft Tcpip
	        $(STF_CONTEXTINFNAME) FTPD
	        Goto successful
	        configureadapter = +
	
	Note: The FTP Server software will be configured with default values. To
	configure specific settings, modify the code fragment below.
	
	     Set MaxConnections = 20
	     Set HomeDirectory = "C:\"
	     Set AllowAnonymous = 0
	     read-syms Defaults$(!STF_LANGUAGE)
	     Set WriteAccessMask = 0
	     Set ReadAccessMask = 0
	     Set AnonymousOnly = 0
	     Set ConnectionTimeout = 600
	
	Unattended Setup
	----------------
	
	1. Copy the \I386 directory from the Windows NT compact disc to your hard drive.
	
	2. Expand i386\Oemnxptc.in_ to Oemnxptc.inf. The Expand.exe file is located in
	  the %SystemRoot%\SYSTEM32 directory.
	
	3. Rename i386\Oemnxptc.in_ to Oemnxptc.bk_
	
	WARNING: Modification of INF files may cause serious, system-wide problems before
	and after Setup and may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the modification of
	INF files can be solved. Make INF modifications at your own risk. Corporate
	Network Systems does not support the modification of INF files. For more
	information on INF files, refer to the Programmer's Guide included in the
	Windows NT DDK or contact Microsoft Consulting Services or a Solution Provider.
	
	4. Modify i386\Oemnxptc.inf:
	
	  ; Original line below
	  ;                 set InstallList = {"1","1","0","0","1","0","0","0"}
	  ; Modified line below
	                    set InstallList = {"1","1","0","0","1","0","0","0"}
	
	  NOTE: It is not necessary to rename Oemnxptc.inf to Oemnxptc.in_. Windows NT
	  Setup does not require the file to be compressed or named with an in_
	  extension.
	
	5. Expand i386\Oemnsvft.in_ to Oemnsvft.inf. The Expand.exe file is located in
	  the %SystemRoot%\System32 directory.
	
	6. Rename i386\Oemnsvft.in_ to Oemnsvft.bk_
	
	7. Modify i386\Oemnsvft.inf using Step 2 and 3 in the "Computer Profile Setup"
	  section.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbMSPressSearch kbWinNTS351search kbWinNTS350search kbZNotKeyword6 kbZNotKeyword2
	Version           : :3.5,3.51
	Issue type        : kbhowto
	
	=============================================================================
	
