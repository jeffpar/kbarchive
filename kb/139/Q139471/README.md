---
layout: page
title: "Q139471: Unable to Change Domain Name of Windows NT BDC"
permalink: /kb/139/Q139471/
---

## Q139471: Unable to Change Domain Name of Windows NT BDC

{% raw %}

	Article: Q139471
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
	
	After you change the domain name of the primary domain controller (PDC) in
	Control Panel Network and then attempt to change the domain name of the backup
	domain controller (BDC), the following error message appears:
	
	  You already have a connection to the domain. You must disconnect before
	  joining the domain.
	
	When you attempt to use the previous domain name for the PDC, the following error
	message appears:
	
	  The domain name entered is already in use by another computer.
	
	RESOLUTION
	==========
	
	To correct this problem, disconnect any connections you have from the BDC to the
	PDC before you change the domain name of the BDC.
	
	NOTE: This only works if you change to a new domain name. That is, a previously
	non-existing domain.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
