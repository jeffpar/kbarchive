---
layout: page
title: "Q186154: XCLN: Using Auto Signatures with Roving Users"
permalink: kb/186/Q186154/
---

## Q186154: XCLN: Using Auto Signatures with Roving Users

	Article: Q186154
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	AutoSig is a resource kit utility included with the Microsoft BackOffice Server
	CD as well as the BackOffice Resource Kit. The AutoSig tool consists of a
	registry file that solves the problem of the Microsoft Exchange signature block
	not roving with roving users. This tool uses the Microsoft Windows 95 profile
	reconciliation engine to synchronize the <WinDir>\autotext signature with
	the <Home>\Config\Autotext.sign signature. This allows users who prefer an
	auto signature with their e-mail to use this function at workstations other than
	their home computer. Steps for installing AutoSig are given in the MORE
	INFORMATION section below.
	
	MORE INFORMATION
	================
	
	After installing the AutoSig tool, you can use the auto signature feature,
	because the AutoSig tool automatically adds entries to your registry keys to
	enable this feature.
	
	To install AutoSig, perform the following steps:
	
	1. From the Exchange\Common\Autosig directory on the Microsoft BackOffice
	  Resource Kit, Part Two compact disc, copy Autosig.reg to your Windows\System
	  directory.
	
	2. From the Start menu, click Run.
	
	3. Select Autosig.reg from your Windows\System directory.
	
	AutoSig adds the entry "Path"="C:\\Windows" in the following registry subkey:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Autosig
	
	Under the following subkey:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	  \ProfileReconciliation\Autosig
	
	AutoSig also adds the following new entries:
	
	  "CentralFile"="Config"
	  "DefaultDir"="*windir"
	  "LocalFile"="" (blank)
	  "MustBeRelative"=dword:00000000
	  "Name"="Autotext.sig"
	  "RegKey"="Software\\Microsoft\\Autosig"
	  "RegValue"="Path"
	
	For more information on the AutoSig utility, please see the Microsoft BackOffice
	resource kit documentation.
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbhowto
	
	=============================================================================
	
