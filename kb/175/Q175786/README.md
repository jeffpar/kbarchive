---
layout: page
title: "Q175786: XWEB: Outlook Web Access Creates a Profile Marked as Deleted"
permalink: kb/175/Q175786/
---

## Q175786: XWEB: Outlook Web Access Creates a Profile Marked as Deleted

	Article: Q175786
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Active Server Components, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	
	
	MORE INFORMATION
	================
	
	For users with an Exchange or Outlook client only, creating and then deleting
	all profiles will display this behavior also.
	
	SYMPTOMS
	========
	
	When you use either the Microsoft Exchange client or Microsoft Outlook client to
	access your Exchange Server mailbox for the first time, the Exchange Profile
	Wizard starts automatically. However, if you access your mailbox for the first
	time using a Microsoft Outlook Web Access client, the Profile Wizard is not
	started. If you subsequently run either the Exchange client or Outlook client,
	you will see the Choose Profile dialog box, but there will be no profiles to
	choose from.
	
	CAUSE
	=====
	
	This occurs because the OWA client created a profile, but marked it as deleted.
	Therefore, the Choose Profile dialog box is empty, because deleted profiles are
	not displayed. Additionally, because there is a profile created from the OWA
	startup, the Profile Wizard will not start automatically.
	
	This behavior is by product design.
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
