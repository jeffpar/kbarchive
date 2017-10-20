---
layout: page
title: "Q175764: SMS: DBCNV12a Does Not Modify Table During SMS 1.2 SP2 Upgrade"
permalink: /kb/175/Q175764/
---

## Q175764: SMS: DBCNV12a Does Not Modify Table During SMS 1.2 SP2 Upgrade

{% raw %}

	Article: Q175764
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 04-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Dbcnv12.exe or Dbcnv12a.exe do not modify all the required tables when you
	upgrade to Systems Management Server version 1.2 Service Pack 2. The upgrade
	should increase the Software_Name0 column size in the Software_Comm table from
	40 characters to 128 characters.
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q164890 SMS Software Inventory Package Is Limited to 40 Characters
	
	  Q175763 SMS: Long Inventory Package Names Cause Incomplete Inventory
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	NOTE: After applying Service Pack 4, you must drop and re-create any views.
	
	Additional query words: prodsms 1.20 SQL
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
