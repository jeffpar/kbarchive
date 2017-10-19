---
layout: page
title: "Q164512: Windows 95 Briefcase: No Drag-and-Drop on WinNT Compressed Dir"
permalink: /kb/164/Q164512/
---

## Q164512: Windows 95 Briefcase: No Drag-and-Drop on WinNT Compressed Dir

	Article: Q164512
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This issue applies to a Windows 95 user connecting to a Windows NT sharepoint
	containing compressed directories and files. The problem is observed from the
	Windows 95 client when using a drag-and-drop operation to move a compressed
	Windows NT directory into Windows 95 Briefcase. The resulting problem is that
	the directory is copied but files under the directory are not copied.
	
	CAUSE
	=====
	
	This problem occurs because Windows NT sends to Windows 95 a file attribute of
	0x820 in reply to a findfirst request. Windows 95 was not handling the 8xx
	portion of this reply and was failing to copy files containing the attribute.
	All Windows NT compressed files contain the 8xx attribute designation.
	
	RESOLUTION
	==========
	
	This issue is resolved by the following updated file for Windows 95, and later
	versions of this file:
	
	SYNCENG.DLL  version 4.00.951  dated 7/16/96  55,296 bytes
	
	
	
	To work around this problem, do not store user profiles in compressed folders on
	Windows NT-based computers. If necessary, uncompress the folder used to store
	user profiles and re-create the user profiles.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. An update
	to address this problem is now available, but is not fully regression tested and
	should be applied only to computers experiencing this specific problem. Unless
	you are severely impacted by this specific problem, Microsoft does not recommend
	implementing this update at this time. Contact Microsoft Technical Support for
	additional information about the availability of this update.
	
	This issue is resolved in Microsoft Windows 98.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : :3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
