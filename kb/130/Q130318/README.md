---
layout: page
title: "Q130318: PC Win WRmt: Err Msg: Mail Driver Could Not Be Deactivated..."
permalink: /kb/130/Q130318/
---

## Q130318: PC Win WRmt: Err Msg: Mail Driver Could Not Be Deactivated...

{% raw %}

	Article: Q130318
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use version 3.2 of Microsoft Mail for Windows, and you attempt to
	switch between the Windows client and the Remote client, the System Selector may
	fail with the following error:
	
	  The mail driver could not be deactivated because the file
	  C:\windows\system\xxxxxxxx.xxx could not be found.
	
	where xxxxxxxx.xxx is one or more of the Mail client components referenced in the
	following section of the FILES.INI file for the currently active client:
	
	  [Transport]
	  FILES=
	
	CAUSE
	=====
	
	The problem occurs because the file that the System Selector is attempting to
	deactivate is in a directory other than WINDOWS\SYSTEM (typically in the WINDOWS
	directory). The System Selector fails because the file is not at the expected
	location.
	
	WORKAROUND
	==========
	
	When you activate a Mail client with the System Selector, the mail client's DLLs
	and other files are moved to the WINDOWS\SYSTEM directory. The previously active
	client's DLL and other files are moved to the WINDOWS\MSMAIL\PROVIDER
	directory.
	
	NOTE: The PROVIDER is a placeholder for the specific mail driver subdirectory
	name. For example, the driver subdirectory for Microsoft Mail is
	WINDOWS\MSMAIL\MSMAIL.
	
	For the System Selector to complete the procedure properly, Windows should be
	invoked from the drive on which it is installed. If the client has invoked
	Windows from a batch file that does not execute Windows from the local drive and
	directory where Windows is installed, this procedure may fail. If a batch file
	is being utilized to invoke Windows, the user should ensure that the batch file
	makes this drive and directory active when executing WIN.COM.
	
	For example, if the following batch file commands are executed to start Windows,
	the System Selector may copy files to the WINDOWS directory instead of
	WINDOWS\SYSTEM, which would result in the above stated error condition:
	
	WRONG.BAT
	---------
	
	F:Login
	C:\WINDOWS\WIN
	
	The following batch file would execute the procedure correctly:
	
	RIGHT.BAT
	---------
	
	F:Login
	C:
	CD WINDOWS
	WIN
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q119415 PC WRmt: How the System Selector Works
	
	
	Additional query words: 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
