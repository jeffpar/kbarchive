---
layout: page
title: "Q86168: Err Msg: Application Execution Error..No Association Exists"
permalink: /kb/086/Q86168/
---

## Q86168: Err Msg: Application Execution Error..No Association Exists

{% raw %}

	Article: Q86168
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run a non-Windows-based application from Microsoft Windows
	operating system versions 3.0 and 3.1, the following error messages may appear,
	respectively:
	
	  Application Execution Error
	  No association exists for the specified file.
	
	                       OK
	
	  Application Execution Error
	  No application is associated with the specified file.
	  Create an association by using File Manager.
	
	                        OK
	
	CAUSE
	=====
	
	The above error messages may be generated while attempting to run a non-
	Windows-based application if there is an omission in the WIN.INI file. The error
	messages imply that an association can be created for program files. This is
	incorrect, associations cannot be created for program files. Program files, in
	the Windows operating system, have one of the following extensions:
	
	     COM  EXE  BAT  PIF
	
	(PIF stands for program information file. For more information on creating and
	maintaining PIFs, see your "Microsoft Windows User's Guide" or use the Windows
	online Help utility.)
	
	The above error messages may occur not only with non-Windows applications, but
	with any file having one of the above extensions if the file is absent from the
	"Programs=" line in the [Windows] section of the WIN.INI file.
	
	When upgrading from Windows 386 2.x to Windows 3.0, the WIN.INI file may not be
	correctly updated to reflect the addition of "PIF" to the Programs=" line. In
	any case, the "Programs=" line should be updated as follows:
	
	  Programs=COM EXE BAT PIF
	
	If any, or all, of the values for the "Programs=" setting are not present, they
	may be added using a text editor such as Notepad.
	
	Additional query words: 3.10 3.11 3.00 3.00a err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
