---
layout: page
title: "Q253305: XADM: Exchange Setup Stops w. &quot;Account Information Is Incorrect&quot;"
permalink: /kb/253/Q253305/
---

## Q253305: XADM: Exchange Setup Stops w. &quot;Account Information Is Incorrect&quot;

	Article: Q253305
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 14-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Exchange Server, you must select a service account during the
	installation. After you select the account, the Setup program tries to modify
	the rights of the account so that it can work as the service account. When the
	Setup program attempts to do this, the following error message may be
	displayed:
	
	  Account information is incorrect
	
	CAUSE
	=====
	
	This problem can occur if the account that you selected does not have the
	"Access this computer from the network" user policy right. This policy right is
	normally granted to the Everyone group by default during the installation of
	Microsoft Windows NT Server, so it is not added to the Exchange Server service
	account by default during the Exchange Server installation. The Everyone group
	may have been removed from the policy right as a security measure.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Start User Manager for Domains.
	
	2. On the Policies menu, click User Rights.
	
	3. Click to select the "Access this computer from the network" check box. Under
	  "Grant to", make sure that the Exchange Server service account is listed or
	  belongs to a group that is listed. If not, click Add, and then select the
	  Exchange Server service account or a group that the service account belongs
	  to.
	
	4. In the "Add Users and Groups" dialog box, click OK.
	
	5. In the User Rights Policy dialog box, click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
