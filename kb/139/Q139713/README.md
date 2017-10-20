---
layout: page
title: "Q139713: 16-Bit Apps Using NetWare Sharing Flag May Fail Using CSNW"
permalink: /kb/139/Q139713/
---

## Q139713: 16-Bit Apps Using NetWare Sharing Flag May Fail Using CSNW

{% raw %}

	Article: Q139713
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Shared access to a file on a NetWare server can fail with a sharing violation,
	even with the Shareable attribute set on the file at the NetWare server, when
	you use 16-bit applications that open the file for exclusive use.
	
	CAUSE
	=====
	
	Some older 16-bit MS-DOS-based applications that are not network aware tend to
	open files for exclusive use when in fact shared access to the file is desired.
	NetWare servers can work around this by setting a Shareable attribute on the
	file, which means that the server itself manages locking issues for the file and
	makes it shareable between multiple NetWare clients, even if a client
	application explicitly opens the file for exclusive use.
	
	However, if a client specifies that the file should be opened with Deny Read and
	Deny Write access, then even with this Shareable attribute set, the NetWare
	server gives exclusive access to the file to that client. Sharing violations
	occur if other clients attempt to access the file.
	
	In certain situations the 16-bit layer of the Client Services for NetWare (CSNW)
	redirector opens files with deny read and deny write access when the application
	really requires the file to be opened with exclusive access. This results in
	sharing violations, although the same operation succeeds using MS-DOS-based
	NetWare clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix
	to this problem for 3.51 is in development, but has not been regression tested
	and may be destabilizing in production environments. Microsoft does not
	recommend implementing this fix at this time. Contact Microsoft Product Support
	Services for more information on the availability of this fix. This problem was
	corrected in Windows NT Workstation or Server version 4.0.
	
	
	Additional query words: prodnt nwcs gsnw csnw
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
