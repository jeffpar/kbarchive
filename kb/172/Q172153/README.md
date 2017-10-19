---
layout: page
title: "Q172153: Moving a WINS Database from Windows NT 3.51 to Windows NT 4.0"
permalink: /kb/172/Q172153/
---

## Q172153: Moving a WINS Database from Windows NT 3.51 to Windows NT 4.0

	Article: Q172153
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to move your Windows Internet Name Service (WINS)
	database from an existing server running Windows NT 3.51 to a new server running
	Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	To move your WINS database from Windows NT 3.51 to Windows NT 4.0, use the
	following steps:
	
	1. Install WINS on the destination server.
	
	2. Stop the WINS service on both the destination and source servers:
	
	  a. In Control Panel, double-click Services.
	
	  b. Click Windows Internet Name Service and click Stop.
	
	  c. Click Yes on the confirmation dialog box and click Close.
	
	NOTE: Repeat the above steps for each of the two servers.
	
	3. On the destination server, delete all the files in the
	  %Systemroot%\System32\Wins folder.
	
	  NOTE: Do NOT delete the Wins folder itself.
	
	4. Copy the following files from the %Systemroot%\System32\Wins folder on the
	  source server to the %Systemroot%\System32\Wins folder on the destination
	  server:
	
	  Jet.log
	  System.mdb
	  Wins.mdb
	
	5. Restart WINS on the destination server.
	
	6. Click OK on the pop-up window, which displays the following message:
	
	  WINS can not come up because the existent database needs conversion to NT SUR
	  format. WINS has initiated the conversion via a process (jetconv). Once the
	  conversion is complete, WINS will get started automatically. Do not reboot or
	  kill the jetconv process. The conversion may take anywhere from a few minutes
	  to around an hour (depending on the size of the databases). Please terminate
	  WINS now by clicking on OK. This is required for the database conversion to
	  succeed.
	
	  NOTE: THE WINS SERVICE WILL START AUTOMATICALLY AFTER THE CONVERSION IS
	  SUCCESSFULLY COMPLETED. CHECK THE APPLICATION LOG TO SEE THE STATUS OF THE
	  CONVERSION FOR THE WINS DB.
	
	7. Click OK on the next pop-up window, which displays the following message:
	
	  Could not start the Windows Internet Name service on \\<server>. Error:
	  0001 Incorrect Function.
	
	  where <server> is the name of your Windows NT 4.0 server.
	
	8. Click close.
	
	The Jetconv.exe utility will start and attempt to convert the Windows NT 3.51
	database to the newer Windows NT 4.0 format. After the conversion has
	successfully completed, the WINS service will automatically restart.
	
	The original Windows NT 3.51 files that you copied to the destination server are
	backed up by the conversion utility and placed in the
	%Systemroot%\System32\Wins\351db folder. You can delete the System.mdb file from
	the Wins folder on the new WINS server after the conversion is complete. This
	file is no longer used in Windows NT 4.0.
	
	Progress can be monitored by looking at the application log in Event Viewer. An
	application event ID 1000, with Source JET, will appear if the conversion
	completes successfully. If the method described here fails, the Upg351db.exe
	utility can also be used to convert the database manually. This file can be
	found on the Windows NT 4.0 server under %Systemroot%\System32 folder.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q158473 Upgrading the DHCP Database to Windows NT Server 4.0
	
	Additional query words: migrate relocate
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
