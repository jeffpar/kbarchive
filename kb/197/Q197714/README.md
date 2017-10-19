---
layout: page
title: "Q197714: XWEB: OWA/SSL: This Page Contains Secure and Non-secure Items"
permalink: /kb/197/Q197714/
---

## Q197714: XWEB: OWA/SSL: This Page Contains Secure and Non-secure Items

	Article: Q197714
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
	
	When you connect to a mailbox through Outlook Web Access using Internet Explorer
	4.01 and the Microsoft Internet Information Server (IIS) computer configured to
	use Secure Sockets Layer (SSL) (https://), the following dialog box may appear
	when opening a message:
	
	  This page contains both secure and non-secure items. Do you want to download
	  the non-secure items?
	
	  Yes No More Info
	
	Selecting Yes opens the message and any subsequent messages. Selecting No causes
	the dialog box to go away but the message opens anyway. Selecting More Info
	displays the following information:
	
	  Downloading insecure content from a secure Web site
	
	  The Web site you are viewing is a secure Web site. It uses a security protocol
	  such as SSL or Private Communications Technology (PCT) to secure information
	  you send and receive. However, this Web page contains items from other Web
	  sites that are not secure.
	
	  Given what you know about this Web site and your computer, you must decide
	  whether to proceed with downloading the insecure items. If, given this
	  information, you still do not feel confident about installing this software,
	  then click No.
	
	WORKAROUND
	==========
	
	This problem was fixed in Internet Explorer 4.01 Service Pack 1.
	
	If you access the mailbox by means of Outlook Web Access using Internet Explorer
	4.01 with Service Pack 1 applied, the dialog box does not appear.
	
	MORE INFORMATION
	================
	
	For additional information, please refer to the following article in the
	Microsoft Knowledge Base.
	
	  Q184960 This Page Contains Both Secure and Non-secure Items...
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
