---
layout: page
title: "Q251759: XADM: Exchange Server Mailbox Attributes Override Windows 2000"
permalink: /kb/251/Q251759/
---

## Q251759: XADM: Exchange Server Mailbox Attributes Override Windows 2000

{% raw %}

	Article: Q251759
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After the replication process finishes in the Active Directory Connector (ADC),
	the user attribute information from the Exchange Server 5.5 directory overrides
	the user attribute information in the Active Directory when the Exchange Server
	mailbox is associated to a Windows 2000 Advanced Server account.
	
	CAUSE
	=====
	
	This problem can occur because in the default matching rules (the Primary
	Windows NT Account attribute corresponds to the Windows 2000 Advanced Server
	"objectSID" attribute), the ADC always matches the Exchange Server mailbox with
	the Windows NT account. The Exchange Server attributes are then considered to be
	updates to the Windows NT account, and are changed to match the Exchange Server
	mailbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 2000 Advanced
	Server.
	
	MORE INFORMATION
	================
	
	This problem occurs if the Connection Agreement is configured with the
	"Replicate mailbox to NT user" or "Replicate mailbox to NT contacts" setting
	selected.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbwin2000AdvServSearch kbwin2000Ssearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
