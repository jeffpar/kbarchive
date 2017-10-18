---
layout: page
title: "Q272352: SMS Service Packs Must Be Installed on Individual Workstations"
permalink: kb/272/Q272352/
---

## Q272352: SMS Service Packs Must Be Installed on Individual Workstations

	Article: Q272352
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbConfig kbServer kbsms200 kbsmsAdmin kbUpgrade
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Service packs for Systems Management Server (SMS) 2.0 are typically installed
	only on the individual SMS 2.0 site servers. However, service packs must also be
	installed on every remote SMS Administrator console for the site. Not updating
	the service pack level of a remote SMS Administrator console computer may cause
	inconsistencies in the performance of the console.
	
	For example, if an SMS 2.0 site server is running Service Pack 2 and a remote
	Administrator console is running Service Pack 1, Remote Control issues may
	occur.
	
	MORE INFORMATION
	================
	
	To determine whether a workstation that is running the SMS Administrator console
	has been upgraded to the same service pack version as the SMS 2.0 site server:
	
	1. Verify the version number on the workstation by checking the remote
	  computer's registry:
	
	  a. Start Registry Editor (Regedt32.exe).
	
	  b. Open the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Setup
	
	  c. Check the following value:
	
	  Value Name: Full Version
	  Data Type: REG_SZ Data: 2.00.<xxxx>.<xxxx>
	
	2. Compare the version number you find with the version number of the SMS 2.0
	  site server. You can find the version number on the SMS 2.0 site server by
	  using one of the following methods:
	
	   - Click the Site Hierarchy node in the SMS Administrator console. The build
	     number for each SMS site is listed in the Details pane.
	
	   - Check the SMS 2.0 site server's local registry:
	
	     a. Start Registry Editor (Regedt32.exe).
	
	     b. Open the following key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Setup
	
	     c. Check the following value:
	
	  Value Name: Full Version
	  Data Type: REG_SZ Data: 2.00.<xxxx>.<xxxx>
	
	If the remote SMS Administrator console has an earlier service pack version than
	the SMS 2.0 site server, install the service pack on the remote console. You can
	update the SMS Administrator console by running the Autorun.exe file on the
	remote computer from the new service pack source.
	
	NOTE: By default, when you install a service pack on an SMS 2.0 site server, the
	Administrator console on the site server is automatically upgraded.
	
	Additional query words: prodsms admin
	
	======================================================================
	Keywords          : kbConfig kbServer kbsms200 kbsmsAdmin kbUpgrade 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
