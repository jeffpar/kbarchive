---
layout: page
title: "Q147314: GlobalFlags for Windows NT 3.51"
permalink: /kb/147/Q147314/
---

## Q147314: GlobalFlags for Windows NT 3.51

	Article: Q147314
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	  FLG_STOP_ON_EXCEPTION           0x00000001
	  FLG_SHOW_LDR_SNAPS              0x00000002
	  FLG_DEBUG_INITIAL_COMMAND       0x00000004
	  FLG_STOP_ON_HUNG_GUI            0x00000008
	  FLG_HEAP_ENABLE_TAIL_CHECK      0x00000010
	  FLG_HEAP_ENABLE_FREE_CHECK      0x00000020
	  FLG_HEAP_VALIDATE_PARAMETERS    0x00000040
	  FLG_HEAP_VALIDATE_ALL           0x00000080
	  FLG_POOL_ENABLE_TAIL_CHECK      0x00000100
	  FLG_POOL_ENABLE_FREE_CHECK      0x00000200
	  FLG_POOL_ENABLE_TAGGING         0x00000400
	  FLG_HEAP_ENABLE_TAGGING         0x00000800
	  FLG_USER_STACK_TRACE_DB         0x00001000
	  FLG_KERNEL_STACK_TRACE_DB       0x00002000
	  FLG_MAINTAIN_OBJECT_TYPELIST    0x00004000
	  FLG_HEAP_ENABLE_TAG_BY_DLL      0x00008000
	  FLG_IGNORE_DEBUG_PRIV           0x00010000
	  FLG_ENABLE_CSRDEBUG             0x00020000
	  FLG_ENABLE_KDEBUG_SYMBOL_LOAD   0x00040000
	  FLG_DISABLE_PAGE_KERNEL_STACKS  0x00080000
	  FLG_HEAP_ENABLE_CALL_TRACING    0x00100000
	  FLG_HEAP_DISABLE_COALESCING     0x00200000
	  FLG_VALID_BITS                  0x003FFFFF
	
	These values can be set with the Registry Editor (REGEDT32.EXE) in the
	HKEY_LOCAL_MACHINE subtree in the following key:
	
	\SYSTEM\CurrentControlSet\Control\Session Manager\ 
	
	     GlobalFlag     REG_DWORD
	
	MORE INFORMATION
	================
	
	This information can also be derived from the Windows NT SDK.
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	
	=============================================================================
	
