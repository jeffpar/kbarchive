---
layout: page
title: "Q167006: INFO: Removing Recycle Bin Option During Unattended Setup"
permalink: /kb/167/Q167006/
---

## Q167006: INFO: Removing Recycle Bin Option During Unattended Setup

{% raw %}

	Article: Q167006
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT 4.0 Recycle Bin is installed and configured by default during
	setup. There is no option to remove the Recycle Bin with the Unattend.txt
	script. The following information shows how to remove the Recycle Bin from the
	desktop and how to disable the ability to use the Recycle Bin on any drive.
	Evaluate this option carefully. Disabling the Recycle Bin disables all functions
	of restoring files that would normally be placed in the Recycle Bin. It is not
	possible to remove only the icon from the desktop and leave the Recycle Bin
	functions in tact.
	
	Depending on the security requirements of your environment, this option may be
	desirable.
	
	MORE INFORMATION
	================
	
	By using the INF format supported by Windows NT 4.0, you can remove the Name
	Space for the Recycle Bin during Windows NT installation/deployment. You can
	copy and save the following INF file to save time and to prevent syntax errors.
	
	1. Copy the information starting with the line first line [Version] to the last
	  line [UpdateInis].
	
	     [Version]
	     Signature = "$Windows NT$"
	
	     [DefaultInstall]
	     AddReg = AddReg
	     DelReg = DelReg
	     UpdateInis = UpdateInis
	
	     [AddReg]
	     [DelReg]
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer
	        \Desktop\NameSpace\ 
	     {645FF040-5081-101B-9F08-00AA002F954E}"
	     [UpdateInis]
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Save the information to a file called Remcycl.inf.
	
	To take advantage of the INF file during the Windows NT automated installation
	process, configure the following information:
	
	1. Configure an Unattend.txt file that is configured to install Windows NT 4.0.
	
	2. Add the option OEMPreInstall = Yes to the [UNATTENDED] section in the answer
	  file.
	
	3. Create an I386 folder on a server. Copy the files from the I386 folder of the
	  Windows NT 4.0 compact disc to the I386 folder on the server.
	
	4. Create a folder called $OEM$ in the I386 folder on the server.
	
	5. Copy the Remcycl.inf file to the $OEM$.
	
	6. Using a text editor, create or modify the Cmdlines.txt file, and then save it
	  to the $OEM$.
	
	To save time, copy the following two lines of information to create the required
	Cmdlines.txt:
	
	     [Commands]
	     "rundll32 setupapi,InstallHinfSection DefaultInstall 128 .\REMCYCL.INF"
	
	NOTE: If you have an existing Cmdlines.txt file, do not copy the [Commands] line
	because an existing Cmdlines.txt file has this line.
	
	You can remove the Recycle Bin using the preceding method because of the new INF
	file format that Windows NT 4.0 and Windows 95 use. Consult the Windows NT 4.0
	DDK and the Windows NT 4.0 SDK for detailed information on the new INF format
	and options.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q162170 How to Remove Default Desktop Icons
	
	For additional information on Windows NT 4.0 deployment/unattended installation
	consult the Microsoft Knowledge Base at the following Web site:
	
	  http://www.microsoft.com/kb.
	
	Download the Windows NT 4.0 Deployment Guide from the following Web site:
	
	  http://www.microsoft.com/ntworkstation.
	
	NOTE: The deployment guide is valid for Windows NT Workstation and for Windows NT
	Server.
	
	Additional query words: Unattended Setup
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
