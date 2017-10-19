---
layout: page
title: "Q299256: IIS: Error w/Attempt to Log on to FTP Server with Guest Account"
permalink: /kb/299/Q299256/
---

## Q299256: IIS: Error w/Attempt to Log on to FTP Server with Guest Account

	Article: Q299256
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the client attempts to use the built-in Guest account to log on to the FTP
	server, a 530 error occurs and the client receives the following error message:
	
	  User Cannot Login, Guest Access Not Allowed.
	
	This occurs even though the password is known by the client and the Guest account
	has been enabled and granted the "Log on locally" right.
	
	CAUSE
	=====
	
	The default registry setting for Internet Information Services (IIS) 4.0 and 5.0
	does not allow the Guest account to be used for logon purposes.
	
	RESOLUTION
	==========
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	To correct this problem, follow these steps:
	
	1. Open the Registry Editor. To do this, click Start, click Run, type "regedit"
	  (without the quotation marks), and then click Run.
	
	2. After the Registry Editor is open, expand HKEY_Local_Machine, expand System,
	  expand CurrentControlSet, expand Services, and then expand MSFTPSVC.
	
	3. Under MSFTPSVC, select Parameter and find the DWord value for
	  AllowGuestAccess.
	
	  NOTE: The default setting is 0, or disabled.
	
	4. Double-click AllowGuestAccess. The Edit DWord Value dialog box opens.
	
	5. Under Base select Decimal, and then change the Value Data to 1. Click OK.
	
	6. For the changes to take effect, restart IIS by using the Net Stop IISADMIN /y
	  command.
	
	After you restart IIS, the system allows the Guest user account to successfully
	log on to the FTP server.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: iis 5 denied ftp
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
