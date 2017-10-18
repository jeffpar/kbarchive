---
layout: page
title: "Q201764: SMS: Windows NT 4.0 Service Pack 3 Upgrade Fails"
permalink: kb/201/Q201764/
---

## Q201764: SMS: Windows NT 4.0 Service Pack 3 Upgrade Fails

	Article: Q201764
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbSoftwareDist
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Package Command Manager might not complete the Windows NT 4.0 Service Pack 3
	upgrade successfully if some system files on the client are newer than the
	source package.
	
	MORE INFORMATION
	================
	
	PACMAN (PCM service log) on the client will show the following:
	
	Job still running............~   $$<SMS_PACKAGE_COMMAND_MANAGER_NT><Thu Aug 27 07:29:22 1998~><thread=8D>
	Job still running............~   $$<SMS_PACKAGE_COMMAND_MANAGER_NT><Thu Aug 27 07:29:25 1998~><thread=8D>
	Job still running............~   $$<SMS_PACKAGE_COMMAND_MANAGER_NT><Thu
	
	The log will display the same lines over and over.
	
	This can occur when you have updated a .dll file from an application such as
	Internet Explorer or possibly added an updated network card driver from the
	hardware manufacturer. The latest driver is already on the system and Service
	Pack 3 is trying to prompt to overwrite the file.
	
	When you attempt to manually upgrade to Windows NT 4.0 Service Pack 3, you
	receive the following message:
	
	  Source D:\i386\filename.exe
	
	  Target C:\winnt\system32\filename.exe
	
	  The target file exists and is newer than the source.
	
	  Overwrite the newer file?
	
	  No    No to All   Yes
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. A
	supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q175980 Error Msg Applying Service Pack 3 in Unattended Mode
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
