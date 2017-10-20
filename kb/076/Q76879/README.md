---
layout: page
title: "Q76879: Installing MS-DOS 5 Upgrade on Zenith MinisPort HD"
permalink: /kb/076/Q76879/
---

## Q76879: Installing MS-DOS 5 Upgrade on Zenith MinisPort HD

{% raw %}

	Article: Q76879
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After installing Microsoft MS-DOS 5 Upgrade on a Zenith MinisPort HD computer,
	the computer will not boot properly unless the external floppy disk drive is
	connected.
	
	MORE INFORMATION
	================
	
	When the Zenith MinisPort external drive is not connected, the computer will
	display the following message:
	
	  Non-System disk or disk error
	  Replace and press any key to continue.
	
	MS-DOS 5.0 is compatible with this machine; however, to remedy the above problem,
	you must connect the external floppy disk drive to boot with DOS 5.0, or it must
	boot from internal ROM DOS.
	
	To enable the machine to boot from ROM DOS, press CTRL+ALT+INSERT to access CMOS
	setup, and type "setup" (without the quotation marks) at the command prompt.
	CMOS setup will allow you to change the boot options to ROM DOS.
	
	For more information on the Zenith MinisPort, query on the following words:
	
	  MINISPORT and SETUP
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 5.00 3rdparty noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
