---
layout: page
title: "Q122671: Scandisk: Privileged Operation Error #2 or System Reboots"
permalink: /kb/122/Q122671/
---

## Q122671: Scandisk: Privileged Operation Error #2 or System Reboots

{% raw %}

	Article: Q122671
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Scandisk, one of the following problems occurs:
	
	- EMM386.EXE privileged operation error #02 is displayed
	
	-or-
	
	- Your machine reboots itself
	
	CAUSE
	=====
	
	This problem occurs because when Scandisk starts, it makes a single INT1Ah
	function call to the ROM BIOS. This problem occurs on the following computers:
	
	- Canon models C-200 M-50 and C-200 M-55
	
	- CompuAdd 386
	
	- Computers using a Microsolutions Compaticard
	
	- Positive computers
	
	- Sharp models 6700, 6781, 6785, 6800, and 6881
	
	- Some AEG Olympia 386SX Laptops
	
	- Some older ACER machines
	
	- Snap-on Intel 386 and Intel Above Board 2.0
	
	- Texas Instruments (TI) TravelMate 2000
	
	- Zeos 80386 with an AMI BIOS dated 09/15/89
	
	
	NOTE: The above list may not be complete.
	
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Use a version of Scandisk from MS-DOS version 6.20 or 6.21.
	
	-or-
	
	- Obtain an upgrade for the ROM BIOS.
	
	  NOTE: A ROM BIOS upgrade may not correct this problem on all machines. Check
	  with the manufacturer to determine whether the updated ROM BIOS can handle
	  this INT1Ah
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS 6.22. We are researching
	the problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	MORE INFORMATION
	================
	
	INT 0x1A was chosen as the detection mechanism by which hardware- implemented
	MRCI servers can communicate with software. (NOTE: No hardware- implemented MRCI
	servers presently exist.) Microsoft has found that with some ROM BIOS chip sets,
	the stack becomes corrupted when this function call is processed. If EMM386.EXE
	is loaded, it catches the error with its error-handling capabilities and
	generates the privileged operation error #02.
	
	
	The products discussed here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3rdparty tshoot sharpe drvspace cannon ms-dos poe #2 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	

{% endraw %}
