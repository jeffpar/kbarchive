---
layout: page
title: "Q140643: STOP 0x0000000A Using STB Video Card and Adaptec Controller"
permalink: /kb/140/Q140643/
---

## Q140643: STOP 0x0000000A Using STB Video Card and Adaptec Controller

{% raw %}

	Article: Q140643
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use an Adaptec bus mastering SCSI controller as your main controller and
	have a STB PowerGraph 64V video card installed on Windows NT 3.51, the system
	will crash at system login with the following STOP message:
	
	  STOP: 0x0000000A (0x0000000B,0x00000011,0x00000000,0x80013693)
	  IRQL_NOT_LESS_OR_EQUAL*** Address 80013693 has base at 80010000 -
	  aic78xx.sys
	
	  CPUID:GenuineIntel 5.2.1 irql:1f SYSVER 0xf0000360
	
	CAUSE
	=====
	
	There is a problem with the BIOS on the STB PowerGraph 64V video card.
	
	RESOLUTION
	==========
	
	STB Systems, Inc. has recognized the problem and has created a BIOS upgrade
	(version 1.5) which addresses this problem.
	
	The BIOS upgrade is available by contacting STB Technical Support at (800)
	234-4334 or by sending e-mail to Joel Furguson (75300,1664) on CompuServe.
	
	To obtain the upgrade, you must supply the part number of the video card
	(1x0-xxxx-xxx) and request the BIOS upgrade for the STB PowerGraph 64/V that
	will correct the problem of using this product with Adaptec bus mastering SCSI
	controllers.
	
	The STB products discussed here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
