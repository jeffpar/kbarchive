---
layout: page
title: "Q180148: French Support for Host Security"
permalink: /kb/180/Q180148/
---

## Q180148: French Support for Host Security

{% raw %}

	Article: Q180148
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Permission has been granted by the French Government for use of Microsoft SNA
	Host Security in France. 128 bit data encryption is now permissible for the
	French version of Microsoft SNA Server.
	
	CAUSE
	=====
	
	Special permission is required under French law. Data encryption is prohibited
	within France.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	To apply the hotfix, perform the following steps.
	
	1. Stop all SNA Services (including host security).
	
	2. Rename the existing snaudb.exe to snaudb.sp2 and snarpc.dll to snarpc.sp2.
	
	3. Copy the new snaudb.exe and snarpc.dll in place. Also, replace the existing
	  symbol versions with the new files. These are named as
	  <winnt>\symbols\dll\snaprc.dbg and
	  <winnt>\symbols\exe\snaudb.dbg.
	
	4. Restart all SNA Services.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
