---
layout: page
title: "Q107692: &quot;Backward Compatibility Hack Enabled&quot; Warning"
permalink: /kb/107/Q107692/
---

## Q107692: &quot;Backward Compatibility Hack Enabled&quot; Warning

	Article: Q107692
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The debug version of Windows that comes with the Windows SDK version 3.1
	produces the following warning message:
	
	  wn Kernel: Backward compatibility hack enabled: xxxxx
	
	This warning message is related to the information in the [Compatibility] section
	in the WIN.INI file that the USER and GDI modules use for backward compatibility
	with Windows 3.0. That is, if your application is compiled for 3.1 only, it will
	not be affected by the [Compatibility] section, and therefore the above warning
	message will not be generated.
	
	Suppose that a Windows-based application is compiled to be compatible with both
	Windows versions 3.0 and 3.1 by using the /30 switch on the Resource Compiler
	(that is, rc /30). Then, the above warning message will be generated only when
	the application's module name matches with one of the module names in the
	[Compatibility] section of the WIN.INI file.
	
	To avoid this warning message, make sure that your application's name is
	different from the ones in the [Compatibility] section, or do not resource
	compile with the /30 switch.
	
	Information regarding the purpose of the [Compatibility] section for a listed
	application in the WIN.INI file and the identity of the application is
	confidential to Microsoft.
	
	Additional query words: ini 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
