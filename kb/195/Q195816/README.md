---
layout: page
title: "Q195816: RandomSponsor Setting Does Not Work on SNA Server Client for NT"
permalink: /kb/195/Q195816/
---

## Q195816: RandomSponsor Setting Does Not Work on SNA Server Client for NT

	Article: Q195816
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT SNA Server clients continue to select Sponsor servers randomly even
	after clearing the "Select Sponsor in Random order" option in the Ntconfig.exe
	client configuration tool.
	
	This problem only affects the Windows NT version of the SNA Server client.
	
	CAUSE
	=====
	
	The Ntconfig.exe utility of the SNA server Windows NT client incorrectly created
	a registry variable "RandomSponsors". The client's method of choosing a sponsor
	is actually controlled by a registry variable "RandomSponsor" with no "s" at the
	end.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 and 4.0
	SP1. This problem was corrected in the latest SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	WORKAROUND
	==========
	
	To work around this problem, manually create and adjust the "RandomSponsor"
	value in the client's registry. For information on this value and how to use it,
	please see the following Microsoft Knowledge Base article:
	
	  Q160849 How the SNA Server Client Chooses a "Sponsor" SNA Server
	
	Additional query words: sponsor random ntconfig
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
