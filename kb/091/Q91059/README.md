---
layout: page
title: "Q91059: Network Dysfunctional After Removing Novell NetBIOS Support"
permalink: /kb/091/Q91059/
---

## Q91059: Network Dysfunctional After Removing Novell NetBIOS Support

{% raw %}

	Article: Q91059
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You remove Novell NetBIOS support from your Windows for Workgroups network, and
	now you have no network functionality.
	
	CAUSE
	=====
	
	To support Novell NetBIOS, you must add two statements to the SYSTEM.INI file.
	If you then remove Novell NetBIOS support, Control Panel does not remove the
	statements, resulting in no network functionality.
	
	WORKAROUND
	==========
	
	To regain network functionality, you must manually remove these lines if they
	exist:
	
	     V86ModeLANAs=0,1
	     LANAs=0,1
	
	MORE INFORMATION
	================
	
	Adding the two statements to your SYSTEM.INI is necessary to make the Windows
	for Workgroups network redirector ignore the Novell NetBIOS provider on LANA0.
	If you later remove Novell NetBIOS support, Control Panel moves NetBEUI support
	back to LANA0, but does not remove the statements, making the redirector ignore
	LANA0. Because the redirector cannot find a valid NetBIOS provider, it cannot
	load.
	
	You can find instructions for Novell NetBIOS support in the NETWORKS.WRI file in
	the Windows for Workgroups directory.
	
	The products included here are manufactured by Novell, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
