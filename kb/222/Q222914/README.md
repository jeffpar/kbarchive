---
layout: page
title: "Q222914: XCLN: Error When Adding Mailboxes to Profile"
permalink: kb/222/Q222914/
---

## Q222914: XCLN: Error When Adding Mailboxes to Profile

	Article: Q222914
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add mailboxes to open in the User profile, you receive the following
	error message when you click Apply or OK.
	
	  The action could not be completed. The action could not be completed.
	
	CAUSE
	=====
	
	The Mapisvc.inf file has either been modified or is missing.
	
	RESOLUTION
	==========
	
	Replace the Mapisvc.inf file with an original unmodified file or add the
	following section:
	
	  [EMSDelegate]
	  PR_PROVIDER_DISPLAY=Microsoft Exchange Message Store
	  PR_RESOURCE_TYPE=MAPI_STORE_PROVIDER
	  PR_PROVIDER_DLL_NAME=EMSMDB.DLL
	  PR_RESOURCE_FLAGS=STATUS_NO_DEFAULT_STORE
	  660A0003=02000000
	  34140102=9eb4770074e411ce8c5e00aa004254e2
	  66090003=0C000000
	
	Additional query words: 8.0 8.01 8.02 8.03 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :
	Issue type        : kbprb
	
	=============================================================================
	
