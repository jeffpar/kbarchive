---
layout: page
title: "Q321142: HOW TO: Hide the Metabase to Increase IIS Security"
permalink: /kb/321/Q321142/
---

## Q321142: HOW TO: Hide the Metabase to Increase IIS Security

{% raw %}

	Article: Q321142
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Locate, Move, and Change the File Name of the Metabase
	- Add a Registry Entry for MetaDataFile
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article explains how to change the location of the metabase
	for Internet Information Services (IIS) to increase the security of the metabase
	file.
	
	Locate, Move, and Change the File Name of the Metabase
	------------------------------------------------------
	
	1. Locate the Metabase.bin file. By default, the Metabase.bin file is located in
	  the %systemroot%\system32\inetsrv folder.
	
	NOTE: You may want to create a backup copy of the metabase before you proceed.
	
	2. Stop the IIS Admin Service. This also stops the dependent Web services.
	
	3. Move the Metabase.bin file to a new folder.
	
	4. Verify that the NTFS permissions are set correctly for the Metabase.bin file
	  and the new folder.
	
	5. Rename the Metabase.bin with a new name, a new file name extension, or both
	  (for example, Filename.ext).
	
	Add a Registry Entry for MetaDataFile
	-------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\INetMgr\Parameters
	
	3. On the Edit menu, click New, click String Value, and then add the following
	  registry value:
	
	  Value name: MetadataFile
	  Data type: REG_SZ
	  Value data: <Path_info>
	
	NOTE: <Path_info> specifies the new complete path of the metabase file,
	including the drive letter, folder, file name, and file name extension.
	
	4. Quit Registry Editor.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q300675 HOW TO: Create a Metabase Backup by Using Internet Information Server
	  4.0 in Windows NT
	
	  Q300672 HOW TO: Create a Metabase Backup in IIS 5
	
	  Q271071 Minimum NTFS Permissions Required for IIS 5.0 to Work
	
	  Q187506 List of NTFS Permissions Required for IIS Site to Work
	
	For more information, see the "Security" topic in the IIS 4.0 online
	documentation. To locate this topic, click Microsoft Internet Information
	Services, click Programmers Reference, click IIS Metabase, and then click
	Security.
	
	For more information, see the "Metabase and Reliability" topic in the IIS
	versions 5.0 and 5.1 online documentation. To locate this topic, click the Index
	tab, and then search for "Metabase".
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
