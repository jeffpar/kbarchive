---
layout: page
title: "Q134938: BUG: MASM sample SYSINFO Error: L1101 invalid object module"
permalink: /kb/134/Q134938/
---

## Q134938: BUG: MASM sample SYSINFO Error: L1101 invalid object module

{% raw %}

	Article: Q134938
	Product(s): Microsoft Macro Assembler
	Version(s): 6.11,6.11c,6.11d
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.11, 6.11c, 6.11d 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build the MASM WINDLL sample DLL project, SYSINFO generates this linker
	error:
	
	  SYSINFO.OBJ(SYSINFO.ASM) : fatal error L1101: invalid object module
	
	CAUSE
	=====
	
	This is due to a problem in the EXPDEF record in the .obj file created when the
	EXPORT keyword is used to modify the attributes of a PROC.
	
	RESOLUTION
	==========
	
	This problem can be avoided in these MASM versions in one of several ways:
	
	- Do not use the EXPORT keyword. Remove the EXPORT keyword from the SYSINFO.ASM
	  source file (four places). In this sample, the DLL's functions are exported
	  in the .def file, so the EXPORT keyword is not necessary. This is the
	  preferred solution.
	
	-or-
	
	- Use a linker newer than LINK version 5.31.009, such as a linker that ships
	  with a 16-bit Visual C++. The WINDLL sample, which contains the SYSINFO DLL,
	  also contains the SYSDATA application used to call this DLL. To build the
	  application, some portion of the Windows 3.1 SDK is required (the resource
	  compiler) in addition to MASM. The most common place to get this additional
	  requirement is from Visual C++ version 1.0 Professional edition or Visual C++
	  version 1.5x. By placing the Visual C++ Bin directory in the path before the
	  MASM BIN directory, the resource compiler will be found. In addition, the
	  newer linker will be used instead of MASM's linker.
	
	  In this solution, the .obj file still has a problem, but the linker does not
	  stop the build. Instead it gives an L4059 warning that can be ignored.
	  Because the .obj file has the problem in one of the EXPDEF records, the
	  functions still need to be exported via the .def file. That is why the first
	  solution is the preferred method.
	
	-or-
	
	- Run MASM in a MS-DOS box under Windows version 3.1x (16-bit Windows). The
	  problem seems to be sensitive to the environment in which MASM is run. In
	  pure MS-DOS and under Windows NT, MASM version 6.11 always displays this
	  problem, but when it is run in an MS-DOS box under Windows version 3.1x, no
	  error occurs. In the latter case, the .obj file does not contain the error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem does not appear in MASM version 6.11a with this sample. However it
	is likely that a problem still exists creating an EXPDEF record using the EXPORT
	keyword in version 6.11a and the above resolutions will apply.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbMASMsearch kbAudDeveloper kbMASM32bit611c kbMASM32bit611d kbMASM611
	Version           : :6.11,6.11c,6.11d
	
	=============================================================================
	

{% endraw %}
