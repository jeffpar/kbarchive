---
layout: page
title: "Q142598: Err Msg: Session Management Module Is Invalid"
permalink: kb/142/Q142598/
---

## Q142598: Err Msg: Session Management Module Is Invalid

	Article: Q142598
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbmsn
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.3, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run the Internet Setup Wizard, you may receive one of the following
	error messages when you attempt to sign in to MSN, The Microsoft Network, and
	the Internet:
	
	- 
	
	  Session Management Module is invalid.
	
	- 
	
	  Cmdl32 caused an invalid page fault in module unknown.
	
	CAUSE
	=====
	
	Some computer manufacturers have placed the Internet icon on the desktop, but
	have not included Internet software on the computer. When you run the Internet
	Setup Wizard, it corrupts the MSN software.
	
	
	Also, problems with Windows 95 Dial-Up Networking can cause this error.
	
	RESOLUTION
	==========
	
	Remove and reinstall MSN using these steps:
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. On the Windows Setup tab, click the MSN check box to clear it.
	
	3. Click OK.
	
	4. In Control Panel, double-click Add/Remove Programs.
	
	5. On the Windows Setup tab, click the MSN check box to select it.
	
	6. Click OK.
	
	To install Internet access, sign on to MSN and download the Internet software
	from Categories\MSN Classic Categories\Internet Center\Classic Internet
	Center\Getting On The Internet. If the Internet Setup Wizard does not run
	automatically upon completion of the download, run the wizard. This installs the
	necessary files for Internet access on the computer and configures the
	Transmission Control Protocol/Internet Protocol (TCP/IP) required for access.
	
	After you restart the computer, you have Internet access.
	
	If this does not resolve the issue, you must remove and reinstall Dial-Up
	Networking. To do so, use the following steps:
	
	1. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	2. Right-click an MSN connection, and then click Delete. Repeat this step until
	  all MSN connections are deleted.
	
	3. Close the Dial-Up Networking window.
	
	4. Click Start, point to Find, and then click Files or Folders.
	
	5. In the Named box, type "pppmac.vxd" (without quotation marks), and then click
	  Find Now.
	
	6. In the list of found files, right-click the Pppmac.vxd file, and then click
	  Delete.
	
	7. Repeat steps 5-6 to delete the following files:
	
	  - Splitter.vxd
	  - Wsock.vxd
	  - Winsock.dll
	
	8. Close the Find: Files Named Winsock.dll window.
	
	9. Click Start, point to Settings, and then click Control Panel.
	
	10. Double-click Network.
	
	11. On the Configuration tab, click a component in the "The following network
	  components are installed" box, and then click Remove. Repeat this step until
	  all installed network components are removed.
	
	12. Click OK. If you are prompted to restart the computer, click No.
	
	13. Double-click Add/Remove Programs.
	
	14. On the Windows Setup tab, click Communications, and then click Details.
	
	15. Click the Dial-Up Networking check box to clear it.
	
	16. Click OK until you return to Control Panel.
	
	17. Close Control Panel, and then restart the computer.
	
	18. Right-click the MSN icon on the desktop, and then click Connection Settings.
	
	19. Click Access Numbers, and then click OK.
	
	20. When you are prompted to configure your system to access the Internet, click
	  Yes, and then click OK. Follow the instructions on the screen. You may be
	  prompted for your Windows CD-ROM or disks.
	
	21. When you are prompted to restart the computer, click Yes.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 2.50 msnet microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kberrmsg kbtool kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130
	Version           : WINDOWS:1.3,2.0
	Issue type        : kbprb
	
	=============================================================================
	
