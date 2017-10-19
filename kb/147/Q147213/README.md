---
layout: page
title: "Q147213: Sent Internet Mail Remains in the Outbox"
permalink: /kb/147/Q147213/
---

## Q147213: Sent Internet Mail Remains in the Outbox

	Article: Q147213
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send Internet mail using Microsoft Exchange, the mail may remain in the
	Outbox. You may or may not be able to receive incoming Internet mail.
	
	CAUSE
	=====
	
	Although your computer is connected to the Internet properly, the Internet Mail
	information service may not be configured properly.
	
	RESOLUTION
	==========
	
	Check the properties of the Internet Mail information service. Make sure that
	all the information is correct, particularly the Internet Mail Server entry.
	
	If there are other information services in the profile, try creating a new
	profile with only the Internet Mail information service. You can use the .pab
	and .pst files from the original profile if you want. This should remove any
	conflicts among delivery services.
	
	If the e-mail address or account name uses the "user@provider.com" format, try
	removing the "@provider.com" portion. Also, check the personal address book
	itself. If a recipient is not in the personal address book, you may need to
	create an entry for the recipient in the personal address book for the message
	to be delivered.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
