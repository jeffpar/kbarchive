---
layout: page
title: "Q134524: Newer Racal EtherBlaster Cards May Need OEM Ni6510.dos File"
permalink: /kb/134/Q134524/
---

## Q134524: Newer Racal EtherBlaster Cards May Need OEM Ni6510.dos File

{% raw %}

	Article: Q134524
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Newer versions of the Racal EtherBlaster network adapter may not work with the
	Windows 95 Ni6510.dos driver. You may receive one of the following error
	messages:
	
	  - Error reading configuration. Run diagnostics.
	
	  - Error loading device driver Ni6510.dos
	
	  - Error 7306 Device failed
	
	  - Error 7321
	
	CAUSE
	=====
	
	The Racal EtherBlaster, NI6510, and NI6510SC network adapters all use the same
	NDIS 2 driver, Ni6510.dos. The copy of this driver included with Windows 95 does
	not support the newer versions of the Racal EtherBlaster network adapter. The
	disk included with the Racal EtherBlaster network adapter contains a newer
	driver that does work with the newer adapters. Note that the newer driver also
	works with the NI6510 and NI6510SC network adapters.
	
	  Driver              Name         Ver.     Size     Date
	  ----------------------------------------------------------
	  Windows 95 driver   Ni6510.dos   v.5.01   11,070   10/5/94
	  OEM driver          Ni6510.dos   v.5.50   11,540   1/4/94
	
	The date on the driver files may differ from the date shown here. The size and
	version numbers should match those shown here.
	
	RESOLUTION
	==========
	
	Replace the Windows 95 Ni6510.dos driver with the driver included on the disk
	from the network adapter manufacturer. To do so, rename the Ni6510.dos file in
	the Windows folder, copy the file from the disk to the Windows folder, and then
	restart your computer.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Racal EtherBlaster network adapter that exhibits this problem has the
	following identification:
	
	  EtherBlaster TP U   625-0383-00 Rev AB  (on the back of the card)
	
	The chip is identified as: AM79C961KC (PCNet family)
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
