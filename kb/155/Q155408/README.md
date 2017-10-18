---
layout: page
title: "Q155408: Oleaut32.dll Overwritten When Applying Service Packs 1-4"
permalink: kb/155/Q155408/
---

## Q155408: Oleaut32.dll Overwritten When Applying Service Packs 1-4

	Article: Q155408
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply Service Packs 1 through 4, a newer version of Oleaut32.dll is
	overwritten with an old one. For example, you install a new version of Microsoft
	Office, which updates Oleaut32.dll to a newer version. When you then apply
	Service Pack 4 (SP4), the new Oleaut32.dll is replaced with the older SP4
	version, dated 1/4/96, version 2.1, size 233,232 bytes.
	
	Once this file is overwritten, the resulting behavior for Office will be frequent
	application crashes or various unexpected or unexplainable errors.
	
	CAUSE
	=====
	
	Date checking was not enabled in the Update.inf for this file, so the Service
	Pack overwrites a newer version without checking. The update utility replaces
	the newer version of Oleaut32.dll with an old version and the applications that
	rely on functionality in the newer file fail to run correctly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the fix referenced below. The Update.inf
	included with the fix contains a change specifying OVERWRITE=OLDER for
	Oleaut32.dll. With this change to Update.inf, only a newer version of
	Oleaut32.dll will be applied.
	
	WORKAROUND
	==========
	
	To work around this problem, replace Oleaut32.dll with the newer version from
	the application with which you are having problems. The version of Oleaut32.dll
	that is installed by Windows NT Service Pack 4 is dated 1/4/96.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
