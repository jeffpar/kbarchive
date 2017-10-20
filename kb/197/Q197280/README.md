---
layout: page
title: "Q197280: XADM: Changes to Domain Names Cause Large Incremental Downloads"
permalink: /kb/197/Q197280/
---

## Q197280: XADM: Changes to Domain Names Cause Large Incremental Downloads

{% raw %}

	Article: Q197280
	Product(s): Microsoft Exchange
	Version(s): 5.5 8.03 8.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 09-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook 97, version 8.03, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 97, version 8.03, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Incremental downloads occur that are much larger than expected. When address
	additions or modifications cause new SMTP domains in the address book, this
	problem may occur.
	
	CAUSE
	=====
	
	Client Offline Address Book information contains domain name offsets that do not
	match the server offsets. This causes the server to send a large number of
	updates.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Directory
	
	  File Name    Version
	  -----------------------
	  Oabgen.dll   5.5.2419.0
	
	  Component: Outlook Clients
	
	  File Name    Version
	  -----------------------
	  EMSABP32.DLL  5.5.2426.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	MORE INFORMATION
	================
	
	This fix has both a server-side and client-side fix. The client-side fix allows
	for a new file to be created on the client. This new OAB file, called
	Pdndex.oab, holds changes to Domain Names. Clients must be updated to the
	Emsabp32.dll version 5.5.2426.0 for this fix to be effective.
	
	
	The Oabgen.dll file goes on the Exchange Server computer designated in the site
	for OAB generation. Because the OAB-generating server can be changed to a
	different server, it is a good practice to update the Oabgen.dll file on all
	Exchange Server computers.
	
	Additional query words: misdirected recipient differences
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : 5.5 8.03 8.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
