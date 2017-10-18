---
layout: page
title: "Q117199: PC Adm: .XTN File for Downstream PO Not Updated Correctly"
permalink: kb/117/Q117199/
---

## Q117199: PC Adm: .XTN File for Downstream PO Not Updated Correctly

	Article: Q117199
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Administrator program (ADMIN.EXE) for versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks does not correctly update the .XTN file for a
	downstream postoffice when the routing definition for the hub postoffice is
	modified. This can result in mail being queued for the downstream postoffice but
	not delivered.
	
	CAUSE
	=====
	
	This problem occurs on a postoffice that has at least two externally defined
	postoffices. The first externally defined postoffice is defined direct via
	modem. The second external postoffice is defined indirect via the first
	postoffice. When you use the Mail Administrator program to change the routing of
	the first postoffice from direct via modem to direct via MS-DOS (or X.25), the
	second postoffice definition will not change as expected. Therefore, the second
	externally defined postoffice will still show as being defined via modem.
	
	RESOLUTION
	==========
	
	To work around this problem, use the Mail Administrator program to modify the
	settings for the second postoffice. Simply accepting the defaults displayed
	during the modify process will fix the external definition for the problem
	postoffice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks. This problem was corrected in version 3.2a.
	
	
	Additional query words: stuck
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
