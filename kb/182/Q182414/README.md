---
layout: page
title: "Q182414: SMS: Despooler Force Disconnect Setting Alters Directory Rights"
permalink: kb/182/Q182414/
---

## Q182414: SMS: Despooler Force Disconnect Setting Alters Directory Rights

	Article: Q182414
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDespooler smsdespooler
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In earlier versions of Systems Management Server, if a file which is contained
	in a package is being used during a package refresh, when the file is copied to
	the distribution servers, the copy operation may fail.
	
	Systems Management Server retries the package installation 100 times over a
	period of a week. If the file is still open during this time, the delivery of
	the package fails.
	
	CAUSE
	=====
	
	The Systems Management Server Despooler force disconnect logic requires that it
	removes the users access and rights to the directory to prevent users from
	accessing the package. However, because the share already exists, it does not
	restore the directory rights after updating the files.
	
	WORKAROUND
	==========
	
	The only workaround at this time is to manually change the NTFS file permissions
	on each distribution server for that shared package directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	To enable guaranteed package delivery, the Systems Management Server
	administrator must change the value in the following registry key to 1:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Components\SMS_DESPOOLER
	  \Use Forced Disconnect
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	This is a site-wide property. You cannot enable this setting per package
	distribution. You can also change the "Forced Disconnection Delay In Minutes"
	and "Number of Retries Before Forced Disconnection" registry values.
	
	However, when using the "Use Force Disconnect" setting, Systems Management Server
	Despooler will not preserve the NTFS file permissions for the shared package
	directory. It will be changed to:
	
	  <SMS Service Account> - Full Control.
	
	Domain Users will no longer have access to that share and will, therefore, be
	unable to run the application.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDespooler smsdespooler 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
