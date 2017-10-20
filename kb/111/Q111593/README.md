---
layout: page
title: "Q111593: BUG: DPMI Function 0203h Does Not Report Error"
permalink: /kb/111/Q111593/
---

## Q111593: BUG: DPMI Function 0203h Does Not Report Error

{% raw %}

	Article: Q111593
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the MS-DOS Protected Mode Interface (DPMI) function 0203h (set processor
	exception handler vector) to set an exception handler does not report an error
	(carry flag set) if the selector:offset pair is invalid.
	
	RESOLUTION
	==========
	
	The pointer to the exception handler must be validated with other means if it is
	necessary to check the pointer for validity. Other means of checking a code
	pointer for validity include using IsBadCodePtr() or the LAR (load access
	rights) protected-mode CPU instruction.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The problem with DPMI function 0203h can be illustrated with the following code
	segment:
	
	     mov     edx, dword ptr BogusOffset
	     mov     cx, word ptr BogusSelector
	     ; Set Processor Exception Handler Vector
	     mov     ax, 203h
	     mov     bx, 7
	     int     31h
	     jc      Error       ; never jumps to Error
	
	REFERENCES
	==========
	
	The IsBadCodePtr() function is documented in the Windows 3.1 SDK "Programmer's
	Reference, Volume 2: Functions" manual. The LAR instruction is documented in the
	Intel 386 or 486 "Programmer's Reference" or in "Microsoft's 80386/80486
	Programming Guide" by Microsoft Press.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
