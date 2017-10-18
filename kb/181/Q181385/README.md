---
layout: page
title: "Q181385: Update.exe from Service Pack May Overwrite Newer OEM Files"
permalink: kb/181/Q181385/
---

## Q181385: Update.exe from Service Pack May Overwrite Newer OEM Files

	Article: Q181385
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbFEA kbWinNT400sp4fea
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have updated one or more files that ship with Windows NT with an
	OEM-supplied version. After you apply a service pack for Windows NT, one or more
	of these OEM files are updated with older files that are included with the
	service pack.
	
	CAUSE
	=====
	
	The install program, Update.exe from the service pack, compares the version
	information contained in the binaries. This version information is not the
	version you can view with Windows NT Explorer. Windows NT service packs usually
	have an updated version.
	
	With Windows NT 4.0 Service Pack 1, 2, and 3
	--------------------------------------------
	
	If the OEM-supplied file has a lower version, it is updated automatically. If the
	version is higher, it will prompt you during installation and ask if you want to
	retain the existing file or overwrite with the service pack file. When Service
	Pack 3 shipped, there was not a way to suppress this dialog so an updated
	Update.exe was made available that automatically retained the existing file and
	did not prompt the user.
	
	With Windows NT 4.0 Service Pack 4
	----------------------------------
	
	If the OEM-supplied file has a higher version, it automatically retains the
	existing file without user intervention. If the OEM-supplied file has a lower
	version, it prompts to either retain the existing file or overwrite with the
	service pack file. There is a new parameter, -o, to Update.exe in Service Pack 4
	that will overwrite the file without prompting the user. If for some reason the
	older file needs to be retained but the prompt for a decision is not desirable,
	the third party who wrote the driver needs to update the file version or the OEM
	driver needs to be reinstalled after Service Pack 4 installation has completed.
	
	A more detailed view of a file version can be obtained with two utilities. One of
	these is Filewise.exe, which is available in Windows NT 4.0 Service Pack 4 and
	in the Windows NT Resource Kit Update 2 or later. The other utility is
	Filever.exe, which is available on the Windows NT Resource Kit Update 1 or
	later. The value used to determine the file version is displayed with Filewise
	as File Version.
	
	The value used to determine the file version is VS_FIXEDFILEINFO:FileVer and not
	VS_FIXEDFILEINFO:FileVersion, which is a string and, therefore, more subject to
	formatting difference.
	
	Sample output from Filewise.exe:
	
	File NameExtSizeDateTimeFile Version shell32dll12782246/10/984:55 PM4.0.1381.27
	
	Example output using filever /v notepad.exe:
	
	+----------------------------------------------------------------+
	| Language        | 0x0409 (English (United States))             | 
	+----------------------------------------------------------------+
	| CharSet         | 0x04b0 Unicode                               | 
	+----------------------------------------------------------------+
	| OleSelfRegister | Disabled                                     | 
	+----------------------------------------------------------------+
	| CompanyName     | Microsoft Corporation                        | 
	+----------------------------------------------------------------+
	| FileDescription | Windows Notepad application file             | 
	+----------------------------------------------------------------+
	| InternalName    | Notepad                                      | 
	+----------------------------------------------------------------+
	| OriginalFilenam | NOTEPAD.EXE                                  | 
	+----------------------------------------------------------------+
	| ProductName     | Microsoft(R) Windows NT(TM) Operating System | 
	+----------------------------------------------------------------+
	| ProductVersion  | 4.00                                         | 
	+----------------------------------------------------------------+
	| FileVersion     | 4.00  << used for display                    | 
	+----------------------------------------------------------------+
	| LegalCopyright  | Copyright (C) Microsoft Corp. 1981-1996      | 
	+----------------------------------------------------------------+
	
	VS_FIXEDFILEINFO:
	
	+--------------------------------------------------------------------+
	| Signature: | feef04bd                                              | 
	+--------------------------------------------------------------------+
	| Struc Ver: | 00010000                                              | 
	+--------------------------------------------------------------------+
	| FileVer:   | 00040000:055b0001 (4.0:1371.1) << used for comparison | 
	+--------------------------------------------------------------------+
	| ProdVer:   | 00040000:055b0001 (4.0:1371.1)                        | 
	+--------------------------------------------------------------------+
	| FlagMask:  | 0000003f                                              | 
	+--------------------------------------------------------------------+
	| Flags:     | 00000000                                              | 
	+--------------------------------------------------------------------+
	| OS:        | 00040004 NT Win32                                     | 
	+--------------------------------------------------------------------+
	| FileType:  | 00000001 App                                          | 
	+--------------------------------------------------------------------+
	| SubType:   | 00000000                                              | 
	+--------------------------------------------------------------------+
	| FileDate:  | 00000000:00000000                                     | 
	+--------------------------------------------------------------------+
	
	Additional query words: sp1 sp2 sp3 sp4 hotfix
	======================================================================
	Keywords          : kbsetup kbFEA kbWinNT400sp4fea 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
