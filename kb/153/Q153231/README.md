---
layout: page
title: "Q153231: Packagelocations Table Not Updated"
permalink: /kb/153/Q153231/
---

## Q153231: Packagelocations Table Not Updated

	Article: Q153231
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smsgeneral smsappman smspcm kbArtTypeINF kbSMSAppMan
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Packagelocations table at the parent site still has information on packages
	that refer to the child site even if the child site has been detached.
	
	CAUSE
	=====
	
	Detaching the child site from the parent site does not update the
	packagelocations table. Likewise, running a remove package from server job does
	not update the packagelocations table, even though the job completes
	successfully.
	
	RESOLUTION
	==========
	
	Manually remove the packages from the table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPCM smsgeneral smsappman smspcm kbArtTypeINF kbSMSAppMan 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
