---
layout: page
title: "Q142909: Files Needed to Set Up Windows NT 3.5 and 3.51 RAS"
permalink: /kb/142/Q142909/
---

## Q142909: Files Needed to Set Up Windows NT 3.5 and 3.51 RAS

	Article: Q142909
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The files listed below are those need to install Remote Access Service (RAS) in
	Windows NT 3.5 and 3.51. This list may be useful if you are having difficulty
	installing RAS on a computer that no longer has access to the media from which
	Windows NT was originally installed. For example, if you installed Windows NT on
	a laptop computer from a shared compact disc on the network, Windows NT will not
	allow you to install RAS from floppies. In this example, you can simply copy all
	the files listed below from the Windows NT installation compact disc to your
	laptop's hard drive in a subdirectory and set up RAS from there.
	
	The following files are required to install Windows NT Remote Access Service and
	the RAS client:
	
	  ASYNCMAC  SY_ [SYS]
	  MODEM     IN_ [INF]
	  NDISTAPI  SY_ [SYS]
	  NDISWAN   SY_ [SYS]
	  NWLNKRIP  SY_ [SYS]
	  OEMNSVRA  IN_ [INF]
	  RASADMIN  DL_ [DLL]
	  RASADMIN  EX_ [EXE]
	  RASADMIN  HL_ [HLP]
	  RASAPI16  DL_ [DLL]
	  RASAPI32  DL_ [DLL]
	  RASARP    SY_ [SYS]
	  RASCAUTH  DL_ [DLL]
	  RASCBCP   DL_ [DLL]
	  RASCCP    DL_ [DLL]
	  RASCFG    DL_ [DLL]
	  RASCHAP   DL_ [DLL]
	  RASCTRS   DL_ [DLL]
	  RASDIAL   EX_ [EXE]
	  RASGLOSS  HL_ [HLP]
	  RASGPRXY  DL_ [DLL]
	  RASGTWY   DL_ [DLL]
	  RASIPCP   DL_ [DLL]
	  RASIPHLP  DL_ [DLL]
	  RASIPXCP  DL_ [DLL]
	  RASMAN    DL_ [DLL]
	  RASMAN    EX_ [EXE]
	  RASMON    EX_ [EXE]
	  RASMSG    DL_ [DLL]
	  RASMXS    DL_ [DLL]
	  RASNBFCP  DL_ [DLL]
	  RASNBIPC  DL_ [DLL]
	  RASPAP    DL_ [DLL]
	  RASPHONE  EX_ [EXE]
	  RASPHONE  HL_ [HLP]
	  RASPPP    DL_ [DLL]
	  RASPPPEN  DL_ [DLL]
	  RASRES    DL_ [DLL]
	  RASSAUTH  DL_ [DLL]
	  RASSER    DL_ [DLL]
	  RASSPAP   DL_ [DLL]
	  RASSPRXY  EX_ [EXE]
	  RASSRV    EX_ [EXE]
	  TAPISRV   DL_ [DLL]
	
	The following files are required to install the Windows NT RAS server:
	
	  PAD       IN_ [INF]
	  RAS       IC_ [ICO]
	  RASADMIN  CN_ [CNT]
	  RASFIL32  DL_ [DLL]
	  RASGLOSS  CN_ [CNT]
	  RASPHONE  CN_ [CNT]
	  RASREAD   TX_ [TXT]
	  RASSETUP  CN_ [CNT]
	  RASSETUP  HL_ [HLP]
	  SWITCH    IN_ [INF]
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
