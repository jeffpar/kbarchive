---
layout: page
title: "Q228734: Windows NT Does Not Boot with Highly Fragmented MFT"
permalink: /kb/228/Q228734/
---

## Q228734: Windows NT Does Not Boot with Highly Fragmented MFT

{% raw %}

	Article: Q228734
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT400sp6afix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to boot a Windows NT 4.0 computer you may encounter one of the
	following issues:
	
	You get a blinking or flashing cursor in the upper-left corner of the screen
	
	  -or-
	
	You only get a black blank screen.
	
	NOTE: This may occur after installing a Service Pack or while attempting to
	upgrade to the next version of Windows.
	
	CAUSE
	=====
	
	This issue can occur when the NTFS bootsector code contained in logical sector
	zero of an NTFS volume is unable to locate and load NTLDR into memory due to the
	Master File Table (MFT) being highly fragmented.
	
	NOTE: In the case of the upgrade boot failure, we cannot load the file called
	$LDR$ from the root of system partition used to boot the computer.
	
	RESOLUTION
	==========
	
	How to Resolve Issue If The Computer Cannot Start
	-------------------------------------------------
	
	1. Obtain the Bcupdate.exe program, which updates the boot code of the NTFS boot
	  sector. For information on obtaining the individual software update, contact
	  Microsoft Product Support Services. For a complete list of Microsoft Product
	  Support Services phone numbers and information on support costs, please go to
	  the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	2. Once you have obtained the software update create a Windows NT startup floppy
	  disk and boot Windows NT using this disk. For additional information about
	  how to create this disk, click the article number below to view the article
	  in the Microsoft Knowledge Base:
	
	  Q119467 Creating a Boot Disk for an NTFS or FAT Partition
	
	3. Extract Bcupdate.exe and NTLDR from the software update.
	
	4. Run Bcupdate.exe C: /F.
	
	Other command line parameters supported:
	
	  /q - Quiet mode (must include /y).
	  /y - Don't confirm.
	  /f - Force update of in use volume.
	  /t - Only test for old boot code.
	
	5. Some systems with particular partition layouts may experience issues unless
	  NTLDR is also updated. Therefore, Microsoft recommends that you replace NTLDR
	  on the system with the one in this software update in conjunction with
	  running Bcupdate.exe.
	
	WARNING: If you reinstall Service Pack 5 after you replace the NTLDR with the one
	from BCUPDATE (SP6), you may render the system unstartable.
	
	To Prevent This Issue From Occurring
	------------------------------------
	
	Follow the above instructions for obtaining and running the bcupdate.exe utility.
	Then obtain the latest service pack.
	
	Windows NT Server or Workstation 4.0:
	
	Obtain the latest service pack for Windows NT 4.0. For information on obtaining
	the latest service pack, please go to:
	
	  http://www.microsoft.com/Windows/ServicePacks/
	
	  -or-
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Windows NT Server 4.0, Terminal Server Edition:
	
	To prevent this problem from occurring, obtain the latest service pack for
	Windows NT Server 4.0, Terminal Server Edition. For additional information about
	the latest Windows NT 4.0 service pack, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this issue, a discussion of MFT fragmentation, together with one
	method of preventing excessive MFT fragmentation, is presented in the following
	Microsoft Knowledge Base article:
	
	  Q174619 How NTFS Reserves Space for its Master File Table (MFT)
	
	After the system drive is sufficiently fragmented such that the system cannot
	start directly from the hard disk drive, it is still possible to start through a
	Windows NT startup floppy disk. This is possible because the floppy disk
	contains its own copy of NTLDR. For additional information, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q119467 Creating a Boot Disk for an NTFS or FAT Partition
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	This issue occurs only on computers whose system partition is formatted with
	NTFS. Windows 2000 contains both the updated bootsector code and the updated
	NTLDR so it is not susceptible to this issue. The NTFS bootsector code's job is
	to locate and load NTLDR into memory. To perform this function, the code must
	recognize NTFS data structures well enough to locate NTLDR on the disk. This
	task involves reading the volume's MFT in order to obtain the root directory,
	which in turn contains the information necessary to locate the MFT for the NTLDR
	file itself. The NTFS bootsector code runs in "real mode" and therefore cannot
	address large amounts of memory. When the MFT is highly fragmented the code may
	run out of memory to store all the necessary records for the MFT. To prevent
	excessive MFT fragmentation see the following KB article:
	
	  Q174619 How NTFS Reserves Space for its Master File Table (MFT)
	
	
	Additional query words: 4.00 bootcode flashing
	
	======================================================================
	Keywords          : kbWinNT400sp6afix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
