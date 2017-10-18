---
layout: page
title: "Q197075: XFOR: Error during Exchange Notes Connector Setup"
permalink: kb/197/Q197075/
---

## Q197075: XFOR: Error during Exchange Notes Connector Setup

	Article: Q197075
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During installation of the Exchange Notes Connector, you may receive the
	following error message:
	
	  A read only file, \\<server name>\address\notes\alpha\ntspxgen.dll,
	  was
	  found while attempting to copy files to the destination location. To
	  overwrite the file, click the YES button, otherwise click the No button.
	
	However, when you check with File Explorer, you find that Ntspxgen.dll is NOT
	flagged as read-only.
	
	If you click Yes to overwrite the file, the following message appears:
	
	  Could not update the e-mail address generator \ALPHA-
	  WS1\address\NOTES\Alpha\ntspxgen.dll. The address generator is probably
	  in use by the Exchange Server System Attendant. Choose Yes to retry the
	  update or 'No' to exit setup.
	
	If you click Yes at this point, the first error message noted here is displayed
	again. You can only exit this loop if you click No.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. In Control Panel, double-click Service to stop and restart the System
	  Attendant service.
	
	2. Run the Exchange Notes Connector Setup again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Exchange Notes Connector
	component of Microsoft Exchange Server version 5.5.
	
	
	MORE INFORMATION
	================
	
	This is a known issue, as the system attendant often locks up the address
	generators. The system attendant already has the .dll file loaded from an
	earlier installation to generate Notes proxies. LinkAge's answer was to document
	that if this error occurred, Exchange Server should be recycled, which is,
	effectively, stopping and restarting the system attendant.
	
	This error is mostly seen when installing the Exchange Notes Connector over an
	existing connector, or when one-offs and templates have already been installed.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
