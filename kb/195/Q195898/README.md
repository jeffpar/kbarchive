---
layout: page
title: "Q195898: Incorrect Drive Size with Promise Technologies Ultra DMA Card"
permalink: /kb/195/Q195898/
---

## Q195898: Incorrect Drive Size with Promise Technologies Ultra DMA Card

{% raw %}

	Article: Q195898
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply the updated Atapi.sys driver on a computer with a hard disk
	drive larger than 8 gigabytes (GB) that is connected to a Promise Technologies
	Ultra 33 PCI bus-mastering controller, the drive may still be reported as only 8
	GB by Disk Administrator.
	
	CAUSE
	=====
	
	On computers configured to use a Promise Technologies Ultra 33 PCI bus-
	mastering controller, the following conditions must be true:
	
	- Version 1.3.5 or later of the Promise Technologies driver must be used.
	
	- The updated Atapi.sys hotfix must be installed.
	
	- The IDE channel must be disabled in the computer's BIOS so that the LBA EIDE
	  feature in the BIOS on the Promise card can control access to the drive.
	
	RESOLUTION
	==========
	
	To see a hard disk drive that is larger than 8 GB and is connected to a Promise
	Technologies Ultra DMA PCI controller, the following conditions must be true:
	
	- The IDE channel to which the drive would otherwise be attached on the
	  motherboard must be disabled in the computer's BIOS.
	
	- Use the latest driver for the Promise Technologies Ultra DMA bus- mastering
	  card. For the entire drive to be accessible under Windows NT 4.0, version
	  1.3.5 or later of this driver must be installed.
	
	- The updated Atapi.sys driver must be installed as per the following article
	  in the Microsoft Knowledge Base:
	
	  Q197667 Installing Windows NT Server on a Large IDE Hard Disk
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	MORE INFORMATION
	================
	
	The updated Atapi.sys file is included in Windows NT 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
