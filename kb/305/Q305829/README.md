---
layout: page
title: "Q305829: XADM: Exchange Server Administrator Program Mailbox Size Wrong"
permalink: /kb/305/Q305829/
---

## Q305829: XADM: Exchange Server Administrator Program Mailbox Size Wrong

{% raw %}

	Article: Q305829
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you check the size of a user's mailbox in Mailbox Resources, the mailbox
	size may be displayed incorrectly. For example, the mailbox size may be
	displayed as 0 kilobytes (KB). If you use Microsoft Outlook to check the actual
	size of the mailbox, the size of the mailbox is approximately 4 gigabytes (GB).
	
	CAUSE
	=====
	
	This problem can occur because a display problem in the Exchange Server
	Administrator program causes mailbox sizes over 4 GB to display incorrectly.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Microsoft Exchange Server 5.5 service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: The Exchange Server Administrator program
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Admin.exe | 5.5.2655.33 | 
	+-------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, have the user whose mailbox size you want to check
	use Outlook to determine the mailbox size:
	
	1. Start Outlook.
	
	2. Right-click the mailbox, and then click Properties for Mailbox -
	  <user_name> (where <user_name> is the user name for the mailbox).
	
	3. Click Folder Size.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
