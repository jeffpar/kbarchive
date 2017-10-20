---
layout: page
title: "Q150008: DOS Applications Receive Wrong Error Code in FPNW"
permalink: /kb/150/Q150008/
---

## Q150008: DOS Applications Receive Wrong Error Code in FPNW

{% raw %}

	Article: Q150008
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Certain applications, such as Btrieve, may fail when you attempt to create a
	file that already exists on a File and Print Services for NetWare (FPNW)
	server.
	
	Btrieve may return the following error:
	
	  Code 25: Cannot Create File
	
	CAUSE
	=====
	
	This problem is caused by FPNW returning a NetWare Core Protocol (NCP)
	Completion Code of Failure (FF) when attempting to create the file, instead of
	the expected NCP Completion Code of No Create Delete Privilege (85).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. This problem was corrected in the latest Windows NT 3.51
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 prodnt bempty erase brequest
	
	======================================================================
	Keywords          :  
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
