---
layout: page
title: "Q149659: Printer Driver Files Dated 6/3/80"
permalink: /kb/149/Q149659/
---

## Q149659: Printer Driver Files Dated 6/3/80

{% raw %}

	Article: Q149659
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the <systemroot>\System32\Spool\Drivers\W32x86 directory, there are
	several printer driver files dated June 3, 1980 (6/3/80). These printer drivers
	are stored for compatibility with Windows NT 3.1 clients and applications.
	
	MORE INFORMATION
	================
	
	In Windows NT 3.1, all printer drivers are stored in the
	<systemroot>\System32\Spool\Drivers\W32x86 directory. Because version 3.5
	drivers are not compatible with version 3.1 drivers, printer drivers are stored
	in a version directory in versions 3.5 and later. When a new printer driver is
	installed, the driver version is checked and copied into the appropriate version
	directory as follows:
	
	  Windows NT 3.1 drivers:
	
	     <systemroot>\System32\Spool\Drivers\w32x86\0
	
	  Windows NT 3.5 and 3.51 drivers:
	
	     <systemroot>\System32\Spool\Drivers\W32x86\1
	
	Because Windows NT supports both old and new printer drivers, both versions can
	be set up on the same print server; both Windows NT 3.1, and 3.5 or 3.51 clients
	will be able to access the correct version of the printer driver files.
	
	The date on these files is set to 6/3/80. Setting the date back to 6/3/80 ensures
	that the file name and date will not conflict with any other versions of the
	driver that may be installed, and also allows multiple versions of a printer
	driver to be installed.
	
	During Setup, Windows NT checks the version of the printer driver and copies the
	printer driver to the 0 or 1 directory. Then the printer driver is also copied
	into the W32x86 directory to ensure compatibility with Windows NT 3.1, because
	some Windows NT 3.1 driver installation programs or applications may still look
	there for the printer driver. Finally, the date for the driver in the W32x86
	directory is set to 6/3/80, a date which is earlier than the first release of
	Windows NT. This ensures that the driver name and date will not be identical to
	those of any other driver in the version directories.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
