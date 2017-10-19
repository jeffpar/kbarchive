---
layout: page
title: "Q221760: XCLN: Error Message Attempting to Sign or Encrypt an E-Mail Mess"
permalink: /kb/221/Q221760/
---

## Q221760: XCLN: Error Message Attempting to Sign or Encrypt an E-Mail Mess

	Article: Q221760
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send a digitally signed or encrypted e-mail message from
	Outlook running on a Microsoft Windows NT-based computer, you may receive the
	following error message:
	
	  This message cannot be secured using the selected security settings. Your
	  e-mail address may not match the e-mail address on the certificate, or some
	  other problem exists with the certificate. Do you want to proceed with this
	  message without security?
	
	CAUSE
	=====
	
	This error message can occur if you attempt to use an imported digital ID that
	does not match the e-mail address of the mailbox that you currently use.
	
	RESOLUTION
	==========
	
	Log on to a mailbox that contains information that is identical to the
	information contained in the digital ID key. To view the information that is
	contained in the digital ID, click Options on the Tools menu, and then click the
	Security tab. In the Security tab, next to Signing Certificate, click Choose,
	and then click View Certificate.
	
	Additional query words: OL2000 OL98
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000
	Issue type        : kbprb
	
	=============================================================================
	
