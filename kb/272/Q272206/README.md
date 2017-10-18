---
layout: page
title: "Q272206: Startup Access Violation and Event ID 100 on PDC That Runs IIS"
permalink: kb/272/Q272206/
---

## Q272206: Startup Access Violation and Event ID 100 on PDC That Runs IIS

	Article: Q272206
	Product(s): Microsoft Windows NT
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbNTTermServSearch
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a primary domain controller (PDC) that is running Internet
	Information Server (IIS), the following error message may appear:
	
	  Dr Watson
	  Application: lsass.exe
	  Exception: access violation (0xc0000005)
	  Address:0x006b0072
	
	Event Viewer may display the following error messages:
	
	  Event id:100
	  Source: w3svc
	  "Server was unable to logon the Windows NT account "." due to the following
	  error: Unknown username or bad password"
	
	  Event id:100
	  Source: w3svc
	  "The security database contains an internal inconsistency"
	
	CAUSE
	=====
	
	This behavior can occur if the Windows NT user account that is configured for
	Anonymous Logon for the WWW Service is invalid or does not have the right to log
	on locally to the PDC.
	
	RESOLUTION
	==========
	
	To resolve this behavior, replace the user account that is configured for
	Anonymous Logon in the WWW Service with a valid Windows NT account that has the
	right to log on locally to the PDC:
	
	1. Start the Internet Service Manager.
	
	2. In the right pane of the Microsoft Management Console (MMC), expand Internet
	  Information Server and then expand <server name>.
	
	3. Right-click Default Web Site, and then click Properties.
	
	4. Click Directory Security.
	
	5. In the "Anonymous Access and Authentication Control" group, click Edit.
	
	6. Click Edit next to "Account used for Anonymous Access".
	
	7. Click Browse.
	
	8. Select the account that you want to use for Anonymous Logon, click Add, and
	  then click OK.
	
	9. Click Enable Automatic Password Synchronization, and then click OK.
	
	10. Click OK to close each open dialog box.
	
	11. Quit MMC. When you are prompted to save the settings, click Yes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbNTTermServSearch 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400 kbiis300
	Version           : :3.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
