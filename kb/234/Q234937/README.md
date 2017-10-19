---
layout: page
title: "Q234937: Worm.Explore.Zip Virus Alert"
permalink: /kb/234/Q234937/
---

## Q234937: Worm.Explore.Zip Virus Alert

	Article: Q234937
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2000,4.0,4.5,5.0,5.5,8.0,8.01,8.02,8.03,8.04,8.5,9.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft BackOffice Server 4.0 
	- Microsoft BackOffice Small Business Server version 4.5 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Cluster Server 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, 8.04, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 2000, version 9.0, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Worm.Explore.Zip is a worm or Trojan horse that uses Messaging Application
	Program Interface (MAPI) capable e-mail programs on Windows-based computers to
	propagate itself.
	
	MORE INFORMATION
	================
	
	The worm uses MAPI commands to propagate itself. An e-mail message is created
	with the worm as an attachment using the Zipped_files.exe filename. The body of
	the e-mail message may appear to come from a known e-mail correspondent and may
	contain the following text:
	
	  Hi <Recipient Name> !
	  I received your email and I shall send you a reply ASAP.
	  Till then, take a look at the attached zipped docs.
	  Sincerely
	  <Name>.
	
	The worm determines who to send mail to and what names to use based on the
	contents of the user's Inbox. You should delete any mail containing an
	attachment with the name "Zipped_files.exe" without opening the attachment.
	
	If you run the attachment, you may receive the following error message:
	
	  Cannot open file: it does not appear to be a valid archive. If this file is
	  part of a ZIP format backup set, insert the last disk of the backup set and
	  try again. Please press F1 for help.
	
	Explore.Zip copies itself to the C:\%SystemRoot%\System folder with the filename
	Explore.exe and then modifies the Win.ini file to run itself each time Windows
	is started. The worm then uses your e-mail client to collect e-mail addresses to
	propagate itself.
	
	Additionally, Explore.Zip also searches all local and network mapped drives of
	your computer and arbitrarily selects a series of files to destroy by setting
	the file size to 0 bytes. This can result in data loss.
	
	Normal methods of virus protection should be employed to protect your environment
	from this virus. Virus scanning programs should be updated with the latest
	signature files and any other appropriate steps to prevent the virus from
	entering your environment should be employed. Specific questions regarding your
	virus software's ability to detect and clean this virus should be directed to
	your Anti-Virus software vendor. To remove the worm virus on the client side,
	perform the following steps:
	
	For Windows 95 or Windows 98
	----------------------------
	
	1. Using a standard text editor such as Notepad, edit the Win.ini file, and
	  delete the following lines:
	
	  Run = c:\windows\system\explore.exe
	  Run = c:\windows\system\_setup.exe
	
	2. Save the file, exit the text editor, and then restart the computer.
	
	3. Delete the files:
	
	  C:\Windows\System\Explore.exe
	  C:\Windows\System\_setup.exe
	
	  NOTE: It is possible that _setup.exe may not be found on all infected systems.
	
	4. Check Task Manager for Zipped-file.exe, and use End Task on it to end it if
	  listed.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	For Windows NT
	--------------
	
	1. The virus may be getting loaded from the following location:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Windows\Run
	
	  Use Regedt32.exe to delete data values under this key called Explore.exe or
	  _setup.exe.
	
	2. Run Windows NT Task Manager and select the Processes tab. End processes
	  called Zipped_f.exe, _setup.exe, or Zipped_files.exe.
	
	3. In the C:\Winnt\System32 directory, delete the Explore.exe and/or _setup.exe
	  files.
	
	4. Reboot the system.
	
	5. As an added precaution, use End Task, and delete all Zipped*.exe and
	  _setup.exe files from all hard disks on the computer. Note that in the
	  Windows NT Task Manager, they may show up as processes and not applications.
	
	Outlook Attachment Security Patch
	---------------------------------
	
	For additional information about Outlook and security for e-mail attachments,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q235309 Outlook E-mail Attachment Security Update
	
	
	
	The following sites contain additional information on the ExploreZip worm:
	
	  Symantec: http://www.symantec.com/
	
	  Network Associates, Inc.: http://www.nai.com/
	
	  Trend Micro: http://www.antivirus.com/
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT400search kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbNTTermServSearch kbOutlookSearch kbAudDeveloper kbClustServSearch kbWin95search kbWin98search kbWin98SEsearch kbBackOfficeSearch kbOutlook97Search kbSBServSearch kbWinAdvServSearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : :2000,4.0,4.5,5.0,5.5,8.0,8.01,8.02,8.03,8.04,8.5,9.0
	Issue type        : kbinfo
	
	=============================================================================
	
