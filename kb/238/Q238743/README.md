---
layout: page
title: "Q238743: Err Msg: &quot;Setup Needs the File Msie&#42;.exe from CD Internet...&quot;"
permalink: /kb/238/Q238743/
---

## Q238743: Err Msg: &quot;Setup Needs the File Msie&#42;.exe from CD Internet...&quot;

{% raw %}

	Article: Q238743
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During Setup for the Microsoft Zero Administration Kit (ZAK) for Windows 95, the
	following Insert CD dialog box is displayed:
	
	  Setup needs the file 'Msie*.exe' from CD 'Internet Explorer CD'. This CD is
	  not currently in the drive.
	
	If you click Cancel, Setup does not finish.
	
	CAUSE
	=====
	
	This behavior occurs because ZAK is designed to detect and install Microsoft
	Internet Explorer version 3.x.
	
	RESOLUTION
	==========
	
	To work around this issue:
	
	1. Create a file named Msie3.exe and place it on the hard disk.
	
	  NOTE: You can create this file using Notepad or a similar program. Make sure
	  that .txt is not added to the end of the file name.
	
	2. Select this file when you are prompted to do so, and Setup continues
	  normally.
	
	3. After ZAK Setup is finished, replace the Msie3.exe file in the
	  C:\Zak95\Setup\Ieak folder with the current Internet Explorer Setup files
	  (for example, the IE4Setup.exe file downloaded from the Microsoft Web site or
	  the Internet Explorer Setup files created using the Microsoft Internet
	  Explorer Administration Kit).
	
	4. Modify the [Office] section in the Msbatch.inf file to reflect the correct
	  Setup string.
	
	Original string:
	
	  [Office]
	  HKLM,Software\Microsoft\Windows\CurrentVersion\RunOnce,Ieak,,
	  "s:\ieak\MSIE3.EXE /q /r:n"
	
	New string:
	
	  [Office]
	  HKLM,Software\Microsoft\Windows\CurrentVersion\RunOnce,Ieak,,
	  "s:\ieak\IE4SETUP.EXE /q /r:n"
	
	5. Continue the installation.
	
	MORE INFORMATION
	================
	
	For additional information about Microsoft Internet Explorer Administration Kit,
	please click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q191920 Contents of the IEAK 4.01a Readme.txt File
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
