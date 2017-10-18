---
layout: page
title: "Q242571: How To Manually Uninstall SNA Server 4.0"
permalink: kb/242/Q242571/
---

## Q242571: How To Manually Uninstall SNA Server 4.0

	Article: Q242571
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to manually uninstall SNA Server 4.0 for Windows NT
	when you are unable to uninstall SNA Server with the Add/Remove Programs tool in
	Control Panel, or when using SNA Server Setup (Setup.exe).
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To manually uninstall SNA Server, complete the following steps:
	
	1. Click Start, point to Programs, and choose Windows NT Explorer.
	
	2. Locate the appropriate folder corresponding to version of SNA Server was
	  installed. The default folders are listed below:
	
	   - SNA Server 4.0 Retail - C:\SNA
	
	   - SNA Server 4.0 SP2 Retail - C:\Program Files\SNA
	
	3. Rename the SNA folder to Old_SNA. For information about how to rename a
	  folder click Start, click Help, click the Index tab, type renaming , and then
	  double-click the Renaming folders topic.
	
	4. Remove the following folder:
	
	  \Winnt\Profiles\All Users\Start Menu\Programs\Microsoft SNA Server
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall your operating system. Microsoft cannot guarantee
	  that problems resulting from the incorrect use of Registry Editor can be
	  solved. Use Registry Editor at your own risk.
	
	5. Using Registry Editor, remove the following keys:
	
	NOTE: Depending on what components were chosen during the initial installation,
	all keys listed here may not exist.
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ADVSDLCLS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ADVSYNCDD_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ANDWTDLCDD_2.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ANDWTDLCLS_2.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ATMSDLCLS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ATMSYNCDD_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ATMX25LS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\BARRCDLCDD_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\BARRCDLCLS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\BARRSDLCLS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\BARRSYNCDD_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\DCADFTDD_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\DCADFTLS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\DCASDLCLS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\DCASYNCDD_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\DCAX25LS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\DGIPSDLCLS_3.1.1_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\DGIPX25LS_3.1.1_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\DGISYNCDD_3.1.1_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\DIGISYNCDD_3.1.1_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\DIGIX25LS_3.1.1_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\GSNECADD_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\GSNECALS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\IBMDFTDD_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\IBMDFTLS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\IBMSDLCLS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\IBMSYNCDD_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\IBMTDLCDD_2.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\IBMTDLCLS_2.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\IBMX25LS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\MGATELS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\MGATEXLS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\MGSYNCDD_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\MGT1LS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\MGT1XLS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NDISTokenRingLS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NVRunCmd
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\POL3174E_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\POL3174ELS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\POL3174P_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\POL3174PLS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SNACLASPLS_2.1_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SNAREMLSLS_1.0_*
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SNA OLE DB
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SNA Print Server
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SNA Server
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\TN5250 Server
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Program Groups\Microsoft SNA Server
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\ADVSDLC*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\ADVSYNC*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\AFTPD
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Andwtdlc
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\AtmSdlc*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\ATMSYNC
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\AtmX25*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\BarrC*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\BarrS*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\BARRSYNC
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Chanin
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DCADFTDD
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DcaDft*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DcaSdlc*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DCASYNC
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DcaX25*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DDM001
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DDM6DB
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DDM999
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DGIPSYNC
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DgiX25*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DGPSdl*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DGPX25*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DIGISYNC
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\GsnChan*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\GSNECADD
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\IBMSYNC
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\IbmTdlc
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MGSYNC
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MGT1S*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MGT1X*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MngAgent
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NVAlert
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NVRunCmd
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\PO005
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\PO009
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\POL3174E
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\POL3174P
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\POLELS*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\POLPLS*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaBase
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaDemo*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaDdm
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaDlc*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaHostProcess
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaMG*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaMGX*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaNetMn
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaPrint
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaRem*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaRpcService
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaSdlc*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaServr
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaTdlc*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaX25*
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\TN3270
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\TN5250
	
	6. After it has been confirmed that SNA Server 4.0 was successfully removed then
	  the Old_SNA folder may be removed.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
