---
layout: page
title: "Q119803: Windows for Workgroups: Error 58 on Protocol 0 - (Non-ODI)"
permalink: /kb/119/Q119803/
---

## Q119803: Windows for Workgroups: Error 58 on Protocol 0 - (Non-ODI)

{% raw %}

	Article: Q119803
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows for Workgroups, you receive one of the following error
	messages:
	
	  The following error occurred while loading protocol number 0.
	  Error 58: The network responded incorrectly.
	
	-or-
	
	  Hardware failure error 5736
	
	CAUSE
	=====
	
	The RAMBIOS.SYS device driver in the CONFIG.SYS file can cause this error.
	RAMBIOS.SYS is an older driver used by video cards to control Flashc cards and
	allow for video RAM shadowing. It is not necessary on most 386 and higher
	computers.
	
	Some network cards use the same RAM address as RAMBIOS.SYS, which causes the
	network card to fail when binding.
	
	NOTE: You can also receive the above error message if you are using the HP Jet
	Direct Card and the device=HPVNPD.386 is removed or remarked out of the [386enh]
	section of the SYSTEM.INI file. For information on resolving this issue, contact
	Hewlett Packard (HP).
	
	RESOLUTION
	==========
	
	Open the CONFIG.SYS file in a text editor (such as the MS-DOS Editor) and remove
	the following line:
	
	       device=c:\rambios.sys
	
	Additional query words: rambios 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
