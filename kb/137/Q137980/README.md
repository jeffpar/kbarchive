---
layout: page
title: "Q137980: Connecting to Windows 95 User Level Share Results Event ID 3012"
permalink: /kb/137/Q137980/
---

## Q137980: Connecting to Windows 95 User Level Share Results Event ID 3012

{% raw %}

	Article: Q137980
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to connect to a Windows 95 user-level network share from a
	computer running Windows NT on another domain, and you do not have access
	privileges to the network share, the following error message appears:
	
	  You do not have permission to access this directory.
	
	However, if you disconnect and connect as a user with access privileges in File
	Manager, the following error message appears with an OK button:
	
	  An unexpected network error has occurred.
	
	In addition, Event ID 3012 appears in the Windows NT Event Viewer with the
	following description:
	
	  An unexpected network error has occurred on the virtual circuit to
	  <computer name>.
	
	
	RESOLUTION
	==========
	
	To work around this problem, choose OK in the error message dialog box. You now
	have access to resources on the Windows 95 share.
	
	To prevent these error messages from appearing, Microsoft has released a new
	version of the Vserver.vxd (4.00.953) file. This file is available in the
	Microsoft Windows 95 Service Pack 1 Update Setup.exe file.
	
	For information about Microsoft Windows 95 Service Pack 1, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q142794 Availability of Microsoft Windows 95 Service Pack 1
	
	Installation
	------------
	
	To install the updated file, follow these steps:
	
	1. Download the Setup.exe file from one of the online services listed below to
	  an empty folder.
	
	2. In My Computer or Windows Explorer, double-click the Setup.exe file.
	
	3. Follow the instructions on the screen.
	
	4. After the installation process is finished, shut down and then restart your
	  computer.
	
	Running Setup.exe installs the Windows 95 Service Pack 1 Update, which
	automatically updates the Vserver.vxd file.
	
	The following file(s) are available for download from the Microsoft Software
	Library:
	
	  setup.exe (http://support.microsoft.com/download/support/mslfiles/setup.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	
	Additional query words: prodnt winnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
