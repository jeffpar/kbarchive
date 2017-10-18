---
layout: page
title: "Q251997: XCLN: Outlook Error Message: Word Is Unable to Open the Data Sou"
permalink: kb/251/Q251997/
---

## Q251997: XCLN: Outlook Error Message: Word Is Unable to Open the Data Sou

	Article: Q251997
	Product(s): Microsoft Exchange
	Version(s): 8.01,8.02,8.03,8.04,SR-1 Enterprise Update; WINDOWS:8.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.01, 8.02, 8.03, 8.04, SR-1 Enterprise Update 
	- Microsoft Outlook 98, version 8.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a mail merge using Microsoft Word 97, you receive the following
	error message if you attempt to merge contacts from your Outlook Address Book:
	
	  Word is unable to open the Data Source.
	
	CAUSE
	=====
	
	After you upgrade Microsoft Exchange Server to version 5.5, the file Word uses
	to convert addresses, the Wwpab.cnv file, functions incorrectly on the client.
	
	RESOLUTION
	==========
	
	To resolve this problem, manually change the order of the services in your
	profile. To do this, you must remove the services, and then re-add the services.
	You can also create a new profile.
	
	NOTE: In either method, it is important that you add the Outlook Address Book
	service before the Microsoft Exchange Server service.
	
	How to Remove the Services and then Re-Add the Services
	-------------------------------------------------------
	
	1. On the Tools menu, click Services.
	
	2. Click the first service, and then click Remove.
	
	  Repeat this step for each of the services in the list.
	
	3. Click Add, click Outlook Address Book in the Available Information Services
	  list, and then click OK.
	
	4. Click Add, click Microsoft Exchange Server in the Available Information
	  Services list, and then click OK.
	
	5. Click Add to add additional services to your profile.
	
	How to Create a New User Profile
	--------------------------------
	
	For additional information about creating a new user profile in Outlook, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q181142 OL98: (CW) How to Create a New User Profile for Outlook
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook98 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbOutlook804 kbOutlook97EntSR1
	Version           : :8.01,8.02,8.03,8.04,SR-1 Enterprise Update; WINDOWS:8.5
	Issue type        : kbprb
	
	=============================================================================
	
