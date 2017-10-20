---
layout: page
title: "Q134775: Cannot Set Up from Network with Smc8000.dos Real-Mode Driver"
permalink: /kb/134/Q134775/
---

## Q134775: Cannot Set Up from Network with Smc8000.dos Real-Mode Driver

{% raw %}

	Article: Q134775
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
	
	If you try to install Windows 95 from a network server on a computer with an SMC
	EtherCard Elite16 Ultra (8216) or EtherEZ (8416) network adapter, you may
	receive the following error message:
	
	  Please insert "Disk 2" and then click OK. Or click Cancel to quit Setup.
	
	If you click OK, nothing happens. If you click Cancel, the following error
	message is displayed
	
	  Cannot open file '<x>:\<xxx>\mini.cab'
	
	where <x> is the network drive you are installing from and <xxx> is
	the folder containing the Windows 95 files.
	
	CAUSE
	=====
	
	This is a known problem with the Smc8000.dos real-mode network adapter driver.
	
	
	RESOLUTION
	==========
	
	Please contact the network adapter manufacturer to inquire about obtaining an
	updated driver to correct the problem.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
