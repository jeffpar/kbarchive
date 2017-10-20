---
layout: page
title: "Q141378: NEC Versa P Models Do Not Function with Xircom PS-CE2-10"
permalink: /kb/141/Q141378/
---

## Q141378: NEC Versa P Models Do Not Function with Xircom PS-CE2-10

{% raw %}

	Article: Q141378
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When booting into Windows NT configured with a Xircom Credit Card Ethernet
	Adapter model PS-CE2-10, various difficulties may be encountered. An error
	message indicating that adapter driver could not be loaded may or may not
	appear. Even if no such warning is encountered, access to the network may not be
	possible. Another possible symptom is the ability to access the network, but at
	a very slow speed.
	
	One additional symptom that has been observed is that Windows NT will function
	flawlessly with the Xircom adapter if the adapter was first initialized by
	another operating system such as Windows For Workgroups and the system then is
	warm booted into Windows NT.
	
	CAUSE
	=====
	
	According to NEC technical support, the Xircom adapter needs to configured to
	IRQ 5 on the Versa P in order to function with Windows NT. The difficulty arises
	from the fact that the built in sound adapter is also configured to IRQ 5 and
	cannot be changed.
	
	RESOLUTION
	==========
	
	The latest revision of the BIOS for the NEC Versa P models at the time of this
	writing is 1.02.15. This version of the BIOS allows the IRQ for the built in
	sound adapter to be configured to an IRQ other than IRQ 5.
	
	Since the NEC Versa P employs Flash BIOS, the BIOS may be upgraded by simply
	downloading the current BIOS from NEC.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	For details on availability of this update, please contact NEC Technical Support
	at (800) 632-4525.
	
	
	The Versa P Models are manufactured by NEC, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words: 3.50 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
