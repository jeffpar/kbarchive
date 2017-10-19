---
layout: page
title: "Q95018: PROFS: &quot;Nickname File Filename Filetype Does Not Exist&quot; Error"
permalink: /kb/095/Q95018/
---

## Q95018: PROFS: &quot;Nickname File Filename Filetype Does Not Exist&quot; Error

	Article: Q95018
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2,3.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, versions 3.2, 3.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to start the host side of the PROFS gateway fails. When you IPL the
	VM ID, the system generates the following message:
	
	  ********************************************************
	  ERROR ERROR ERROR
	  ********************************************************
	  PROFS nickname file filename filetype does not exist
	  ********************************************************
	  GATEWAY UNABLE TO OPERATE
	  ********************************************************
	  PWAVERIF FAILED, RC = 32
	
	CAUSE
	=====
	
	The PROFS nickname file is not stored in the PWAINIT DATA file on the 191 disk
	for the gateway VM ID.
	
	RESOLUTION
	==========
	
	Place the PROFS nickname file on the 191 disk for the gateway VM ID and make
	sure that PWAINIT DATA file specifies the name of the nickname file.
	
	
	Additional query words: 2.10b 3.20 3.30 ErrMsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320 kbMailGateIBMPROFS330
	Version           : :3.2,3.3
	
	=============================================================================
	
