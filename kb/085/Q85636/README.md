---
layout: page
title: "Q85636: AMI BIOS POST Beep Codes"
permalink: /kb/085/Q85636/
---

## Q85636: AMI BIOS POST Beep Codes

{% raw %}

	Article: Q85636
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:1.x,2.x,3.x,4.x,5.x,6.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 1.x, 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	American Megatrends, Inc. (AMI) BIOS will produce audible beeps associated with
	beep codes during the power-on self test (POST). Depending upon the condition, a
	predefined number of beeps are sounded, which are associated with the error
	messages below.
	
	NOTE: Some systems produce beeps as part of the normal boot sequence. This
	article refers to beeps produced by the AMI ROM BIOS before the operating system
	loads.
	
	MS-DOS does not produce beep codes.
	
	MORE INFORMATION
	================
	
	The error messages associated with the AMI BIOS beep codes are as follows:
	
	Number of Beeps      Error Message
	---------------      -------------
	
	      1             DRAM refresh failure
	      2             Parity circuit failure
	      3             Base 64K RAM failure
	      4             System timer failure
	      5             Processor failure
	      6             Keyboard controller gate A20 error
	      7             Virtual mode exception error
	      8             Display memory R/W test failure
	      9             ROM-BIOS checksum failure
	
	These errors are codes reported by the system BIOS. Because the errors are
	hardware related, you should call your hardware manufacturer or reseller for
	help in correcting the problem.
	
	The product included here, AMI BIOS, is manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: beep ami bios bootup boot sequence beeping 4.0 4.0a 4.01 4.01a 5.0 5.00 5.0a 5.00a 6.0 6.20,6.21, 6.22 6.3rdparty noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS1xSearch kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:1.x,2.x,3.x,4.x,5.x,6.x
	
	=============================================================================
	

{% endraw %}
