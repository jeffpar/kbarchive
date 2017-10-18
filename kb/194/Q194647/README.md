---
layout: page
title: "Q194647: XCLN: OWA Jscript Error Accessing Inbox After Public Calendar"
permalink: kb/194/Q194647/
---

## Q194647: XCLN: OWA Jscript Error Accessing Inbox After Public Calendar

	Article: Q194647
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Outlook Web Access (OWA) only supports access to your primary calendar
	information. Public calendars are not available. However, if you click on a
	public calendar folder, your personal calendar appears. After you select this
	calendar, when you click the Inbox again the following error message appears:
	
	  Microsoft JScript runtime error
	
	  [Line: 47] 'MF.command_fr' is not an object
	
	  Would you like to continue running scripts on this page? Yes No
	
	If you select Yes, you are repeatedly prompted with the above error message when
	you select the Inbox again. If you select No, this behavior repeats.
	
	WORKAROUND
	==========
	
	Close the browser, and restart your OWA session.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook Web Access
	version 5.5 Service Pack 1.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
