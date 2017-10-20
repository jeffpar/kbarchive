---
layout: page
title: "Q87977: AS/400 Folders Not Recognized in Windows 3.1 386-Enhanced Mode"
permalink: /kb/087/Q87977/
---

## Q87977: AS/400 Folders Not Recognized in Windows 3.1 386-Enhanced Mode

{% raw %}

	Article: Q87977
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IBM has confirmed that when an IBM AS/400 is used as a file server, Windows will
	not recognize the AS/400 folders when Windows or Windows for Workgroups is
	running in 386 enhanced mode. However, Windows 3.1 or 3.11 will recognize these
	folders when running in standard mode.
	
	CAUSE
	=====
	
	According to IBM, the problem is due to the AS/400 device drive ECYDDX.SYS,
	which allocates logical drives.
	
	NOTE: This device driver may prevent Windows for Workgroups 3.11 File Manager
	from recognizing drive A or B, resulting in the
	
	  drive A: or B: does not exist
	
	error message.
	
	MORE INFORMATION
	================
	
	To correct the problem, obtain a Program Temporary Fix (PTF) for the appropriate
	version, release, and modification level of ECYDDX.SYS. This information can be
	obtained by typing "go licpgm" (without the quotation marks) and choosing Option
	10 on the AS/400.
	
	To update the system, obtain one of the following files
	
	- For V2R1M0 use (PTF) SF10163
	
	- For V2R1M1 use (PTF) SF10165
	
	- For Extended DOS use (PTF) SF09768
	
	where V is the version, R is the revision, and M is the modification level.
	
	These corrections may be obtained from IBM by using the ECS Modem connected to
	the AS/400. Please contact IBM if you have further questions regarding this
	particular problem or how to correct it.
	
	The AS/400 included here is manufactured by a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.10 AS400 win31 3rdParty floppy
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
