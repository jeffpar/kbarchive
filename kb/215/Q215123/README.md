---
layout: page
title: "Q215123: SMS: SMS_LOGON_SERVER_MANAGER Fails to Enumerate Shares"
permalink: kb/215/Q215123/
---

## Q215123: SMS: SMS_LOGON_SERVER_MANAGER Fails to Enumerate Shares

	Article: Q215123
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bugkbfaq
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server 2.0, an enumeration failure may cause the target
	server not to be installed as a logon point. It may also cause the
	NT_SMS_LOGON_SERVER_MANAGER service to fail and raise an exception. Under some
	circumstances, this can also cause the SMS_EXECUTIVE service to raise an
	exception and write a crash log.
	
	If you suspect you are experiencing this problem, enable logging on the
	NT_LOGON_SERVER_MANAGER service. You will see some of or all of the following
	errors:
	
	  Can't determine file system for share [sharename] on server [servername];
	  GetVolumeInformation GetLastError 21
	
	  -or-
	
	  NetShareGetInfo 2 on NT server:[servername] share [sharename] return: 2138
	
	  -or-
	
	  NetShareEnum failure Unable to Enumerate NTLM volumes on server [servername],
	  error=2138
	
	CAUSE
	=====
	
	The enumeration of shares on a logon point may fail if the target server has a
	large number of shares. The number of shares required to see this behavior is
	not a set number; it depends on the number of shares on the server, the length
	of the share names, and the length of the path to the shares.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug kbfaq
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
