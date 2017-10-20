---
layout: page
title: "Q120039: NET VIEW Command Does Not List Novell NetWare Print Queues"
permalink: /kb/120/Q120039/
---

## Q120039: NET VIEW Command Does Not List Novell NetWare Print Queues

{% raw %}

	Article: Q120039
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a system running Windows 95 with the Microsoft Client for Novell Networks
	installed, performing a NET VIEW \\<NOVELL SERVER> command from an MS-DOS
	prompt does not list the print queues.
	
	CAUSE
	=====
	
	This problem occurs if you are not logged on to the Novell server. The Microsoft
	Client for Novell Networks must have read access to the PRINT_QUEUES information
	in the Novell server's bindery in order to display the print queues.
	
	RESOLUTION
	==========
	
	To correct this problem, log on to the Novell server first, then use the NET
	VIEW command to view the print queues on that server.
	
	To list the print queues:
	
	1. From an MS-DOS prompt, type the following command
	
	  " net use <drive letter>: \\<novell server>\<share name> "
	  (without the quotation marks)
	
	2. Type your logon name when prompted.
	
	3. Type your logon password when prompted.
	
	4. Type the following command:
	
	  " net view \\<novell server> " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	The ability to perform a NET VIEW command is one benefit of using the Microsoft
	Client for Novell Networks. The "Novell NetWare Client for Workstation Shell 3.x
	or Above" uses the IPX or IPXODI protocol. Performing a NET VIEW command from an
	MS-DOS prompt does not work correctly with the Novell clients installed.
	
	Novell NetWare is manufactured by Novell, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
