---
layout: page
title: "Q90386: After WFWG Setup, Microsoft C7 Compiler Doesn't Work"
permalink: /kb/090/Q90386/
---

## Q90386: After WFWG Setup, Microsoft C7 Compiler Doesn't Work

{% raw %}

	Article: Q90386
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install Microsoft Windows for Workgroups, you may need to reinstall
	the Microsoft C7 compiler.
	
	The C7 compiler replaces some of Microsoft Windows files with different versions.
	The Windows for Workgroups Setup program, in turn, updates these files, which
	may cause the application to fail.
	
	MORE INFORMATION
	================
	
	Possible Workaround
	-------------------
	
	Before you attempt a total reinstall, follow these steps (this procedure may
	allow you to use C7 without reinstalling the program):
	
	1. Add the following lines to the [386enh] section of your SYSTEM.INI file:
	
	        DEVICE=<drive:>\C700\BIN\VPFD.386
	        DEVICE=<drive:>\C700\BIN\CVW1.386
	        DEVICE=<drive:>\C700\BIN\VMB.386
	
	  where <drive:> specifies the drive where you have C7 installed.
	
	2. Verify that the [386enh] section of your SYSTEM.INI file contains the
	  following line:
	
	        DEVICE=*VMCPD
	
	  If not, add this line as well.
	
	3. Save your changes, then reboot your system.
	
	If this procedure doesn't allow you to use C7, then you need to reinstall the
	application.
	
	Additional query words: 3.10 DLL
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
