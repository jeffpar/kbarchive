---
layout: page
title: "Q149279: FIX: Garbage in Input Buffer When InBufferSize &gt; 2048"
permalink: kb/149/Q149279/
---

## Q149279: FIX: Garbage in Input Buffer When InBufferSize &gt; 2048

	Article: Q149279
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400bug kbOSWin98fix kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the MSCOMM control, the contents of the input buffer may be corrupted when
	read by an application. This problem can occur if the InBufferSize property is
	greater than 2048 bytes and if the ParityReplace property holds some value other
	than an empty string ("").
	
	RESOLUTION
	==========
	
	To avoid this problem, reduce the value of the InBufferSize property to
	something less than 2048 bytes. Alternatively, the ParityReplace property can be
	set to "", an empty string. This will disable all parity checking and remove the
	problem. In addition, because Windows NT does not have this problem, utilizing
	NT instead of Windows 95 or Windows 3.x may also be an option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Microsoft Windows
	98.
	
	
	MORE INFORMATION
	================
	
	Due to a problem with the Windows 3.x and Windows 95 operating systems and a
	resulting conflict with the MSCOMM control, when parity checking is enabled,
	characters in the input buffer can be corrupted. The character specified in the
	ParityReplace property ends up replacing characters in the input buffer. For
	example, if ParityReplace is set to "?" (the default), then:
	
	  "Hello VB World" might be replaced by "He?l?o V??W?rld"
	
	In this case, the problem is actually not with the MSCOMM control, but rather
	with Win3.x and Win95 operating systems. The problem does not occur on Windows
	NT.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp400bug kbOSWin98fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
