---
layout: page
title: "Q131776: How To Compile MIB.BIN With DHCP and WINS MIB Files Using MIBCC"
permalink: /kb/131/Q131776/
---

## Q131776: How To Compile MIB.BIN With DHCP and WINS MIB Files Using MIBCC

{% raw %}

	Article: Q131776
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	To compile a Simple Network Management Protocol (SNMP) Management
	Information Base (MIB) file with the Windows Internet Name Service (WINS)
	and Dynamic Host Configuration Protocol (DHCP) MIB files, use MIBCC.EXE
	(included in the Windows NT Resource Kit version 3.5). For example:
	
	  MIBCC -oOUT.BIN SMI.MIB LMMIB2.MIB MIB_II.MIB WINS.MIB DHCP.MIB
	
	The order of the MIB files is important. In this example, you need to copy
	OUT.BIN to MIB.BIN and place it in the %SYSTEMROOT%\SYSTEM32 directory. If
	you compile without the -o option, MIBCC.EXE overwrites the MIB.BIN file
	that is already in your %SYSTEMROOT%\SYSTEM32 directory.
	
	To print each node as it is added, and print the MIB tree when
	finished, compile with -n and -t, respectively. For example:
	
	  MIBCC -n -oOUT.BIN -t SMI.MIB LMMIB2.MIB MIB_II.MIB WINS.MIB DHCP.MIB
	
	NOTE:  For Microsoft Windows 2000 to compile SNMP MIB files with WINS and DHCP MIB files, use MIBCC.EXE with the following syntax:
	
	MIBCC -oOUT.BIN ACCSERV.MIB ACS.MIB AUTHSERV.MIB WINS.MIB DHCP.MIB FTP.MIB GOPHERD.MIB HOSTMIB.MIB HTTP.MIB IGMPV2.MIB INETSRV.MIB IPFORWD.MIB LMMIB2.MIB MCASTMIB.MIB MIB_II.MIB MIPX.MIB MRIPSAP.MIB MSFT.MIB PRINTMIB.MIB WINS.MIB DHCP.MIB
	
	Please note that with MIBCC.EXE version 2 you not need to include SMI.MIB because MIBCC.EXE recognizes SMI.MIB internally. In this example, you need to copy OUT.BIN to MIB.BIN and place it in the %SYSTEMROOT%\SYSTEM32 directory. If you compile without the -o option, MIBCC.EXE overwrites the MIB.BIN file that is already in your %SYSTEMROOT%\SYSTEM32 directory.
	
	Additional query words: prodnt snmp mib
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
