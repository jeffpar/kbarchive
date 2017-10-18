---
layout: page
title: "Q248413: INFO: NDIS Debug Tracing and Kernel Debugger Extensions"
permalink: kb/248/Q248413/
---

## Q248413: INFO: NDIS Debug Tracing and Kernel Debugger Extensions

	Article: Q248413
	Product(s): Microsoft Windows NT
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbDDK kbDebug kbKMode kbNDIS kbOSWin2000 kbDSupport kbGrpDSNTDDK
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows2000 DDK contains a new NDIS kernel debugger extension DLL to facilitate
	examination of a wider range of NDIS kernel data structures, and enable debug
	tracing of various NDIS components on the checked build of NDIS.sys.
	
	MORE INFORMATION
	================
	
	Installing the NDIS Debugger Extensions
	---------------------------------------
	
	To install the extension, copy the Ndiskd.dll from \ntddk\bin\w2kfre or
	\ntddk\bin\w2kchk depending on the target computer's build to the same directory
	as Windbg.exe or i386kd.exe. Then, copy the corresponding NDIS.sys symbols files
	(Ndis.pdb and Ndis.dbg) to the host computer's symbols directory.
	
	Using the NDIS Debugger Extensions
	----------------------------------
	
	To use the new extensions, the debuggers offer two methods. At the command
	prompt, after establishing a session, enter:
	
	- " !ndiskd.extension_name [arguments] " (without the quotation marks) The
	  debugger loads Ndiskd.dll, calls the entry point (extension_name) specified,
	  and passes arguments to the entry point.
	
	-or-
	
	- " !load ndiskd.dll " (without the quotation marks) The debugger loads
	  Ndiskd.dll, but does not call the entry point.
	
	In either case, once the debugger has loaded Ndiskd.dll, you can run any
	extension command contained in it by using only the extension's name:
	
	!extension name
	
	NOTE: When you run an extension without specifying the .dll, the debugger looks
	for it in the current extension .dll, which is the last one loaded. If it does
	not find the extension in the current extension .dll, it searches through the
	loaded extension .dlls, in the order that they were loaded, and runs the first
	instance of the extension that it finds.
	
	Quick Help 
	----------
	
	For a quick reference of all the extensions name, enter "!help" (without the
	quotation marks) at the WinDbg command line after loading the Ndiskd.dll. The
	information that appears will be similar to the following:
	
	!ndiskd.help
	Ndis extensions:
	  dbglevel [Level [Level] ...]        toggle debug level
	  dbgsystems [Level [Level] ...]      toggle debug systems
	  miniports <'all'>                   list all Miniports
	  gminiports <'all'>                  list all Miniports, even those not started yet
	  miniport <Miniport Block>           dump Miniport block
	  mopen <Miniport Open Block>         dump Miniport Open block
	  protocols                           dump all protocols and their opens
	  protocol <Protocol Block>           dump the protocols block's contents
	  pkt <Packet> <Verbosity>            dump the contents of the packet
	  int_ctxt <NDIS_MINIPORT_INTERRUPT*> dump the second argument of ndisMIsr
	  pktpool <pointer to Pkt_Pool> <Num> dump the contents of the ndis_pkt_pool. Not for Alpha and Win64
	
	Enable NDIS Debug Tracing
	-------------------------
	
	!dbglevel and !dbgsystem:
	
	You can enable different levels of debug tracing in various components of NDIS by
	using these two extensions. These extensions require a CHECKED version of
	NDIS.sys on the target system. Instead of installing an entire checked build
	system, you can also just copy the checked build of NDIS.sys to get debug
	tracing. The "dbgsystem" lets you chose the various NDIS components and the
	"dbglevel" determines the level or amount of debug tracing in the selected
	components.
	
	>!dbglevel
	Current setting:   INFO
	
	Available settings:
	 LOG  WARN  ERR  FATAL
	
	>!dbgsystems
	Current settings:
	Available settings:
	 INIT  CONFIG  SEND  RECV  PROTOCOL
	 BIND  BUS_QUERY  REGISTRY  MEMORY  FILTER
	 REQUEST  WORK_ITEM  PNP  PM  OPEN
	 LOCKS  RESET  WMI  NDIS_CO  REFERENCE
	
	You can also enable debug tracing through the registry by adding the following
	values to the
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NDIS\Parameters key.
	
	"DebugLevel"=dword:00000000
	"DebugSystems"=dword:000030F3
	"DebugBreakPoint"=dword:00000001
	
	Acceptable values for DebugLevel and DebugSystems are in the following list. The
	DebugBreakPoint, if set to 1, causes NDIS to debug break in it's DriverEntry.
	
	DebugLevel:
	
	DBG_LEVEL_INFO    0x00000000
	DBG_LEVEL_WARN    0x00001000
	DBG_LEVEL_ERR     0x00002000
	DBG_LEVEL_FATAL   0x00003000
	
	DebugSystems:
	
	DBG_COMP_INIT         0x00000001
	DBG_COMP_CONFIG       0x00000002
	DBG_COMP_SEND         0x00000004
	DBG_COMP_RECV         0x00000008
	DBG_COMP_MEMORY       0x00000010
	DBG_COMP_FILTER       0x00000020
	DBG_COMP_PROTOCOL     0x00000040
	DBG_COMP_REQUEST      0x00000080
	DBG_COMP_UNLOAD       0x00000100
	DBG_COMP_WORK_ITEM    0x00000200
	DBG_COMP_OPEN         0x00000400
	DBG_COMP_LOCKS        0x00000800
	DBG_COMP_PNP          0x00001000
	DBG_COMP_PM           0x00002000
	DBG_COMP_RESET        0x00004000
	DBG_COMP_ALL          0xFFFFFFFF
	
	This registry technique is useful if you don't have the checked symbols of
	NDIS.sys. One drawback is that you have to restart your system every time you
	change the values.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q164459 HOWTO: Debugging NDIS 4.0 Drivers
	
	Additional query words: driver verifier
	
	======================================================================
	Keywords          : kbDDK kbDebug kbKMode kbNDIS kbOSWin2000 kbDSupport kbGrpDSNTDDK 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000
	Issue type        : kbinfo
	
	=============================================================================
	
