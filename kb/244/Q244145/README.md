---
layout: page
title: "Q244145: READFILESCATTER Operation Not Supported by CDFS File System"
permalink: /kb/244/Q244145/
---

## Q244145: READFILESCATTER Operation Not Supported by CDFS File System

{% raw %}

	Article: Q244145
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to use a READFILESCATTER operation to read data from a CD-ROM does
	not work, generating the following error message:
	
	  The parameter is incorrect
	
	CAUSE
	=====
	
	The READFILESCATTER operation is not supported by the CDFS file system
	
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
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  10/15/99  6:49pm               931,712 Ntoskrnl.exe  x86  
	  10/15/99  6:50pm               951,872 Ntkrnlmp.exe  x86
	  10/15/99  6:47pm             1,379,584 Ntoskrnl.exe  alpha
	  10/15/99  6:48pm             1,407,808 Ntkrnlmp.exe  alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	
	Additional query words: sql cdfs.sys cd rom ntreadfilescatter
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
