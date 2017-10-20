---
layout: page
title: "Q76872: Multimedia Installable Driver SYSTEM.INI Entries"
permalink: /kb/076/Q76872/
---

## Q76872: Multimedia Installable Driver SYSTEM.INI Entries

{% raw %}

	Article: Q76872
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows with Multimedia Extensions uses installable device drivers for
	hardware-specific support. In addition to the standard device entries in the
	SYSTEM.INI file, Windows with Multimedia Extensions introduces another
	convention: the use of "driver specific" parameters on the driver entry.
	
	MORE INFORMATION
	================
	
	For example, an entry in the SYSTEM.INI file might look like the following:
	
	     [mci]
	     cdaudio=mcicda.drv
	     waveaudio=mciwave.drv 4
	
	The "waveaudio=" entry has both the driver name, MCIWAVE.DRV, and an extra
	parameter that is specific to the MCIWAVE.DRV driver (4). In this example, "4"
	is the number of seconds of wave data the MCIWAVE.DRV should buffer.
	
	Because this parameter can be stored here, MCIWAVE.DRV is not required to add
	another section to the SYSTEM.INI file to store the number of seconds to
	buffer.
	
	This parameter can be changed through the Drivers application in the Control
	Panel by choosing Setup for the MCIWAVE.DRV driver (in the Control Panel window,
	select the Drivers icon, select the MCIWAVE.DRV driver, then choose the Setup
	button).
	
	Additional query words: MMWIN 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMultiXSearch kbWinMultiX100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
