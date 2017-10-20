---
layout: page
title: "Q150060: Cannot Delete Directory Structure on FPNW Volume"
permalink: /kb/150/Q150060/
---

## Q150060: Cannot Delete Directory Structure on FPNW Volume

{% raw %}

	Article: Q150060
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 19-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to delete certain deep directory structures on a Windows NT 3.51
	File and Print Services for NetWare (FPNW) volume, the client trying to do the
	deletion receives an "Access Denied" error, despite having all necessary rights
	to delete the directory structure.
	
	NOTE: The actual message "Access Denied" is seen on a Windows 95 system. If a you
	use the DELTREE command from the command prompt, the command completes, but only
	the bottom directory is actually deleted.
	
	The NETX client error is:
	
	  Shell-332-85: file in use during remove a subdirectory.
	  File: DirName\SVRName Abort, Retry, Fail?
	
	The VLM client error is:
	
	  Sharing violation reading device Network.
	  Abort, Retry, Fail?
	
	CAUSE
	=====
	
	The FPNW server maintains a pool of search handles that are used whenever a
	client issues a request to search for a file or directory. When a very large
	number of search commands are issued in a very short period of time, FPNW may
	reuse a search handle before it should, and context information is lost.
	
	This problem occurs when a very large directory tree with many subdirectories,
	each containing many files, is deleted.
	
	WORKAROUND
	==========
	
	To work around this problem, delete large directory trees a little at a time or
	delete the tree from the Windows NT server or from some client other than an
	FPNW client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft File and Print
	Services for NetWare version 3.51. This problem was corrected in the latest
	Windows NT 3.51 U.S. Service Pack. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
