---
layout: page
title: "Q86879: Power Management and 32-Bit Disk Access with Magnavox Metalis"
permalink: /kb/086/Q86879/
---

## Q86879: Power Management and 32-Bit Disk Access with Magnavox Metalis

{% raw %}

	Article: Q86879
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Magnavox Metalis 386SX is a notebook computer that uses Power Management
	(PM), instead of Advanced Power Management (APM). Microsoft Windows 3.1 supports
	APM. The Metalis cannot be set up for APM because it only supports the PM
	standard.
	
	You can use 32-bit disk access on the Magnavox notebook providing you completely
	disable PM in the CMOS. If you use 32-bit disk access without first disabling
	PM, your hard drive may shut down while you use Windows.
	
	MORE INFORMATION
	================
	
	Disabling PM decreases the battery life; however, if you use an AC adapter, you
	don't need PM. 32-bit-disk access adds considerable speed to the SX machine.
	
	NOTE: 32-bit disk access is only available for WD-1003 compatible hard-disk
	controllers. Hard-disk controllers in most portables are very similar to Western
	Digital controllers but have extensions for power management.
	
	For further information on how to disable Power Management, contact Magnavox.
	
	For further information on APM, query on the following words in the Microsoft
	Knowledge Base:
	
	  power and management and portable and windows and 3.1
	
	REFERENCES
	==========
	
	Page 5-4 Magnavox Notebook Computer operation manual
	
	Additional query words: fastdisk 3.10 hard fast disk 32-bit lap top laptop lap-top 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
