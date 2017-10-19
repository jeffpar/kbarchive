---
layout: page
title: "Q151209: Shared Application Icon Names Do Not Update on Clients"
permalink: /kb/151/Q151209/
---

## Q151209: Shared Application Icon Names Do Not Update on Clients

	Article: Q151209
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbother kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	An SMS shared program item's title is renamed from the SMS Administrator's tool,
	and then the Program Group Control (PGC) is carried out at an SMS client. After
	PGC is done, the SMS program item has the original title and not the new title.
	The only way to get the icon title to change is to modify the shared
	application's properties so that the registry name is changed in some fashion.
	
	CAUSE
	=====
	
	If the program title and nothing else is changed, the SMS Applications Manager
	service will not update the program item time stamp in the network applications
	database (NAD). The time stamp in the NAD will match the time stamp for this
	program item in the client system's registry. PGC compares these time stamps,
	and because they are the same, PGC will not send the DDE commands needed to
	remove the old program icon and add the program icon back with the new title.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SMS version 1.1. A fix to this
	problem is in development, but has not been fully regression-tested and should
	be applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information on the availability of this fix.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
