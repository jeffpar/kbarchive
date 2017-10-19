---
layout: page
title: "Q103036: BUG: AddAtom Causes Divide by Zero Error"
permalink: /kb/103/Q103036/
---

## Q103036: BUG: AddAtom Causes Divide by Zero Error

	Article: Q103036
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling the AddAtom function in the Windows 3.x environment with a string that
	begins with the pound (#) character causes the system to display the following
	error message in a system modal dialog:
	
	  Application Error
	
	  integer divide by 0
	
	This error occurs if the first AddAtom call in the application passes a string
	containing a # as the first character, and passes non-numeric characters in the
	rest of the string. For example, the first call to AddAtom with the string
	"#string" will cause the error to occur.
	
	RESOLUTION
	==========
	
	If it is necessary to have atom strings beginning with the # character, first
	call AddAtom with a false string that contains no # characters. Alternatively,
	call InitAtomTable before adding the first atom string beginning with the #
	character.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows versions 3.0 and 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Atoms with names begin with the # character are strongly discouraged. The #
	character serves a special purpose for atoms. If the string that is passed to
	AddAtom has the form "#1234", AddAtom returns an integer atom whose value is the
	16-bit value representation of the decimal number specified in the string. If
	the decimal value specified is 0 (zero) or a value in the range 0xC000 through
	0xFFFF, the return value is zero, indicating an error.
	
	Sample Code
	-----------
	
	  /* Compile options needed:  /Zp /GA or /GD or /Gw */ 
	
	  // errant code
	  {
	   ATOM at;
	
	   at = AddAtom("#string");     // causes error to occur
	
	  }
	
	  // corrected code
	  {
	   ATOM at;
	
	   InitAddTable(17);
	
	   // or call AddAtom with a false string
	
	   AddAtom("false");
	
	   at = AddAtom("#string");     // no error occurs
	
	  }
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
