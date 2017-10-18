---
layout: page
title: "Q243189: SMS: %SMS_LOCAL_DIR%&#92;MS&#92;CORE&#92;BIN Added to Path Multiple Times"
permalink: kb/243/Q243189/
---

## Q243189: SMS: %SMS_LOCAL_DIR%&#92;MS&#92;CORE&#92;BIN Added to Path Multiple Times

	Article: Q243189
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbClient kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you open Control Panel on a computer that is a Systems Management Server
	(SMS) 2.0 client, "%SMS_LOCAL_DIR%\MS\CORE\BIN" is added to your path. However,
	closing Control Panel does not remove the entry. Each time you open Control
	Panel, another instance of "%SMS_LOCAL_DIR%\MS\CORE\BIN" is added to the path.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, rename the SMS Control Panel (.cpl) files in the
	System32 folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix:
	
	1. Copy the Q243189.exe file from the disk on which you received it to a share
	  on your network. This is an SMS Installer file that updates specific files on
	  your site server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, close the SMS Administrator console.
	
	4. Run the executable file that you copied in step 1 and follow the directions
	  in the wizard.
	
	NOTE: The default Client Configuration Installation Manager (CCIM) polling
	interval is 23 hours. Therefore, it may take up to 23 hours for the hotfixed
	files to be propagated to the clients. To speed up this process, you can stop
	and restart the SMS Client Service on each client. You can also create a
	software distribution for one of the Resource Kit tools Setevnt.exe or
	Cliutils.exe along with the appropriate parameter(s) to start a CCIM work cycle.
	For information on the proper syntax to use with these tools, see the Resource
	Kit documentation.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
