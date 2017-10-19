---
layout: page
title: "Q188206: &quot;Access Denied&quot; Connecting to Windows NT Server with Many Shares"
permalink: /kb/188/Q188206/
---

## Q188206: &quot;Access Denied&quot; Connecting to Windows NT Server with Many Shares

	Article: Q188206
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1.0,2.0,2.1,2.5
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork osr2 win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1.0, 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a network share on a Microsoft Windows NT server,
	the connection attempt may not succeed and you may receive the error message
	"Access Denied," even though you do have permissions to the network share.
	
	For example, this error message may appear when you click Start, click Run, and
	then type a command such as the following sample command in the Open box:
	
	  \\<servername>\<sharename>
	
	CAUSE
	=====
	
	This problem may occur if the Windows NT server has a large number of shares
	(approximately 1,000 or more), especially if the share name appears towards the
	end of the list of share names (sorted alphabetically). Under such conditions,
	the list of network share names may exceed 64 kilobytes (KB), and the share name
	may not appear within the first 64 KB of this list.
	
	
	RESOLUTION
	==========
	
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q160807 Cannot Connect to Windows NT Server with Many Shares
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :1.0,2.0,2.1,2.5
	Issue type        : kbprb
	
	=============================================================================
	
