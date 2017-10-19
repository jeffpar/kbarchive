---
layout: page
title: "Q175772: XCLN: Exchange Client Unable to Start After Uninstalling Outlook"
permalink: /kb/175/Q175772/
---

## Q175772: XCLN: Exchange Client Unable to Start After Uninstalling Outlook

	Article: Q175772
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0; :8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 5.0 
	- Microsoft Exchange Windows NT client, version 5.0 
	- Microsoft Outlook 97, versions 8.01, 8.02, 8.03 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange client, you may receive the following
	error message:
	
	  The MAPI spooler could not be started. Close and then restart all mail-
	  enabled applications. MAPI 1.0 [000004C7].
	
	CAUSE
	=====
	
	Necessary components of the Exchange client may have been removed during the
	uninstall process. This error can occur when Microsoft Outlook is installed in
	the same directory as an existing Microsoft Exchange client and then
	subsequently uninstalled.
	
	WORKAROUND
	==========
	
	If you do not intend to reinstall Microsoft Outlook, run the Microsoft Exchange
	Setup program and select the Reinstall option. Otherwise, you can just install
	Microsoft Outlook again.
	
	MORE INFORMATION
	================
	
	If you plan on running Microsoft Exchange and Microsoft Outlook on the same
	computer, it is recommended that you install them in separate directories.
	
	
	Additional query words: remove all shared components
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange500NT kbExchange500Win95
	Version           : WINDOWS:5.0; :8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	
