---
layout: page
title: "Q175041: XFOR: Mail for Macintosh User Names with Bullet Points"
permalink: /kb/175/Q175041/
---

## Q175041: XFOR: Mail for Macintosh User Names with Bullet Points

	Article: Q175041
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Microsoft Mail for AppleTalk Networks user with a bullet in his or her name
	will be able to send messages to an Exchange Server user through the AppleTalk
	connector. However, when an Exchange Server user tries to reply, he or she gets
	the following non-delivery report (NDR):
	
	  From: Network Manager
	  To:   The Merchant
	  Subject: Undeliverable Mail
	  Date: 1996-05-02 14:15
	  Priority: 3
	
	  Non-delivery explanation:
	  Your message did not reach some or all of the intended recipients.
	  Date submitted: 1996-05-02 14:15
	  Message title: thanks
	  The following recipients were valid:
	
	  The following recipient(s) could not be reached:
	  | Bullet Before Name@Coconut Mail Server
	
	The bullet character is transformed into a vertical bar. This does not happen
	when using the Microsoft Connection Gateway to Microsoft Mail for PC Networks.
	
	CAUSE
	=====
	
	The bullet character is not correctly mapped to the Latin 1 character set.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Do not use the bullet character in the names of Microsoft Mail for AppleTalk
	  users.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	With the fix applied, you can use the bullet character. This character
	(option+8) is now mapped to the SPACE character. This means that it is sorted to
	the top of the Global Address List. There are still, however, many other
	characters that will fail if they are used in the Microsoft Mail for AppleTalk
	addresses.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
