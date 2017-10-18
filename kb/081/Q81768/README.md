---
layout: page
title: "Q81768: Windows Err Msg: !Error Building WIN.COM...(From MS-DOS Setup)"
permalink: kb/081/Q81768/
---

## Q81768: Windows Err Msg: !Error Building WIN.COM...(From MS-DOS Setup)

	Article: Q81768
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Windows Setup from MS-DOS and attempting to change display drivers,
	you may receive the following message:
	
	  !ERROR BUILDING WIN.COM!
	  F3 = Exit
	
	There is no way to bypass this message.
	
	CAUSE
	=====
	
	This message is due to Setup's inability to alter the WIN.COM file to reflect
	the change in display drivers.
	
	WORKAROUND
	==========
	
	Use the MS-DOS command ATTRIB or a third-party utility program to remove any
	read-only attributes from WIN.COM. This allows Setup to modify WIN.COM and make
	the requested change. The only attribute WIN.COM should have is "A" (that is,
	Archive).
	
	MORE INFORMATION
	================
	
	This information applies to Microsoft Windows versions 3.0 and 3.0a; it does not
	apply to later versions of Windows.
	
	Additional query words: 3.0 3.0a 3.00 3.00a errmsg err msg error message
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
