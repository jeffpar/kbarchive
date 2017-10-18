---
layout: page
title: "Q227025: SMS: Windows 2000 Client Is Not Installed with Encrypted Folder"
permalink: kb/227/Q227025/
---

## Q227025: SMS: Windows 2000 Client Is Not Installed with Encrypted Folder

	Article: Q227025
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbsms200 kbsms200bug
	Last Modified: 07-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Microsoft Window 2000-based client may not be installed. The Wn_remote.log
	file may be encrypted. When you gain access to the Wn_remote.log file, the first
	run shows that client assignment did not succeed because of an incorrect IP
	address:
	
	ASSIGNMENT ***************************************  $$<CliEx32.dll>
	Before adding new sites, there are 1 site keys and 0 sites in the site list  $$<CliEx32.dll>
	  Site Key #0: "MEX"  $$<CliEx32.dll>
	Some sites in the registry are not assigned  $$<CliEx32.dll>
	Assessing assignment state from "MSWNET:\\SERVER1\SMSLOGON\SITES\S01"   $$<CliEx32.dll>
	Calling GetAccessiblePath with MSWNET:\\SERVER1\SMSLOGON\SITES\S01\  $$<CliEx32.dll>
	CHK ASSMT : To become assigned, the potential client must match the follwing 'IP Subnets' data. Using DLL 'SMSDISCV.DLL', Entry Point 'GetSMSAssignmentStatus' to fetch this data.  $$<CliEx32.dll>
	131.24.25.0  $$<CliEx32.dll>
	131.24.20.0  $$<CliEx32.dll>
	CardIndex 0, MACAddress 00:10:5A:19:AB:E1, IPAddress 10.0.0.1, IPSubnet 169.254.0.0, IPXAddress 00000001:00105A19ABE1, IPXSubnet 00000001  $$<CliEx32.dll>
	CardIndex 1, MACAddress 2A:C2:20:52:AB:53, IPAddress 0.0.0.0, IPSubnet 0.0.0.0, IPXAddress 00000000:2AC22052AB53, IPXSubnet 00000000  $$<CliEx32.dll>
	Invalid IPX Address: 00000000:2AC22052AB53. IPX Network Number is ZERO.  $$<CliEx32.dll>
	Card at index 1 is not valid for assignment~  $$<CliEx32.dll>
	Function return - Client not assigned  $$<CliEx32.dll>
	After adding any new sites, there are 1 site keys and 0 sites in the site list  $$<CliEx32.dll>
	  Site Key #0: "S01"  $$<CliEx32.dll>
	Not writing Site List data back to the registry (no new sites)  $$<CliEx32.dll>
	Function return - Client not assigned  $$<CliEx32.dll>
	After adding any new sites, there are 1 site keys and 0 sites in the site list  $$<CliEx32.dll>
	  Site Key #0: "S01"  $$<CliEx32.dll>
	Not writing Site List data back to the registry (no new sites)  $$<CliEx32.dll>
	Client is not assigned to any sites - finished.  $$<CliEx32.dll>
	STATUS CALLBACK -  -  $$<C:\SMSDIR\MS\SMS\CORE\BIN\Boot32wn.exe>
	ReWriteSitesRegistry returning 28931  $$<CliEx32.dll>
	Finished CliEx processing.  $$<C:\SMSDIR\MS\SMS\CORE\BIN\Boot32wn.exe>
	
	After a reboot, you see that CliEx32 did not initialize:
	
	Begin CliEx processing.  $$<C:\WINNT\MS\SMS\CORE\BIN\Boot32wn.exe>
	ERROR: Load of DLL CliEx32.dll failed (C:\SMSDIR\MS\SMS\CORE\BIN\cliex32.dll) The specified module could not be found.~~  $$<C:\WINNT\MS\SMS\CORE\BIN\Boot32wn.exe>
	ERROR: Initializing CliEx failed error code 126  $$<C:\WINNT\MS\SMS\CORE\BIN\Boot32wn.exe>
	Unable to continue; exiting  $$<C:\WINNT\MS\SMS\CORE\BIN\Boot32wn.exe>
	
	The next two reboots will show Client Configuration Manager (CCM) attempting to
	install the client but not succeeding.
	
	CAUSE
	=====
	
	This behavior can occur if the Windows 2000-based client's SMS_LOCAL_DIR folder
	is encrypted. This does not allow the service to access the necessary files.
	
	Most of the core client files are copied to the client, but are not entered in
	the registry as being installed, so optional components are not installed.
	
	WORKAROUND
	==========
	
	Remove the encryption from the SMS_LOCAL_DIR folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
