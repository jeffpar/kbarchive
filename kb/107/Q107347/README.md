---
layout: page
title: "Q107347: Network Card Drivers That Must Load in Conventional Memory"
permalink: /kb/107/Q107347/
---

## Q107347: Network Card Drivers That Must Load in Conventional Memory

{% raw %}

	Article: Q107347
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To operate correctly, certain network card drivers require that you load them
	into conventional memory. These cards all use bus-mastering direct memory access
	(DMA) for transferring data, which prevents the drivers from being loaded into
	the upper memory blocks (UMBs).
	
	Below is a list of these network adapters and the corresponding driver names.
	
	  Network card                                Driver name
	  -------------------------------------------------------
	
	  Advanced Micro Devices AM2100/AM1500T        AM2100.DOS
	  DLINK DE500 VLB                               DE500.DOS
	  Exos 105                                     AM2100.DOS
	  Novell/Anthem NE1500T                        AM2100.DOS
	  Novell/Anthem NE2100                         AM2100.DOS
	  Zenith Data Systems Z-Note                   I82593.DOS
	
	For testing, load the network drivers into conventional memory by replacing the
	NET START line in the AUTOEXEC.BAT with the following line:
	
	  net start /nohi
	
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
