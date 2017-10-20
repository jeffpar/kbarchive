---
layout: page
title: "Q188220: NTOP May Cause Win95 Clients To Fail When Using CMAK"
permalink: /kb/188/Q188220/
---

## Q188220: NTOP May Cause Win95 Clients To Fail When Using CMAK

{% raw %}

	Article: Q188220
	Product(s): Internet Information Server
	Version(s): WINDOWS:95; winnt:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT version 4.0 Option Pack 
	- Microsoft Internet Authentication Services for Remote Access Service version 1.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a localized version of the Microsoft Windows NT Option Pack NTOP,
	you may cause Windows 95 computers to get load errors when trying to run
	Explorer if a CMAK profile has been downloaded to the client machines and
	installed.
	
	CAUSE
	=====
	
	The Windows NT Option Pack comes with Internet Connection services for RAS. This
	allows administrators to create customized connection scripts for their clients.
	This is done through a self-extracting installer that installs the profile
	manager and dependent files. One of these dependent files is Comctl32.dll. The
	profile, when downloaded and installed to the client, overwrites a Windows 95
	compliant version of Comctl32.dll with a Windows NT specific version. This
	causes load errors when you try to run Windows 95 Explorer and other
	Comctl32.dll dependent applications.
	
	RESOLUTION
	==========
	
	This issue will be resolved in the next update to the Windows NT Option Pack.
	You can also update the Windows NT Server that has the Windows NT Option Pack
	installed with the latest version of Comctl32.dll located at:
	
	  http://www.microsoft.com/msdn/downloads/files/40Comupd.htm
	
	The default directory to make the file update is:
	
	  \Program Files\CMAK\cm32\jpn\ (comctl32.dll is located in this directory)
	
	There is also a hotfix available. The file size and date is below:
	
	  03/30/97  03:00p               379,152 Comctl32.dll   (i386)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Windows NT Option
	Pack version 1.0 (localized versions only, U.S versions are not effected).
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWin95search kbZNotKeyword6 kbZNotKeyword3 kbWinNT400OptionPack kbIASRAS kbIASSearch
	Version           : WINDOWS:95; winnt:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
