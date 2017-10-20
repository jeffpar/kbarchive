---
layout: page
title: "Q107062: PC WRmt: Microsoft Mail and SHARE.EXE"
permalink: /kb/107/Q107062/
---

## Q107062: PC WRmt: Microsoft Mail and SHARE.EXE

{% raw %}

	Article: Q107062
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With version 3.2 of Microsoft Mail Remote for Windows, if your Mail message file
	(MMF) is on your local hard disk, you must run SHARE.EXE before you start
	Microsoft Windows.
	
	If this is your first installation of any Microsoft Mail product and your .MMF
	file is on your local hard disk, you need to run SHARE.EXE, start Windows, and
	then run the Mail Remote Setup program (SETUP.EXE) to install Microsoft Mail
	Remote for Windows.
	
	If SHARE.EXE is not loaded before Windows is loaded, Mail will not start, and the
	file that contains your messages cannot be accessed by other mail- related
	applications.
	
	MORE INFORMATION
	================
	
	SHARE.EXE enables each program that accesses your message file to lock portions
	of the file and protect the other mail-related applications from overwriting
	information in the file.
	
	If you are running the version of Mail shipped with Microsoft Windows for
	Workgroups version 3.1 in 386-enhanced mode, VSHARE.386 is loaded automatically
	and SHARE.EXE is not needed.
	
	The Setup program installs SHARE.EXE in your AUTOEXEC.BAT file if it detects that
	it is needed. You need to restart your computer in order for the change to take
	effect.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
