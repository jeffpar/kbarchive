---
layout: page
title: "Q125919: PC MMTA: Err Msg: Unable To Find File: DYNSCOS2"
permalink: /kb/125/Q125919/
---

## Q125919: PC MMTA: Err Msg: Unable To Find File: DYNSCOS2

{% raw %}

	Article: Q125919
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA, version 3.2 
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Mail Multitasking MTA for OS/2 (MMTA) or the Mail Multitasking
	MTA for Windows NT (NTMMTA) that runs under the OS/2 subsytem, from a Windows NT
	version 3.5 computer, the following error may occur:
	
	  Unable to find file: DYNSCOS2
	
	The error indicates the MMTA is unable to locate its own DLLs.
	
	CAUSE
	=====
	
	When you run the MMTA on OS/2, a specific path for the MMTA .DLL files in
	CONFIG.SYS is required. For example,
	
	  libpath=c:\mailexe\dll.os2
	
	Because Windows NT looks for system environment variables in the registry, the
	MMTA DLL path must be added to the key below:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet
	
	  \Control\Session Manager\Environment
	
	RESOLUTION
	==========
	
	The environment key will have the following entry by default:
	
	  os2libpath:reg_expand_sz:%systemroot%\system32\os2\dll
	
	Copy the DYNCSOS2.DLL to the \system32\os2\dll directory, or append the path to
	where the DLL is located.
	
	The MMTA DLL path can be appended to the end of the statement:
	
	  os2libpath:reg_expand_sz:%systemroot%\system32\os2\dll;c:\mailexe\dll.os2
	
	To append the MMTA DLL path in Windows NT 3.5, do the following:
	
	1. At the Windows NT workstation running the MMTA, open the Control Panel.
	
	2. Select the System applet.
	
	3. Under the System Environment Variables field, select the Os2LibPath=
	  statement.
	
	4. At the bottom of the System window, append the MMTA DLL path to the line in
	  the Value: field. Click the SET button to save.
	
	Once the MMTA DLL path has been added, re-boot the Windows NT workstation to
	implement the change.
	
	MORE INFORMATION
	================
	
	
	REFERENCES
	==========
	
	
	Additional query words: 3.20 Windows NT
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA320 kbMailMMTA350NT
	Version           : :3.2,3.5
	
	=============================================================================
	

{% endraw %}
