---
layout: page
title: "Q166183: FPNW Server Returns Error When User Opens More Than 256 Files"
permalink: /kb/166/Q166183/
---

## Q166183: FPNW Server Returns Error When User Opens More Than 256 Files

{% raw %}

	Article: Q166183
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetworkkbbuglist kbfixlist
	Last Modified: 30-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a user is attempting to open more than 256 files on a Microsoft File and
	Printer Services (FPNW) server, they may receive an indication that too many
	files are opened on the remote server.
	
	One such indication might be the following error message:
	
	  Too many files are opened on a remote server. This error should only be
	  returned by the NT redirector on a remote drive.
	
	CAUSE
	=====
	
	This problem occurs because there is a hardcoded limit of 256 open files per
	user.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.00 prodnt
	
	======================================================================
	Keywords          : kbenv kbnetwork kbbuglist kbfixlist
	Technology        : kbServicesNetwareSearch kbFPNW400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
