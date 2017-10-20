---
layout: page
title: "Q149983: Serial Mouse Not Installed; Err Msg: STOP 0x0000001E"
permalink: /kb/149/Q149983/
---

## Q149983: Serial Mouse Not Installed; Err Msg: STOP 0x0000001E

{% raw %}

	Article: Q149983
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you change the OverrideHardwareBitstring in the registry, the serial mouse
	is not installed during the boot process and the following STOP error message
	appears in Windows NT:
	
	  STOP: 0x0000001E : (C0000005, 80118C84, 00000000, 0061008C)
	  KMODE_EXCEPTION_NOT_HANDLED
	
	NOTE: The parameters may not all be exactly the same.
	
	CAUSE
	=====
	
	Microsoft Knowledge Base article Q102990 defines the OverrideHardwareBitstring
	as follows:
	
	  OverrideHardwareBitstring REG_DWORD 0x1 or 0x2 This entry is not usually
	  present. When present, it specifies that regardless of whether it was
	  actually detected, a serial mouse is present on the system. Add this value to
	  tell the driver to assume the serial mouse is on COM1 (specified by the value
	  0x1) or COM2 (specified by the value 0x2). This entry is useful if the serial
	  mouse has not been automatically detected.
	
	Windows NT expected the mouse to be present.
	
	
	WORKAROUND
	==========
	
	Remove the OverrideHardwareBitstring from the registry, or make sure the mouse
	is connected to the computer when Windows NT starts.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT. Microsoft cannot
	guarantee that problems resulting from the incorrect use of Registry Editor can
	be solved.
	
	Use Registry Editor at your own risk.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 3.50 3.51 prodnt trap 0x1E ntblue ntregistry
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
