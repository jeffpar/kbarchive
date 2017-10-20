---
layout: page
title: "Q160120: ADT95: Error Installing ADT Application with OLE Controls"
permalink: /kb/160/Q160120/
---

## Q160120: ADT95: Error Installing ADT Application with OLE Controls

{% raw %}

	Article: Q160120
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 18-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 7.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you run the Setup Wizard in Microsoft Access Developer's Toolkit version
	7.0 to create Setup files for your custom application that contains OLE
	Controls, and then you run Setup for your application on another computer, you
	may receive the following error message:
	
	  Mfc40.dll was unable to register itself in the system registry.
	
	When you click OK, you receive an error message that Setup was not completed
	successfully.
	
	CAUSE
	=====
	
	Your application's Setup files contain a mismatched version of the Msvcrt40.dll
	file. The size of the mismatched file is approximately 65 kilobytes, or 65,000
	bytes. The size may vary slightly depending on the program that supplied it.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	- Rename your existing Msvcrt40.dll file in the Windows System folder.
	
	- Restore a compatible version of Msvcrt40.dll to the Windows System folder on
	  your development computer from your original Microsoft Access for Windows 95
	  media.
	
	- Rerun the Setup Wizard to create new Setup files.
	
	  NOTE: In some circumstances, Msvcrt40.dll may be in use and you will not be
	  able to rename it from within Microsoft Windows. If that happens, follow
	  these steps:
	
	- Restore the Msvcrt40.dll from the original Microsoft Access media to a
	  temporary folder on your hard drive.
	
	- Start your computer to an MS-DOS command prompt.
	
	- Use the MS-DOS Rename command to rename the Msvcrt40.dll file in your Windows
	  System folder.
	
	- Move the restored Msvcrt40.dll file from its temporary folder to the Windows
	  System folder.
	
	- Restart your computer.
	
	You can find the correct 312,832 byte version of Msvcrt40.dll in one of the
	following locations:
	
	  Product              Media          Location     CAB File Name
	  --------------------------------------------------------------
	  Microsoft Office     Compact Disc   \OS\System   N/A
	  Professional for
	  Windows 95
	 
	  Microsoft Office     Diskettes      Disk 2       Msoff2.cab
	  Professional for
	  Windows 95
	  
	  Microsoft Access     Diskettes      Disk 2       Access2.cab
	  for Windows 95
	
	If you have Microsoft Office 95 Professional for Windows 95 or Microsoft Access
	for Windows 95 on diskettes, the files are stored in a compressed file format
	called cabinet files (.cab). You must use the Extract.exe utility on Disk 1 to
	decompress and restore the Msvcrt40.dll file to your computer. For more
	information about using Extract.exe, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q132913 How to Use EXTRACT.EXE to Copy Files from DMF Disks
	
	
	MORE INFORMATION
	================
	
	When you run Setup for some software programs, such as Visual C++, ActiveX SDK,
	and Windows NT version 4.0, the program installs a smaller, debug version of
	Msvcrt40.dll on your computer. Because that version of the file is newer than
	the one included with Microsoft Office Professional for Windows 95 or Microsoft
	Access for Windows 95, the Setup program does not overwrite it if you reinstall
	Microsoft Access. You must restore the correct version of the file manually from
	the original media.
	
	Msvcrt40.dll is one of three files you must include with the Setup files for your
	custom application if your application uses OLE custom controls. The other two
	files are Mfc40.dll and Olepro32.dll.
	
	REFERENCES
	==========
	
	For more information about incorrect versions of Msvcrt40.dll, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q154591 BUG: Wrong Version of MSVCRT40.DLL (Forwarder DLL) in Windows 95
	
	  Q153733 PRB: Wrong Mfc40.dll and Msvcrt40.dll from ActiveX CD-ROM Disc
	
	
	Additional query words: ADT mfc40 dll was unable to register itself in the system registry
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbAudDeveloper kbAccessSearch kbZNotKeyword3 kbAccessDevTK700
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
