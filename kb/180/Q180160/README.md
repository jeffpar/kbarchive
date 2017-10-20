---
layout: page
title: "Q180160: XCLN: Inbox, Properties Does Not Work After WinNT 4.0 Upgrade"
permalink: /kb/180/Q180160/
---

## Q180160: XCLN: Inbox, Properties Does Not Work After WinNT 4.0 Upgrade

{% raw %}

	Article: Q180160
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade from Microsoft Windows NT version 3.51 to Microsoft Windows NT
	version 4.0, right-clicking on Inbox and then clicking on Properties has no
	effect.
	
	CAUSE
	=====
	
	During the initial installation of the Microsoft Exchange Windows NT client, the
	installer does not copy the file Mlshext.dll, the file that gives the Exchange
	client right-click functionality.
	
	WORKAROUND
	==========
	
	Reinstall the Microsoft Exchange client after the upgrade to Windows NT version
	4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Windows NT
	client, versions 4.0 and 5.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WinNT:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
