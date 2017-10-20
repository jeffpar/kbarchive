---
layout: page
title: "Q66462: C Run-time Functions Can Use Far Pointers in Medium Model"
permalink: /kb/066/Q66462/
---

## Q66462: C Run-time Functions Can Use Far Pointers in Medium Model

{% raw %}

	Article: Q66462
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Far pointers to data can be used in calls to the C Run-time library routines
	written using the medium model. This is often necessary because many
	Windows-based applications are written using the medium model, but must pass far
	data pointers to the medium model C run-time library routines. Unless
	precautions are taken, passing far pointers to medium model C Run-time routines
	will fail.
	
	To use far pointers in calls to medium model C Run-time routines, the
	model-independent version of the C Run-time functions must be explicitly
	specified. A model-independent version of a C Run-time function requires
	specification of the size of the data pointers required (NEAR or FAR) for both
	function parameters and return values.
	
	Not all C Run-time routines have model-independent versions. To determine if a
	routine has a model-independent version, please consult the header file
	associated with the routine or the C Run-time source manual.
	
	MORE INFORMATION
	================
	
	When an application is compiled using the medium memory model, the C compiler
	assumes that the application will have one data segment and multiple code
	segments. Because the application has only one data segment, all pointers to
	data are assumed to be near pointers. Therefore, when the compiler encounters a
	C Run-time function in the source code, it automatically assumes that any
	pointer parameters contain near pointers. The compiler uses the appropriate
	medium model declaration for the run-time functions. This is appropriate for
	NEAR data items, but many Windows API functions require or return FAR pointers,
	such as GlobalLock().
	
	To override the compiler's assumptions specify the model-independent version of
	the desired routine in the application source code. The header file associated
	with the routine or the C Run-time source manual can be used to determine which
	C Run-time routines have model-independent versions. Typically, the
	model-independent versions of C Run-time functions are preceded by an "_n" or an
	"_f". For example, strdup(), a memory model-dependent function, has two
	model-independent derivatives: _nstrdup() for NEAR pointers and _fstrdup() for
	FAR pointers.
	
	When using the model-independent versions of the C Run-time routines, the
	compiler will not assume that the application's data is near. Thus, far pointers
	can be used in medium model applications where near pointers would normally be
	used.
	
	Unfortunately, not all C Run-time routines offer this flexibility. If the routine
	does not have a model-independent version, two options are available:
	
	1. Write a model-independent routine that offers the same functionality as the C
	  Run-time routine.
	
	2. Copy the data into the default data segment so that near pointers, and the
	  standard C Run-time routines, can be used.
	
	One C Run-time routine that demonstrates model independence is strncpy(). If the
	application source code includes a line similar to the following
	
	     Char_ptr = strncpy(String1, Const_String2, Count);
	
	the compiler will use the default declaration for the routine. That declaration
	is found in the header file and resembles the following:
	
	     char *strncpy(char *string1, const char *string2, size_t);
	
	In this situation, the data must be in the default data segment because the
	routine will use the DS register when referencing both strings.
	
	In the same medium model applications, if one or both of the strings are in a
	data segment other than the default data segment, modify the same source line as
	follows:
	
	     Char_ptr = _fstrncpy(String1, Const_String2, Count);
	
	In this case, the compiler will use the following function declaration
	
	     char _far * _far _fstrncpy(char _far *string1,
	                                const char _far*strings,
	                                size_t count);
	
	and the application will then properly access the data in the far segments.
	
	NOTE: When using the same C Run-time routine in a large model application, the
	default function declaration will be the model-independent version. Thus, in the
	example above, the compiler will replace the call to strncpy() with an
	appropriate call to _fstrncpy().
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
