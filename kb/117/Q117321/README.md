---
layout: page
title: "Q117321: PRB: CodeView Hangs When Debugging DOS-Extended Application"
permalink: /kb/117/Q117321/
---

## Q117321: PRB: CodeView Hangs When Debugging DOS-Extended Application

	Article: Q117321
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using CodeView to run a DOS-extended application that was built using the
	Phar Lap 286|DOS-Extender Lite that ships with Visual C++, the program may
	appear to run properly, but when control returns to CodeView, it may hang. You
	may also receive a message stating system integrity has been violated.
	
	RESOLUTION
	==========
	
	You can develop DOS-extended applications using Visual C++ together with the
	Phar Lap's 286|DOS-Extender Lite, but these applications cannot be directly
	debugged with CodeView. Instead, Phar Lap supplies a full-featured
	286|DOS-Extender SDK and it includes a utility that allows CodeView for Windows
	to debug DOS-extended applications. There is a README file included with the
	286|DOS-Extender Lite that contains more information about the package. For
	support and questions concerning both the 286|DOS Extender Lite and the
	286|DOS-Extender SDK contact Phar Lap Technical Support at (617) 661-1510.
	
	Additional query words: 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
