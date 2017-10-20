---
layout: page
title: "Q130117: Running PKZIP Hangs WFW or Windows NT MS-DOS Command Prompt"
permalink: /kb/130/Q130117/
---

## Q130117: Running PKZIP Hangs WFW or Windows NT MS-DOS Command Prompt

{% raw %}

	Article: Q130117
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run MS-DOS Command Prompt on a computer running Windows for Workgroups
	or Windows NT, and then run PKZIP.EXE from a Windows NT read- only network drive
	to compress a large file (ten megabytes or larger), your MS-DOS Command Prompt
	may stop responding (hang).
	
	CAUSE
	=====
	
	PKZIP is attempting to create a temporary file. When the MS-DOS create unique
	file API is executed at a network drive with read-only privileges, the Windows
	NT server service returns SMB access denied. This problem occurs under Windows
	for Workgroups because the Windows NT workstation service does not handle the
	SMB access denied. This problem occurs under Windows NT because the Windows NT
	redirector does not correctly handle the SMB access denied. Because of these
	problems, the application does not terminate, and the API call repeatedly
	attempts to recreate random file names. This loop sends request to the server
	infinitely.
	
	This problem occurs only when your read-only network drive is on a computer
	running Windows NT. For example, if the read-only drive is on a computer running
	Windows for workgroups, the server responds in a fashion which allows the
	application to return access denied to the user and the application halts. The
	Windows for Workgroups server returns SMB access denied: 2,4.
	
	RESOLUTION
	==========
	
	To work around this problem, run PKZIP from a local or network drive that
	provides both read and write privileges for the temporary files. To correct this
	problem under Windows for Workgroups, install the latest US Service Pack for
	Windows NT on the computer running Windows NT. To correct this problem, install
	the latest US Service Pack for Windows NT.
	
	NOTE: SRV.SYS and RDR.SYS were changed to handle the SMB access denied return
	codes properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest US Service Pack for Windows NT. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	This problem was corrected in Windows NT version 3.51.
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt wfw wfwg 3.11 3.51 share 1,5 0xc0000022 error code
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch
	Version           : WINDOWS:; winnt:3.5
	
	=============================================================================
	

{% endraw %}
