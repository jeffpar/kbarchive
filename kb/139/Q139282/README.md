---
layout: page
title: "Q139282: New 3C509 Addressing Scheme Requires New Remoteboot Config"
permalink: /kb/139/Q139282/
---

## Q139282: New 3C509 Addressing Scheme Requires New Remoteboot Config

{% raw %}

	Article: Q139282
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
	
	The new 3COM 3C509 adapter has a new addressing scheme that requires you create
	a new remoteboot configuration. The older 3C509 adapters have a
	VendorName=00608C, and the newer 3C509 adapters have a VendorName=0020AF. If you
	try to boot the newer adapter with the old configuration, the following error
	message appears:
	
	  unknown client network adapter id
	
	RESOLUTION
	==========
	
	To correct this problem, create a new remoteboot configuration as outlined in
	the Windows NT Server Installation Guide on pages 139-140. Follow the documented
	steps and add the new 6-digit prefix 0020AF to the VendorName parameter.
	
	Additional query words: prodnt win3x rpl
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
