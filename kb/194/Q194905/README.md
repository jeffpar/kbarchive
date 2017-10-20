---
layout: page
title: "Q194905: XFOR: CCMC: Attachments from cc:Mail Version 7 Appear Corrupt"
permalink: /kb/194/Q194905/
---

## Q194905: XFOR: CCMC: Attachments from cc:Mail Version 7 Appear Corrupt

{% raw %}

	Article: Q194905
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open attachments sent from a cc:Mail version 7 client, the
	attachments may appear corrupt. For example, when opening Excel 97 attachments,
	the user may receive the following Excel warning:
	
	  ! This file is not in a recognizable format.
	
	Likewise, when you attempt to open Word 97 documents, the files do not appear to
	be formatted properly and to the user these files appear corrupt.
	
	
	CAUSE
	=====
	
	The attachments are not being converted properly by Export.exe file version
	6.01.00.5 of Lotus cc:Mail.
	
	WORKAROUND
	==========
	
	To work around this problem, upgrade the Lotus cc:Mail Export.exe program used
	on the Exchange Server Connector for Lotus cc:Mail (CCMC) to version 8.01 or
	later.
	
	MORE INFORMATION
	================
	
	For more information on the Lotus cc:Mail Export program, please refer to the
	Lotus cc:Mail Import/Export User's Guide.
	
	Additional query words: bad hosed garbage junk attach file
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
