---
layout: page
title: "Q151309: Maintenance Manager Copies Files to Root of NetWare Servers"
permalink: /kb/151/Q151309/
---

## Q151309: Maintenance Manager Copies Files to Root of NetWare Servers

{% raw %}

	Article: Q151309
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbMaintMan smsmaintman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Novell NetWare servers may stop responding, due to large amounts of root
	directory file entries created by the Systems Management Server Maintenance
	Manager service.
	
	CAUSE
	=====
	
	On NetWare servers, Maintenance Manager places the Maintman.tst file in the root
	directory of the volume on which the Logon.srv directory resides. Maintenance
	Manager creates and deletes this file on its polling interval.
	
	If the NetWare server does not automatically purge deleted files, the
	Maintman.tst files will consume more and more directory entries on the root
	directory. If the maximum number of directory entries is reached, the NetWare
	server may stop responding.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem was corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms 1.20 maintman
	
	======================================================================
	Keywords          : kbMaintMan smsmaintman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
