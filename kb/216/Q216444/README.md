---
layout: page
title: "Q216444: Logon Script in a Windows NT Domain Runs Sporadically"
permalink: /kb/216/Q216444/
---

## Q216444: Logon Script in a Windows NT Domain Runs Sporadically

	Article: Q216444
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user logs on to a Windows NT domain, the network logon script specified
	for that user may not run.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one or more of the following methods:
	
	- Verify that the script file assigned to the user is properly configured in
	  the User Manager for Domains tool:
	
	  1. Click Start, point to Programs, point to Administrative Tools, and then
	     click User Manager for Domains.
	
	  2. Double-click the appropriate user.
	
	  3. Click Profile, and then verify that the correct path and file name exists
	     in the Login Script Name box. If not, type the correct path and file name
	     to the logon script, click OK, and then click OK.
	
	- If you have directory replication configured between domain controllers,
	  verify that the contents of the folders are being properly replicated. For
	  information about troubleshooting directory replication, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q149664 Verifying Domain Netlogon Synchronization
	
	- If you can log on to a domain controller but the logon script does not run
	  automatically, you can map a drive directly to the validating domain
	  controller's Netlogon share and test the script manually:
	
	  1. Obtain the name of the validating domain controller for each workstation
	     that does not run the logon script:
	
	      - Windows NT: Click Start, point to Programs, point to Administrative
	        Tools, and then click Windows NT Diagnostics. Click the Network tab,
	        and then read the value assigned to Logon Server.
	
	      - Microsoft Windows 95 or Microsoft Windows 98: Follow the instructions
	        in the following article in the Microsoft Knowledge Base:
	
	  Q150898 How to Display Domain Logon Confirmation in Windows
	
	  2. At a command prompt, type "net use * \\<servername>\netlogon"
	     (without the quotation marks), where <servername> is the name of the
	     validating domain controller, and then press ENTER.
	
	  3. Change to the drive letter assigned to the share.
	
	  4. Type the file name of the logon script, and then press ENTER.
	
	- If you are not using directory replication, verify that the script file has
	  been copied to the correct folder on all domain controllers.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
