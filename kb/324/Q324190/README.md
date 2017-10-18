---
layout: page
title: "Q324190: Cannot Map Groups with a GID That Is Longer Than 999,999"
permalink: kb/324/Q324190/
---

## Q324190: Cannot Map Groups with a GID That Is Longer Than 999,999

	Article: Q324190
	Product(s): Microsoft Windows NT
	Version(s): 2.2 OEM Only
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.2 OEM Only 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows Services for UNIX 2.2 cannot map groups with a GID that is longer than 6
	digits (999,999).
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version        Size     File name
	  ------------------------------------------------------
	  07-Jun-2002  11:11  5.2000.328.27   19,968  Dsctrs.dll
	  07-Jun-2002  11:05  5.2000.328.27  281,600  Mapper.dll
	  07-Jun-2002  11:05  5.2000.328.27  108,544  Mapsvc.exe
	  07-Jun-2002  11:11  5.2000.328.27  101,888  Nfssvc.exe
	  07-Jun-2002  11:11  5.2000.328.27  254,144  Nfssvr.sys
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinServiceUNIXSearch kbWinServiceUNIX220OEM
	Version           : :2.2 OEM Only
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
