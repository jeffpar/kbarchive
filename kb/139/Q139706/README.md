---
layout: page
title: "Q139706: Windows 95 Shared Folders Update Readme.txt File"
permalink: /kb/139/Q139706/
---

## Q139706: Windows 95 Shared Folders Update Readme.txt File

{% raw %}

	Article: Q139706
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information in this article is a copy of the information in the Readme.txt
	file included with the Windows 95 Shared Folders Update.
	
	For information about how to view shared folders in Microsoft Exchange in Windows
	95, please see the following article in the Microsoft Knowledge Base:
	
	  Q141127 SFS Post Office Shared Folders Not Available with MS Exchange
	
	MORE INFORMATION
	================
	
	The files included in this bug-fix release update those that shipped in Windows
	95. They include bug fixes and provide users running Microsoft Exchange with
	Windows 95 access to their Microsoft Mail shared folders. The Microsoft Mail
	information service that ships with Windows 95 does not provide access to shared
	folders.
	
	IMPORTANT Before following this procedure, exit and log off Microsoft Exchange.
	
	To update files:
	
	1. From Control Panel, double-click Add/Remove Programs.
	
	2. Click the Windows Setup tab.
	
	3. Click the Have Disk button.
	
	4. Type the path to the directory containing this file.
	
	5. Select the Microsoft Exchange check box.
	
	6. Click Install. This installs the necessary files and makes the necessary
	  changes to MAPISVC.INF.
	
	7. From Control Panel, double-click Mail And Fax.
	
	8. Remove the Microsoft Mail information service from your profile by selecting
	  it from the list and choosing Remove.
	
	9. Add the Microsoft Mail information service by choosing Add, then choosing
	  Microsoft Mail from the list of services that you can add. The Microsoft Mail
	  configuration pages appear.
	
	10. On the Connection page, type the path to your Microsoft Mail postoffice in
	  the Edit box. If you were previously using Microsoft Mail, the path will be
	  entered for you. Click the Logon tab.
	
	11. Type your mailbox and password in the appropriate boxes. If you were
	  previously using Microsoft Mail, the names will be entered for you. Select
	  the When Logging On, Automatically Enter Password check box.
	
	12. Click OK to add the service, then click OK again to save the changes to your
	  profile. The next time you run Microsoft Exchange, you will see Microsoft
	  Mail Shared Folders in the folder list of the Viewer.
	
	Additional query words: Exupdusa.exe
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
