---
layout: page
title: "Q77653: PRB: Bitfield Breakpoint Halts Execution on Neighboring Fields"
permalink: /kb/077/Q77653/
---

## Q77653: PRB: Bitfield Breakpoint Halts Execution on Neighboring Fields

{% raw %}

	Article: Q77653
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCodeView kbDebug kbide kbVC
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ for Windows* use 1699 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225 
	   - Microsoft CodeView for MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a break expression specifies a bit field, the debugger does not halt
	execution at that breakpoint.
	
	CAUSE
	=====
	
	The byte is the smallest addressable unit in the debugger; it does not support
	specifying an individual bitfield in a breakpoint. The larger unit that contains
	the bitfield determines when execution halts.
	
	MORE INFORMATION
	================
	
	Consider the sample code below. In Win16 (Windows), x0 through x7 are stored in
	the same memory unit (unsigned int), but x8 is stored in the next; in Win32
	(Windows NT), x0 through x8 are all stored in the same memory unit. If you set a
	breakpoint to halt execution when x0 changes, execution in Win16 halts on each
	of the first three statements in main() because each one modifies the same unit;
	execution in Win32 halts on all four statements of main() for the same reason.
	
	Sample Code
	-----------
	
	     /*
	      * Compile options needed: /Zi /Od
	      */ 
	
	     typedef struct
	     {
	        unsigned int x0:2;
	        unsigned int x1:2;
	        unsigned int x2:2;
	        unsigned int x3:2;
	        unsigned int x4:2;
	        unsigned int x5:2;
	        unsigned int x6:2;
	        unsigned int x7:2;
	        unsigned int x8:2;
	     } node;
	
	     node NodeVar;
	
	     void main(void)
	     {
	        NodeVar.x0++;
	        NodeVar.x1++;
	        NodeVar.x3++;
	        NodeVar.x8++;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCodeView kbDebug kbide kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
