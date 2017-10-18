---
layout: page
title: "Q182428: SMS: Netmon: GPF Occurs When Large String Entered in Name Field"
permalink: kb/182/Q182428/
---

## Q182428: SMS: Netmon: GPF Occurs When Large String Entered in Name Field

	Article: Q182428
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): smsnetmon
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A general protection (GP) fault may occur in Network Monitor if you enter a
	string of 49 characters in the Name box of the "Find Network Addresses From
	Name" dialog box and then run a query.
	
	CAUSE
	=====
	
	Even though 49 characters is an excessive number for a machine name, the Name
	field allows this many characters to be entered. Therefore, it should either
	allow a query based on the 49 character machine name or it should generate an
	error message stating that the name length is too long.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post additional
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms GPF
	
	======================================================================
	Keywords          : smsnetmon 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
