---
layout: page
title: "Q186096: XADM: Eseutil.exe Does Not Fix Records with Missing Long Values"
permalink: /kb/186/Q186096/
---

## Q186096: XADM: Eseutil.exe Does Not Fix Records with Missing Long Values

{% raw %}

	Article: Q186096
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Eseutil.exe utility with the /P switch to repair a Microsoft
	Exchange Server database, Eseutil.exe may encounter a record that references a
	long value that does not exist. Eseutil.exe treats this as a non-corrupting
	error and does not fix the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	After you apply the fix, when Eseutil.exe encounters a record that references a
	long value that does not exist, Eseutil.exe fixes the problem by removing the
	record from the database.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
