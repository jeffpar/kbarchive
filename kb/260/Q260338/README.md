---
layout: page
title: "Q260338: XADM: Error 5 &quot;Access Denied&quot; After Upgrade to Windows 2000"
permalink: /kb/260/Q260338/
---

## Q260338: XADM: Error 5 &quot;Access Denied&quot; After Upgrade to Windows 2000

{% raw %}

	Article: Q260338
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Exchange Server 5.5 on a drive other than the system drive on a
	server that has been upgraded to Windows 2000 Server, setup may not work and one
	of the following error messages may be displayed:
	
	  Error 5 "Access denied."
	
	  -or-
	
	  While attempting to start the Microsoft Exchange System Attendant Service,
	  the following error was encountered:
	  Access is denied.
	  Microsoft Windows NT ID no: 0xc0020005
	
	The following Event ID 7000 with Service Control Manager as the source is logged
	in the System log:
	
	  The Microsoft Exchange System Attendant service failed to start due to the
	  following error: The service did not start due to a logon failure.
	
	CAUSE
	=====
	
	This issue can occur if the Everyone group has been removed from the permissions
	on this drive and another account or group has been added. Although the account
	that is used to install Exchange Server may have Full Control permissions for
	this drive, the domain system account specifically needs to have Full Control
	permissions for the drive where the Exchsrvr\Bin folder is located for the
	Exchange Server services to start successfully.
	
	RESOLUTION
	==========
	
	To resolve this issue, add the domain system account to the drive where Exchange
	Server is installed:
	
	1. Right-click the drive, and then click Properties.
	
	2. Click the Security tab.
	
	3. Make sure that the "Look in" box contains the domain name.
	
	4. Add the system account.
	
	Make sure that you add this account to both the root and Exchsrvr folders. You
	may need to run setup again.
	
	MORE INFORMATION
	================
	
	The domain system account is not displayed in Active Directory Users and
	Computers. You have to add it from the Security tab of the folder.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
