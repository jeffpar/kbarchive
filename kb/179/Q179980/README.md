---
layout: page
title: "Q179980: XFOR: DBCS Messages Not Migrated Correctly from GroupWise"
permalink: /kb/179/Q179980/
---

## Q179980: XFOR: DBCS Messages Not Migrated Correctly from GroupWise

{% raw %}

	Article: Q179980
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you migrate messages that were created using a double-byte character set
	(DBCS) from Novell GroupWise, the messages may not be displayed properly when
	you open them in an e-mail client after the migration.
	
	CAUSE
	=====
	
	When you migrate messages from GroupWise, the messages are converted to Rich
	Text Format (RTF) before they are migrated to the Microsoft Exchange Server
	computer. Messages that contain DBCS characters may not be converted correctly.
	Therefore, they may not be displayed properly when you open them in an e-mail
	client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	GroupWise is manufactured by Novell, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: japanese japan
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
