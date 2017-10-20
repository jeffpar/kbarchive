---
layout: page
title: "Q98766: VIREX-PC May Incorrectly Report Viruses with VSAFE Installed"
permalink: /kb/098/Q98766/
---

## Q98766: VIREX-PC May Incorrectly Report Viruses with VSAFE Installed

{% raw %}

	Article: Q98766
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run the virus-detection utility VIREX-PC when the MS-DOS VSAFE utility is
	loaded in memory, viruses may be incorrectly identified.
	
	Removing VSAFE from memory with the VSAFE /U command and then running the
	VIREX-PC utility corrects this problem.
	
	MORE INFORMATION
	================
	
	VIREX-PC is a virus-detection utility manufactured by Microcom Incorporated. If
	VSAFE is loaded in memory from the AUTOEXEC.BAT file or from the command line,
	boot sector viruses (such as FLIP, EVIL EMPIRE, SWAP, BEIJING and others) may be
	incorrectly identified by the VIREX-PC utility.
	
	VIREX-PC is manufactured by Microcom Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 6.22 6.00 6.20 3rdparty third-party third party
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
