---
layout: page
title: "Q252712: XCLN: &quot;The Page Cannot Be Displayed&quot; Adding an Attachment in OWA"
permalink: kb/252/Q252712/
---

## Q252712: XCLN: &quot;The Page Cannot Be Displayed&quot; Adding an Attachment in OWA

	Article: Q252712
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you add an attachment to a new e-mail message by using Outlook Web Access
	(OWA), the following error message may be displayed:
	
	  The page cannot be displayed
	
	The following event is logged in the application event log on the Microsoft
	Internet Information Service (IIS) OWA server:
	
	  Event ID: 2016
	  Source: MSExchangeWeb
	  Description: "End of the data reached while looking for token"
	
	This problem may also occur when you try to open an e-mail attachment by using
	Microsoft Internet Explorer 5.
	
	CAUSE
	=====
	
	This problem may occur because the OWA virtual directory is configured with
	Microsoft Windows NT Challenge\Response (NTLM) authentication only.
	
	WORKAROUND
	==========
	
	To work around this problem, configure the OWA virtual directory to use
	Anonymous authentication in addition to NTLM authentication.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook Web Access
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
