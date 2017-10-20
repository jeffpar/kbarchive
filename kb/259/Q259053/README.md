---
layout: page
title: "Q259053: ASN Decoding Errors in Genlogs on a Zoomit Server"
permalink: /kb/259/Q259053/
---

## Q259053: ASN Decoding Errors in Genlogs on a Zoomit Server

{% raw %}

	Article: Q259053
	Product(s): Microsoft Windows NT
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): Zoomit
	Last Modified: 22-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Zoomit VIA, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your Zoomit VIA version 1.1b server does not successfully retrieve
	transactions, you may receive Abstract Syntax Notation (ASN) decoding error
	messages. The Zoomserv\Data\Logs\Genlogs file looks like this:
	
	  ERR_00 99/12/02 09:00:25.079 (BER_getNextAsnToken)
	  >>>>>>>>>> Coding/Decoding error
	  >>>>>>>>>>
	  ERR_00 99/12/02 09:00:25.080 (BER_getNextAsnToken) Machine state (explicit_
	  flag) DB_Record <DB_Record>
	  ERR_00 99/12/02 09:00:25.081 (BER_getNextAsnToken) ->
	  Application--CONSTRUCTED- -9, length: 97
	  ERR_00 99/12/02 09:00:25.082 (BER_getNextAsnToken) Error occurred prior to
	  offset: 12031488 (0xb79600)
	  ERR_00 99/12/02 09:00:25.083 (BER_getNextAsnToken) Error occurred in <D:
	  \zoomserv/Data/db\tran.db>
	  ERR_00 99/12/02 09:00:25.084 (BER_getNextAsnToken)
	  >>>>>>>>>>
	  >>>>>>>>>>
	
	CAUSE
	=====
	
	This problem is caused by management agents that use deltas or transactions. In
	Microsoft Metadirectory Services (MMS) version 1.1b, there is a maximum of two
	transaction database files, Tran.db and Tran.dbx. When the Tran.db file exceeds
	the size limit, MMS renames the Tran.db file to Tran.dbx, and creates a new
	Tran.db file. The ASN decoding errors occur when the server does not
	successfully retrieve transactions from the Tran.dbx file.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to the current version of Microsoft
	Metadirectory Services.
	
	To work around the problem, follow these steps:
	
	1. Turn off all deltas in the management agents and run a full synchronization.
	
	2. Run the VIACompact tool.
	
	3. Turn the deltas back on in the management agents.
	
	NOTE: This workaround does not prevent recurrences of the problem.
	
	To minimize this problem, increase the size of the MMS transaction files. To
	increase the file size, edit the following line in the
	Zoomserv\Data\Config\Db5cfg file:
	
	  db5_max_tran_file_size 64000000
	
	The default size as shown is 64 megabytes (MB); increase the file size in 64-MB
	increments.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : Zoomit 
	Technology        : kbZoomitSearch kbMSNonProductSearch kbZoomit100
	Version           : :1.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
