---
layout: page
title: "Q239907: Too Many Printers Can Cause Unsuccessful Boot"
permalink: /kb/239/Q239907/
---

## Q239907: Too Many Printers Can Cause Unsuccessful Boot

{% raw %}

	Article: Q239907
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbprint
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you reboot your computer, you may receive the following error message:
	
	  Windows NT could not start because the following file is missing or corrupt:
	
	  \%SystemRoot%\System32\Config\System\Hardware Profile/Last Known Good menu
	
	CAUSE
	=====
	
	This behavior can occur if there are too many printers installed. Based on the
	number and types of drivers involved, the problem may start at around 900
	printers. This issue can occur for local printers as well as for network
	printers, or for a combination of both that exceeds around 900 printers.
	
	Before you install the fix mentioned in the "Resolution" section, the information
	for local printers is saved to the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Printers
	
	The information for network printers is saved to the following key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Providers\LanManPrintServices
	
	Because of this, the System subkey of the HKEY_LOCAL_MACHINE hive in the registry
	may become too large to fit into the allocated memory space and may prevent the
	system from booting.
	For a detailed description of the underlying problem, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q102721 Err Msg: Windows NT Could Not Start Because the Following...
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	NOTE: This hotfix requires you to be running Windows NT 4.0 Service Pack 5 to be
	installed.
	
	The English-language version of this fix comes in two parts.
	
	The fix for the local printers issue is included in Windows NT 4.0 Service Pack 6
	and should have the following file attributes or later:
	
	  Date      Time     File Name       Platform
	  -------------------------------------------
	  03/31/99  08:11p   Localspl.dll    Intel
	  03/31/99  08:09p   Localspl.dll    Alpha
	
	The fix for the network printers issue should have the following file attributes
	or later:
	
	  Date      Time     Size    File name     Platform
	  -------------------------------------------------
	  10/27/99  07:38p   80,144  Win32spl.dll  Intel
	  10/27/99  07:37p  135,952  Win32spl.dll  Alpha
	
	
	NOTE: To activate this fix, you must add the following registry value:
	
	  Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print
	
	  Value Name: UseSoftwareKey
	  Type: DWORD
	  Value: 1
	
	If you use this fix, you need to make this setting before you upgrade to Service
	Pack 6. If you uninstall Service Pack 6, make sure that you are still running
	the fix listed above.
	
	
	
	Windows NT 3.51
	---------------
	
	A hotfix is not available for Windows NT 3.51.
	
	Windows NT 4.0, Terminal Server Edition
	---------------------------------------
	
	There is a separate hotfix that addresses this issue for Terminal Server. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q244135 Too Many Printers Can Cause Unsuccessful Boot
	
	WORKAROUND
	==========
	
	For workarounds for this problem, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q102721 Err Msg: Windows NT Could Not Start Because the Following...
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
