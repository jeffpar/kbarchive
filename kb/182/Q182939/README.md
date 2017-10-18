---
layout: page
title: "Q182939: ODE97: Name &amp; Product ID Are Incorrect After Install of ODE App"
permalink: kb/182/Q182939/
---

## Q182939: ODE97: Name &amp; Product ID Are Incorrect After Install of ODE App

	Article: Q182939
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SYMPTOMS
	========
	
	After you install a Microsoft Access 97 run-time application that was created on
	a computer running Microsoft Office 97 Service Release 1 (SR-1), the name, the
	organization, and the product ID (PID) of the registered user on the target
	computer are replaced with those of the creator of the run- time application.
	This information appears in the About Microsoft Access dialog box.
	
	CAUSE
	=====
	
	The computer on which you have installed the run-time application is running the
	retail version of Microsoft Access 97 or Microsoft Office 97 Professional that
	has not been updated with SR-1. Consequently, the installation of a run-time
	application that was created on a computer running Microsoft Office Service
	Release 1 (SR-1) overwrites the Msaccess.exe file on the target computer.
	
	The default behavior of the Microsoft Office 97 Developer Edition Setup Wizard is
	to overwrite older files during the installation of a run-time application. The
	version of Msaccess.exe installed by SR-1 is newer and therefore overwrites the
	version of Msaccess.exe and the user information that already exists on the
	target computer.
	
	NOTE: Except for the issue described in the "Symptoms" section, both the run-time
	applications and the full retail version of Microsoft Access 97 behave normally,
	regardless of which version of Msaccess.exe is installed.
	
	RESOLUTION
	==========
	
	There are three methods that you can use to prevent this behavior or to return a
	computer to its original state after overwriting Msaccess.exe. Microsoft
	recommends that you use Method 1 or Method 2 to resolve this issue.
	
	Method 1
	--------
	
	If Msaccess.exe has already been overwritten and incorrect user information
	appears in the About Microsoft Access dialog box, follow these steps on the
	target computer:
	
	1. Uninstall the run-time application.
	
	2. Completely remove Microsoft Office 97. For more information, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q158658 OFF97: How to Completely Remove Microsoft Office 97
	
	3. Reinstall Microsoft Office 97. Then, download and install the Microsoft
	  Office 97 Service Release 1 patch. For more information about Microsoft
	  Office 97 Service Release 1, please see the following article in the
	  Microsoft Knowledge Base:
	
	  Q150613 Microsoft Office 97 Service Release 1 Patch
	
	  You can also find information about the Microsoft Office 97 Service Release 1
	  Patch at the following Microsoft Web site:
	
	  http://office.microsoft.com/assistance/9798/sr1fact.aspx
	
	4. Reinstall the run-time application.
	
	Method 2
	--------
	
	If the run-time application has not yet been installed on the target computer,
	download and install the SR-1 patch before you install the run- time
	application.
	
	Method 3
	--------
	
	To change the default behavior of the Setup program so that the newer version of
	Msaccess.exe does not overwrite the older version, you can modify the Setup.inf
	file.
	
	WARNING: Following these steps produces a configuration that has not been tested;
	this method is not supported by Microsoft product support professionals and may
	result in unexpected behavior. Any use of this method IS AT YOUR OWN RISK.
	
	WARNING: This method prevents Setup from overwriting Msaccess.exe with a newer
	version of the file. If your application uses features such as snapshots that
	were not available before to the release of SR-1, your application may not
	function correctly on a computer that has not already been upgraded with the
	SR-1 patch. Microsoft recommends that you use Method 1 or Method 2 to resolve
	this issue.
	
	1. Make a backup of the Setup.inf file. The file is located on Disk 1 of your
	  distribution disks or in the Net folder of the network install share point.
	
	2. NOTE: In the following sample Setup.inf file, an underscore (_) at the end of
	  a line is used as a line-continuation character for ease of reading. The
	  underscore character does not actually appear in the Setup.inf file, nor
	  should you insert it.
	
	  Open Setup.inf in a text editor such as Notepad. Locate the following line in
	  the [Access Runtime Files] section:
	
	  "msaccess_exe" = 1,MSACCESS.EXE<MSACCESS.EXE>,,,,,,0,OLDER,,,,,, _
	  SHARED,3016976,,,,8.0.0.4122,
	
	  Change the line so that it reads as follows:
	
	  "msaccess_exe" = 1,MSACCESS.EXE<MSACCESS.EXE>,,,,,,0,NEVER,,,,,, _
	  SHARED,3016976,,,,8.0.0.4122,
	
	3. Locate the following line in the [Shared Office Files] section:
	
	  "msaccess_exe" = 1,MSACCESS.EXE<MSACCESS.EXE>,,,,,,0,OLDER,,,,,, _
	  SHARED,3016976,,,,8.0.0.4122,
	
	  Change the line so that it reads as follows:
	
	  "msaccess_exe" = 1,MSACCESS.EXE<MSACCESS.EXE>,,,,,,0,NEVER,,,,,, _
	  SHARED,3016976,,,,8.0.0.4122,
	
	4. Locate the following line in the [Shared Internet Files] section:
	
	  "msaccess_exe" = 1,MSACCESS.EXE<MSACCESS.EXE>,,,,,,0,OLDER,,,,,, _
	  SHARED,3016976,,,,8.0.0.4122,
	
	  Change the line so that it reads as follows:
	
	  "msaccess_exe" = 1,MSACCESS.EXE<MSACCESS.EXE>,,,,,,0,NEVER,,,,,, _
	  SHARED,3016976,,,,8.0.0.4122,
	
	5. Locate the following line in the [msvcrt40 support file] section:
	
	  "msaccess_exe" = 1,MSACCESS.EXE<MSACCESS.EXE>,,,,,,0,OLDER,,,,,, _
	  SHARED,3016976,,,,8.0.0.4122,
	
	  Change the line so that it reads as follows:
	
	  "msaccess_exe" = 1,MSACCESS.EXE<MSACCESS.EXE>,,,,,,0,NEVER,,,,,, _
	  SHARED,3016976,,,,8.0.0.4122,
	
	6. Locate the following line in the [ctl3d32 support file] section:
	
	  "msaccess_exe" = 1,MSACCESS.EXE<MSACCESS.EXE>,,,,,,0,OLDER,,,,,, _
	  SHARED,3016976,,,,8.0.0.4122,
	
	  Change the line so that it reads as follows:
	
	  "msaccess_exe" = 1,MSACCESS.EXE<MSACCESS.EXE>,,,,,,0,NEVER,,,,,, _
	  SHARED,3016976,,,,8.0.0.4122,
	
	7. Save the changes to Setup.inf.
	
	MORE INFORMATION
	================
	
	For more information about Microsoft Office 97 Service Release 1, please visit
	the following Microsoft Web site:
	
	  http://office.microsoft.com/assistance/9798/sr1fact.aspx
	
	Additional query words: changed different runtime license
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbOffice97Search kbAccess97Search kbOffice97 kbOffice97DevSearch
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
