---
layout: page
title: "Q297461: PRB: Sporadic Access Violations Originate from Inetinfo.exe"
permalink: kb/297/Q297461/
---

## Q297461: PRB: Sporadic Access Violations Originate from Inetinfo.exe

	Article: Q297461
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Access violations may sporadically occur within the Inetinfo.exe process. The
	stack may resemble the following:
	
	  ChildEBP RetAddr  Args to Child<BR/>
	  028cf318 77f02a3a 00070000 00000000 00000001 ntdll!RtlFreeHeap+0x2a<BR/>
	  028cf35c 685990b7 00000001 77e12b5a 00000001 KERNEL32!LocalFree+0x3f<BR/>
	  028cf364 77e12b5a 00000001 028cf3a8 0007f8ce INFOCOMM!INetpMemoryFree+0xa<BR/>
	  028cf37c 77e1d237 028cfa9c 00000001 685ac342 RPCRT4!NdrPointerFree+0x69<BR/>
	  028cf3a8 77e13a1c 028cfa9c 0007fb7c 685ac342 RPCRT4!NdrpEmbeddedRepeatPointerFree+0x83<BR/>
	  028cf3d0 77e489a2 028cfa9c 0007f960 685ac324 RPCRT4!NdrpEmbeddedPointerFree+0x60<BR/>
	  028cf3e8 77e12b46 028cfa9c 0007f960 685ac31e RPCRT4!NdrConformantStructFree+0x34<BR/>
	  028cf408 77e139fc 028cfa9c 0007f960 685ac3a4 RPCRT4!NdrPointerFree+0x55<BR/>
	  028cf430 77e13a46 028cfa9c 00076c18 685ac356 RPCRT4!NdrpEmbeddedPointerFree+0x40<BR/>
	  028cf440 77e12b46 028cfa9c 00076c18 685ac352 RPCRT4!NdrSimpleStructFree+0x1a<BR/>
	  028cf460 77e4d913 028cfa9c 00076c18 685ac3c6 RPCRT4!NdrPointerFree+0x55<BR/>
	  028cf484 77e56129 028cfa9c 685ac146 00000000 RPCRT4!NdrServerFree+0xdc<BR/>
	  028cf494 77e297dd 028cf4f8 77e5276c ffffffff RPCRT4!NdrStubCall+0x1e8<BR/>
	  028cf4f8 77f966a1 028cfc2c 028cf6a4 77f892d0 RPCRT4!_local_unwind2_50+0x1c<BR/>
	  028cfc2c 77e1fc4a 77e5a8e0 ffffffff 028cfc90 ntdll!ExecuteHandler+0x61<BR/>
	  028cfc80 77e1fc4a 77e584d0 00000000 028cfce4 RPCRT4!_except_handler3<BR/>
	  028cffdc 77f3b744 77f3d238 00000000 00000000 RPCRT4!_except_handler3<BR/>
	  ffffffff 00000000 00000000 00000000 00000000 KERNEL32!_except_handler3<BR/>
	
	If the debugger cannot access the symbols for the server or the symbols are not
	installed (such as in a Dr. Watson log), the stack may resemble the following:
	
	  *** ERROR: Symbol file could not be found.  Defaulted to export symbols for kernel32.dll -<BR/>
	  *** ERROR: Symbol file could not be found.  Defaulted to export symbols for infocomm.dll -<BR/>
	  ChildEBP RetAddr  Args to Child<BR/>
	  028cf318 77f02a3a 00070000 00000000 00000001 ntdll!RtlFreeHeap+0x2a<BR/>
	  028cf35c 685990b7 00000001 77e12b5a 00000001 KERNEL32!LocalFree+0x3f<BR/>
	  00000001 00000000 00000000 00000000 00000000 INFOCOMM!InitCommonDlls+0x13b9<BR/>
	
	CAUSE
	=====
	
	The version of the Ntdll.dll file is from a service pack other than the service
	pack that is currently installed on the system. This problem may also occur on
	other system dynamic-link library (DLL) files.
	
	RESOLUTION
	==========
	
	Reapply the current service pack, or upgrade to the latest NT service pack.
	
	Additional query words: inetinfo iis access violation av nt
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
