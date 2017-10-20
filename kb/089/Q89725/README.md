---
layout: page
title: "Q89725: Using 3COM 3+Share NB.COM and MSREDIR.EXE"
permalink: /kb/089/Q89725/
---

## Q89725: Using 3COM 3+Share NB.COM and MSREDIR.EXE

{% raw %}

	Article: Q89725
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The 3COM 3+Share network redirector NB.COM version 1.6 causes the network to
	stop when you upgrade the file MSREDIR.EXE with REDIR.2X_ supplied with the
	MS-DOS 5 Upgrade or the MS-DOS 6 Supplemental Disks.
	
	CAUSE
	=====
	
	According to page 22 of the MS-DOS 5 Upgrade "Getting Started" manual and the
	NETWORKS.TXT file supplied with MS-DOS 6 Upgrade and MS-DOS 6.2 Upgrade, 3COM
	3+Share network requires an updated redirector, REDIR.2X_, that comes with the
	MS-DOS 5 Upgrade. This file is also available in the MS-DOS 6 Supplemental
	Disks, and the MS-DOS 6.2 Supplemental Disks.
	
	Because 3COM 3+Share NB.COM needs to use the same version as MSREDIR.EXE,
	attempting to use the expanded REDIR.2X_ with NB.COM causes the network to stop.
	
	WORKAROUND
	==========
	
	Obtain an updated NB.COM from 3COM, or update your 3+Share network software.
	Contact 3COM for more information.
	
	The product included here, 3COM 3+Share, is manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: 6.22 5.00 5.0 5.00a 5.0a hang hung freeze 6.00 6.20 frozen stop stopped
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
