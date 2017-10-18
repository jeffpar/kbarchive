---
layout: page
title: "Q284849: Permissions Are Incorrect After Installing SCM"
permalink: kb/284/Q284849/
---

## Q284849: Permissions Are Incorrect After Installing SCM

	Article: Q284849
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Security Configuration Manager (SCM), you may experience the
	following symptoms:
	
	- Folder permissions may appear incorrect when you view them in Windows
	  Explorer. For example, when you view existing permissions, the users and
	  groups (if applied) are listed but none of the check boxes (such as Full
	  Control, Read, or Write) are selected, even though the user or group may have
	  those permissions.
	
	- Existing folder permissions may be incorrect after you use Windows Explorer
	  to add or change permissions.
	
	- You may not be able to use Windows Explorer on that computer to remotely
	  administer file permissions on other Windows NT-based computers on the
	  network. This problem most commonly occurs on computers that are running
	  localized versions of Windows NT when you try to view permissions on
	  computers that are running the English-language version of Windows NT. The
	  problem may also occur when both computers are running the same language
	  version of Windows NT. When you try to view file permissions on a remote
	  computer over the network after installing SCM, you may receive the following
	  error message:
	
	  Unable to display security information
	
	In the French-language version of Windows NT, the error message is:
	
	  Impossible d'afficher les informations de securite
	
	In the German-language version of Windows NT, the error message is:
	
	  Die Sicherheitseinstellungen konnen nicht angezeigt werden
	
	Note that these issues occur only on partitions that use the NTFS file system.
	Partitions that use the FAT file system do not have folder or file-level
	permissions.
	
	CAUSE
	=====
	
	The version of SCM that is included with Windows NT 4.0 service packs starting
	with Service Pack 4 runs as part of Explorer.exe and provides compatibility with
	Windows 2000. The new version of SCM incorrectly interprets existing folder
	security information.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT Server 4.0, Terminal Server Edition, service pack that
	contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version         Size     File name  
	  --------------------------------------------------------
	  29-Mar-2001  14:29  4.0.1381.33472   70,928  Aclui.dll
	  29-Mar-2001  14:29  4.0.1381.33472  156,432  Lsasrv.dll
	  29-Mar-2001  14:29  4.0.1381.33472   84,240  Ntmarta.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
