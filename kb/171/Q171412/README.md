---
layout: page
title: "Q171412: FIX: SMC 8416 is Not Recognized during Windows NT Unattended Set"
permalink: /kb/171/Q171412/
---

## Q171412: FIX: SMC 8416 is Not Recognized during Windows NT Unattended Set

{% raw %}

	Article: Q171412
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During unattended installation of Windows NT Server or Workstation, the Standard
	Microsystems Corporation (SMC) 8416 and other SMC network cards are not
	recognized.
	
	CAUSE
	=====
	
	These cards have to be selected.
	
	RESOLUTION
	==========
	
	SMC is aware of this problem and has released new drivers and .inf files that
	work with unattended installations. Contact SMC and obtain the SMC-NT.exe
	hotfix, then perform the following steps:
	
	1. Backup the following files in your Windows NT distribution share point
	  because they will be updated:
	
	  oemnaddt.in_
	  oemnads8.in_
	  dosnet.inf
	  layout.inf
	  txtsetup.sif
	
	2. Copy the SMC drivers into your distribution share point for Windows NT:
	
	  oemnaddt.in_
	  oemnads8.in_
	  smc8000.dl_
	  smc8000.hl_
	  smc8000n.sy_
	  smcisa.sy_
	  smcpwrn.hl_
	  smcpwrn.sy_
	
	3. Depending on if you are installing Windows NT Server or Workstation 4.0, copy
	  these files into your distribution share point also:
	
	   - Windows NT Server 4.0
	
	  /nt40serv/dosnet.inf
	  /nt40serv/layout.inf
	  /nt40serv/txtsetup.sif
	
	   - Windows NT Workstation 4.0
	
	  /nt40work/dosnet.inf
	  /nt40work/layout.inf
	  /nt40work/txtsetup.sif
	
	4. If you are using your own Unattend.txt file, please take note of the section
	  below, the keywords required for each SMC adapter are listed on the LimitTo
	  line.
	
	  [DetectAdaptersSection]
	  DetectCount = 1
	  ; SMC Incorporated the SMC NT drivers and file names into the
	  ; necessary files so that SMC PCI adapters will now autodetect
	  ; during the normal Windows NT 4.0 detection phase.
	  ;
	  ; Certain Keywords have been changed to do this properly.
	  ; "DC21140" =  SMC9332DST EtherPower 10/100
	  ;              SMC9332BDT EtherPower 10/100
	  ;              SMC9332BVT EtherPower 10/100
	  ; "DC21041" =  SMC8432 EtherPower With ROM Socket
	  ; "DC21040" =  SMC8432 EtherPower Without ROM Socket
	
	  LimitTo = DC21140, DC21041, DC21040, SMC8416, SMC8216, SMC8013
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	SMC Overview
	------------
	
	The purpose of this file is to allow for the automatic installation of Windows NT
	Workstation or Server 4.0 with the SMC PCI family adapters and the Ultra series
	adapters.
	
	PCI Familiy includes
	EtherPower 10/100 (SMC9332BDT, SMC9332BVT, SMC9332DST)
	EtherPower (SMC8432BT, SMC8432T, SMC8432e)
	EtherPower^2 (SMC8434)
	
	Ultra Family Include
	EtherEZ Adatpers (8416)
	Ultra Series Adapters (8216)
	Elite Series Adapters (80x3)
	
	This software distribution has drivers, unattended files, and sample scripts for
	both Windows NT Server and Workstation version 4.0. The specific files required
	for each operating system are contained in the subdirectories.
	
	The SMC article mentioned here is published by STANDARD MICROSYSTEMS CORPORATION
	a vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this article or the third-party products mentioned.
	
	Additional query words: SMC 8416 unattended Setup
	
	======================================================================
	Keywords          : kb3rdparty kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
