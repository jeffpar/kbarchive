---
layout: page
title: "Q258769: XCLN: Outlook 2000 Err. Mssg.: &quot;Error While Archiving Folder...&quot;"
permalink: /kb/258/Q258769/
---

## Q258769: XCLN: Outlook 2000 Err. Mssg.: &quot;Error While Archiving Folder...&quot;

	Article: Q258769
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When AutoArchiving begins, you may receive the following error message:
	
	  Error while archiving folder <folder_name> in store <store_name>.
	  The path specified for the file C:\Windows\Profiles\<user_name>\Local
	  Settings\Application Data\Microsoft\Outlook\Archive.pst is not valid.
	
	CAUSE
	=====
	
	This issue can occur because when you upgrade from Microsoft Windows 95 or
	Microsoft Windows 98 to Windows 2000, the default path for the AutoArchive
	feature of Outlook 2000 becomes invalid. This occurs because the upgrade process
	moves the user information that is located in the C:\Windows\Profiles folder in
	Windows 95 and Windows 98 to the C:\Documents and Settings folder in Windows
	2000. Since Outlook 2000 stores the AutoArchive settings on your Exchange Server
	computer, Windows 2000 Setup cannot modify them.
	
	RESOLUTION
	==========
	
	To resolve this issue, manually change the path to the new location of the user
	information file (Archive.pst):
	
	1. In the Folder List view in Outlook, right-click the folder that is scheduled
	  to be AutoArchived, and then click Properties.
	
	2. Click the AutoArchive tab.
	
	3. Under Move old items to, click Browse.
	
	4. Navigate to and select the following file:
	
	  C:\Documents and Settings\<user_name>\Local Settings\Application
	  Data\Microsoft\Outlook\Archive.pst
	
	5. Click OK, and then click OK again.
	
	MORE INFORMATION
	================
	
	This error message only occurs if you initially select the default folder to
	store the Archive.pst file. If you select a folder other than the default
	C:\Windows\Profiles folder, you do not need to make any changes after you
	upgrade to Windows 2000.
	
	Additional query words: OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbZNotKeyword3
	Version           : WINDOWS:2000
	Issue type        : kbprb
	
	=============================================================================
	
