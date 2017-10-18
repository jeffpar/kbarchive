---
layout: page
title: "Q169898: XGEN: Error Running Rpings&#42;.exe Utilities on WinNT Server 4.0"
permalink: kb/169/Q169898/
---

## Q169898: XGEN: Error Running Rpings&#42;.exe Utilities on WinNT Server 4.0

	Article: Q169898
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run Rpings.exe, Rpings_a.exe, or Rpings_m.exe on Microsoft
	Windows NT Server version 4.0, you may receive the following error message:
	
	  Could not find Rpcdce4.dll
	
	CAUSE
	=====
	
	The Rpcdce4.dll file must be located in the \System32 subdirectory, however the
	Windows NT Server version 3.51 setup does not install the file by default. The
	file is not included on the Microsoft Windows NT Server version 4.0 compact
	disc.
	
	WORKAROUND
	==========
	
	Locate the file on the Windows NT Server version 3.51 compact disc. Copy and
	expand it to the \System32 subdirectory on the local hard disk. You can also
	copy it from another computer that is running Windows NT Server 3.51.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Hardware          : ALPHA MIPS x86
	Issue type        : kbprb
	
	=============================================================================
	
