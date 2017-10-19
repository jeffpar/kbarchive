---
layout: page
title: "Q151746: BDC Promoted to PDC Lacks License Purchase History"
permalink: /kb/151/Q151746/
---

## Q151746: BDC Promoted to PDC Lacks License Purchase History

	Article: Q151746
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you promote a backup domain controller (BDC) to be the primary domain
	controller (PDC), License Manager loses its purchase history. Products view (per
	seat and per server) is set to 0 and Clients (per seat) is set to 0 licensed and
	1 unlicensed.
	
	If you restore the original primary domain controller, the License Manager
	purchase history is regenerated.
	
	CAUSE
	=====
	
	The Cpl.cfg file contains purchase history information. It does not get
	replicated from the PDC to the BDC. When the BDC becomes the PDC it does not
	have the purchase history.
	
	RESOLUTION
	==========
	
	Make a copy of the old Cpl.cfg file and place it in system32 directory
	(typically, c:\winnt35\system32) of the new PDC. This will keep the purchase
	history intact.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
