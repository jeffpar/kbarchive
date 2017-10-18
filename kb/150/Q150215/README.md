---
layout: page
title: "Q150215: Disabling Automatic Network Shortcut Resolution"
permalink: kb/150/Q150215/
---

## Q150215: Disabling Automatic Network Shortcut Resolution

	Article: Q150215
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbpolicy kbui win95
	Last Modified: 13-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a shortcut to a resource on a mapped network drive, and then
	remap the same drive to a different network resource, Windows attempts to
	connect to the original network resource when you access the shortcut.
	
	Furthermore, when you re-establish the original connection, a different drive
	letter may be mapped to the original resource. This may cause programs to fail
	because the expected drive mappings are not present.
	
	CAUSE
	=====
	
	This behavior is part of the mechanism by which Windows attempts to resolve and
	automatically maintain shortcuts to network resources.
	
	For additional information about Windows shortcut resolution, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q128932 How Windows 95 Resolves Shortcut Links
	
	  Q132658 Shortcut to Deleted NetWare File May Open Wrong File
	
	RESOLUTION
	==========
	
	Individual shortcuts can be modified by using the Shortcut.exe tool to remove
	Universal Naming Convention (UNC) path information from the shortcut.
	
	Note that to successfully use the Shortcut.exe tool to remove UNC path
	information from a shortcut, it must meet the following criteria:
	
	- The shortcut must contain both UNC and static path information. You can
	  verify the shortcut contains the static path by right-clicking the shortcut,
	  clicking Properties, and then clicking the Shortcut tab. The path in the
	  Target box should be in the following format:
	
	  " <drive>:\folder\filename.ext " (without the quotation marks)
	
	  You can verify the shortcut contains the UNC path information by viewing the
	  shortcut in Notepad. To do so, click Start, click Run, and then type the
	  following line in the Open box
	
	  " notepad <path>\<shortcut.lnk> " (without the quotation marks)
	
	  where <path> is the path to the shortcut you want to change, and
	  <shortcut.lnk> is the name of the shortcut from which you want to
	  remove the UNC path information.
	
	  You may need to click Word Wrap on the Edit menu to view the shortcut file.
	  The shortcut file contains primarily unreadable binary information, however
	  you should be able to read the UNC and mapped drive information. Do not
	  modify or save the shortcut file.
	
	- The drive specified in the static path has been mapped to a network share
	  different than the original one referred to by the shortcut.
	
	- The mapped drive must contain a directory path structure and a file whose
	  name matches that of the static path in the shortcut.
	
	The Shortcut.exe tool can be obtained from the following locations:
	
	Windows 95
	----------
	
	The Shortcut.exe tool is included in the Microsoft Windows 95 Resource Kit and is
	also located in the Admin\Apptools\Envvars folder on the Windows 95 CD-ROM.
	
	Windows NT
	----------
	
	The Shortcut.exe tool is included in the Microsoft Windows NT Server Resource Kit
	Version 4.0, Supplement One, in the I386\Desktop folder, MIPS\Desktop folder,
	and ALPHA\Desktop folder on the Windows NT Server Resource Kit CD-ROM.
	
	For more information about how to resolve this issue in Windows NT, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q158682 Shortcuts Created Under NT 4.0 Resolve to UNC Paths
	
	To remove the UNC information from a shortcut, follow these steps:
	
	NOTE: If you want to disable only the automatic resolution, and you are not
	concerned about deleting the UNC path information from the shortcut, you should
	perform only steps 1 and 2. The shortcut must contain both a UNC path and a
	static path.
	
	1. Click Start, point to Programs, and then click Command Prompt or MS-DOS
	  Prompt.
	
	2. Use the Shortcut.exe tool to disable automatic network shortcut resolution
	  with this shortcut. To do so, type the following line at the command prompt,
	  and then press ENTER
	
	  " shortcut.exe -s <path><shortcut.lnk> " (without the quotation
	  marks)
	
	  where <path> is the path to the shortcut you want to change, and
	  <shortcut.lnk> is the name of the shortcut from which you want to
	  remove the UNC path information.
	
	3. Click Start, point to Programs, click Windows NT Explorer or Windows
	  Explorer, and then locate the shortcut you specified in step 2.
	
	4. Rename the shortcut. When you rename the shortcut, Windows updates the
	  shortcut so that it does not perform automatic network shortcut resolution.
	  Do not change the extension of the shortcut.
	
	  For information about how to rename a file, click Start, click Help, click the
	  Index tab, type "renaming" (without the quotation marks), and then
	  double-click the "Renaming files" topic.
	
	  NOTE: You must rename the shortcut file in Windows NT Explorer or Windows
	  Explorer. The shortcut is not updated if you rename it at a command prompt.
	
	5. Use the Shortcut.exe tool to resolve the shortcut to a static location and
	  the delete the UNC path information. To do so, type the following line at a
	  command prompt and then press ENTER
	
	  " shortcut.exe -r <path>\<shortcut.lnk> " (without the quotation
	  marks)
	
	  where <path> is the path to the shortcut you want to change, and
	  <shortcut.lnk> is the name of the shortcut from which you want to
	  remove the UNC information.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q134401 Windows 95 Resource Kit Readme.txt File
	
	  Q137725 Resource Kit Tools Included on the Windows 95 CD-ROM
	
	The same result can be applied globally to all shortcuts by installing the
	following updated file for Windows 95, or a later version of this file:
	
	  SHELL32.DLL  version 4.00.952  dated 11/3/95  817,664 bytes
	
	MORE INFORMATION
	================
	
	Automatic resolution may be undesirable if the file pointed to by the shortcut
	has been deliberately moved to a different resource, or if a load- balancing
	mechanism is in place so that the same drive letter may be mapped to one of
	several network resources with identical contents.
	
	When you right-click a shortcut, click Properties, and then click the Shortcut
	tab, the Target box specifies the path to the file and can contain either a UNC
	path (\\server\share\directory\filename.ext), or a static path
	(<drive:>\directory\filename.ext).
	
	A shortcut to a network resource may have either type of path as the target
	depending on how it was created. For example, if the shortcut was created by
	right-clicking a network file and clicking Create Shortcut, it contains a static
	path and a UNC path.
	
	When you run Shortcut.exe with the -s parameter to disable automatic network
	shortcut resolution, depending on the type of shortcut and the status of any
	network drive mappings, the following results occur when you double-click the
	shortcut:
	
	Shortcut Containing UNC Path Only
	---------------------------------
	
	Disabling automatic shortcut resolution in a local shortcut, or one containing
	only UNC information, has no effect on the manner in which the shortcut is
	resolved.
	
	Shortcut Containing UNC and Static Paths
	----------------------------------------
	
	For a shortcut that contains both UNC and static paths, shortcut resolution is
	more complex. If the you have not disabled shortcut resolution, then the
	original network resource is used. If the shortcut is mapped to the drive
	specified in the static path, that drive is used. If the resource is mapped to a
	different drive, the new drive is used, and the shortcut's static path is
	updated with the new drive information. If the resource is not currently mapped
	to a drive, one is assigned automatically, and the shortcut is updated with the
	new drive information.
	
	If shortcut resolution has been disabled, it is resolved to the specified static
	path. Note that the original UNC path information is still contained within the
	shortcut.
	
	If the original network share is mapped to the drive specified in the static
	path, the shortcut is resolved to it, but the UNC path information is not
	deleted from the shortcut.
	
	If a different network share has been mapped to the drive indicated by the static
	path, and the static path points to an existing file on that drive, then the UNC
	information is removed from the shortcut, and the shortcut is resolved like a
	local shortcut. The update to Shell32.dll causes UNC information in all
	shortcuts to be ignored if the DWORD value "LinkResolveIgnoreLinkInfo" is
	present in the following registry key, and set to a data value of "1":
	
	  HKCU\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer
	
	If this registry value is not present, this update will function the same as the
	released Windows 95 version in this respect. This registry value is not added
	automatically when installing this update.
	
	
	For additional information about issues resolved by updates to this component,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q161100 File May Be Truncated When Copied to a Full Network Drive
	
	  Q138014 File May Be Truncated to Zero Bytes When Copied Onto Itself
	
	  Q136834 Error Copying Read-Only Files to Core SMB Server
	
	
	  Q160807 Cannot Connect to Windows NT Server with Many Shares
	
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	
	Additional query words: winnt prodnt
	
	======================================================================
	Keywords          : kbnetwork kbpolicy kbui win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : :4.0
	
	=============================================================================
	
