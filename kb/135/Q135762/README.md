---
layout: page
title: "Q135762: Installing the Cisco Systems AccessPro PC Card With Windows NT"
permalink: /kb/135/Q135762/
---

## Q135762: Installing the Cisco Systems AccessPro PC Card With Windows NT

{% raw %}

	Article: Q135762
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Installing the Cisco Systems AccessPro PC Card fails under Windows NT.
	
	CAUSE
	=====
	
	Page 3-20 of the Cisco Systems AccessPro Card Installation Guide states the
	following information on installing the card in Windows NT:
	
	  During the boot process for MS NT, the PC COM ports will receive a Break
	  command as a result of Windows NT probing for a serial mouse. This Break
	  command will cause the AccessPro card to break out of the system image and go
	  to the ROM monitor (monitor prompt), interrupting operation of the AccessPro
	  card.
	
	  Consult your Microsoft Windows NT manual for instructions on how to disable
	  this process for the COMport used by the AccessPro card.
	
	RESOLUTION
	==========
	
	To stop Windows NT from scanning the COM port, edit the BOOT.INI and add the
	switch /NOSERIALMICE=COMX to the line for the operating system you are started,
	where X is equal to the COM port the AccessPro card is using.
	
	
	MORE INFORMATION
	================
	
	For more information about adding this switch to the Boot.ini file, query on the
	following words in the Microsoft Knowledge Base:
	
	  noserialmice and boot.ini
	
	The AccessPro is manufactured by Cisco Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this products'
	performance or reliability.
	
	Additional query words: hang
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
