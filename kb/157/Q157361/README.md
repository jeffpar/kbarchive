---
layout: page
title: "Q157361: INFO: How to Automatically Log On After an Unattended Setup"
permalink: /kb/157/Q157361/
---

## Q157361: INFO: How to Automatically Log On After an Unattended Setup

{% raw %}

	Article: Q157361
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBKkbfaq
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to automatically log on to a Windows NT 4.0- based
	computer after an unattended Setup. By default, Setup restarts the computer and
	waits for user input at the Press CTRL+ALT+DELETE To Log On dialog box after an
	unattended Setup. The method in this article allows Windows NT 4.0 to
	automatically process the logon using the Administrator account to provide
	access to the desktop without user intervention. Note that this works only on
	the initial logon after Windows NT 4.0 Setup is finished.
	
	MORE INFORMATION
	================
	
	To enable automatic logon during unattended Setup, follow these steps:
	
	1. Create a new share on a network server and then copy the i386 folder (or
	  appropriate platform folder) from the Windows NT 4.0 CD-ROM to the new share.
	
	2. Using any text editor (such as Notepad), add the following entry to the
	  [Unattended] section of the Unattend.txt file:
	
	        OEMPreinstall = Yes
	
	3. Add the following entry to the [GUIUnattended] section of the Unattend.txt
	  file:
	
	        OEMBlankAdminPassword = 1
	
	  For additional information about parameters for the Unattend.txt file, please
	  see the following article in the Microsoft Knowledge Base:
	
	  Q155197 Unattended Setup Parameters for Unattend.txt File
	
	4. Save and then close the Unattend.txt file.
	
	5. Create a new folder named $OEM$ in the share you created in step 1.
	
	6. In the $OEM$ folder, create a file with the following entries. Save the file
	  as <filename>.inf, where <filename> is your choice of names, for
	  example, Mychange.inf.
	
	        [Version]
	        Signature = "$Windows NT$"
	
	        [DefaultInstall]
	        AddReg = AddReg
	
	        [AddReg]
	        HKLM,"SOFTWARE\Microsoft\Windows NT\CurrentVersion
	           \Winlogon","DefaultUserName",,"administrator"
	        HKLM,"SOFTWARE\Microsoft\Windows NT\CurrentVersion
	           \Winlogon","DefaultPassword",,""
	        HKLM,"SOFTWARE\Microsoft\Windows NT\CurrentVersion
	           \Winlogon","AutoAdminLogon",,"1"
	
	  NOTE: These lines should be continuous. They were wrapped and indented for
	  ease of readability.
	
	  The below line is used to control the default Domain/Machine name to logon
	  too. If using unattended setup to JOIN a domain. The default is the domain
	  name. Add this line if you want to logon to the machine name, for example,
	  machine name is MACHINENAME:
	
	        HKLM,"SOFTWARE\Microsoft\Windows
	           NT\CurrentVersion\Winlogon","DefaultDomainName",,"Machinename"
	
	7. In the $OEM$ folder, create a file named Cmdlines.txt. This file should
	  contain the following entries including the quotation marks surrounding the
	  entry:
	
	        [Commands]
	        "rundll32 setupapi,InstallHinfSection DefaultInstall 128
	           .\<filename>.inf"
	
	  NOTE: This line should be continuous. It was wrapped and indented for ease of
	  readability. The .\ stands for current directory and there should be a space
	  after 128.
	
	  Make sure to replace <filename> in this line with the name of the file
	  you created in step 6.
	
	Additional query words: deployment sysdiff unattend Unattended Setup Install
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
