---
layout: page
title: "Q180941: APPC Printing Misinterprets ASCII Data"
permalink: /kb/180/Q180941/
---

## Q180941: APPC Printing Misinterprets ASCII Data

{% raw %}

	Article: Q180941
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During printing, the parser prematurely terminates the ASCII Transparent
	section, and begins to interpret the data as SCS codes. When this occurs, the
	SNA Print service may log the following event in the Windows NT Application
	Event Log:
	
	  Event ID: 4101
	  Source: PPV5250
	  Description: SCS parser has detected a parameter error.
	
	CAUSE
	=====
	
	The Closeprinter routine is not setting a pointer to NULL, which may cause calls
	to open a print session to fail at a later time. This results in Print Server
	losing track of its position in the datastream, causing some of the data to be
	misinterpreted as SCS codes instead of transparent data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
