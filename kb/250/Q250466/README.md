---
layout: page
title: "Q250466: After Installing SCM Permissions Are Incorrect"
permalink: /kb/250/Q250466/
---

## Q250466: After Installing SCM Permissions Are Incorrect

	Article: Q250466
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Security Configuration Manager (SCM), you may experience the
	following problems:
	
	   - Directory permissions may appear incorrect when you view them in Windows
	  Explorer. For example, when you view existing permissions, the users and
	  groups (if applied) are listed but none of the boxes are selectd, that is
	  Full Control, Read, or Write, even though they may have those permissions.
	
	   - Existing directory permissions may be incorrect after using Windows Explorer
	  to add or change permissions.
	
	NOTE: These issues occur only on NTFS partitions, because FAT partitions can not
	have directory or file level permissions.
	
	CAUSE
	=====
	
	The Security Configuration Manager included with Windows NT 4.0 Service Packs
	starting with Service Pack 4 runs as a part of the Explorer.exe file and
	provides compatibility with Windows 2000. The new SCM incorrectly interprets
	existing directory security information.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	Version compatible with systems running Service Pack 6:
	
	  Date      Time   Version        Size     File name    Platform
	  --------------------------------------------------------------
	  12/23/99  12:49  4.0.1381.7032   70,928  Aclui.dll    i386
	  12/23/99  12:49  4.0.1381.7032   85,264  Ntmarta.dll  i386
	  12/23/99  12:49  4.0.1381.7032  113,936  Aclui.dll    alpha
	  12/23/99  12:49  4.0.1381.7032  143,120  Ntmarta.dll  alpha
	
	Version compatible with systems running Service Pack 4:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  01/24/00  10:53a             70,928    aclui.dll     x86
	  01/24/00  11:11a             86,288    ntmarta.dll   x86
	  01/24/00  11:16a            115,472    aclui.dll     alpha
	  01/24/00  12:49p            146,704    ntmarta.dll   alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	To work around this issue:
	
	- Install the hotfix described in this article. The hotfix should be installed
	  on all computers that have MSSCE installed.
	
	- If the hotfix or service pack cannot be installed, manually change existing
	  permissions in the Advanced dialog box for the affected users or groups to
	  Apply to: "This folder, subfolders and files".
	
	- Set the permissions using Winfile.exe also works, regardless of whether the
	  MSSCE has been install or not.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
