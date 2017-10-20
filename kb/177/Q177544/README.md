---
layout: page
title: "Q177544: XFOR: Fixed Length File Sent from OV/VM Using SENDFILE Corrupted"
permalink: /kb/177/Q177544/
---

## Q177544: XFOR: Fixed Length File Sent from OV/VM Using SENDFILE Corrupted

{% raw %}

	Article: Q177544
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A fixed-format CMS file, which is uploaded to the host (not by the Linkage
	Connector) and then sent to a Microsoft Exchange user as an attachment using
	SENDMAIL via the Linkage OV/VM connector, is corrupted and unreadable by the
	Exchange user.
	
	CAUSE
	=====
	
	The length in bytes of the file was incorrectly being placed in the file being
	sent to the Exchange user. This was causing the OV/VM to Exchange transformation
	to render the file attachment unreadable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Linkage Message Exchange,
	version 3.2.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: PROFS Office Vision IBM HOST SENDFILE CMS
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
