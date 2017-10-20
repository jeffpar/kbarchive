---
layout: page
title: "Q127072: Installing SMS Client to Drive Other Than Most Free Disk Space"
permalink: /kb/127/Q127072/
---

## Q127072: Installing SMS Client to Drive Other Than Most Free Disk Space

{% raw %}

	Article: Q127072
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup smshowto
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, Microsoft Systems Management Server client software is installed on
	the drive with the most amount of free disk space. This article discusses the
	steps necessary to allow SMS client software (Windows NT, MS-DOS, and OS/2) to
	be installed on a drive other than the drive with the most free disk space.
	
	MORE INFORMATION
	================
	
	For Windows NT and MS-DOS Clients
	---------------------------------
	
	1. Make a backup copy of the SMSLS.BAT file.
	
	2. Use a text editor such as Notepad to modify the SMSLS.BAT file. For login
	  scripts and manual execution of SMSLS.BAT, find the following and add the
	  appropriate switches according to the syntax below.
	
	  Login Scripts:
	
	        CLI_DOS.EXE -pa:/p:%%SMS_UNC%%\ -pa:/d:<another drive>:
	        CLI_NT.EXE -pa:/p:%%SMS_UNC%%\ -pa:/d:<another drive>:
	
	        CLI_DOS.EXE -pa:/d:<another drive>:
	        CLI_NT.EXE -pa:/d:<another drive>:
	
	Manual Execution of SMSLS.BAT:
	
	        CLI_DOS.EXE -pa:/d:<another drive>:
	        CLI_NT.EXE -pa:/d:<another drive>:
	
	For OS/2 Clients
	----------------
	
	1. Make a backup copy of the SMSLS.CMD file.
	
	2. Use a text editor such as Notepad to modify the SMSLS.CMD file. For login
	  scripts and manual execution of SMSLS.CMD, find the following and add the
	  appropriate switches according to the syntax below.
	
	  Login Scripts:
	
	        CLI_OS2.EXE -pa:/d:<another drive>:
	
	Manual Execution of SMSLS.CMD:
	
	        CLI_OS2 /d:<another drive>:
	
	NOTE: If the above additions are not made to the SMSLS.BAT or SMSLS.CMD file,
	only manual execution of the file works. All variables must be proceeded by
	"-pa" (without quotes). It is not possible to combine variables following a
	single "-pa" in the command line.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup smshowto 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
