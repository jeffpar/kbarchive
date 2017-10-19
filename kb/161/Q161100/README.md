---
layout: page
title: "Q161100: File May Be Truncated When Copied to a Full Network Drive"
permalink: /kb/161/Q161100/
---

## Q161100: File May Be Truncated When Copied to a Full Network Drive

	Article: Q161100
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbnetwork osr2 win95kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Windows Explorer on a Windows-based computer to copy a file to an SMB
	(Server Message Block) server using the Microsoft Client for Microsoft Networks,
	the file may be truncated if the server's disk is full or nearly full.
	
	The copy operation may seem to succeed, and no error message is displayed.
	However, some data at the end of the file may be lost.
	
	CAUSE
	=====
	
	This can occur if the amount of free disk space on the server is slightly less
	than the size of the file being copied.
	
	RESOLUTION
	==========
	
	To resolve this issue, make sure the disk on the network server contains
	sufficient free space for the file being copied.
	
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
	
	The English version of this fix should have the following file attributes or
	later.
	
	Windows 95:
	
	  File name    Version   Date     Size
	  ---------------------------------------------
	  Vredir.vxd   4.00.958  7/23/96  140,403 bytes
	  Shell32.dll  4.00.954  7/23/96  817,664 bytes
	
	Windows 98:
	
	  File name   Size     Date      Time   Version
	  -----------------------------------------------
	  Vredir.vxd  165,461  08/13/99  02:36  4.10.2149
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	If the operation being performed is a move operation instead of a copy
	operation, or if the original file is deleted after being copied, the lost data
	may not be recoverable except by restoring from a recent backup.
	
	For additional information about issues resolved by updates to these components,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q183493 Batch File Calling CD Command May Not Run on HPFS
	
	  Q174371 Possible Database File Damage When Data Is Appended
	
	  Q172594 Cannot Connect to Server with 15 Characters and Period in Name
	
	  Q167712 Fatal Exception Error in VREDIR with DCOM Program
	
	  Q165403 Windows 95 Update Prevents Sending Clear-Text Password Over Net
	
	  Q165402 Windows 95 Update to Encrypt Passwords in Memory
	
	  Q160807 Cannot Connect to Windows NT Server with Many Shares
	
	  Q157114 "Access Denied" Attempting to Run File on LM/X Server
	
	  Q152186 Possible Network Data Corruption If Locking Not Used
	
	  Q150215: Disabling Automatic Network Shortcut Resolution
	
	  Q148367 Possible Network File Corruption with Redirector Caching
	
	  Q142803 Locking Error or Computer Hangs Accessing Network Database Files
	
	  Q140558 Deleting Files on Samba Servers May Delete Local Files Instead
	
	  Q138249 Updated Vredir.vxd Corrects Errors Running Files on LMX
	
	  Q138014 File May Be Truncated to Zero Bytes When Copied Onto Itself
	
	  Q136834 Error Copying Read-Only Files to Core SMB Server
	
	  Q150215 Disabling Automatic Network Shortcut Resolution
	
	  Q138014 File May Be Truncated to Zero Bytes When Copied Onto Itself
	
	  Q136834 Error Copying Read-Only Files to Core SMB Server
	
	  Q160807 Cannot Connect to Windows NT Server with Many Shares
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	For additional information about Windows 98 and Windows 98 Second Edition
	hotfixes, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q206071 General Information About Windows 98 and Windows 98 Second Edition
	  Hotfixes
	
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork osr2 win95 kbfixlist
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
