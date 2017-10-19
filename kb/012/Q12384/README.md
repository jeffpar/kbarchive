---
layout: page
title: "Q12384: INFO: More Information About Atoms"
permalink: /kb/012/Q12384/
---

## Q12384: INFO: More Information About Atoms

	Article: Q12384
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatformkbfaq
	Last Modified: 09-JUN-1999
	
	2.x 3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following are questions on Atoms that expand on the description of Atoms:
	
	1. Q. Is it reasonable to use Atoms to store strings of data? A. Yes, you can
	  store constant strings of data using Atoms.
	
	2. Q. Why is there no Atom for a null string? A. There is no Atom for a null
	  string because none is defined.
	
	3. Q. How are Atoms stored? A. Atoms are hashed with bucket chaining used to
	  resolve collisions. The memory for the Atoms is allocated out of the caller's
	  DS. The overhead per Atom is 9 bytes (4 for the memory arena, 5 for the Atom
	  structure).
	
	4. Q. What is the penalty for declaring many Atoms and then only using a few? A.
	  The only consequences of declaring many Atoms and then only using a few are
	  the consumption of memory and the increased chain of collisions.
	
	5. Q. Are there reasonable limits to the number of strings that can be stored as
	  Atoms? A. The absolute limit to the number of strings that can be stored as
	  Atoms is the size of the caller's data segment.
	
	6. Q. Is there any way to share Atoms between two instances of a program? A. To
	  share Atoms between two instances of a program, have a shared library .EXE
	  file with a single data segment that holds the Atoms to be shared. The
	  Windows user interface code is an example of this.
	
	7. Q. Is there a limit to the number of characters in a string that is being
	  stored as an Atom? A. The limit to the number of characters in a string being
	  stored as an Atom currently is 255.
	
	8. Q. Are Atoms movable? A. Atoms are constants, and therefore are not movable.
	
	9. Q. Do Atoms get swapped? A. Atoms do not get swapped.
	
	Additional query words: 2.x 2.00 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbfaq
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
