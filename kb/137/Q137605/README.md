---
layout: page
title: "Q137605: INFO: Viruses Known to Interfere with Visual FoxPro Installation"
permalink: /kb/137/Q137605/
---

## Q137605: INFO: Viruses Known to Interfere with Visual FoxPro Installation

	Article: Q137605
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbsetup kbvfp
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the viruses that have been detected on hardware after
	unsuccessful attempts to install Visual FoxPro. After these viruses were
	detected and cleaned from the hard disk, no further problems were encountered
	during installation.
	
	MORE INFORMATION
	================
	
	It is important that computer hardware be checked frequently by a virus
	detection and cleaning utility. Because the number and signatures of viruses are
	always changing, so are the utilities that can successfully detect and clean
	them. Microsoft recommends that you consult your local software retailer for
	information on the latest and best anti-virus utilities.
	
	Preliminary Trouble-Shooting Steps
	----------------------------------
	
	1. Perform a "clean boot." For information about how to perform a clean boot,
	  please see the following article in the Microsoft Knowledge Base:
	
	  Q95314 How to Perform a "Clean Boot" for FoxPro
	
	2. Ensure a Permanent Minimum Swap File Size of 10 meg (Windows 3.x).
	
	3. Remark out any unnecessary drivers that are loading in Windows.
	
	4. Use a plain VGA video driver.
	
	5. Ensure that shell=Progman.EXE.
	
	6. Ensure that the "load=" and "run=" lines of the Win.ini file are blank, or
	  commented out.
	
	7. Remove all programs from the Startup Group.
	
	8. Perform a Scandisk (Chkdsk /f if not using MS-DOS version 6.0 or later).
	
	9. Perform a Virus Scan with whatever software is available.
	
	List of Viruses
	---------------
	
	The following list may not include all viruses that can contribute to Visual
	FoxPro (or any other product) installation problems:
	
	1. Virus Name: KELLY Type: Boot-Sector Detected by: McAfee Virus Scan Ver. 2.2
	  Behavior: When you install Visual FoxPro Standard Edition from 3.5 inch
	  floppy disks immediately after Initializing Setup on Disk 1, you receive a
	  "Not Enough Memory" error message followed by a "Cannot Read From Drive A"
	  error message. Other: This was detected in conjunction with LEANDRO.
	
	2. Virus Name: LEANDRO Type: Boot-Sector Detected by: McAfee Virus Scan Ver. 2.2
	  Behavior: When you install Visual FoxPro Standard Edition from 3.5 inch
	  floppy disks immediately after Initializing Setup on Disk 1, you receive a
	  "Not Enough Memory" error message followed by a "Cannot Read From Drive A"
	  error message. Other: This was detected in conjunction with KELLY.
	
	
	REFERENCES
	==========
	
	For more information about detecting or confirming viruses, please see the
	following articles in the Microsoft Knowledge Base:
	
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbinfo
	
	=============================================================================
	
