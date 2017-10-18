---
layout: page
title: "Q164613: Installation Changes Made by Novell IntranetWare Client"
permalink: kb/164/Q164613/
---

## Q164613: Installation Changes Made by Novell IntranetWare Client

	Article: Q164613
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg kbnetwork kbsetup kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the IntranetWare Client for Windows NT version 4.0 manufactured by Novell is
	installed on a computer running Windows NT 4.0 Workstation, it replaces the
	Client Services for NetWare (CSNW) service.
	
	MORE INFORMATION
	================
	
	The installation process removes and replaces files and makes extensive changes
	to the registry. In addition to the list below, the IntranetWare client also
	replaces the CSNW icon in Control Panel with an inactive "NetWare" icon.
	
	To make configuration changes to the IntranetWare client, double-click the
	Network icon in Control Panel. Click Services, and then click Properties. The
	following non-exhaustive list identifies some of these changes:
	
	File System Additions, Changes, Deletions
	-----------------------------------------
	
	E:\<WINNTROOT>
	
	  Add/change nwelcome.bmp
	  Add/change phasers.wav
	
	E:\<WINNTROOT>\Profiles\All Users\Start Menu\Programs\NetWare (Common)
	
	  SFN: E:\WINNTWRK\Profiles\ALLUSE~1\STARTM~1\Programs\NETWAR~1
	  Add/change NetWare Change Password.lnk (SFN: NETWAR~2.LNK)
	  Add/change NetWare Client for Windows NT help.lnk (SFN: NETWAR~4.LNK)
	  Add/change NetWare GUI Login.lnk (SFN: NETWAR~1.LNK)
	  Add/change NetWare Send Message.lnk (SFN: NETWAR~3.LNK)
	  Add/change ReadMe.lnk
	
	E:\<WINNTROOT>\repair
	
	  Add/change setup.log
	
	E:\<WINNTROOT>\system
	
	  Add/change audwin16.dll
	  Add/change calwin16.dll
	  Add/change clnwin16.dll
	  Add/change clxwin16.dll
	  Add/change lgnw3116.dll
	  Add/change locwin16.dll
	  Add/change loginw31.dll
	  Add/change loginw31.exe
	  Add/change ncpwin16.dll
	  Add/change netware.drv
	  Add/change netwin16.dll
	  Add/change nwcalls.dll
	  Add/change nwgdi.dll
	  Add/change nwlocale.dll
	  Add/change nwnet.dll
	  Add/change nwpsrv.dll
	  Add/change pnw.dll
	  Add/change prtwin16.dll
	  Add/change tli_win.dll
	
	E:\<WINNTROOT>\system\NLS
	
	E:\<WINNTROOT>\system\NLS\ENGLISH
	
	  Add/change login.dat
	  Add/change login.msg
	  Add/change loginw31.hlp
	  Add/change netwarer.drv
	
	E:\<WINNTROOT>\system32
	
	  Delete     NETWARE.DRV
	  Delete     NWAPI32.DLL
	  Delete     NWC.CPL
	  Add/change audwin32.dll
	  Add/change calwin32.dll
	  Add/change clnwin32.dll
	  Add/change clxwin32.dll
	  Add/change ctl3d32.dll
	  Add/change lgnwnt32.dll
	  Add/change locwin32.dll
	  Add/change loginwnt.dll
	  Add/change loginwnt.exe
	  Add/change lslstats.h
	  Add/change ncpwin32.dll
	  Add/change ndszip.dll
	  Add/change netware.dll
	  Add/change netwin32.dll
	  Add/change novell.ani
	  Add/change novnpnt.dll
	  Add/change nwchgpwd.exe
	  Add/change nwcpl.cpl
	  Add/change nwfmext.dll
	  Add/change nwgina.dll
	  Add/change nwipxspx.dll
	  Add/change nwlscrpt.exe
	  Add/change nwmsgsvc.exe
	  Add/change nwpapi32.dll
	  Add/change nwpfctrs.dll
	  Add/change nwpsrv32.dll
	  Add/change nwrights.dll
	  Add/change nwsetup.dll
	  Add/change nwshlxnt.dll
	  Add/change nwsipx32.dll
	  Add/change nwsndmsg.exe
	  Add/change nwspool.dll
	  Add/change nwsubs.inf
	  Add/change nwv1_0.dll
	  Add/change odinsup.inf
	  Add/change odistats.h
	  Add/change oem.cnt
	  Add/change oemnadoa.inf
	  Add/change oemnadob.inf
	  Add/change oemnadoc.inf
	  Add/change oemnadod.inf
	  Add/change oemnadoe.inf
	  Add/change oemnadof.inf
	  Add/change oemnadog.inf
	  Add/change oemnadoh.inf
	  Add/change oemnprnw.inf
	  Add/change oemnsvip.inf
	  Add/change perfC009.BAK
	  Add/change perfH009.BAK
	  Add/change prtwin32.dll
	  Add/change rdrstats.h
	  Add/change vipx.exe
	  Add/change vipxvdd.dll
	  Add/change vlmsup.dll
	  Add/change vlmsup.exe
	  Add/change AUTOEXEC.NT
	  Add/change perfc009.dat
	  Add/change perfh009.dat
	
	E:\<WINNTROOT>\system32\drivers
	
	  Add/change nwip.sys
	  Add/change odinsup.sys
	
	E:\<WINNTROOT>\system32\NetWare
	
	  Add/change ethertsm.nlm
	  Add/change fdditsm.nlm
	  Add/change lsl.sys
	  Add/change nbi.sys
	  Add/change nwfs.sys
	  Add/change nwsipx32.sys
	  Add/change odiload.sys
	  Add/change resmgr.sys
	  Add/change sroute.sys
	  Add/change tokentsm.nlm
	
	E:\<WINNTROOT>\system32\NLS
	
	  Add/change 1250_uni.001
	  Add/change 1251_uni.001
	  Add/change 1252_uni.001
	  Add/change 1253_uni.001
	  Add/change 1254_uni.001
	  Add/change 1255_uni.001
	  Add/change 1256_uni.001
	  Add/change 1257_uni.001
	  Add/change 874_uni.001
	  Add/change 932_uni.001
	  Add/change 936_uni.001
	  Add/change 949_uni.001
	  Add/change 950_uni.001
	  Add/change uni_1250.001
	  Add/change uni_1251.001
	  Add/change uni_1252.001
	  Add/change uni_1253.001
	  Add/change uni_1254.001
	  Add/change uni_1255.001
	  Add/change uni_1256.001
	  Add/change uni_1257.001
	  Add/change uni_874.001
	  Add/change uni_932.001
	  Add/change uni_936.001
	  Add/change uni_949.001
	  Add/change uni_950.001
	  Add/change uni_col.001
	  Add/change uni_mon.001
	
	E:\<WINNTROOT>\system32\NLS\ENGLISH
	
	  Add/change ethertsm.msg
	  Add/change fdditsm.msg
	  Add/change login.dat
	  Add/change login.msg
	  Add/change msgsvcr.dll
	  Add/change netwarer.dll
	  Add/change novnpntr.dll
	  Add/change nt3setup.cnt
	  Add/change nt3setup.hlp
	  Add/change nt3using.cnt
	  Add/change nt3using.hlp
	  Add/change nt4setup.cnt
	  Add/change nt4setup.hlp
	  Add/change nt4using.cnt
	  Add/change nt4using.hlp
	  Add/change ntadmin.cnt
	  Add/change ntadmin.hlp
	  Add/change nwcpl.hlp
	  Add/change nwcplr.dll
	  Add/change nwevents.dll
	  Add/change nwginar.dll
	  Add/change nwnthelp.hlp
	  Add/change nwrights.hlp
	  Add/change nwsetupr.dll
	  Add/change nwspoolr.dll
	  Add/change odintmsg.dll
	  Add/change readme.hlp
	  Add/change setup.hlp
	  Add/change tokentsm.msg
	
	Registry Key Changes/Additions
	------------------------------
	
	HKLM\SYSTEM\Clone (many changes too numerous to mention)
	HKLM\SYSTEM\CurrentControlSet\Control\hivelist
	HKLM\SYSTEM\CurrentControlSet\Control\Lsa
	HKLM\SYSTEM\CurrentControlSet\Control\NetworkProvider\Order
	HKLM\SYSTEM\CurrentControlSet\Control\NetworkProvider\ShortName
	HKLM\SYSTEM\CurrentControlSet\Control\Print\Providers
	HKLM\SYSTEM\CurrentControlSet\Control\Print\Providers
	\NetWare or Compatible Network
	HKLM\SYSTEM\CurrentControlSet\Control\Print\Providers
	\NetWare Print Services
	HKLM\SYSTEM\CurrentControlSet\Control\ServiceGroupOrder
	HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment
	HKLM\SYSTEM\CurrentControlSet\Control\WOW
	HKLM\SYSTEM\CurrentControlSet\Services\EventLog
	HKLM\SYSTEM\CurrentControlSet\Services\LanmanServer
	HKLM\SYSTEM\CurrentControlSet\Services\LanmanWorkstation
	HKLM\SYSTEM\CurrentControlSet\Services\LSL
	HKLM\SYSTEM\CurrentControlSet\Services\Nbf
	HKLM\SYSTEM\CurrentControlSet\Services\NBI
	HKLM\SYSTEM\CurrentControlSet\Services\NetBIOS
	HKLM\SYSTEM\CurrentControlSet\Services\NWPopUp
	HKLM\SYSTEM\CurrentControlSet\Services\NWSIpx32
	HKLM\SYSTEM\CurrentControlSet\Services\NetWareWorkstation
	HKLM\SYSTEM\CurrentControlSet\Services\OdiLoad
	HKLM\SYSTEM\CurrentControlSet\Services\ODINSUP
	HKLM\SYSTEM\CurrentControlSet\Services\ODINSUP2
	HKLM\SYSTEM\CurrentControlSet\Services\OdiSourceRouting
	HKLM\SYSTEM\CurrentControlSet\Services\ResMgr
	HKLM\SYSTEM\CurrentControlSet\Services\Tdi
	HKLM\SYSTEM\CurrentControlSet\Services\WinSock\Setup Migration
	HKLM\SYSTEM\CurrentControlSet\Services\WinSock2\Parameters
	HKLM\SOFTWARE\Classes
	HKLM\SOFTWARE\Classes\Printers
	HKLM\SOFTWARE\Microsoft\Ncpa\CurrentVersion
	HKLM\SOFTWARE\Microsoft\NwlnkIpx\CurrentVersion
	HKLM\SOFTWARE\Microsoft\Rpc
	HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkCards\2
	HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NWCS
	HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon
	HKLM\SOFTWARE\Novell
	
	Keys Deleted
	------------
	
	HKLM\SYSTEM\CurrentControlSet\Control\Print\Providers
	\NetWare or Compatible Network
	HKLM\SYSTEM\CurrentControlSet\Services\Nbf
	HKLM\SYSTEM\CurrentControlSet\Services\NWCWorkstation
	HKLM\SYSTEM\CurrentControlSet\Services\NwRdr
	HKLM\SOFTWARE\Classes\CLSID
	HKLM\SOFTWARE\Classes\Folder\shellex\ContextMenuHandlers\NetWareUNCMenu
	HKLM\SOFTWARE\Classes\Network\Type\3
	HKLM\SOFTWARE\Microsoft\Nbf
	HKLM\SOFTWARE\Microsoft\NWCWorkstation
	HKLM\SYSTEM\CurrentControlSet\Services\WinSock2\Parameters
	\Protocol_Catalog 9\Catalog_Entries
	HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\ShellExtensions
	\Approved (values deleted)
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q161733
	  TITLE : Err Msg: Unable to Locate NWAPI32.DLL with IntranetWare Client
	
	The IntranetWare client is manufactured by Novell, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: client32
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg kbnetwork kbsetup kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	Issue type        : kbprb kbinfo
	
	=============================================================================
	
