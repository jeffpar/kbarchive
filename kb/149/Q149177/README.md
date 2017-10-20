---
layout: page
title: "Q149177: Adaptec 2940 Series 1.2x BIOS Rev Adapters Fail on NT 3.51"
permalink: /kb/149/Q149177/
---

## Q149177: Adaptec 2940 Series 1.2x BIOS Rev Adapters Fail on NT 3.51

{% raw %}

	Article: Q149177
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer with an Adaptec 2940 controller with BIOS version 1.2x fails to be
	recognized as a mass storage device in Windows NT Setup. If the AIC78xx.sys
	driver supplied with Windows NT 3.51 is used, the computer returns a Stop 7B -
	INACCESSIBLE BOOT DEVICE error.
	
	CAUSE
	=====
	
	Starting with the Adaptec 2940 BIOS revision 1.20, the product ID reported by
	the BIOS has changed. This caused the Microsoft-supplied Aic78xx.sys driver not
	to find the adapter.
	
	RESOLUTION
	==========
	
	To install Windows NT 3.51, use the Adaptec-supplied driver for the 2940 series
	adapters.
	
	
	When Mass Storage Detection fails to find an Adaptec 294x/AIC 78xx, type "S" to
	specify an additional adapter. Choose "Other" from the list and insert your
	Adaptec 2940/7800 driver diskette when prompted.
	
	If you attempt a "WINNT /B" installation, you may receive a STOP 0x7B error
	before mass storage detection takes place. To work around this, when the
	computer restarts after the initial file copy, press F6 as soon as "Setup is
	inspecting your computer's hardware configuration" is displayed. This will allow
	you to add a mass storage device at the very beginning of text mode setup.
	
	For more information on applying the Adaptec-supplied driver and related problems
	during setup, see 2940xwnt.txt on Adaptec's BBS or Web site.
	
	If Service Pack 2 or later is being applied to an existing version of Windows NT
	3.51 running the Adaptec-supplied driver, perform one of the following steps:
	
	- Upon updating with Service Pack 2 or later, do not restart the system. Copy
	  the Adaptec-supplied driver (aic78xx.sys) into \%Systemroot%\System32\drivers
	  before rebooting.
	
	- If the system has been restarted, restart your system with DOS if Windows NT
	  is on a FAT partition, or do a parallel install if on NTFS, and copy the
	  Adaptec-supplied driver into \%Systemroot%\System32\drivers.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	For information about how to contact Adaptec, please see the following articles
	in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q65416
	  TITLE : Hardware and Software Third-Party Vendor Contact List, A-K
	
	  ARTICLE-ID: Q60781
	  TITLE : Hardware and Software Third-Party Vendor Contact List, L-P
	
	  ARTICLE-ID: Q60782
	  TITLE : Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	Additional query words: 2940W 2940U 2940UW ultra wide Compaq Deskpro 6000
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
