---
layout: page
title: "Q154933: Err Msg: The LsaCreateSecret Call Failed"
permalink: kb/154/Q154933/
---

## Q154933: Err Msg: The LsaCreateSecret Call Failed

	Article: Q154933
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Error 1057 is reported when you select the startup option Log On As This Account
	for a Windows NT Service.
	
	The following is written to the system log:
	
	  Event ID#: 7005
	  The LsaCreateSecret call failed with the following error: C0000035
	
	CAUSE
	=====
	
	You can manage trusted domains and associated passwords programmatically by
	using the Windows NT local security authority (LSA) API. However, LSA secrets
	are limited to 256. The client side of a trust relationship consumes one LSA
	secret. LSA secrets are used for other purposes (most notably, trust
	relationships and for saving service passwords). As a result, LSA API in your
	program or service may fail because you have reached the 256 limit.
	
	RESOLUTION
	==========
	
	Use the updated Lsasrv.dll file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
