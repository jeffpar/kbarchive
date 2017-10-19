---
layout: page
title: "Q279631: How to Use the SPCheck Tool to Determine the Service Pack Level"
permalink: /kb/279/Q279631/
---

## Q279631: How to Use the SPCheck Tool to Determine the Service Pack Level

	Article: Q279631
	Product(s): Microsoft Windows NT
	Version(s): 2000,2000 SP1,2000 SP2,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6a,5.5,5.5 SP
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Professional 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Server 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Advanced Server 
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	- Microsoft Windows XP Home Edition 
	- Microsoft Windows XP Professional 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to use the SPCheck tool to determine the service pack
	level of installed components on a file-by-file basis.
	
	MORE INFORMATION
	================
	
	Description
	-----------
	
	You can use the SPCheck to determine the service pack level of installed
	components on computers that are running either Windows NT Server 4.0 or Windows
	2000 Server. The SPCheck tool generates a report that lists the origin of each
	file for each installed component.
	
	SPCheck reports on the current service pack level of the following components.
	
	Windows NT 4.0-Based Computers:
	
	- DHCP Server
	
	- DNS
	
	- Remote Access Service (RAS)
	
	- Routing and Remote Access service
	
	- Simple Network Management Protocol (SNMP)
	
	- WINS
	
	- Internet Protocol (TCP/IP)
	
	- NWLink (IPX/SPX)
	
	- Exchange Server 5.5
	
	Windows 2000-Based Computers:
	
	- DHCP Server
	
	- DNS
	
	- Simple Network Management Protocol (SNMP)
	
	- WINS
	
	- Internet Protocol (TCP/IP)
	
	- NWLink (IPX/SPX)
	
	- Exchange Server 5.5
	
	SPCheck examines each component one file at a time. Because of this, SPCheck must
	run under a security context that is equivalent to the local administrator
	account. If SPCheck is not run in this security context, files may be reported
	as missing, even though they are installed on the computer. SPCheck searches for
	files by using the "PATH" environmental variable. If files are reported as
	missing (although they can be found on the target computer), ensure that the
	folder or folders which the component is installed in are included in the PATH
	environmental variable.
	
	How to Obtain the SPCheck Tool
	------------------------------
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Windows XP:
	DownloadDownload Xpspchk.exe now
	(http://download.microsoft.com/download/whistler/Utility/Q279631/NT45XP/EN-US/XPSPChk.exe)
	
	Windows 2000:
	DownloadDownload W2kspchk.exe now
	(http://download.microsoft.com/download/win2000pro/Utility/Q279631/NT5/EN-US/W2kSPChk.exe)
	
	Windows NT:
	DownloadDownload Nt4spchk.exe now
	(http://download.microsoft.com/download/winntsp/Utility/Q279631/NT4/EN-US/NT4SPChk.exe)
	
	Exchange Server 5.5:
	DownloadDownload Exch55spchk.exe now
	(http://download.microsoft.com/download/exch55/Utility/Q279631/NT45XP/EN-US/Exch55SPChk.exe)
	
	How to Install the SPCheck Tool
	-------------------------------
	
	To install SPCheck, view one of the following sections, depending on your
	operating system.
	
	Windows XP:
	
	Extract the Xpspchk.exe file to a folder on your hard disk, and then follow the
	installation instructions that are listed in the Readme.txt file.
	
	Windows 2000:
	
	Extract the contents of the W2kspchk.exe file to a folder on your hard disk, and
	then run Spcheck.exe.
	
	Windows NT:
	
	Extract the contents of the Nt4spchk.exe file to a folder on your hard disk, and
	then run Spcheck.exe.
	
	Exchange Server 5.5:
	
	Extract the contents of the Exch55spchk.exe file to a folder on your hard disk,
	and then run Spcheck.exe.
	
	How to Use the SPCheck Tool
	---------------------------
	
	SPCheck requires the following three files to work correctly:
	
	- Spcheck.exe
	
	- Dbghelp.dll
	
	- Spcheck.ini
	
	Copy these three files into any folder on the target server. By default, the
	Dbghelp.dll file is included with Windows 2000, so you do not need to copy the
	file to the target computer.
	
	You can use the following switches with SPCheck:
	
	- Use the /i switch to specify the name of the .ini file that is used. If this
	  switch is not specified, Spcheck.ini is the default .ini file that is used.
	
	- Use the /r switch to specify the name of the report file that is generated
	  when the tool is run. If this switch is not specified, the default report
	  name "Spcheck.rpt" is used.
	
	By default, the report is created in the same folder that Spcheck was run from,
	and the report has the following format, where Missing indicates that the file
	was not found on the target computer, and Unknown indicates that the file was
	found on the target computer, but did not match any of the files that were
	recorded in the .ini file:
	
	  [WINS]
	  C:\WINNT\System32\Jet500.dll SP0-3
	  C:\WINNT\System32\Jet.dll SP0-6a
	  C:\WINNT\System32\Wins.exe Missing
	  C:\WINNT\System32\Winsadmin.exe Unknown
	  C:\WINNT\System3232\Winsctrl.dll SP5
	
	Some files are identical in more than one service pack. For example, "SP0-3"
	indicates that the file was not changed in any of the first three service packs.
	As long as the service pack that should be installed on the computer is included
	in the range that is reported for a file, the file can be considered consistent
	with that particular service pack. Consider the following example report:
	
	  [RAS]
	  C:\WINNT\System32\Rascfg.dll SP0-6a
	  C:\WINNT\System32\Rasfil32.dll Q189594
	  C:\WINNT\System32\Rasadmin.exe SP0-6a
	  C:\WINNT\System32\Rassapi.dll SP0-1
	  C:\WINNT\System32\Rasphone.exe SP0-2
	
	If the target computer was supposed to have Service Pack 1 (SP1) installed on it,
	this report shows that SP1 is within the ranges that were specified for each
	file. Because of this, the target computer contains RAS-related files that are
	consistent with the service pack that is installed. SPCheck may also report a Q
	article number instead of a service pack number. This indicates that a hot fix
	has been installed. Query the Q article number in TechNet for details about the
	particular hot fix that was installed. Note that SPCheck only detects a very
	small number of hot fixes. Because of this, hot fixed files may be reported as
	unknown files.
	
	
	
	Additional query words: networking hot fix jet500 jet wins winsadmin winsctrl rascfg rasfil32 rasadmin rassapi rasphone
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinXPHome kbWinXPPro kbExchangeSearch kbExchange550 kbZNotKeyword2 kbWinAdvServSearch kbWin2000AdvServSP2 kbWin2000AdvServSP1 kbWin2000ProSP2 kbWin2000ProSP1 kbwin2000ServSP1 kbwin2000ServSP2 kbWinNTSEnt400SP6a kbWinNTW400SP6a kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4 kbWinXPProSearch kbWinXPHomeSearch kbWinXPSearch
	Version           : :2000,2000 SP1,2000 SP2,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6a,5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbhowto
	
	=============================================================================
	
