---
layout: page
title: "Q168559: ERR: Cannot Copy Ntdetect.com or Ntldr During WinNT Install"
permalink: /kb/168/Q168559/
---

## Q168559: ERR: Cannot Copy Ntdetect.com or Ntldr During WinNT Install

	Article: Q168559
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT Server or Workstation on a system that uses an
	Adaptec AHA 2940UW as the boot controller, you may get the following error:
	
	Cannot copy Ntdetect.com or ntldr.
	
	CAUSE
	=====
	
	This error may be caused by incorrect BIOS configuration Parameters set in the
	Adaptec SCSI controller.
	
	RESOLUTION
	==========
	
	To resolve this problem, make sure the Boot Target ID matches the SCSI ID of the
	boot drive. For more information on how to do this, please contact the
	manufacturer.
	
	
	Additional query words: AHA2940UW ntldr ntdetect.com
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
