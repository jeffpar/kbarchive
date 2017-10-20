---
layout: page
title: "Q165249: OEM Third-Party Network Drivers Cannot be Updated"
permalink: /kb/165/Q165249/
---

## Q165249: OEM Third-Party Network Drivers Cannot be Updated

{% raw %}

	Article: Q165249
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Update button on the Adapters tab in the Control Panel Networks tool is
	unusable when the network driver name and/or registry values for the new driver
	are not the same as the old one.
	
	RESOLUTION
	==========
	
	Microsoft does not have any processes for updating OEM-supplied drivers during a
	manual or unattended upgrade installation of Windows NT, even if the driver name
	and registry values have not changed.
	
	The only way to update an installed OEM network adapter card driver with a
	different driver is to completely remove the adapter using the Control Panel
	Network tool, restart the computer, and reinstall the Network adapter using the
	new driver.
	
	MORE INFORMATION
	================
	
	The process used by the Update button reads the registry to determine the option
	name for the adapter, then opens the Oemsetup.inf file and checks the [UPGRADE]
	section of the Oemsetup.inf file.
	
	If the option name, registry entries, or driver name do not match the currently
	installed driver or registry entries, then the operation will fail.
	
	If this process fails, the only option is to completely remove the adapter using
	the Control Panel Network tool, restart your computer and re-install the adapter
	using the new driver.
	
	The process also fails if a third-party, or OEM vendor renames their driver
	and/or rewrites the Oemsetup.inf file with different option names, descriptions,
	registry settings, or driver names.
	
	Additional query words: sp update drivers OEM 3rd party
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
