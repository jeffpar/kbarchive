---
layout: page
title: "Q183864: Windows NT 4.0 Resource Kit Perfm.bat Error"
permalink: /kb/183/Q183864/
---

## Q183864: Windows NT 4.0 Resource Kit Perfm.bat Error

	Article: Q183864
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running the Perfm.bat batch file from the Windows NT resource kit to
	install SNMP Performance Monitor Agent Extensions, you may receive the error:
	
	  Unable to open 'C:\NTRESKIT\LMMIB2MIB'
	
	Also, the Mib.bin file created by this batch file is incorrectly only 23 bytes
	and Snmputil.exe queries may not work properly.
	
	CAUSE
	=====
	
	The batch Perfm.bat file supplied with the Windows NT resource kit to
	automatically install SNMP Performance Monitor Agent Extensions has various
	typos and errors that cause it to fail.
	
	RESOLUTION
	==========
	
	The following batch file, if run from the NTReskit directory at an MS-DOS prompt
	inside of Windows NT, should create the correct Mib.bin file and add the
	Performance Counter Agent Extensions correctly:
	
	     @echo off
	     echo "Creating perfmib....."
	     @echo on
	     perf2mib perfmib.mib perfmib.ini memory 1 memory processor 2 CPU
	     "Network   Segment" 3 net PhysicalDisk 4 disk
	     @echo off
	     echo "Compiling perfmib"
	     @echo on
	     mibcc -omib.bin -n -t -w2 SMI.MIB LMMIB2.MIB mib_ii.mib perfmib.mib
	
	     @echo off
	     echo "Stopping snmp service"
	     @echo on
	     net stop snmp
	
	     @echo off
	     echo "Saving old mib to mib.old...."
	     @echo on
	     move %systemroot%\system32\mib.bin %systemroot%\system32\mib.old
	
	     @echo off
	     echo "Copying perfmib files from NTResKit to system32"
	     @echo on
	     copy perfmib.dll %systemroot%\system32\perfmib.dll
	     copy perfmib.ini %systemroot%\system32\perfmib.ini
	     copy mib.bin %systemroot%\system32\mib.bin
	
	     @echo off
	     echo "Registering new Mibs"
	     @echo on
	     regini perfmib.reg
	
	     @echo off
	     echo "Restarting SNMP Service"
	     @echo on
	     net start snmp
	
	NOTE: If the SNMP Service causes an access violation when it restarts, restart
	the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the resource kits for Microsoft
	NT Server 4.0 and Workstation 4.0. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To test the results of the batch file above, try the following command using the
	Snmputil.exe utility from the Windows NT resource kit:
	
	SNMPUTIL get <agent> <community>
	
	.iso.org.dod.internet.private.enterprises.microsoft.software.1.3.1.1.1.1.0
	
	The results should look similar to the following:
	
	>snmputil get <agent / computernmae> <communtiy>
	
	.iso.org.dod.internet.private.enterprises.microsoft.software.1.3.1.1.1.1.0
	
	  Variable =
	
	.iso.org.dod.internet.private.enterprises.microsoft.software.1.3.1.1.1.1.0
	
	  Value    = INTEGER - 757760
	
	The above example is the "memory free" OID.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
