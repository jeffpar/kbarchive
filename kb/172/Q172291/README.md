---
layout: page
title: "Q172291: Snacfg.exe Does Not Support Omission of LOCALBLOCKNO"
permalink: /kb/172/Q172291/
---

## Q172291: Snacfg.exe Does Not Support Omission of LOCALBLOCKNO

{% raw %}

	Article: Q172291
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you configure an SDLC connection using Snacfg.exe, if the LOCALBLOCKNO (the
	first three digits of the Local Node ID, also known as the IDBLK) value is
	omitted, you receive the following error message:
	
	  The first three digits of the Local Node ID are invalid. These digits, also
	  called the Block Number, can be any three hexadecimal digits except 000 or
	  FFF, which are reserved.
	
	
	CAUSE
	=====
	
	Snacfg.exe does not set the SDLC connection "fSdlcLeased" flag based on the
	specified link service. If this flag is not set, the validate routine in
	Snacfg.exe does not recognize the connection as being associated with a Leased
	SDLC link service and considers the omission of the IDBLK as invalid.
	
	RESOLUTION
	==========
	
	Snacfg.exe has been corrected so that it now verifies the specified link service
	is SDLC and Leased. If the link service meets both these criteria, the IDBLK
	value can be omitted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: snacfg snaconfig
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
