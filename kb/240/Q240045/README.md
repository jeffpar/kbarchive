---
layout: page
title: "Q240045: INFO: Solve Microsoft Windows NT Setup Problems Like a Pro"
permalink: /kb/240/Q240045/
---

## Q240045: INFO: Solve Microsoft Windows NT Setup Problems Like a Pro

{% raw %}

	Article: Q240045
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:NT 4.0; winnt:4.0,4.0 SP4,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists resolutions to common Windows NT setup problems. This article
	also contains a link to a list of Microsoft Knowledge Base Articles that
	Microsoft Technical Support Engineers use most to resolve Windows NT setup and
	usability issues. The articles were created in response to customers' issues,
	and therefore these issues are the ones you will probably encounter when you
	install and use Windows NT 4.0. Note that Microsoft Technical Support tracks the
	number of times these articles are accessed.
	
	NOTE: Microsoft recommends that you use Windows NT-compatible hardware. This is
	the best first step you can take to ensure that no problems occur during setup
	and use of Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	Windows NT Setup
	----------------
	
	The following is a list of common Windows NT setup resolutions:
	
	1. Power off and remove hardware, especially any hardware that is not listed on
	  the "Microsoft Windows Hardware Compatibility List" Web site:
	
	  http://www.microsoft.com/hwtest/hcl/
	
	   - Plug and Play (PnP) network cards.
	
	   - Sound cards (Integrated Device Electronics [IDE] interface may cause the
	     system to stop responding or hang).
	
	   - CD-ROM drives.
	
	2. Be sure that memory cards are seated properly.
	
	3. Power up and verify the basic I/O system (BIOS) version. Update it if
	  appropriate on:
	
	   - Motherboard.
	
	   - Small computer system interface (SCSI) adapters.
	
	4. Enter the BIOS setup and disable the following:
	
	   - Shadow RAM.
	
	   - Internal/external cache.
	
	   - Power management.
	
	   - PnP.
	
	   - Enhanced drive access.
	
	   - Set the hard drive to boot first.
	
	5. Boot with a floppy disk and virus scan the hard disk and the floppy disk that
	  you just booted with.
	
	  NOTE: Do not skip this step. This step is very important.
	
	6. SYS the hard drive, and then:
	
	   - Remove temp directories.
	
	   - Copy \I386 from the Windows NT CD to the hard drive.
	
	   - Run "plain" Windows NT setup (winnt /b).
	
	7. Replace bad hardware or switch to a device that is listed on the Hardware
	  Compatibility List (HCL):
	
	   - Change the SCSI controller.
	
	   - Change the hard drive.
	
	   - Change the network interface card (NIC) (especially PnP).
	
	If this troubleshooting allows Windows NT to install, congratulations! Now you
	should go back and add features/functionality one-by-one until you locate the
	exact problem.
	
	Once you have a reliable hardware platform, preinstall the operating system as
	described in the "Windows NT Preinstallation Documentation," which is located at
	the following Web site:
	
	  https://oem.microsoft.com/namerica/504431.asp
	  (https://oem.microsoft.com/namerica/504431.asp)
	
	For additional information on the top articles for Windows NT that may help you
	solve most Windows NT support issues, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q179727 Top Articles for Windows NT 4.0
	
	NOTE: To access the Microsoft OEM Web site, you must be registered in the System
	Builder Program. If you are a registered System Builder, then use your User
	login and password to gain access to the site. If you are not a registered
	System Builder, then register at the following Microsoft OEM World Wide Web
	Site:
	
	  http://www.microsoft.com/oem (http://www.microsoft.com/oem)
	
	REFERENCES
	==========
	
	Windows NT 4.0 Preinstallation Documentation:
	
	  https://oem.microsoft.com/namerica/504431.asp
	  (https://oem.microsoft.com/namerica/504431.asp)
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q179727 Top Articles for NT 4.0
	
	Additional query words: kbsbk kbopk preinstall unattend setup install OPK SBK troubleshoot
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : WINDOWS:NT 4.0; winnt:4.0,4.0 SP4,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
