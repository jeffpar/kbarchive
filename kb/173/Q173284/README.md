---
layout: page
title: "Q173284: INFO: SNA Server Version Information and Windows NT Dependencies"
permalink: /kb/173/Q173284/
---

## Q173284: INFO: SNA Server Version Information and Windows NT Dependencies

{% raw %}

	Article: Q173284
	Product(s): Microsoft SNA Server
	Version(s): 2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbenv kbinterop kbnetwork kbsna300sp1 sna4
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to identify the version of SNA Server, SNA Server
	client, or Host Integration Server 2000 software that is being used. Windows NT
	and Windows 2000 version dependencies are also described below.
	
	All releases of SNA Server and Host Integration Server 2000 include the
	Snaver.exe utility, which displays an internal version number within every
	32-bit SNA Server .dll or .exe module. Other than Snaver, or the module file
	dates, you can also use the following information to determine the SNA Server or
	Host Integration Server 2000 version:
	
	- From SNA Server Admin (or SNA Server Manager), click About on the Help menu.
	
	  WARNING: When running SNA Server 2.11 Admin on Windows NT 4.0, this displays
	  "Beta Version 2.0.0" in error.
	
	- Examine the following registry key on the SNA Server:
	
	  HKEY_LOCAL_MACHINE/SOFTWARE/Microsoft/SNA Server/CurrentVersion/SnaVersion:
	  REG_SZ: <version>
	
	  The <version> will indicate the major version and service pack level.
	  For example:
	
	  2.11 Service Pack 2
	  3.0 Service Pack 1
	  4.0
	  4.0 Service Pack 1
	  5.0 (Host Integration Server 2000)
	
	NOTE: Starting with SNA Server 3.0 Service Pack 2 (SP2), the Snaver.exe program
	displays the SnaVersion registry key also, to indicate the service pack level
	that has been applied. For example:
	
	  Microsoft SNA Server
	  Retail Version: 3.0 Service Pack 2
	
	NOTE: When you use Host Integration Server 2000, Snaver displays the following
	version information:
	
	  Microsoft Host Integration Server 2000 Product Version: 5.0
	
	MORE INFORMATION
	================
	
	The Snaver.exe program can be used to display the internal build number of any
	SNA Server Win32 DLL or EXE module. When starting Snaver, it also displays a
	version number itself, which are listed below.
	
	NOTE: The modules updated in each service pack will not display a uniform
	internal build number. Service pack modules are built incrementally. To
	determine the SNA Server version based on the internal build number, only the
	Snaver.exe *or* Snadmod.dll build numbers should be viewed, as described below.
	
	You can use the following table to identify which version of SNA Server or Host
	Integration Server 2000 you are using. The following versions of SNA Server or
	Host Integration Server 2000 have been released as of this writing:
	
	  SNA SERVER     SNAVER.EXE
	  VERSION        BUILD NUMBER   DATE OF BINARIES
	  ----------     ------------   ----------------------------------
	  SNA 2.0        2.0.0.127      10/24/1993
	  SNA 2.10       2.1.0.267      9/3/1994
	  SNA 2.11       2.11.0.294     6/1995 (NOTE 1)
	  SNA 2.11 SP1   2.11.0.309     1/5/1996 (NOTE 1, NOTE 2, NOTE 5)
	  SNA 2.11 SP2   2.11.0.315     2/21/1997 (NOTE 1, NOTE 4)
	  SNA 3.0        3.0.0.414      11/17/1996
	  SNA 3.0 SP1    3.0.0.433      4/9/1997 (NOTE 3)
	  SNA 3.0 SP2    3.0.0.462      9/30/1997
	  SNA 3.0 SP3    3.0.0.471      4/8/1998 (NOTE 6)
	  SNA 3.0 SP4    3.0.0.476      5/14/1999
	  SNA 4.0        4.0.0.500      11/20/1997
	  SNA 4.0 SP1    4.0.0.517      5/22/1998
	  SNA 4.0 SP2    4.0.0.568      1/9/1999
	  SNA 4.0 SP3    4.0.0.595      8/19/1999
	  SNA 4.0 SP4    4.0.0.606      11/6/2000
	  HIS 2000       5.0.0.798      7/21/2000  
	
	NOTE 1: If SNA Server 2.11 is running on Windows NT 4.0, the SNA Server Admin
	Help/About dialog incorrectly shows the SNA Server version as "Beta Version
	2.0.0". To determine the actual SNA Server version, Snaver.exe should be run
	instead.
	
	NOTE 2: SNA Server 2.11 was refreshed when 2.11 SP1 was released. Customers
	purchasing SNA Server 2.11 after January 1996 should have received the 2.11 SP1
	version.
	
	NOTE 3: SNA Server 3.0 was refreshed when 3.0 SP1 was released. Customers
	purchasing SNA Server 3.0 after April 1997 should have received the 3.0 SP1
	version.
	
	NOTE 4: SNA Server 2.11 SP2 did not update the Snaver.exe program, so the
	internal build number will be unchanged. To determine if 2.11 SP2 has been
	applied to the server, use Snaver to view the build number of the
	<snaroot>\system\Snadmod.dllL file, which will be 2.11.0.315.
	
	NOTE 5: The initial version of the SNA Server Windows 95 client software was made
	available December 1995. This version had several problems which caused TCP/IP
	session drops, which were fixed in the SNA Windows 95 client included in 2.11
	SP1. The initial release of SNA Server 2.11 did not include an SNA Windows 95
	client since the 2.11 release predated the Windows 95 general release in August
	1995.
	
	NOTE 6: SNA Server 3.0 SP3 included refreshed client code and setup programs for
	Windows NT and Windows 95. However, these refreshes incorrectly set the SNA
	client version information in the registry to "3.0 Service Pack 2". The build
	will still correctly indicate "Build 471" to reflect that SNA 3.0 SP3 is applied
	on the client computer.
	
	NOTE 7: SNA Server 4.0 SP1 does not update the Snaver.exe program, so the
	internal build number displays as 4.0.0.500. To determine if 4.0 SP1 has been
	applied to the server, use Snaver to view the build number of the
	<Snaroot>\System\Snadmod.dll file, which is 4.0.0.517.
	
	SNA Server and Windows NT version dependencies
	----------------------------------------------
	
	SNA Server 2.0 - Server runs on Windows NT 3.1. SNA Server 2.0 hotfixes were
	required to run on Windows NT 3.5. This version is longer supported by
	Microsoft.
	
	SNA Server 2.1 - Runs on either Windows NT 3.1 and 3.5. This version is no longer
	supported by Microsoft
	
	SNA Server 2.11 - Server requires Windows NT 3.5 or greater (does not run on
	3.1)
	
	SNA Server 3.0 - Server requires Windows NT 3.51 or greater (does not run on
	3.5)
	
	SNA Server 4.0 - Server and Windows NT client requires Windows NT 4.0 Service
	Pack 3 or greater (setup prevents installation on NT 3.51 and earlier versions).
	When choosing to install COM Transaction Integrator (COMTI), OLE/DB Provider, or
	ODBC Driver for DB2, the system must be installed with Microsoft Internet
	Explorer 3.02 or later, and the Windows NT 4.0 Option Pack (COMTI requires
	Microsoft Transaction Server and optionally, IIS from the Option Pack). If
	COMTI, OLE/DB or ODBC are chosen, SNA Server automatically installs the
	Microsoft Data Access Components version (MSDAC) 1.5. See the SNA Server 4.0
	release notes or Getting Started guide for specific software requirements and
	instructions.
	
	SNA Server 4.0 SP3 - Runs on Windows NT 4.0 versions supported by SNA Server 4.0
	and is supported to run on Windows 2000.
	
	
	Host Integration Server 2000 and Windows NT or Windows 2000 Version Dependencies
	--------------------------------------------------------------------------------
	
	See the Host Integration Server 2000 Readme.doc file for a complete description
	of dependencies for the various components. Host Integration Server is supported
	on Windows NT 4.0 SP6a Server, Windows 2000 Server, and Windows 2000
	Professional (for development purposes). When you run Host Integration Server on
	Windows NT 4.0 SP6a, other prerequisites include:
	
	- Microsoft Data Access Components (MDAC) version 2.5 (or MDAC 2.6, which comes
	  with SQL 2000)
	
	- Microsoft Management Console (MMC) version 1.2
	
	- Microsoft Software Installer (MSI) version 1.1
	
	- Windows Management Instrumentation (WMI) version 1.5
	
	- Active Directory Service Interfaces (ADSI) version 2.5
	
	You cannot install the administrator and end-user clients on Windows NT Server
	4.0 or Windows 2000 Server, though both are supported on Terminal Server. The
	administrator client is supported on Windows NT 4.0 SP6a Workstation (with the
	same MDAC, MMC, MSI, WMI and ADSI requirements as Host Integration Server) and
	Windows 2000 Professional.
	
	The end-user client is supported on Windows 95, Windows 98, Windows NT 4.0 SP6a
	Workstation (with the same MDAC, MMC, MSI, WMI, ADSI requirements as Host
	Integration Server), and Windows 2000 Professional, as well as Terminal Server.
	When you run the end-user client on Windows 95, Windows 98 or Windows NT 4.0
	SP6a Workstation, Microsoft Internet Explorer 5.01 and the Directory Service
	(DS) client are also required.
	
	NOTE: MMC 1.2 is available on the Microsoft Platform SDK. The DS Client is
	available on the Windows 2000 Server CD-ROM. Windows NT 4.0 SP6a, Internet
	Explorer 5.01, MDAC 2.5, MSI 1.1, WMI 1.5 and ADSI 2.5 are available for public
	download on the following Microsoft Web site:
	
	  http://www.microsoft.com/downloads
	
	Additional query words: snaver snafaq
	
	======================================================================
	Keywords          : kbenv kbinterop kbnetwork kbsna300sp1 sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : :2.0,2.1,2.11,3.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
