---
layout: page
title: "Q239929: Compaq HALs (Including Revision G) for Alpha with Windows NT 4.0"
permalink: /kb/239/Q239929/
---

## Q239929: Compaq HALs (Including Revision G) for Alpha with Windows NT 4.0

{% raw %}

	Article: Q239929
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbWinNT4sp6fix kbHardware
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0, on platform(s):
	   - the hardware: DEC Alpha 
	- Microsoft Windows NT Workstation version 4.0, on platform(s):
	   - the hardware: DEC Alpha 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0, on platform(s):
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Updated hardware abstraction layers (HAL) have been released by Compaq to
	enhance compatibility for Windows NT 4.0 on Compaq/DIGITAL Alpha-based hardware
	platforms. The following changes have been made to Windows NT 4.0 Service Pack 6
	to support the new Alpha HALs released by Compaq:
	
	- Enable Galaxy Field Replaceable Unit (FRU) 5.0 support for Tsunami chip set
	  platforms.
	- Add Tsunami chip set Hardware Access List to Windows NT 4.0.
	- Enable TL to issue an IPL17 when needed.
	- Fix debug target's hangs when baud rates are mismatched.
	- Add support for System Management BIOS (SMBIOS) 2.1.
	- Add file to allow SX to build without warnings.
	- Add support to write to FRU EEPROM for Clipper platforms.
	- Add required serviceability changes.
	- Fix 16-bit sound card distortion.
	- Enable Remove command to use only the common header file.
	- Disable/enable system interrupt.
	- PALs have been updated to fix a problem where stopping a service traps with
	  KiPanicException on Alpha. This is fixed by making the PAL not attempt to
	  SYSRET in priviledged PAL mode. The process can still stop, but not take the
	  system with it.
	
	The updated HALs include the Revision G HAL released by Compaq.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	The Windows NT Hardware Abstraction Layer (HAL) interfaces directly between the
	operating system and the computer hardware. Although the operating system code
	remains the same from platform to platform, a HAL must be designed for each type
	of computer hardware.
	
	For information about the Basic Input/Output System (BIOS) and HAL on your
	computer, click Start, point to Programs, point to Administrative Tools, click
	Windows NT Diagnostics, and then click the System tab.
	
	For more information about the HALs released by Compaq, please visit the
	following Compaq Web site:
	
	  http://www.compaq.com/support/files/alphant/firmware/
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbWinNT4sp6fix kbHardware 
	Technology        : kbWinNTsearch kbWinNTSsearch kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
