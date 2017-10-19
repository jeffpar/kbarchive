---
layout: page
title: "Q239834: How to Remove the NWLink IPX/SPX Protocol, CSNW, and GSNW"
permalink: /kb/239/Q239834/
---

## Q239834: How to Remove the NWLink IPX/SPX Protocol, CSNW, and GSNW

	Article: Q239834
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can only uninstall the NWLink IPX/SPX protocol, Client Services for NetWare
	(CSNW), and Gateway Service for NetWare (GSNW) using the graphical user
	interface (GUI) in Windows NT. However, when you want to to simultaneously
	uninstall NWLink IPX/SPX, CSNW, and GSNW from a large number of computers, using
	the GUI may not be an efficient and flexible method. Using Setup.exe, there is a
	way to automate this uninstall process by running a batch file.
	
	MORE INFORMATION
	================
	
	To uninstall NWLink IPX/SPX Protocol:
	
	1. Create a batch or script file with the instructions in the following
	  procedure and name it as you like. For example, Unistipx.bat. Each Setup.exe
	  entry and its parameters have to be in one line without any LF and CR
	  characters.
	
	2. Type the following lines in the batch file to uninstall CSNW and GSNW:
	
	  %SystemRoot%\system32\SETUP.EXE /f /i%SystemRoot%\system32\ncpashel.inf
	  /T NTN_InstallMode = DEINSTALL /T NTN_Origination = DEINSTALL
	  /T NTN_Infname = %SystemRoot%\system32\oemnsvnw.inf
	  /T NTN_SRCPATH = %SystemRoot%\system32 /T NTN_Infoption = NWWKSTA
	
	3. Type the following lines to uninstall the NWLink SPX/IPX protocol:
	
	  %SystemRoot%\system32\SETUP.EXE /f /i%SystemRoot%\system32\ncpashel.inf
	  /T NTN_InstallMode = DEINSTALL /T NTN_Origination = DEINSTALL
	  /T NTN_Infname = %SystemRoot%\system32\oemnxpip.inf
	  /T NTN_SRCPATH = %SystemRoot%\system32 /T NTN_Infoption = NWLNKIPX
	
	4. To update the bindings, run the Runncpa.exe program from BackOffice SNA
	  Server.
	
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Issue type        : kbinfo
	
	=============================================================================
	
