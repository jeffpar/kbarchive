---
layout: page
title: "Q302354: SMS: Hardware Inventory Logs Exception After Inventory Finishes"
permalink: kb/302/Q302354/
---

## Q302354: SMS: Hardware Inventory Logs Exception After Inventory Finishes

	Article: Q302354
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200bug kbsms200preSP4fix
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	- Microsoft Windows XP Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server (SMS) Hardware Inventory Agent client log file
	(Windows\MS\SMS\Logs\Hinv32.log) on a Windows XP-based client may contain an
	exception entry. The entry in the Hinv32.log file may look like the following
	entry:
	
	  
	
	  Hardware Inventory Agent completed in 00 hours, 00 mins, 42 secs !  
	  <<<<<<<<<<<<< EXCEPTION EXCEPTION EXCEPTION >>>>>>>>>>>>> 
	  <<CLIEXCEPT>> (Logged to all threads) An exception was raised in the 
	  application '<unknown>', thread 0x500 (<unknown>)~  
	  <<CLIEXCEPT>> A fatal exception occurred in THIS THREAD. Information 
	  follows:~  
	  <<CLIEXCEPT>> The exception was not an MFC CException. A detailed 
	  information dump will follow...~  
	  ======= Logging initialized for module "Hardware Inventory Agent" =======
	  Hardware Inventory Agent cycle started ..... !  
	
	CAUSE
	=====
	
	This problem can occur when Hinv32.exe incorrectly shuts down its service main
	thread after it completes an inventory cycle, so it is unable to handle the
	exception.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Other than the exception log entry, there are no known repercussions, and the
	hardware inventory is correctly sent and processed on the site server.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbsms200bug kbsms200preSP4fix 
	Technology        : kbWinXPPro kbSMSSearch kbSMS200 kbWinXPProSearch kbWinXPSearch
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
