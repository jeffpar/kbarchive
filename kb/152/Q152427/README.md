---
layout: page
title: "Q152427: SNA Server Windows Enhanced APPC Router Win.ini Parameters"
permalink: /kb/152/Q152427/
---

## Q152427: SNA Server Windows Enhanced APPC Router Win.ini Parameters

	Article: Q152427
	Product(s): Microsoft SNA Server
	Version(s): 2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server for Windows NT, versions 2.11 SP1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SNA Server 2.11 Windows 3.x client software supports the Windows IBM PC
	Support compatible APPC router interface through an SNA Server version of
	EHNAPPC.DLL. This article documents Win.ini configuration settings for the SNA
	Server Windows APPC router.
	
	MORE INFORMATION
	================
	
	The SNA Server 2.11 Windows 3.x client supports the following Win.ini
	configuration settings:
	
	  [SnaServerEHNAPPC]
	
	     LocalLU = <local LU alias>
	
	     LocalTP = <local TP name>
	
	     <SYSTEMNAME> = <USERID>
	
	     UseBlockHook = YES
	
	More detail on each parameter is given below:
	
	LocalLU
	-------
	
	The LocalLU parameter assigns a specific Local LU alias to be used by the SNA
	Server Windows APPC router. If none is specified, a Local LU alias must be
	defaulted in the SNA Server configuration, through at least ONE of the following
	methods:
	
	- by assigning a default Local LU to the appropriate User or Group entry in the
	  SNA Server Users and Groups window.
	
	- by enabling the checkbox in the Local APPC LU dialog for "Member of default
	  outgoing Local APPC LU Pool"
	
	If a default Local LU is not defined, the PC Support program may encounter the
	following error:
	
	  error = 0x51 ( or 81 decimal, EHNAPPC_INVALIDLUNAME)
	
	NOTE: The LocalLU parameter must be present if CA400SharedFolders=YES is
	configured (when running IBM Client Access shared folders), or the CA/400 shared
	folders dialog may hang when started.
	
	LocalTP
	-------
	
	This optional parameter allows the SNA Server Windows APPC router to be
	configured with a specific Local APPC TP Name parameter. This parameter is
	passed to the SNA Server Windows APPC TP_STARTED call, though it is not required
	by SNA Server. If this entry is not configured, a default of "ROUTER" is used.
	
	<SYSTEMNAME> = <USERID>
	-----------------------
	
	The SNA Server Windows APPC Router will automatically save the AS/400 User ID
	used to sign on to each AS/400 "SYSTEMNAME" (or Remote LU alias). When the SNA
	Server Enhanced Router sign-on dialog is displayed, the User ID field is filled
	in according to the User ID saved for this system name. The AS/400 system name
	and user ID must be capitalized.
	
	There is no way to specify the AS/400 password within WIN.INI. However, once the
	user enters the AS/400 password within the enhanced router sign-on dialog, the
	SNA Server Windows APPC router will save the password in memory and use it if
	further conversations are attempted by the application, or any other PC Support
	applications. If all PC Support applications are stopped and unloaded, the SNA
	Server router password cache is cleared.
	
	NOTE: When terminating IBM Client Access/400, most CA/400 applications leave
	their DLLs in memory, so the SNA Server router password cache is not cleared.
	
	
	If the application calls EHNAPPC_QueryUserID and a NULL location name is passed,
	the following entry may be configured in Win.ini to return a specified User ID:
	
	  DEFAULT = <user id>
	
	The SNA Server Windows APPC router supports concurrent communication with up to
	32 unique AS/400 systems.
	
	UseBlockHook
	------------
	
	If UseBlockHook is set to YES (all upper case), then the SNA Server APPC router
	calls WinAPPCSetBlockingHook on behalf of the PC Support application.
	
	If UseBlockHook is not present, it defaults to NO. WinAPPCSetBlockingHook allows
	a Windows 3.x application to issue a "blocking" APPC call without blocking other
	16-bit Windows processes running on the system. For more information about this
	function, see the SNA Server APPC Programmer's Guide.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300NT kbSNAServ211NTSP1
	Version           : :2.11 SP1,3.0
	
	=============================================================================
	
