---
layout: page
title: "Q265437: XADM: Exchange Server 5.5 Upgrade Stops with Event ID 282"
permalink: /kb/265/Q265437/
---

## Q265437: XADM: Exchange Server 5.5 Upgrade Stops with Event ID 282

{% raw %}

	Article: Q265437
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Microsoft Exchange Server version 5.0 to version 5.5,
	during the Modifying Services phase of the upgrade, the Exchange Directory
	Service starts but the Exchange Information Store Service may stop and you may
	receive indication of Server Specific Error 2147746063.
	
	The following event ID is logged in the Event Viewer application log:
	
	  Event ID: 282
	  Source: MSExchangeDS
	  Description: Could not modify object address because the DS reported the
	  following error. You do not have the permission required to complete this
	  operation.
	
	CAUSE
	=====
	
	This issue can occur when the Windows NT Administrator account and the Exchange
	Service Account do not have the proper Exchange Administrator permissions
	assigned to the necessary Exchange containers.
	
	RESOLUTION
	==========
	
	To resolve this issue, assign the Service Account Admin role to the Service
	Account and the Permissions Admin role to the Windows NT Administrator account
	to the Organization, Site, and Configuration containers, and then log on as the
	Exchange Service Account to upgrade to Exchange Server version 5.5.
	
	1. Assign permission roles by doing the following:
	
	  a. On the taskbar, click Start, point to Programs, point to Microsoft
	     Exchange, and then click Microsoft Exchange Administrator.
	
	  b. In the Administrator program, click the Site container.
	
	  c. On the File menu, click Properties.
	
	  d. In the Site Properties dialog box, in the Windows NT accounts with
	     permissions box, click Service Account.
	
	  e. In the Roles list, click Service Account Admin, and then click OK.
	
	  f. In the Windows NT accounts with permissions box, click your Windows NT
	     Administrator user account.
	
	  g. In the Roles list, click Permissions Admin, and then click OK.
	
	  h. Repeat this procedure for the Organization and Configuration containers.
	
	2. Start User Manager for Domains and view the permissions of the Service
	  Account to make sure that the account was granted Log on as Service
	  permissions.
	
	3. Log on to Exchange Server computer, and then run the upgrade program from the
	  Exchange Server 5.5 compact disc.
	
	MORE INFORMATION
	================
	
	For additional information about upgrading to Exchange Server version 5.5 and
	error 2147746063, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q185573 XADM: Setup Fails with 0xc0020424 During Upgrade to Version 5.5
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Component         : Admin
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
