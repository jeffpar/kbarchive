---
layout: page
title: "Q174508: ODE: Installing Run-Time Application Breaks Microsoft Internet E"
permalink: /kb/174/Q174508/
---

## Q174508: ODE: Installing Run-Time Application Breaks Microsoft Internet E

	Article: Q174508
	Product(s): Microsoft Access Distribution Kit
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 18-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	- Microsoft Internet Explorer versions 3.0, 4.0 for Windows 95 
	- Microsoft Internet Explorer versions 3.0, 4.0 for Windows NT 4.0 
	- Microsoft Internet Explorer version 4.0 for Windows 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	When you use the Setup Wizard in Microsoft Office 97 Developer Edition Tools to
	create disk images on a computer that is running Microsoft Windows 98 or
	Internet Explorer version 4.0, and then you use the disk images to install the
	application on a computer running Microsoft Internet Explorer 3.x, Microsoft
	Internet Explorer 3.x no longer works. When started, Microsoft Internet Explorer
	3.x does not display pages correctly.
	
	CAUSE
	=====
	
	Two of the files installed during setup are incompatible with Microsoft Internet
	Explorer 3.x. These files are Urlmon.dll and Wininet.dll.
	
	NOTE: This issue does not occur with Internet Explorer 4.01 or later.
	
	RESOLUTION
	==========
	
	Solution 1
	----------
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	Replace the following files in your Windows\System folder with earlier versions
	that are compatible with Microsoft Internet Explorer version 3.x:
	
	  Urlmon.dll
	  Wininet.dll
	
	You can obtain these files from the Windows\System folder of a computer that is
	running Microsoft Internet Explorer version 3.x, but is not running Windows 98
	or Internet Explorer version 4.0. Versions of these files that are compatible
	with Internet Explorer 3.x are also located on the Microsoft Office 97 CD in the
	OS\System folder. To replace the files, follow these steps:
	
	1. Open Windows Explorer on a computer that has Microsoft Internet Explorer
	  version 3.x installed and working properly.
	
	2. Browse to the folder where you have Windows installed. This folder is
	  typically Windows\System in Windows 95 and Windows 98 and Windows\System32 in
	  Windows NT and Windows 2000.
	
	3. Copy the files Urlmon.dll and Wininet.dll to a floppy disk.
	
	4. On the computer where Internet Explorer 3.x is not working properly, rename
	  the files Urlmon.dll and Wininet.dll, which are located in the Windows\System
	  or Windows\System32 folder.
	
	5. Copy Urlmon.dll and Wininet.dll from the floppy disk or from the Microsoft
	  Office 97 CD into the Windows\System or Windows\System32 folder.
	
	  Microsoft Internet Explorer 3.x should now display pages correctly.
	
	Solution 2
	----------
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	You should run the Setup wizard and build your disk images on a computer that
	does not have Microsoft Windows 98 or Internet Explorer 4.0 installed These
	images will allow Microsoft Internet Explorer 3.x to function properly on the
	target computer because the version of Urlmon.dll and Wininet.dll that is
	distributed with Microsoft Internet Explorer 3.x will only overwrite older
	versions of those files.
	
	If you distribute an application using the Microsoft Office 97 Developer Edition
	and Windows 98 or Microsoft Internet Explorer version 4.0 on Microsoft Windows
	95, please see the following article in the Microsoft Knowledge Base:
	
	  Q174217 ODE: Comcat.dll Can't be Registered during Run-time install
	
	Solution 3
	----------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	NOTE: A file is available for download from the Microsoft Download Center
	(Mdtupdtr.exe) that automatically carries out the manual steps listed below for
	Solution 3. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q179567 ODE97: Setup Wizard Template Files Updater Available in Download
	  Center
	
	It is possible to change the version of Urlmon.dll and Wininet.dll that is
	included in your disk images by changing an entry in two of the Setup Wizard's
	tables.
	
	WARNING: Because the following solution will modify the Setup Wizard's default
	tables, you should back up these tables for reference. If you completed a
	default installation of the Office 97 Developer Edition, navigate to the
	following folder
	
	  C:\Program Files\Microsoft Office\ODETools\Setup Wizard\Msaccomp
	
	and make copies of these files in a different folder:
	
	  01Microsoft Access Run-Time Version.MDT
	  09Microsoft Replication Manager.MDT
	
	After you have made the backups of these two tables, follow these steps:
	
	1. Copy a version of Wininet.dll and Urlmon.dll that will register correctly
	  into the C:\Program Files\Microsoft Office\ODETools\Setup Wizard\Redist
	  folder on your development computer.
	
	  NOTE: Version 4.70.1215, which is on both the Office 97 Professional CD-ROM
	  and the Microsoft Access 97 CD-ROM, will work.
	
	2. Open Microsoft Access.
	
	3. In the Microsoft Access dialog box, select Open An Existing Database, and
	  then select More Files in the list box. Click OK.
	
	4. In the Open dialog box, select All Files (*.*) in the Files Of Type box and
	  move to the following folder:
	
	  C:\Program Files\Microsoft Office\ODETools\Setup Wizard\Msaccomp
	
	5. Select and open the file, 01Microsoft Access Run-time Version.MDT.
	
	6. Open the SHAREDINET table and find the line with the following values:
	
	  LineID: add Urlmon_dll
	  Param2: $(WinSysPath)
	  Param3: C:\Windows\System\URLMON.DLL
	
	  Change it to this:
	
	  LineID: add Urlmon_dll
	  Param2: $(SwizSetupFilesPath)
	  Param3: C:\Program Files\Microsoft Office\ODETools\Setup Wizard
	          Redist\URLMON.DLL
	
	7. Find the line with the following values:
	
	  LineID: add Wininet_dll
	  Param2: $(WinSysPath)
	  Param3: C:\Windows\System\WININET.DLL
	
	  Change it to this:
	
	  LineID: add Wininet_dll
	  Param2: $(SwizSetupFilesPath)
	  Param3: C:\Program Files\Microsoft Office\ODETools\Setup Wizard
	          Redist\Wininet.DLL
	
	8. Close the database.
	
	9. Select and open the file, 09Microsoft Replication Manager.MDT, and repeat
	  steps 6 and 7.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about other issues involving the Office 97 Developer
	Edition and Internet Explorer 4.0, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q174217 ODE: Comcat.dll Can't register itself if image Built on IE 4.0
	  Computer
	
	For more information about other issues involving the Office 97 Developer Edition
	and distributing applications, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q160870 ACC: VBA Functions Break in Databases with Missing References
	
	  Q162884 ODE97: Troubleshooting ODE Setup Wizard Problems
	
	Additional query words: pra ie4
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbOfficeSearch kbIEsearch kbAudDeveloper kbZNotKeyword2 kbOffice97Search kbIENT400Search kbIE95Search kbOffice97 kbZNotKeyword3 kbIE98Search kbIE300Win95 kbIE400Win95 kbIE400Win98 kbIE300WinNT400 kbIE400WinNT400 kbOffice97DevSearch
	Version           : :3.0,4.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
