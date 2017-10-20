---
layout: page
title: "Q165388: Invalid Directory Returned When Attempting to Access FPNW"
permalink: /kb/165/Q165388/
---

## Q165388: Invalid Directory Returned When Attempting to Access FPNW

{% raw %}

	Article: Q165388
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.00
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 22-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 4.00 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	NETX clients may receive the following error when attempting to change to a
	subdirectory on a File and Print Services for NetWare (FPNW) volume:
	
	  Invalid Directory
	
	CAUSE
	=====
	
	This error was caused by not impersonating the user on a call to open a
	directory for searching when it was a relative open (relative to the root
	directory open for the share). The fix was to impersonate the user before doing
	the open of the directory.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbServicesNetwareSearch
	Version           : winnt:4.00
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
