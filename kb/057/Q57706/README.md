---
layout: page
title: "Q57706: LINK Uses Library Sequence to Resolve External References"
permalink: /kb/057/Q57706/
---

## Q57706: LINK Uses Library Sequence to Resolve External References

{% raw %}

	Article: Q57706
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:2.x,3.x,4.x,5.0x,5.1x,5.2x,5.3x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 2.x, 3.x, 4.x, 5.0x, 5.1x, 5.2x, 5.3x, 5.5, 5.6 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "MS-DOS Encyclopedia" (Microsoft Press) includes the following statement on
	pages 407 and 408:
	
	  When a public symbol required to resolve an external reference is declared
	  more than once among the object modules in the input libraries, LINK uses the
	  first object module that contains the public symbol. This means that the
	  actual executable code or data associated with a particular external
	  reference can be varied by changing the order in which LINK processes its
	  input libraries...
	
	  Each individual library is searched repeatedly (from first library to last, in
	  the sequence in which they are input to LINK) until no further external
	  references can be resolved.
	
	The text below provides additional information about this process.
	
	MORE INFORMATION
	================
	
	As an example, consider the application illustrated by the diagram below:
	
	  Module MAIN   Library A     Library B1    Library C     Library B2
	  +---------+  +----------+  +----------+  +----------+  +----------+
	  | calls A |  | contains |  | contains |  | contains |  | contains |
	  +---------+  |    A,    |  |    B     |  |    C,    |  |    B     |
	               | calls  C |  +----------+  | calls  B |  +----------+
	               +----------+                +----------+
	
	Microsoft LINK determines which copy of Module B the application uses depending
	on the sequence in which the user specifies the libraries on the linker command
	line. For example, calling the linker with the following command line selects
	Module B from Library B2:
	
	  LINK MAIN,,,A B1 C B2;
	
	The linker searches Library C first. If it cannot resolve the reference, it
	continues on to search Library B2. If it still cannot resolve the reference, it
	returns only then to search Library A and Library B1 to finally resolve the
	reference.
	
	For a slightly more complex situation, consider the case in which Library
	contains Module A and Module B, as the diagram below illustrates:
	
	  Module MAIN   Library A    (remove B1)   Library C     Library B2
	  +---------+  +----------+               +----------+  +----------+
	  | calls A |  | contains |               | contains |  | contains |
	  +---------+  |    A,    |               |    C,    |  |    B     |
	               | calls  C |               | calls  B |  +----------+
	               +----------+               +----------+
	               | contains |
	               |    B     |
	               +----------+
	
	With the following command line, the linker selects Module B from Library A:
	
	  LINK MAIN,,,A C B2;
	
	Even though the linker always resolves module names using the same rules, as the
	cases become more complex, it becomes increasingly difficult to determine which
	version of a module the linker selects. Where feasible, you can avoid this
	problem by placing the appropriate version of a module into an OBJ file instead
	of a library. The linker resolves references in OBJ files before it resolves
	references in libraries.
	
	For more information, please refer to article 20 in the "MS-DOS Encyclopedia,"
	"The Microsoft Object Linker" in the "Object Module Order" section, pages
	703-706. Note, however, that this book is currently out of print.
	
	Additional query words: kbinf 1.08 1.10 2.00 2.01 2.10 2.40 2.41 2.44 2.50 3.00 3.01 3.02 3.04 3.05 3.06 3.51 3.55 3.60 3.61 3.64 3.65 3.69 4.06 4.07 4.10 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.20 5.30 5.31.009 5.50 library search order
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK2xDOSSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK520xDOSSearch kbLINK530xDOSSearch kbLINK50xOS2Search kbLINK550DOS kbLINK560DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:2.x,3.x,4.x,5.0x,5.1x,5.2x,5.3x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	
	=============================================================================
	

{% endraw %}
