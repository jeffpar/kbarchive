---
layout: page
title: "Q175114: XWEB: Cannot Access Custom Views Created with Outlook in OWA"
permalink: kb/175/Q175114/
---

## Q175114: XWEB: Cannot Access Custom Views Created with Outlook in OWA

	Article: Q175114
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you use Microsoft Exchange Server Outlook Web Access (OWA) to list the
	views on a folder, custom views created by Microsoft Outlook do not show up in
	the view selector. Custom views created by the Microsoft Exchange client are
	available.
	
	This is because OWA does not read views stored in Outlook format. In order to
	access these views using OWA, save the views in Exchange format using Outlook.
	This can be done in Outlook by opening the properties page of the folder and
	selecting Automatically Generate Microsoft Exchange Views on the General Tab.
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbprb
	
	=============================================================================
	
