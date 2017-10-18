---
layout: page
title: "Q271149: SMS: SMS 2.0 Character Limits on User and Group Accounts"
permalink: kb/271/Q271149/
---

## Q271149: SMS: SMS 2.0 Character Limits on User and Group Accounts

	Article: Q271149
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbinterop kbConfig kbMMC kbServer kbsms200 kbsmsAdmin kbsmsUtil
	Last Modified: 05-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Systems Management Server (SMS) 2.0 on a Windows NT 4.0-based
	computer and on a Windows 2000-based computer which is using Active Directory,
	user accounts, local groups, and global groups have character-limit restrictions
	in the SMS 2.0 Administrator console.
	
	MORE INFORMATION
	================
	
	SMS 2.0 limits how many characters you can use in the naming scheme of SMS users
	and groups and in some cases may prevent SMS from using the maximum character
	limit that is defined by the operating system.
	
	The following table lists the character-length limits by operating system for the
	various SMS accounts that you can define within the SMS Administrator console.
	This table applies when you use the SMS Administrator console on a Windows NT
	4.0-based computer and on a Windows 2000-based computer that is using Active
	Directory.
	+-----------------------------------------------------------------------------------------------------------------------+
	|                                                                                       | Windows NT 4.0 | Windows 2000 | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| Operating system limits                                                               |                |              | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| Global groups                                                                         | 20             | 64           | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| Local groups                                                                          | 256            | 64           | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| User accounts                                                                         | 20             | 64           | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| SMS Administrator console:
	Permitted viewers for remote
	tools character length limits |                |              | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| Global groups                                                                         | 20             | 36           | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| Local groups                                                                          | 36             | 36           | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| User accounts                                                                         | 20             | 36           | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| SMS Administrator console:
	Security rights character limits                           |                |              | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| Global groups                                                                         | 20             | 20           | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| Local groups                                                                          | 20             | 20           | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| User accounts                                                                         | 20             | 20           | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| SMS Administrator console:
	All other SMS account length
	restrictions                 |                |              | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| Remote installation account                                                           | 31             | 31           | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| Client connection accounts                                                            | 31             | 31           | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| Address accounts                                                                      | 31             | 31           | 
	+-----------------------------------------------------------------------------------------------------------------------+
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbConfig kbMMC kbServer kbsms200 kbsmsAdmin kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
