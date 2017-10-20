---
layout: page
title: "Q138803: SNA Server Admin May Show Incorrect Status for LUs 54 - 106"
permalink: /kb/138/Q138803/
---

## Q138803: SNA Server Admin May Show Incorrect Status for LUs 54 - 106

{% raw %}

	Article: Q138803
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On your SNA Server supporting multiple connections, SNA Server Admin displays
	that the status for a block of defined LUs between LU numbers 54 and 106 is
	Inactive even though the LUs are actually Available or In Session.
	
	The problem occurs if the all of the following are true in the order listed:
	
	1. There are two (or more) PUs (connections) defined on a SNA server.
	
	2. Both PUs have 53 or more LUs defined.
	
	3. SNA Server Admin is started and it asks the SNA server to send the current
	  state (for example, Inactive, Available, In Session, etc.) of all LUs.
	
	4. SNA Server Admin gets the state of all the LUs for the first PU, for example,
	  PU_X.
	
	5. Before SNA Server Admin gets the state of the LUs on the second PU, for
	  example, PU_A, SNA Server gets notification that some of the LUs on PU_X have
	  changed state.
	
	6. SNA Server Admin gets the state of all the LUs on the second PU, PU_A, rather
	  than the first PU, PU_X, because PU_A is alphabetically sorted before PU_X.
	
	The problem does not occur if one or more of the following are true:
	
	- If PU_A is named PU_Z, for example, that is, if it is named so it is
	  alphabetically sorted after PU_X.
	
	- If step 4 above comes after step 5, that is, if SNA Server Admin receives the
	  PU_A LU status before any change notification for the PU_X LUs).
	
	- If PU_A or PU_X has 52 or fewer LUs defined.
	
	- If PU_A and PU_X are on different SNA servers.
	
	
	CAUSE
	=====
	
	SNA Server Admin confuses LUs 54 to 106 on PU_A with LUs 54 to 106 of PU_X
	(assuming sequential LU numbering).
	
	RESOLUTION
	==========
	
	Microsoft has updated the file <snaroot>\SYSTEM\SNAMANAG.DLL to correct
	this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	KBCategory: kbnetwork kbbug2.00 kbbug2.10 kbbug2.11
	KBSubcategory: ntnetserv
	
	Additional query words: prodsna 2.00 2.10 2.11 sessions remote update physical
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
