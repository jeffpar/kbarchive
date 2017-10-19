---
layout: page
title: "Q235762: SMS: NT_Logon_Server_Manager Enumerates All Shares on DCs"
permalink: /kb/235/Q235762/
---

## Q235762: SMS: NT_Logon_Server_Manager Enumerates All Shares on DCs

	Article: Q235762
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbServer kbsms200 kbsms200bug kbMaintMan
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During each maintenance cycle of Systems Management Server 2.0, the Windows NT
	Logon Server Manager component attempts to enumerate all of the shares on
	Windows NT domain controllers. This can consume available network bandwidth on
	slow links if any of these shares are not available.
	
	An example would be servers that have empty but shared CD-ROM drives or
	jukeboxes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	You may find the following entries in the Logon Server Manager log:
	
	  Begin service enum on server TESTNTDC1 SMS_NT_LOGON_SERVER_MANAGER 3/27/99
	  10:49:58 PM 785 (0x311)
	  Completed service enum on server TESTNTDC1 SMS_NT_LOGON_SERVER_MANAGER 3/27/99
	  10:49:58 PM 953 (0x3B9)
	  Can't determine file system for share TEMP1$ on server TESTNTDC2;
	  GetVolumeInformation GetLastError 2 SMS_NT_LOGON_SERVER_MANAGER 3/27/99
	  10:49:59 PM 808 (0x328)
	  Can't determine file system for share TEMP10$ on server TESTNTDC2;
	  GetVolumeInformation GetLastError 2 SMS_NT_LOGON_SERVER_MANAGER 3/27/99
	  10:49:59 PM 808 (0x328)
	  Can't determine file system for share TEMP11$ on server TESTNTDC2;
	  GetVolumeInformation GetLastError 2 SMS_NT_LOGON_SERVER_MANAGER 3/27/99
	  10:50:00 PM 808 (0x328)
	  Completed service enum on server TESTNTDC2 SMS_NT_LOGON_SERVER_MANAGER 3/27/99
	  10:50:00 PM 803 (0x323)
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbServer kbsms200 kbsms200bug kbMaintMan 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
