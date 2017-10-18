---
layout: page
title: "Q236039: SMS: Client May Not Install On Finnish Windows NT Workstations"
permalink: kb/236/Q236039/
---

## Q236039: SMS: Client May Not Install On Finnish Windows NT Workstations

	Article: Q236039
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbinterop kbsetup kbClient kbsms200 kbsms200bug kbDiscovery
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Upon installation of the English Systems Management Server 2.0 client onto a
	Finnish Windows NT Workstation 4.0 Service Pack 4, the client software may not
	be properly installed. If you are using Smsman.exe to manually install the
	client, you many see the following in the WN_Manual.log:
	
	  Could not register CCIM; AppRegister return code =1060  $$<CliEx32.dll><Thu Mar 18 15:06:47.218 1999><thread=108 (0x6C)><BR/>
	  Waiting for 1 minute for CliSvc to start CCIM~  $$<CliEx32.dll><Thu Mar 18 15:06:47.218 1999><thread=108 (0x6C)><BR/>
	  ERROR: Could not get the name of the admins group on server (122)~  $$<CliEx32.dll><Thu Mar 18 15:07:47.406 1999><thread=108 (0x6C)><BR/>
	  Processing SID list for account mask SMSCliSvcAcct& :   $$<CliEx32.dll><Thu Mar 18 15:07:47.406 1999><thread=108 (0x6C)><BR/>
	  No SIDs found for account mask.  $$<CliEx32.dll><Thu Mar 18 15:07:47.406 1999><thread=108 (0x6C)><BR/>
	  Processing SID list for account mask SMSCliSvcAcct& :   $$<CliEx32.dll><Thu Mar 18 15:07:47.421 1999><thread=108 (0x6C)><BR/>
	  No SIDs found for account mask.  $$<CliEx32.dll><Thu Mar 18 15:07:47.421 1999><thread=108 (0x6C)><BR/>
	  Unable to create the Client Service Account - <could not find specified file is displayed in Finnish>.~~  $$<CliEx32.dll><Thu Mar 18 15:07:47.437 1999><thread=108 (0x6C)><BR/>
	  UpdateClientRegistryForCCIMLaunch returned <The data area passed to a system call is too small is displayed in Finnish.>~~  $$<CliEx32.dll><Thu Mar 18 15:07:47.453 1999><thread=108 (0x6C)><BR/>
	  Finished CliEx processing.~  $$<E:\x86.bin\00000409\SMSMan.exe><Thu Mar 18 15:07:47.484 1999><thread=108 (0x6C)><BR/>
	  CBootMan::CleanUp~  $$<E:\x86.bin\00000409\SMSMan.exe><Thu Mar 18 15:07:47.531 1999><thread=108 (0x6C)>
	
	In a similar manner, installing the client through Smsls.bat / BOOT32WN reveals
	the same problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms sms20 client
	
	======================================================================
	Keywords          : kbinterop kbsetup kbClient kbsms200 kbsms200bug kbDiscovery 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
