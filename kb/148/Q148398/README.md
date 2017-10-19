---
layout: page
title: "Q148398: Remotely Managing FPNW Users in Windows NT Workstation/Server"
permalink: /kb/148/Q148398/
---

## Q148398: Remotely Managing FPNW Users in Windows NT Workstation/Server

	Article: Q148398
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can manage File and Print Services for NetWare (FPNW) users remotely from a
	Windows NT Workstation or Windows NT Server (member server) using User Manager
	for Domains.
	
	You cannot manage FPNW users remotely from a Windows for Workgroups computer
	using the 16-bit Windows NT Server Tools.
	
	MORE INFORMATION
	================
	
	NOTE: User Manager for Domains (USRMGR.EXE), which is included with the Windows
	NT Resource Kit, does not support File and Print Services for Netware user
	options. If FPNW user configuration options are required, please follow the
	procedures listed below for Windows NT Workstation or Windows NT Server (member
	server).
	
	Configuring Windows NT Member Server To Remotely Manage FPNW Users
	------------------------------------------------------------------
	
	1. Make sure that your Windows NT member server is part of a domain (instead of
	  the administrator logging on to the local computer account). For additional
	  information, please see the following article in the Microsoft Knowledge
	  Base:
	
	  ARTICLE-ID: Q142008
	  TITLE : FPNW Options Are Not Available Under User Manager
	
	2. Verify that Windows NT 3.51 Service Pack 3 (SP3) or greater is installed on
	  your system. To do this, select About Program Manager from the Help menu in
	  Program Manager. To obtain the latest Windows NT Service Pack, please see the
	  following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q128465
	  TITLE : How To Obtain Windows NT Version 3.51 U.S. Service Pack
	
	3. Log on to the domain as Administrator or Administrator-equivalent user and
	  run User Manager for Domains from the Administrative Tools group.
	
	4. Insert the FPNW compact disk in the CD-ROM drive or connect to the share
	  where the software is located. In Control Panel Network, click Add Software.
	  Select the "<Other> Requires disk from manufacturer" option. Type the
	  path to the FPNW software for the type of processor you are installing (for
	  example, if you install FPNW from an Intel-based computer and the network
	  share of drive H:, type: "H:\I386\" (without quotes). Select the FPNW
	  Administrative Tools and click OK. The files are copied over to your system.
	  Once complete, click OK in the Network Settings dialog box. Restart the
	  computer.
	
	5. After you restart Windows NT, run User Manager for Domains from the
	  Administrative Tools group. After you select a user, view the user's
	  properties. A NW Compatible button should now appear. Click this button to
	  configure FPNW users.
	
	Configuring Windows NT Workstation To Remotely Manage FPNW Users
	----------------------------------------------------------------
	
	1. Make sure that your Windows NT Workstation is part of a domain (instead of
	  the administrator logging on to the local computer account). For additional
	  information, please see the following article in the Microsoft Knowledge
	  Base:
	
	  ARTICLE-ID: Q142008
	  TITLE : FPNW Options Are Not Available Under User Manager
	
	2. Verify that Windows NT 3.51 Service Pack 3 (SP3) or greater is installed on
	  your system. To do this, select About Program Manager from the Help menu in
	  Program Manager. To obtain the latest Windows NT Service Pack, please see the
	  following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q128465
	  TITLE : How To Obtain Windows NT Version 3.51 U.S. Service Pack
	
	3. Log on to the domain as Administrator or Administrator-equivalent user.
	
	4. Make sure you install the Windows NT Server Tools and run User Manager for
	  Domains. To install the Windows NT Server Tools, insert the Windows NT Server
	  3.51 compact disc in the CD-ROM drive or connect to the network share, where
	  this software is located. Start SETUP.BAT in the \CLIENTS\SRVTOOLS\WINNT
	  directory on the Windows NT Server 3.51 compact disc. Setup copies all the
	  Windows NT Server Tools to your %SystemRoot%\System32 directory. Program
	  items are not created for these tools. Therefore, create program items for
	  the following files:
	
	  USRMGR.EXE (User Manager for Domains)
	  SRVMGR.EXE (Server Manager)
	  UPEDIT.EXE (User Profile Editor)
	
	  The following are optional tools:
	
	  DHCPADMN.EXE (DHCP Administrator)
	  RASADMN.EXE (Remote Access Admin)
	  RPLMGR.EXE (Remoteboot Manager)
	  SFMREG.EXE
	  WINSADMN.EXE (WINS Manager)
	
	  Restart Windows NT after you install the Windows NT Server Tools.
	
	5. Insert the FPNW compact disk in the CD-ROM drive or connect to the share
	  where the software is located. In Control Panel Network, click Add Software.
	  Select the "<Other> Requires disk from manufacturer" option. Type the
	  path to the FPNW software for the type of processor you are installing (for
	  example, if you install FPNW from an Intel-based computer and the network
	  share of drive H:, type: "H:\I386\" (without quotes). Select the FPNW
	  Administrative Tools and click OK. The files are copied over to your system.
	  Once complete, click OK in the Network Settings dialog box. Restart the
	  computer.
	
	6. After you restart Windows NT, run User Manager for Domains. After you select
	  a user, view the user's properties. A NW Compatible button should now appear.
	  Click this button to configure FPNW users.
	
	Additional query words: prodnt fpnw
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	Version           : 3.51
	
	=============================================================================
	
