---
layout: page
title: "Q158955: ArcSolo95 May Not Run with Incorrectly Detected SCSI Card"
permalink: /kb/158/Q158955/
---

## Q158955: ArcSolo95 May Not Run with Incorrectly Detected SCSI Card

{% raw %}

	Article: Q158955
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Cheyenne Arcsolo95 Engine may not run.
	
	CAUSE
	=====
	
	This behavior can occur if you have an Adaptec 29xxUW SCSI card in your
	computer. OEM Service Release 2 (OSR2) may not detect these cards correctly.
	
	
	RESOLUTION
	==========
	
	Change the driver for the card from Adaptec 29xx to Adaptec 29xxUW.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	

{% endraw %}
