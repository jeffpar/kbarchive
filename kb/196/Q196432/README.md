---
layout: page
title: "Q196432: DNS SOA Default Values Are Not Configurable"
permalink: /kb/196/Q196432/
---

## Q196432: DNS SOA Default Values Are Not Configurable

	Article: Q196432
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure that you understand how to restore it if
	a problem occurs. For information about how to do this, see the "Restoring the
	Registry" Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic
	in Regedt32.exe.
	
	SYMPTOMS
	========
	
	It is not possible to change the following default DNS Start of Authority (SOA)
	values:
	
	- Serial Number
	
	- Minimum TTL
	
	- Expire Timer
	
	- Retry Timer
	
	- Refresh Timer
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q163971 The Structure of a DNS SOA Record
	
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
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	Some organizations, responsible for registering DNS domain names, demand
	specific DNS SOA values to be used when registering DNS domains. This is to make
	sure that these values adapt well to the requirements of the Internet.
	
	The following is an example of the values that were requested by one of these
	organizations:
	
	- serial number is not in YYYYMMDDxx format
	
	- minimum ttl should fit the 40000-345600 range
	
	- expire timer should fit in the 604800-360000 range
	
	- retry timer does should fit in the 1800-28800 range
	
	- refresh timer should fit in the 10000-86400 range
	
	Changing these values through DNS Admin is possible, but very labor- intensive
	when creating lots of zones. Therefore the following registry entries have been
	made to make these values configurable for all zones that are created.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require that you reinstall your operating system. Microsoft cannot guarantee
	that problems that result from the incorrect use of Registry Editor can be
	solved. Use Registry Editor at your own risk.
	
	For information about how to edit the registry, see the "Changing Keys and
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Microsoft recommends that you back up the registry before you edit
	it. If you are running Windows NT or Windows 2000, Microsoft also recommends
	that you update your Emergency Repair Disk (ERD).
	
	  
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNS\Parameters
	
	  ForceSoaSerial (REG_DWORD)
	  ForceSoaMinimumTtl (REG_DWORD)
	  ForceSoaRefresh (REG_DWORD)
	  ForceSoaRetry (REG_DWORD)
	  ForceSoaExpire (REG_DWORD)
	
	  NOTE: Be sure to click Decimal in Registry Editor when entering values.
	
	These registry keys:
	
	- Overwrite the appropriate SOA value of every primary zone that loads on the
	  computer.
	
	- Serve as default values for any new zone written
	
	Using these registry entries will lock down the values; changing them through the
	DNS Admin Tool is still possible, but on the next restart of the DNS server,
	these SOA values are rewritten from the above registry entries.
	
	NOTE: ForceSoaSerial should only be used for registration purposes as described
	above. After registering, this key should be deleted to ensure normal serial
	number functionality. If this key is not deleted, on every DNS server restart,
	the serial number is reset using the ForceSoaSerial value.
	
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
