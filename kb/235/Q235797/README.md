---
layout: page
title: "Q235797: SMS: Client Logon Scripts Do Not Function over a RAS Link"
permalink: /kb/235/Q235797/
---

## Q235797: SMS: Client Logon Scripts Do Not Function over a RAS Link

	Article: Q235797
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsetup kbClient kbConfig kbServer kbsms200 kbsms200bug
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server (SMS) version 2.0, some logon scripts on Microsoft
	Windows 2000-based clients may not function properly over a dial-up connection.
	This may result in Windows 2000-based clients not being installed with the
	complete SMS 2.0 client software. The client installation process may stop
	(hang) after installing Slownet.exe in the %SystemRoot%\MS\SMS\Core\Bin folder.
	
	CAUSE
	=====
	
	The Windows 2000 dial-up networking adapter is automatically configured with a
	subnet mask of 255.255.255.255, regardless of the Dynamic Host Configuration
	Protocol (DHCP) or remote access server settings. When the IP address is matched
	against the subnet mask (255.255.255.255), the resulting IP subnet for the
	client is the client's IP address.
	
	WORKAROUND
	==========
	
	One workaround for this behavior is to install the SMS client software on the
	Windows 2000-based clients while they are connected to the LAN. Then, enable
	Travel mode to prevent SMS client removal when the clients subsequently dial in.
	Users must always click No for potential de-assignment prompts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms boundry
	
	======================================================================
	Keywords          : kbsetup kbClient kbConfig kbServer kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
