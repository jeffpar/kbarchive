---
layout: page
title: "Q69684: Installing Windows 3.0 on Everex 386/20 AGI 3000D"
permalink: /kb/069/Q69684/
---

## Q69684: Installing Windows 3.0 on Everex 386/20 AGI 3000D

{% raw %}

	Article: Q69684
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to install Microsoft Windows 3.0 on an Everex 386/20 AGI 3000D
	without updated BIOS your installation may stop (hang) when you insert the
	second disk.
	
	CAUSE
	=====
	
	American Megatrends Incorporated (AMI) has an OEM BIOS for the Everex AGI 3000D
	that leaves a 1K hole in memory. This loss of RAM memory is most evident if a
	CHKDSK is done and reveals that there is fewer than 655,360 total bytes of
	memory. This hole does not allow Windows to access the high memory area and
	stops installation on disk 2.
	
	RESOLUTION
	==========
	
	Contact Everex Systems technical support to obtain the latest BIOS update.
	
	MORE INFORMATION
	================
	
	To check your BIOS, cold boot the machine and note the version, using the
	following information:
	
	- F2-34-US/90-K9 is the old BIOS with 1K missing
	
	- F2-34-EOS/90-K9 is the corrected BIOS
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding the product's performance
	or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
