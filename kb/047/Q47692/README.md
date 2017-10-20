---
layout: page
title: "Q47692: INFO: Some errno Values Do Not Apply to MS-DOS, Windows NT"
permalink: /kb/047/Q47692/
---

## Q47692: INFO: Some errno Values Do Not Apply to MS-DOS, Windows NT

{% raw %}

	Article: Q47692
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an error occurs in some library routines, the errno variable is set to a
	value that can be used to indicate the nature of the error. These error codes
	are defined in the file ERRNO.H. The codes were originally set up for use with
	UNIX to conform to errors occurring under that operating system. Because of
	this, and the differences between the various operating systems, many of the
	codes have no relevance to the MS-DOS and Windows NT environments.
	
	To maintain compatibility with UNIX and XENIX, all the codes, whether meaningful
	or not, are defined in ERRNO.H. However, in the description of the global
	variable errno, the CRT documentation included with each of the above products
	lists only those codes (and their meanings) applicable to the corresponding
	operating system, either MS-DOS or Windows NT. To output the associated the
	error messages of these codes, use the perror() function.
	
	If a returned errno value is not one of the listed codes, it can be assumed that
	the error code was generated incorrectly and is not indicative of the true
	problem. The documentation for the specific function used denotes which errno
	values, if any, may be set by an error in that function.
	
	MORE INFORMATION
	================
	
	The following is a listing of all the errno values defined in ERRNO.H along with
	brief descriptions of their meanings. Only the values marked with an asterisk
	(*) are considered valid under MS-DOS. Those marked with a plus sign (+) are
	considered valid under Windows NT.
	
	For more information on the values not marked with an asterisk or a plus sign,
	see a UNIX or XENIX system manual.
	
	Value       Define       Description
	-----       ------       -----------
	
	EPERM         1          Not owner
	ENOENT        2        *+No such file or directory
	ESRCH         3          No such process
	EINTR         4          Interrupted system call
	EIO           5          I/O error
	ENXIO         6          No such device or address
	E2BIG         7        *+Argument list too long
	ENOEXEC       8        *+Exec format error
	EBADF         9        *+Bad file number
	ECHILD       10         +No spawned processes
	EAGAIN       11         +No more processes; not enough memory;
	                          maximum nesting level reached
	ENOMEM       12        *+Not enough memory
	EACCES       13        *+Permission denied
	EFAULT       14          Bad address
	ENOTBLK      15          Block device required
	EBUSY        16          Mount device busy
	EEXIST       17        *+File exists
	EXDEV        18        *+Cross-device link
	ENODEV       19          No such device
	ENOTDIR      20          Not a directory
	EISDIR       21          Is a directory
	EINVAL       22        *+Invalid argument
	ENFILE       23          File table overflow
	EMFILE       24        *+Too many open files
	ENOTTY       25          Not a teletype
	ETXTBSY      26          Text file busy
	EFBIG        27          File too large
	ENOSPC       28        *+No space left on device
	ESPIPE       29          Illegal seek
	EROFS        30          Read-only file system
	EMLINK       31          Too many links
	EPIPE        32          Broken pipe
	EDOM         33        *+Math argument
	ERANGE       34        *+Result too large
	EUCLEAN      35          File system needs cleaning
	EDEADLK      36         +Resource deadlock would occur
	EDEADLOCK    36         *Resource deadlock would occur
	ENAMETOOLONG 38
	ENOLCK       39
	ENOSYS       40
	ENOTEMPTY    41
	EILSEQ       42
	
	* Used under both MS-DOS
	+ Used under Windows NT
	
	NOTE: With Visual C++ 32-bit Edition, EDEADLK is the preferred manifest constant
	for "resource deadlock." However, EDEADLOCK is supported for compatibility with
	older MS-C versions.
	
	For more information on errno and its possible values, please consult the Visual
	C++ Book Online.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,2.1,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
