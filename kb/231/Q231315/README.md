---
layout: page
title: "Q231315: How to Renew Network Bindings Using Setup.exe"
permalink: kb/231/Q231315/
---

## Q231315: How to Renew Network Bindings Using Setup.exe

	Article: Q231315
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to automatically renew bindings using Setup.exe.
	
	It may be necessary to renew bindings when you install or remove network
	protocols, services, or adapters.
	
	MORE INFORMATION
	================
	
	Setup.exe is available in the System32 folder. You can use Setup.exe with the
	following command line and a custom .inf file based on the sample below:
	
	"setup /f /i%systemroot%\system32\ncpashel.inf /T NTN_InstallMode = Install /T
	NTN_Origination = NCPA /T NTN_Infname = %Path_To_Binding.inf%\Binding.inf"
	(without the quotation marks)
	
	The Binding.inf file should contain the following lines:
	
	[InstallOption]
	Set DtMode = NCPA
	LibraryProcedure StartResult $(!NCPA_HANDLE), CPlSetup $(!STF_HWND), $(DtMode)
	exit
	
	
	Additional query words: ncpa binding setup
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
