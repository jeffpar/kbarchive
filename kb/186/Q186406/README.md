---
layout: page
title: "Q186406: SMS: Drive Letter Selection for SMS Client Files Inconsistent"
permalink: kb/186/Q186406/
---

## Q186406: SMS: Drive Letter Selection for SMS Client Files Inconsistent

	Article: Q186406
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the client files are installed by using the Systems Management Server
	client setup executable (for example, CLI_DOS, CLI_NT), the drive with the most
	free space is used.
	
	However, if client setup is invoked by using Invwin32 to install the Systems
	Management Server client on a logon server, for example, the same logic does not
	apply.
	
	If the administrator adds servers through the Systems Management Server
	Administrator's Site Properties, Site Configuration Manager installs the logon
	server directory tree to the drive specified in the user interface (UI), but the
	client setup process may place the client files on another drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
