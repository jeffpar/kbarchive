---
layout: page
title: "Q123820: Error Installing Intel TokenExpress: The INF OEMNAD0 Is..."
permalink: kb/123/Q123820/
---

## Q123820: Error Installing Intel TokenExpress: The INF OEMNAD0 Is...

	Article: Q123820
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Intel TokenExpress ISA or EISA network interface
	cards (NICs), from either the \DRVLIB\NETCARD\X86\TKXP16 or \I386 subdirectories
	on the Windows NT 3.5 CD, one of the following error messages appears:
	
	  A critical error has occurred.
	  The INF OEMNAD0 is missing the referenced file description section
	  [Files-TKXP32].
	
	  Check for missing lines.
	
	  This error prevents the operation from continuing. You may retry the action.
	  If this fails, or you choose Exit, the operation has not been completed.
	
	  -OR-
	
	  A critical error has occurred.
	  The INF OEMNAD2 is missing the referenced file description section
	  [Files-TKXP16].
	
	  Check for missing lines.
	
	  This error prevents the operation from continuing. You may retry the action.
	  If this fails, or you choose Exit, the operation has not been completed.
	
	CAUSE
	=====
	
	There is an error in the OEMSETUP.INF file included with the Intel Token Express
	16/4 driver.
	
	WORKAROUND
	==========
	
	You can complete the installation of the NIC by modifying the OEMSETUP.INF
	file:
	
	1. Copy the files from the Windows NT 3.5 CD DRVLIB\NETCARD\X86\TKXP32 directory
	  to a floppy disk. Keep the same directory structure on the floppy disk.
	
	2. Remove the read-only attribute on OEMSETUP.INF.
	
	3. Run Windows NT Notepad and open the OEMSETUP.INF file on the floppy disk.
	
	4. On the fifth line from the bottom, change [Files-OcTk32] to [Files-TKXP32].
	  If you are using a TokenExpress 16/4 NIC, change this to [Files-TkXp16].
	
	5. Save the OEMSETUP.INF and save it.
	
	6. Run Control Panel and add the Intel TokenExpress Server adapter. When it asks
	  for the location of the OEMSETUP.INF file, use the path to the floppy disk
	  with the modified OEMSETUP.INF file.
	
	7. Continue with the normal installation of the NIC.
	
	NOTE: Because the driver used for the Olicom Token-Ring adapter is the same one
	used for the Intel Token Express adapter, you may be able to work around this
	problem by installing the Olicom Token-Ring driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	
	TokenExpress is manufactured by Intel, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt token express adapter
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
