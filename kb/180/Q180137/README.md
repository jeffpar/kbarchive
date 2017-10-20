---
layout: page
title: "Q180137: Code Conversion Table For PRC Has Duplicate Mappings"
permalink: /kb/180/Q180137/
---

## Q180137: Code Conversion Table For PRC Has Duplicate Mappings

{% raw %}

	Article: Q180137
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the SnaNls API to convert data to/from Simplified Chinese, incorrect
	character conversion may occur.
	
	CAUSE
	=====
	
	The following mapping combinations are duplicated in the Snadbcs.tbl file for
	Simplified Chinese, which causes conversion problems for the following
	characters:
	
	  ANSI     EBCDIC
	  A1E4 <-> 4450
	  A3BF <-> 4345
	  A3BF <-> 435B
	  A3BF <-> 445C
	
	A new conversion table was created for SNA Server, and the duplicate mapping
	combinations listed above were removed. The following file was changed to
	correct this problem:
	
	  <snaroot>\system\snadbcs.tbl
	
	for Windows NT, Windows 95 and Windows 3.x clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	This problem was corrected in the latest SNA Server version 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
