---
layout: page
title: "Q87319: MIDI Mapper Cannot Be Configured for Individual Workstation"
permalink: /kb/087/Q87319/
---

## Q87319: MIDI Mapper Cannot Be Configured for Individual Workstation

{% raw %}

	Article: Q87319
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Windows is set up with a network install (using the SETUP /N command), you
	cannot configure an individual copy of MIDI mapper for each workstation.
	Instead, if you run MIDI mapper, it will always default to the share directory
	on the network (W:\WINSHARE).
	
	WORKAROUND
	==========
	
	The only possible workaround is to set up Windows on each workstation. This way
	each user will have his or her own copy of MIDI mapper.
	
	MORE INFORMATION
	================
	
	MIDI mapper is an application that allows you to set up information such as key
	maps, patch maps, and channel mappings for a MIDI device. Because it is possible
	for different workstations on a network to have different sound cards, each
	workstation should be able to be configured independently. Windows, through a
	network installation, does not allow you to do this. It will always look to the
	shared directory to find the files MIDIMAP.DRV and MIDIMAP.CFG. Even if these
	files are copied to each individual's user directory, MIDI mapper will still
	look to the shared directory for its information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.1. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: midimapper Novell banyan vines LAN manager Lantastic control
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
