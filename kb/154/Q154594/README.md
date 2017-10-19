---
layout: page
title: "Q154594: PC-NFS Logon Box Missing After Upgrade"
permalink: /kb/154/Q154594/
---

## Q154594: PC-NFS Logon Box Missing After Upgrade

	Article: Q154594
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use PC-NFS Version 2.2x for Windows NT with Microsoft Windows NT 3.5x and
	you upgrade to Microsoft Windows NT 4.0, the PC-NFS logon box no longer appears
	after the upgrade.
	
	CAUSE
	=====
	
	During the upgrade, a Microsoft Windows NT registry key returns to default
	values for Windows NT 4.0.
	
	RESOLUTION
	==========
	
	To remedy the problem after the Windows NT 4.0 upgrade, you will need to edit
	the registry value USERINIT by using the following procedure.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start the Registry Editor (Regedt32.exe).
	
	2. In the HKEY_LOCAL_MACHINE subtree, locate the following registry key:
	
	  /SOFTWARE/Microsoft/WindowsNT/CurrentVersion/Winlogon
	
	3. Double-click the USERINIT value and add the following text to the existing
	  string:
	
	  ,<PC-NFS product directory>\nfslogin.exe -w
	
	  For example: ,c:\ntnfs\nfslogin.exe -w
	
	NOTE: Please be sure to include the comma that precedes the additional text. This
	comma must be present to separate this parameter from the previous entries.
	
	MORE INFORMATION
	================
	
	PC-NFS is a product of Intergraph. This problem may be addressed in the next
	release of PC-NFS version 2.3 for Windows NT. The next release may be available
	through their web page or through Intergraph customer support.
	
	Intergraph support:
	
	  In the US:        (800)-633-7248
	  Outside the US:   (205)-730-5494
	
	  or visit their web pages at <LINK TYPE="GENERIC" VALUE="http://www.intergraph.com/nfs.">http://www.intergraph.com/nfs.</LINK>
	
	STATUS
	======
	
	PC-NFS is manufactured by Intergraph, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: prodnt pcnfs
	======================================================================
	Keywords          : kb3rdparty kbother 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
