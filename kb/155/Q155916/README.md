---
layout: page
title: "Q155916: XCLN: Event ID's 1047 and 1038 from the Free/Busy Connector"
permalink: kb/155/Q155916/
---

## Q155916: XCLN: Event ID's 1047 and 1038 from the Free/Busy Connector

	Article: Q155916
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt use the Microsoft Schedule+ Free/Busy Connector that comes with
	Microsoft Exchange Server, version 4.0, you might see the following errors:
	
	  Event ID: 1047
	  Source: MSExchangeFB
	  Category: Error
	
	  Unable to open the site folder <X.500 DN of site container>.
	  MAPI returns 80070005 due to last error code 0.
	
	  Event ID: 1038
	  Source: MSExchangeFB
	  Category: Error
	
	  Unable to access the Microsoft Schedule+ Free/Busy Information folder. Ensure
	  that the (hidden) Microsoft Schedule+ Free/Busy Information folder exists.
	  Open the Recipients container and select View.HiddenRecipients.
	
	These errors can be caused by having the default role on the hidden Schedule+
	Free Busy information folder set to something other then Editor. To eliminate
	these errors, change the default role to Editor.
	
	MORE INFORMATION
	================
	
	To change the default role on the Schedule+ Free Busy folder, follow these
	steps:
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. Expand the Folders container, then expand the System Folders container.
	
	3. Expand the Schedule+ Free Busy container and select the folder for your Site.
	
	4. Open the File menu and Click Properties.
	
	5. Click the Client Permissions button.
	
	6. Select Editor from the Roles dropdown list.
	
	7. Click OK and then click OK again.
	
	You might also see these errors in the application event log:
	
	  Event ID: 1034
	  Source: MSExchangeFB
	  Category: Error
	
	  Unable to open or process folder <X.500 address to the Schedule+ Free Busy
	  folder>.
	
	  Event ID: 1036
	  Source: MSExchangeFB
	  Category: Error
	
	  Unable to process and export the Microsoft Schedule+ Free/Busy Connector
	  information for user USER-/CN=RECIPIENTS/CN=<UserID>.
	
	Additional query words: 4.00 Sched+ Sched FB MSExchangeFB
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
