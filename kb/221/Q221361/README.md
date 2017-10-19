---
layout: page
title: "Q221361: XADM: German Exchange Server 5.5 Doc. Contains Incorrect Links"
permalink: /kb/221/Q221361/
---

## Q221361: XADM: German Exchange Server 5.5 Doc. Contains Incorrect Links

	Article: Q221361
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 26-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install the German version of Exchange Server version 5.5, the setup
	may not work, and the following error message may be displayed:
	
	  Setup cannot update your Windows NT files because the language installed on
	  your system is different from the update language.
	
	CAUSE
	=====
	
	Documentation on the German Exchange Server 5.5 CD-ROM contains incorrect links
	to a necessary roll-up fix that ensures reliable performance. The incorrect link
	on the German Exchange Server 5.5 CD-ROM is to the English (U.S.A.) version of
	the fix. That link is as follows:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postSP3/roll-up
	
	WORKAROUND
	==========
	
	To work around this problem, you can obtain the correct fix (German) at the
	following Web site:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/ger/nt40/hotfixes-postSP3/roll-up
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	
	Additional query words: roll-up
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
