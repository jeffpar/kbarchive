---
layout: page
title: "Q313569: XADM: CDO Changed to Regenerate Public Free-and-Busy Message"
permalink: /kb/313/Q313569/
---

## Q313569: XADM: CDO Changed to Regenerate Public Free-and-Busy Message

{% raw %}

	Article: Q313569
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 28-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Collaboration Data Objects (CDO) 1.2.1 method for updating the system
	Free/Busy public folder message for a particular mailbox is modified with the
	following hotfix. If the hotfix is not installed, when an appointment is
	created, modified, deleted, and so on by CDO, the following processes occur to
	update the mailbox's free-and-busy information:
	
	1. CDO entirely deletes the free-and-busy information contained in the MAPI
	  property that is stored on the mailbox (usually referred to as the local
	  free-and-busy map).
	
	2. CDO regenerates the data entirely from the appointments in the calendar, and
	  stores it back in the MAPI property that is stored on the mailbox.
	
	3. CDO spawns a thread to update the mailbox's free-and-busy information that is
	  stored in the system Free/Busy public folder.
	
	4. The changes are merged with the existing free-and-busy message that is
	  already stored in the system Free/Busy public folder for the mailbox.
	
	With the hotfix applied, the following process occurs:
	
	1. CDO entirely deletes the free-and-busy information contained in the MAPI
	  property that is stored on the mailbox (usually referred to as the local
	  free-and-busy map).
	
	2. CDO regenerates the data entirely from the appointments in the calendar, and
	  stores it back in the MAPI property that is stored on the mailbox.
	
	3. CDO spawns a thread to update the mailbox's free-and-busy information that is
	  stored in system Free/Busy public folder.
	
	4. The existing free-and-busy message is removed, and a new, regenerated
	  free-and-busy message for the mailbox is placed in the system Free/Busy
	  public folder for the mailbox.
	
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
	
	Component: CDO
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Cdo.dll   | 5.5.2655.71 | 
	+-------------------------+
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Exchange
	Server version 5.5 Service Pack 4.
	
	
	
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
