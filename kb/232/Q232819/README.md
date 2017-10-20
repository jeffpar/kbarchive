---
layout: page
title: "Q232819: Err Msg: &quot;1782 Disk Controller Failure&quot; Compaq Deskpro"
permalink: /kb/232/Q232819/
---

## Q232819: Err Msg: &quot;1782 Disk Controller Failure&quot; Compaq Deskpro

{% raw %}

	Article: Q232819
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 4 (SP4) on your Compaq Deskpro
	(2000, 4000, or 6000) computer, the following error message may be displayed
	during the power-on self test (POST):
	
	  1782 Disk Controller Failure
	
	The error message is displayed after a warm boot (clicking Start, clicking
	Shutdown, and then clicking the "Restart the Computer" button, or clicking
	Start, clicking Shutdown, clicking the "Shutdown the Computer" button, and then
	pressing CTRL+ALT+DEL).
	
	The error message is not displayed after a cold reboot (clicking Start, clicking
	Shutdown, clicking the "Shutdown the Computer" button, and then physically
	turning off the computer for 60 seconds).
	
	CAUSE
	=====
	
	This behavior occurs because the synchronization in the timing between the
	controller and the hard disk is unsuccessful. There are certain BIOS revisions
	in the Compaq Deskpro 2000, 4000, or 6000 that cause this behavior.
	
	RESOLUTION
	==========
	
	To resolve this issue, update the system BIOS of the Compaq Deskpro computer.
	Please refer to the steps outlined in the Compaq Customer Advisory document,
	which is available on the Compaq Web site at:
	
	  http://www.compaq.com/support/techpubs/customer_advisories/DD990226_CW02_0.html
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	MORE INFORMATION
	================
	
	For additional information about the problem described in this article, please
	contact Compaq technical support or refer to the Compaq Web site:
	
	  http://www.compaq.com/support/
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	REFERENCES
	==========
	
	For additional information about errors during POST, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q78919 IBM ROM Diagnostic and Power-On-Self-Test Errors 1500-1999
	
	
	Additional query words: winnt disk controller
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
