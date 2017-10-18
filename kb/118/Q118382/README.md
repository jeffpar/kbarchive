---
layout: page
title: "Q118382: Making and Running AREXEC/AREXECD Samples"
permalink: kb/118/Q118382/
---

## Q118382: Making and Running AREXEC/AREXECD Samples

	Article: Q118382
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	This article includes instructions for making and running AREXEC/AREXECD
	samples on SNA Server.
	
	The following are the steps for making and running AREXEC/AREXECD samples
	on SNA Server.
	
	Building AREXEC/AREXECD
	-----------------------
	
	Follow step A.1. (Building the TPs) in the SNA Server SDK README.TXT file.
	The ISVLIBS, ISVINCS and SAMPLEROOT environment paths must properly point
	to the SNA Server libraries, include files and sample programs.
	
	Install the AREXECD Service on SNA Server
	-----------------------------------------
	
	You can use the TPSETUP applet (shipped with the SNA SDK), or the INSTSRV
	Windows NT service installer sample (shipped with the Win32 SDK). If you
	use INSTSRV, configure extra settings through REGEDT32 for the AREXECD
	service.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	Sample registry entries:
	
	 HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/AREXECD
	   DisplayName: REG_SZ: AREXECD
	   ErrorControl: REG_DWORD: 0x1
	   ImagePath: REG_EXPAND_SZ: C:\SNA\SDK\AREXECD.EXE
	   ObjectName: REG_SZ: LocalSystem
	   Start: REG_DWORD: 0x3
	   Type: REG_DWORD: 0x10
	   Linkage:
	     OtherDependencies: REG_MULTI_SZ: SnaBase
	   Parameters:
	     AlreadyVerified: REG_SZ: no
	     ConversationSecurity: REG_SZ: no
	     LocalLU: REG_SZ: AREXECD
	     SNAServiceType: REG_DWORD: 0x5
	   Security:
	     Security: REG_BINARY: <this is setup for you during install>
	
	Configure Entries in the SNA Server Configuration File
	------------------------------------------------------
	
	In this configuration, AREXEC is running on a client against AREXECD which
	is installed on the server (that is, they're running locally to one
	server). Sample LU settings:
	
	Local APPC LUs (configured off the server):
	
	 LU Alias: AREXEC
	         - Independent LU6.2
	         - Network name = APPN
	         - LU Name = AREXEC
	         - Member of default outgoing local APPC pool
	         - Timeout for starting TP: 60 seconds
	
	 LU Alias: AREXECD
	         - Independent LU6.2
	         - Network Name: APPN
	         - LU Name = AREXECD
	         - Timeout for starting TP: 60 seconds
	         - Partners:
	           - Partner LU = AREXEC, Mode = #INTER, Connection = [Local]
	
	CPI-C Symbolic Destination Name (configured via Options/CPIC dialog):
	
	 Name = AREXECD
	         - Partner TP name: Application TP = AREXECD
	         - Partner LU name: Alias = AREXECD
	         - Conversation security = None
	         - Mode Name = #INTER
	
	Users/Groups window
	
	 Add an SNA Server user account (or "Everyone" access) for the
	 Windows NT client user that will be running the AREXEC program.
	
	Save the SNA Server configuration file.
	
	Running the AREXEC Sample Program
	---------------------------------
	
	1. Start the SNA Server service on the server, using SNA Admin, or through the
	  command line ("net start snaserver").
	
	2. Start the AREXECD service on the server, using the Control Panel Services
	  applet.
	
	3. On the Windows NT client machine, run AREXEC:
	
	  "AREXEC AREXECD DIR" (without the quotation marks)
	
	Enable the "AREXEC" Local LU as a "Member of default outgoing local APPC
	pool", this is the Local LU name that will be used. If this is not enabled,
	AREXEC will display error 20 (product specific error).
	
	
	Additional query words: prodsna 2.00
	
	======================================================================
	Keywords          : sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400
	Version           : WINDOWS:2.0,2.11,3.0,4.0
	
	=============================================================================
	
