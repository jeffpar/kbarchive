---
layout: page
title: "Q163785: FIX: &quot;Error Instantiating Application Object&quot; on Windows NT"
permalink: /kb/163/Q163785/
---

## Q163785: FIX: &quot;Error Instantiating Application Object&quot; on Windows NT

{% raw %}

	Article: Q163785
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbsetup kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error message, "Error Initializing Application Object" or "Error
	Instantiating Application Object," may occur when starting Visual FoxPro on a
	Windows NT machine (Workstation or Server). The error will occur if you have
	logged onto NT without administrator rights.
	
	CAUSE
	=====
	
	When you install Visual FoxPro or an EXE created with Visual FoxPro on Windows
	NT, you must be an administrator of that machine. If, after the initial
	installation, you log on as a user without administrator rights, Visual FoxPro
	will look in the registry for specific keys but will not find them because the
	administrator's registry keys will not be copied to all types of users on the
	machine. When Visual FoxPro does not find the registry keys, it displays the
	error message:
	
	  Error Instantiating Application Object
	
	  -or-
	
	  Error Initializing Application Object
	
	RESOLUTION
	==========
	
	To allow other users to log on to the Windows NT machine and gain access to
	Visual FoxPro:
	
	1. Log on as Administrator.
	
	2. From the Start menu, select Programs, choose Administative Tools then click
	  User domain to get to the Guest User account.
	
	3. Move the Guest user account into the Administrators group temporarily.
	
	4. Move the Guest user account into the Administrators group temporarily.
	
	5. Log on as the Guest user.
	
	6. Install Visual FoxPro or the EXE while logged on as the Guest user.
	
	7. Run Visual FoxPro. From the Tools menu, select Options, and then choose the
	  "Set As Default" button.
	
	8. Log in as the Administrator and remove "Guest" from the Administrators group.
	
	This allows all new users to the computer to get the Visual FoxPro Icons and
	correct registry settings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
