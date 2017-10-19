---
layout: page
title: "Q218979: PC Win: Cannot Specify Import or Export Date Later Than 2019"
permalink: /kb/218/Q218979/
---

## Q218979: PC Win: Cannot Specify Import or Export Date Later Than 2019

	Article: Q218979
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): kbYear2000
	Last Modified: 02-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you import or export messages based on the date they were received or
	modified, you cannot import or export messages that were received or modified
	after December 31, 2019. However, if you import or export all messages in a
	particular folder, messages that were received or modified after this date are
	successfully imported or exported.
	
	CAUSE
	=====
	
	When you specify a date range during an import or export operation, you can only
	specify a two-digit year. The allowable date range is 1/1/20 to 12/31/19, which
	is interpreted as 1/1/1920 to 12/31/2019.
	
	WORKAROUND
	==========
	
	To work around this problem when you are importing messages, import all the
	messages in the folder that contains the messages you want to import, and then
	manually delete the messages you did not want to import.
	
	To work around this problem when you are exporting messages, manually copy or
	move the messages you want to export to a new folder, and then export all the
	messages from that folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail for Windows
	version 3.5.
	
	Additional query words: Y2K
	
	======================================================================
	Keywords          : kbYear2000 
	Technology        : kbMailSearch kbZNotKeyword3 kbMail350
	Version           : WINDOWS:3.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
