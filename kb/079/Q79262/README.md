---
layout: page
title: "Q79262: Windows Err Msg: Path Not Found (with Novell Network)"
permalink: /kb/079/Q79262/
---

## Q79262: Windows Err Msg: Path Not Found (with Novell Network)

{% raw %}

	Article: Q79262
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use Windows on a Novell network and the No Network Installed option was
	selected during the Windows installation, the path statement will be lost for
	virtual machines (VMs). Typing
	
	  path
	
	at the command line from a virtual machine returns the error message "Path Not
	Found."
	
	WORKAROUND
	==========
	
	To correct this problem, run the Windows Setup program from the WINDOWS
	directory or select the Windows Setup icon in the Main program group and change
	system settings to Novell NetWare 2.10 Or Above, Or Novell NetWare 386.
	
	Additional query words: 2.11 2.2 3.11 3.00 3.00a err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
