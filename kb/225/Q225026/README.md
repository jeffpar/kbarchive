---
layout: page
title: "Q225026: Unable to Share Root Folder Using Share a Folder Wizard"
permalink: /kb/225/Q225026/
---

## Q225026: Unable to Share Root Folder Using Share a Folder Wizard

{% raw %}

	Article: Q225026
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbtool
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the Share a Folder Wizard in the Manage Small Business
	Server tool to share a hard disk, you may receive the following error message:
	
	  Error while sharing a Windows NT user's folder.
	
	If you then click OK, you may receive the following message:
	
	  Wizard has successfully shared the folder root drive letter.
	
	However, if you then check to see if the root folder of your drive is shared, it
	may not be.
	
	RESOLUTION
	==========
	
	To resolve this issue, use Microsoft Windows NT Explorer to share the root
	folder of your drive:
	
	1. Click Start, point to Programs, and then click Windows NT Explorer.
	
	2. Right-click the drive you want to share, and then click Sharing.
	
	3. Configure your sharing settings appropriately, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	If the permissions of the root folder for the drive that contains the SBS
	installation have changed, you can restore their default settings:
	
	1. Double-click My Computer.
	
	2. Right-click the drive that contains the SBS installation, click Sharing,
	  click the Security tab, and then click Permissions.
	
	3. Set the appropriate permissions:
	
	   - administrators: full control
	
	   - creator owner: full control
	
	   - domain admins: full control
	
	   - domain users: read
	
	   - server operators: change
	
	   - system: full control
	
	Additional query words: smallbiz bos bof 4.50
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbtool 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ450
	Version           : winnt:4.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
