---
layout: page
title: "Q102450: Windows NT Uses DLC for IBM Connectivity and Network Printing"
permalink: /kb/102/Q102450/
---

## Q102450: Windows NT Uses DLC for IBM Connectivity and Network Printing

	Article: Q102450
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.1,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows NT Workstation versions 3.1, 4.0 
	- Microsoft Windows NT Server versions 3.1, 4.0 
	- Microsoft Windows NT Advanced Server, versions 3.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Data link control (DLC) is a transport protocol defined by IBM. It is mainly
	used to communicate with IBM mainframes and minicomputers, typically model 3270
	or AS/400 machines. In addition, Windows NT also uses DLC to communicate with
	network printers such as the Hewlett-Packard (HP) LaserJet 4 Si.
	
	MORE INFORMATION
	================
	
	DLC works with Token Ring (802.5) or Ethernet (802.3) NDIS (network driver
	interface specification) MAC (media access control) drivers.
	
	DLC is available to 32-bit Windows NT-based programs and 16-bit MS-DOS-based and
	Windows-based programs. Since there are few 32-bit 3270 emulators available, DLC
	is typically by 16-bit 3270 and 5250 (AS/400) emulators. These are
	character-mode or graphics-mode MS-DOS-based programs or Windows-based programs
	that communicate with an IBM mainframe using 3270 terminal emulation.
	
	The following 16-bit 3270 and 5250 emulation programs should work normally with
	Windows NT:
	
	For IBM 3270:
	
	  AttachMate Extra! for Windows v 3.3, 3.4 and 3.5
	  AttachMate Extra! for MS-DOS v 2.23
	  IBM PC/3270 v 2.0 for Windows
	  IBM PC/3270 v 2.0 for MS-DOS
	  IBM PC/3270 v 3.0 for Windows
	  IBM PC/3270 v 3.0 for MS-DOS
	  Eicon Access for Windows v 3.11, 3.14
	  Dynacomm Elite/3270
	
	For IBM 5250:
	
	  IBM PCS v 2.0
	  NSA Elite/400
	
	Windows NT also uses DLC to communicate with network printers, such as the HP
	LaserJet 4 Si. Such printers have a network interface card (NIC) that contains a
	MAC and a DLC protocol stack. Print jobs are sent to these printers as DLC-level
	frames over the network, instead of over the parallel port. The advantages of
	such printer setups are increased print job download speed and the ability to
	have the printer physically distant from its server. Note that even though the
	printer has the ability to receive print jobs over the network, with Windows NT,
	it is usually controlled by a print server that has sole control of the network
	connection to the printer (meaning that other computers cannot connect to the
	printer, even if they know the network address of the printer). This is because
	DLC uses service access points (SAPs) and only one is available for connections.
	Once a remote computer has connected to the SAP, subsequent connect requests are
	denied at the printer.
	
	Additional query words: adapter prodnt PROT005
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ400 kbWinNTAdvServ310 kbwin2000ServSearch kbwin2000Search kbWinNTS310search kbWinNT310Search kbWinNTW310Search kbWinAdvServSearch
	Version           : :2000,3.1,4.0
	
	=============================================================================
	
