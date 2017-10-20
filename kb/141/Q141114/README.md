---
layout: page
title: "Q141114: PRB: &quot;NetBIOS AddName Failure&quot; On Remote Boot Workstation"
permalink: /kb/141/Q141114/
---

## Q141114: PRB: &quot;NetBIOS AddName Failure&quot; On Remote Boot Workstation

{% raw %}

	Article: Q141114
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error is received soon after the password is entered on a remote
	boot diskless workstation using a 3COM ETHERLINKIII network adapter:
	
	  NetBIOS AddName Failure.
	
	CAUSE
	=====
	
	The NDIS2 driver, ELNK3.DOS, which is on the server compact disc, does not work
	with newer 3COM ETHERLINK III network interface cards, although it successfully
	binds with the protocol stack.
	
	Information on ELNK3.DOS driver that does not work:
	
	  ELNK3.DOS 05/26/95  10:57a   size: 13,014
	
	RESOLUTION
	==========
	
	Obtain a more recent driver from 3COM. On the remote boot server, replace
	\RPL\BBLOCK\NDIS\ELNK3.DOS with the more recent driver.
	
	Information on driver that does work:
	
	  ELNK3.DOS 09/15/95  10:51a   size: 17,901
	
	
	Additional query words: 3COM ELNK3.DOS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
