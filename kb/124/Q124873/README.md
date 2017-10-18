---
layout: page
title: "Q124873: Disabling System Hard Error Message Dialog Boxes"
permalink: kb/124/Q124873/
---

## Q124873: Disabling System Hard Error Message Dialog Boxes

	Article: Q124873
	Product(s): Microsoft Windows NT
	Version(s): 3.10
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, you cannot configure Windows NT version 3.1 to suppress the display
	of system hard error messages. Under Windows NT version 3.5 and later, system
	hard error messages can be controlled using a Registry entry. This feature is
	available as a hotfix for customers using Windows NT version 3.1.
	
	MORE INFORMATION
	================
	
	To modify the registry entry under Windows NT version 3.5 and later:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Control\Windows\ErrorMode
	
	3. Select the ErrorMode value.
	
	4. From the Edit menu, choose DWORD.
	
	5. Type 0 (zero), 1, or 2, to configure your system to handle system hard error
	  dialog boxes.
	
	The following table defines the three possible values for ErrorMode:
	
	  Value   Result
	  -----   ----------------------------------------------------------------
	
	    0     Errors are serialized and wait for a response.
	
	    1     If the error does not come from the system, then the system
	          continues in normal operating mode. If the error comes from the
	          system, then it is written to the system log; no user
	          intervention is required and dialog boxes are not displayed.
	
	    2     The error is written to the system log; the dialog box is not
	          displayed.
	
	System hard errors are always written to the system log. To run an unattended
	server, use mode 2. The default value is 0.
	
	Although the hotfix implements some of this functionality under Windows NT
	version 3.1, the automatic logging of system hard errors to the system log could
	not be implemented. If you use this hotfix, hard error dialog boxes will be
	stopped, but the record of the error condition will not be written to the system
	log. As a result, you will not be able to tell that an error occurred. For this
	reason, Microsoft does not recommend installing this hotfix unless it is
	absolutely necessary.
	
	For more information on what types of errors are controlled by the ErrorMode key,
	see the Windows NT 3.5 SDK SetErrorMode documentation. The Windows NT 3.5 SDK
	documentation explains the error types that are classified as hard errors. The
	ErrorMode registry value controls the same types of dialog boxes as
	SetErrorMode, and overrides any hard error settings made by applications calling
	SetErrorMode.
	
	NOTE: Internal components that do not use the internal hard error routines to
	display dialog boxes are not affected by this key.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1. A fix to
	this problem is available, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix. This problem has been
	corrected in Windows NT version 3.5.
	
	
	Additional query words: 3.10 prodnt popup popups
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10
	
	=============================================================================
	
