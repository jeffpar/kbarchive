---
layout: page
title: "Q236954: Error Message Repairing Windows NT After Installing Service Pack"
permalink: /kb/236/Q236954/
---

## Q236954: Error Message Repairing Windows NT After Installing Service Pack

	Article: Q236954
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows NT repair feature after you have installed Windows NT
	4.0 Service Pack 4 or 5 twice, you may receive the following error message for
	the Certmgr.hlp and Secauth.hlp files:
	
	  The following value in the Setup Information File is corrupt or missing:
	
	  Value XXX on the line in section XXX with key XXX.
	
	  Setup was unable to copy the file Certmgr.hlp.
	
	  To skip this file, press ESC.
	
	  WARNING: this option is intended for advanced users who understand
	  the ramifications of the absence of the various Windows NT files.
	  If you choose to skip this file, Setup cannot guarantee
	  successful installation of Windows NT.
	
	  To exit Setup, press F3.
	
	CAUSE
	=====
	
	This issue can occur because the file names (Certmgr.hlp and Secauth.hlp) are
	described in the Setup.log file using the wrong checksum values.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	NOTE: You can skip these files during the installation without causing any
	adverse effects.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	The incorrect checksum values are created by the Update.exe program included in
	the service packs. The Windows NT repair process displays an error message
	because it checks the checksum for each file on the Windows NT CD-ROM and the
	hard disk.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
