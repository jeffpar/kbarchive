---
layout: page
title: "Q216188: Unattended Installation with /E Option to Install SP4 Fails"
permalink: kb/216/Q216188/
---

## Q216188: Unattended Installation with /E Option to Install SP4 Fails

	Article: Q216188
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The /E option for Winnt32.exe can be used to start Update.exe to install Windows
	NT 4.0 Service Pack 4 (SP4) following the installation of Windows NT. This
	method of installing Windows NT and applying SP4 is typically used by original
	equipment manufacturers (OEMs). Windows NT may stop responding (hang) towards
	the end of the Service Pack 4 installation when you use this switch.
	
	CAUSE
	=====
	
	This problem occurs when SP4 Setup attempts to load Nwlnkipx.sys if the
	Nwlnkipx.sys version that is available with Windows NT 4.0 is already loaded.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 SP4. This problem
	was first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
