---
layout: page
title: "Q92989: Persistent Connections May Not Work with Real Mode Redirector"
permalink: /kb/092/Q92989/
---

## Q92989: Persistent Connections May Not Work with Real Mode Redirector

{% raw %}

	Article: Q92989
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups has a persistent connections feature that automatically
	reconnects the workstation to previously connected network shares when the
	redirector is started. This feature should work with either the real mode
	redirector (NET.EXE) or the virtual redirector (VREDIR.386).
	
	In the Windows for Workgroups Connect Network Drive dialog box, the Reconnect At
	Startup check box controls whether or not the network drive connections you make
	are persistent (remain connected until you disconnect them or clear the
	Reconnect At Startup check box).
	
	If the real mode redirector is started and this check box is not selected,
	persistent connections are not made.
	
	MORE INFORMATION
	================
	
	The Reconnect At Startup check box is selected by default, but if you clear this
	option, the setting remains deactivated until you select it again. The setting
	for this check box is maintained in the [Network] section of the SYSTEM.INI
	file. If the check box is selected, the Reconnect= line is set to Yes.
	
	The virtual redirector and the real mode redirector interpret this switch in
	different ways. The virtual redirector uses this switch to determine whether the
	Reconnect At Startup check box should be selected the next time you open the
	Connect Network Drive dialog box. The real mode redirector uses this switch to
	determine whether network drive connections made while the redirector is started
	will be persistent. If the switch is off (that is, the Reconnect At Startup
	option is not selected), the persistent connections are not made when the real
	mode redirector is started.
	
	Additional query words: 3.10 saved ms-dos 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
