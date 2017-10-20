---
layout: page
title: "Q192440: XADM: Backup Stops Because of Communications Error"
permalink: /kb/192/Q192440/
---

## Q192440: XADM: Backup Stops Because of Communications Error

{% raw %}

	Article: Q192440
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Backup stops because of a communications error.
	
	CAUSE
	=====
	
	When backing up to NULL or buffering the read bytes from HRBackupRead, the
	client and server may stop responding (hang) while waiting on each other. A
	communications error will be produced, causing the backup to be halted.
	
	This problem is seen more often in single processor environments than in
	multi-processor environments.
	
	RESOLUTION
	==========
	
	Exchange Server 4.0
	-------------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to computers
	experiencing this specific problem. To resolve this problem immediately, contact
	Microsoft Product Support Services to obtain the fix. If you are not severely
	affected by this specific problem, Microsoft recommends that you wait for the
	next Microsoft Exchange Server version 4.0 service pack that contains this fix.
	
	For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	
	
	Exchange Server 5.0
	-------------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to computers
	experiencing this specific problem. To resolve this problem immediately, contact
	Microsoft Product Support Services to obtain the fix. If you are not severely
	impacted by this specific problem, Microsoft recommends that you wait for the
	next Microsoft Exchange Server version 5.0 service pack that contains this fix.
	
	For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	
	
	Exchange Server 5.5
	-------------------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0, 5.0, and 5.5.
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
