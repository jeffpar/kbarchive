---
layout: page
title: "Q159601: WinNT Err: Mail Could Not Be Delivered"
permalink: /kb/159/Q159601/
---

## Q159601: WinNT Err: Mail Could Not Be Delivered

{% raw %}

	Article: Q159601
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send an e-mail message from Windows Messaging you receive a reply
	e-mail message from System Administrator with a subject line starting with
	"Undeliverable:" and a message body consisting of the following error.
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: Test Email Message
	  Sent: 11/17/96 4:47:27 PM
	
	  The following recipient(s) could not be reached:
	
	  EmailUser on 11/17/96 4:47:29 PM
	  Mail could not be delivered due to a problem with the postoffice. Contact your
	  administrator.
	
	At the top of the opened e-mail message there is a Send Again button; however,
	sending the original e-mail message again only results in the same response from
	System Administrator.
	
	CAUSE
	=====
	
	The share permissions or directory permissions on the postoffice are not set to
	allow full control to the user or group to which the user belongs who is sending
	the email message.
	
	RESOLUTION
	==========
	
	Set the share and directory permissions such that all users who need access to
	the postoffice directory are allowed full control to both the share and the
	postoffice directory and subdirectories.
	
	Additional query words: msmail mailbox
	======================================================================
	Keywords          : kberrmsg kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
