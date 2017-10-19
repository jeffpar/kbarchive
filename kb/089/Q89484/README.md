---
layout: page
title: "Q89484: GP Fault in WFWG Mail May Suppress Password"
permalink: /kb/089/Q89484/
---

## Q89484: GP Fault in WFWG Mail May Suppress Password

	Article: Q89484
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you receive a general protection (GP) fault in Windows for Workgroups Mail,
	neither Mail nor Schedule+ will prompt you for a password until Windows for
	Workgroups is restarted. This does not apply to Microsoft Mail version 3.0 or
	Schedule+ version 1.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1 and version 3.11. We are researching this problem and will post new
	information here as it becomes available.
	
	MORE INFORMATION
	================
	
	You can reproduce the problem by adding a custom command that calls an
	inappropriate dynamically linked library (.DLL) in the MSMAIL.INI file in Mail
	for Workgroups.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Exit and sign out from Mail.
	
	2. Edit the MSMAIL.INI file in the WINDOWS directory.
	
	3. Add the following line to the [Custom Commands] section. This adds the Icon
	  option to the File menu, but references the MORICONS.DLL file incorrectly:
	
	  Icon=3.0;File;$Icon;13;moricons.dll;1;;
	
	  (MORICONS.DLL can be replaced with another DLL such as PBRUSH.DLL; either will
	  cause a GP fault).
	
	4. Save the MSMAIL.INI file, then restart Mail.
	
	5. From the File menu, choose Icon. A GP fault appears. Choose the Close button,
	  then choose the OK button.
	
	6. Mail stops at this point.
	
	7. Restart Mail. (No password is required.)
	
	8. From the File menu, choose Exit and Sign Out.
	
	9. Restart Mail. (No password is required.)
	
	This continues until Windows for Workgroups is restarted.
	
	Additional query words: 3.10 3.11 msmail gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
