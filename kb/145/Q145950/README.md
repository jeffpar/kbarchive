---
layout: page
title: "Q145950: Setting Up NT On ALR Evolution V ST(e) Causes STOP 0x00000078"
permalink: /kb/145/Q145950/
---

## Q145950: Setting Up NT On ALR Evolution V ST(e) Causes STOP 0x00000078

{% raw %}

	Article: Q145950
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Windows NT Server or Workstation version 3.51 on ALR's
	Evolution V ST or Evolution V Ste, the install might fail after NT setup has
	rebooted the system to go into the graphical mode portion of setup. It will fail
	after NTDETECT and OSLOADER load. The system will Blue Screen with the following
	message:
	
	  STOP: 0x00000078 (0x00000000,0x00000000,0x00000000,0x00000000)
	
	     PHASE0_EXCEPTION
	
	MORE INFORMATION
	================
	
	ALR's Evolution V ST and Evolution V STe systems are multi-processor compatible
	systems (Intel MP v1.1 specification). In cases where customers have received
	this error, the system had a single processor, were supplied with Phoenix BIOS
	4.04.x, and could be ordered with Adaptec's 2940 SCSI controller.
	
	Troubleshooting Information:
	----------------------------
	
	1. STOP: 0x00000078 is typically an error related to either a RAM memory problem
	  or a BIOS problem and these are the first items that need to be checked.
	
	  a. Make sure that memory values, if configurable through CMOS or an EISA
	     Configuration utility, match the amount of memory that is physically
	     installed in the computer, either in SIMM slots and/or memory that
	     physically resides on the motherboard.
	
	  b. If the amount of memory is configured properly, make sure at system boot
	     that the amount of memory the computer counts matches what is installed.
	     If it does not match within at least 1 Mb, you might have a bad memory
	     chip or one that was not be seated properly in the SIMM socket.
	
	  c. If you've replaced or added memory chips, make sure that they are seated
	     properly.
	
	2. Since these systems can have both Phoenix BIOS 4.04.x or greater and Adaptec
	  2940 with BIOS 1.16 or greater, you should obtain the most recent revisions
	  for both the Phoenix and Adaptec 2940 BIOS.
	
	  For additional information, please see the following articles in the Microsoft
	  Knowledge Base:
	
	  ARTICLE-ID: Q142013
	  TITLE : Adaptec AHA2940 Related Problems
	
	3. If you followed steps 1 and 2 with no success, try reinstalling NT, either
	  from the boot floppies or a floppy-less CD-ROM install.
	
	  a. Press F5 during the portion of Windows NT 3.51 Setup that displays the
	     following text:
	
	     Setup is inspecting your computer's hardware
	
	  b. Select "Standard PC" from the list of computer types. This forces Windows
	     NT Setup to use the uni-processor Hardware Abstraction Layer (HAL).
	
	  c. Continue with setup making any further configuration changes necessary
	     (adding updated SCSI devices drivers or other mass storage drivers, and so
	     forth).
	
	  d. During the third system reboot that takes setup into graphical mode, the
	     system should be able to successfully enter the graphical portion of setup
	     without the STOP 0x00000078 and NT's final configuration settings can be
	     completed.
	
	For more information on updated drivers or BIOS, contact:
	
	    Adaptec                (800) 959-7274    Technical Support
	                           (408) 945-7727    BBS
	                            WWW.ADAPTEC.COM  World Wide Web
	
	    Phoenix Technology     (714) 440-8313    Technical Support
	                            WWW.PTLTD.COM    World Wide Web
	
	    Advanced Logic         (510) 226-9555    Technical support
	    Research (ALR)          WWW.ALR.COM      World Wide Web
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding the products'
	performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
