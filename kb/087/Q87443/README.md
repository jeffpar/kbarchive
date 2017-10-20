---
layout: page
title: "Q87443: Maximum of 10 Printers Can Be Set Up Using SETUP.SHH"
permalink: /kb/087/Q87443/
---

## Q87443: Maximum of 10 Printers Can Be Set Up Using SETUP.SHH

{% raw %}

	Article: Q87443
	Product(s): Microsoft Windows Printing Issues
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SETUP.SHH will set up only 10 printers listed in the [printers] section. If
	there are more than 10 printers listed in this section, the additional printers
	will be ignored without any warnings or messages.
	
	To work around this limitation, install the additional printers through Control
	Panel or Print Manager.
	
	MORE INFORMATION
	================
	
	The Windows Automated Setup option (also called Batch Mode Setup), allows you to
	write a script file for Setup (an example called SETUP.SHH comes with Windows
	3.1) that automates the Setup program and requires little user input. You can
	configure Setup to automatically install certain printers, applications,
	hardware options, and other options. The following is an example of the command
	line:
	
	  SETUP /H X:\NETWIN\SETUP.SHH /N
	
	NOTE: SETUP.SHH is an example; you can use any acceptable filename with an
	extension of .SHH.
	
	For more information on this feature, refer to pages 75-82 of the "Microsoft
	Windows Resource Kit" guide for operating system version 3.1.
	
	
	Additional query words: 3.10 shh WIN31 KBSetup 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
