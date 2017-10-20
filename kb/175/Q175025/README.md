---
layout: page
title: "Q175025: How to Build and Reset a Trust Relationship from a Command Line"
permalink: /kb/175/Q175025/
---

## Q175025: How to Build and Reset a Trust Relationship from a Command Line

{% raw %}

	Article: Q175025
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information in this article provides a way to build a trust relationship
	between two domains from a command line. To do this, use the NETDOM command line
	utility that comes with the Windows NT 4.0 Resource Kit Supplement 2.
	
	
	CAUTION: The method described in this article has not been extensively tested in
	large installations. Microsoft cannot guarantee that modification of domains as
	recommended herein will accomplish the objective described in this article under
	all circumstances and in all configurations.
	
	MORE INFORMATION
	================
	
	Suppose MYMASTERDOM is the name of the master domain (that is, the trusted
	domain) and MYRESOURCEDOM the name of the resource domain (the trusting domain)
	that will trust the master domain.
	
	With NETDOM, you can build the trust relationship from the command line. To do
	this, perform the following steps:
	
	1. On the master domain, use the following command to create a resource computer
	  account (note that this command should appear on a single line):
	
	  " NETDOM /Domain:MYMASTERDOM RESOURCE MYRESOURCEDOM <trust password>
	  /ADD" (without the quotation marks)
	
	2. On the resource domain, use the following command to establish a trust with
	  the master domain (note that this command should appear on a single line):
	
	  " NETDOM /Domain:MYRESOURCEDOM MASTER MYMASTERDOM <trust password>
	  /TRUST" (without the quotation marks)
	
	NETDOM can also build a trust relationship and complete the operations above all
	at once. If you have an administrator access to the resource domain, both of the
	following commands builds the trust relationship in one step (note that these
	commands should each appear on a single line):
	
	" NETDOM MASTER MYMASTERDOM <trust password> /TRUST " (without the
	quotation marks)
	
	-or-
	
	(If you need to enter an administrator account for the resource domain)
	
	" NETDOM /Domain:MYRESOURCEDOM /User:MYRESOURCEDOM\<administrator user>
	/Password:<administrator password> MASTER MYMASTERDOM <trust
	password> /TRUST " (without the quotation marks)
	
	You can run the second command above from the master domain primary domain
	controller (PDC) or from any Windows NT computer as soon as you have an
	administrator access to the master domain.
	
	
	For more information on the NETDOM command, refer to the Windows NT 4.0 Resource
	Kit documentation.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
