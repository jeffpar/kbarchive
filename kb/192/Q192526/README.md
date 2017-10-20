---
layout: page
title: "Q192526: XFOR: Macintosh Mail Source Extractor Makes Corrupt PSTs"
permalink: /kb/192/Q192526/
---

## Q192526: XFOR: Macintosh Mail Source Extractor Makes Corrupt PSTs

{% raw %}

	Article: Q192526
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to migrate from the Microsoft Mail Macintosh client to Exchange
	using the Macintosh Mail Source Extractor and then using the Migration Wizard to
	generate the PSTs (personal folder files), you may see that some of the PSTs are
	corrupt. When you click on the Inbox in an Outlook client, the Inbox hangs
	Outlook at 100 percent CPU.
	
	CAUSE
	=====
	
	The Macintosh Mail Source Extractor did not convert CRs to CR/LF pairs,
	resulting in an invalid message.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft
	Exchange Server version 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Microsoft Source Extractor
	
	  File Name                    Version
	  ------------------------------------
	  Microsoft Source Extractor   24C
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
