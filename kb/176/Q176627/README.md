---
layout: page
title: "Q176627: XADM: Information Store Stops Unexpectedly"
permalink: /kb/176/Q176627/
---

## Q176627: XADM: Information Store Stops Unexpectedly

{% raw %}

	Article: Q176627
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running German Microsoft Windows NT Server and you attempt to start a
	service, the information store may stop unexpectedly.
	
	CAUSE
	=====
	
	This problem can occur when the Edb.chk file is missing. When this occurs,
	Exchange Server attempts to locate the most recent information store transaction
	log (Edb.log or Edb<xxxxx>.log, where <xxxxx> is a series of
	hexadecimal digits). When you are running German Microsoft Windows NT Server,
	the transaction log file name that is returned contains lowercase characters. In
	this case, Exchange Server does not properly handle transaction log file names
	that contain lowercase characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
