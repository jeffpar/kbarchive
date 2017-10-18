---
layout: page
title: "Q143176: How to Compile IIS MIB Files"
permalink: kb/143/Q143176/
---

## Q143176: How to Compile IIS MIB Files

	Article: Q143176
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Internet Information Server (IIS) contains four Management Information Base
	(MIB) files. You can compile the four MIB files with the existing MIB files
	using MIBCC.EXE in Windows NT.
	
	MORE INFORMATION
	================
	
	The following MIB files are available in IIS CD-ROM in the SDK directory:
	
	  INETSRV.MIB    ( InetSrvCommon )
	  FTP.MIB        ( FtpServer )
	  GOPHERD.MIB    ( GopherServer )
	  HTTP.MIB       ( HttpServer )
	
	To compile a Simple Network Management Protocol (SNMP) Management Information
	Base (MIB) file with the Windows Internet Name Service (WINS) and Dynamic Host
	Configuration Protocol (DHCP) MIB files, use MIBCC.EXE (included in the Windows
	NT Resource Kit version 3.5). For example:
	
	  MIBCC -oOUT.BIN SMI.MIB LMMIB2.MIB MIB_II.MIB WINS.MIB DHCP.MIB
	  INETSRV.MIB FTP.MIB GOPHERD.MIB HTTP.MIB
	
	The order of the MIB files is important. In this example, you need to copy
	OUT.BIN to MIB.BIN and place it in the %SYSTEMROOT%\SYSTEM32 directory. If you
	compile without the -o option, MIBCC.EXE overwrites the MIB.BIN file that is
	already in your %SYSTEMROOT%\SYSTEM32 directory.
	
	To print each node as it is added, and print the MIB tree when finished, compile
	with -n and -t, respectively. For example:
	
	  MIBCC -n -oOUT.BIN -t SMI.MIB LMMIB2.MIB MIB_II.MIB WINS.MIB DHCP.MIB
	
	Additional query words: prodiis
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	Issue type        : kbhowto
	
	=============================================================================
	
