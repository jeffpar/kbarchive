---
layout: page
title: "Q154734: Quantum DLT 2000 and 4000 Tape Device Support"
permalink: /kb/154/Q154734/
---

## Q154734: Quantum DLT 2000 and 4000 Tape Device Support

{% raw %}

	Article: Q154734
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Quantum DLT 2000 and the DLT 4000 Tape Drives are not on the current Windows
	NT Hardware Compatibility List at the time this article was written. Certified
	driver support is not available at this time.
	
	MORE INFORMATION
	================
	
	The DLT 2000 and DLT 4000 can use the Dlttape.sys driver that is supplied with
	Windows NT 3.51 Service Pack 4.
	
	To install the DLT tape driver:
	
	1. Double-click the Windows NT Setup icon from the Main Group.
	
	2. Click Add Remove Tape Devices from the Options menu.
	
	3. Click Add.
	
	4. Select Digital TZ26, TZ87, DLT2000.
	
	5. Restart the system.
	
	6. There will be a Service Control Manager error logged for the tape device.
	
	7. Install Windows NT 3.51 Service Pack 4.
	
	8. On restart, the DLTTAPE driver should be started. To verify, check DLTTAPE
	  from the Devices applet in the Control Panel.
	
	9. If the driver is started, test the DLT drive with Windows NT Backup.
	
	ADDITIONAL INFORMATION
	----------------------
	
	The Quantum DLT 2000 and DLT 4000 tape drives are not directly supported by
	Microsoft Windows NT Version 3.51. The Quantum products included here are
	manufactured by a vendor independent of Microsoft; we make no warranty, implied
	or otherwise, regarding these products' performance or reliability.
	
	http://www.quantum.com
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}
