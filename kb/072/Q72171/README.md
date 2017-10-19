---
layout: page
title: "Q72171: Workarounds for 128 Character PATH Limitation"
permalink: /kb/072/Q72171/
---

## Q72171: Workarounds for 128 Character PATH Limitation

	Article: Q72171
	Product(s): Microsoft Disk Operating System
	Version(s): 2000,2000 SP1,3.1,3.2,3.21,3.3,3.3a,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 2000, 2000 SP1 Advanced Server 
	- Microsoft Windows versions 2000, 2000 SP1 Professional 
	- Microsoft Windows versions 2000, 2000 SP1 Server 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	All MS-DOS environment variables are limited by the COMMAND.COM input buffer
	length of 128 characters, including the PATH. The figure 128 includes an
	end-of-variable character, the variable name, and the = (equal) sign. Therefore,
	PATH actually has only 122 characters to hold the directories you want
	COMMAND.COM to search. This limit cannot be expanded.
	
	The following are some techniques to get the most use out of those 122
	characters:
	
	- Use "C:" instead of "C:\".
	
	- Eliminate unneeded directories from your PATH.
	
	- Use short directory names.
	
	- Create batch files that modify the PATH as necessary.
	
	- Create batch files that execute programs.
	
	- Eliminate drive letters in the PATH.
	
	- Reduce the number of directories.
	
	- Substitute drive letters for directories with SUBST.
	
	- Use third party terminate-and-stay-resident "PATH extenders."
	
	- Replace COMMAND.COM with another command interpreter.
	
	MORE INFORMATION
	================
	
	1. If you want MS-DOS to search the root directory of a drive, omit the \
	  (backslash) by typing the following command:
	
	  " path c:" (without the quotation marks)
	
	  This causes MS-DOS to search C:\ regardless of the current directory of C.
	
	  NOTE: This does not mean removing the "\" from all directories in the PATH
	  command, only from the single reference to the root directory.
	
	2. Eliminate unneeded directories from your PATH. Many applications
	  automatically add their directories to the PATH, whether you want them there
	  or not. In addition, when a PATH is very long, the search time to find items
	  becomes quite lengthy because MS-DOS must search all the directories in the
	  PATH.
	
	  You may need to change directories to run applications not in the PATH.
	
	3. Use short directory names. This may require renaming directories, which can
	  be done with the MS-DOS Shell and many third-party utility packages.
	
	  Short directory names tend to be more cryptic and difficult to remember. Also,
	  some applications (notably menu programs) save directory information for
	  future use and may even require reinstallation to be able to use another
	  directory.
	
	  NOTE: Do NOT rename a directory when any program is using any files in that
	  directory. For this reason, it is best to exit from all applications and/or
	  multitasking and task switching software, such as Windows, before renaming
	  directories.
	
	4. Set up a series of batch files that set up the path depending on your current
	  needs. One way to do this is to have a BASEPATH.BAT file, which sets a
	  minimal or basic path, and then to have other batch files that modify this
	  basic path. Another way is to have a batch file save the current PATH, set a
	  new one, and then restore the previous PATH. For more information, query on
	  the following words:
	
	  saving and old and path
	
	  However, you must invest time and effort in making and maintaining the batch
	  file system.
	
	5. Batch files can also be used to change to the appropriate subdirectory,
	  execute the program desired, and change back. For more information, see the
	  descriptions of creating a menu system with batch files as described in
	  "Supercharging MS-DOS" by Van Wolverton, and in the Microsoft Quick Reference
	  book "MS-DOS Batch Files" by Kris Jamsa. Both of these are published by
	  Microsoft Press.
	
	  However, you must invest time and effort in making and maintaining the batch
	  file system.
	
	6. If you primarily use only one logical drive for most of your activity, do not
	  add the drive specification for each path entry. For example, if you are
	  primarily using drive C, and your path used to be the following
	
	      set path=c:\bin;c:\dos;c:\win;c:\util
	
	  you could shorten it to the following:
	
	      set path=\bin;\dos;\win;\util
	
	  NOTES:
	
	  Removing drive letters from your path creates problems with shared
	  applications in Windows. (Some shared applications do not run.)
	
	  This method will only work while your active drive is drive C. If you move to
	  drive A, MS-DOS will look for the path entry on the A drive. This can cause
	  the MS-DOS search to work incorrectly.
	
	  For example, the PATH was edited to include \WIN, instead of C:\WIN, and the
	  command WIN was typed at the C prompt:
	
	  " C:\>win" (without the quotation marks)
	
	  MS-DOS would find and run C:\WIN\WIN.COM. But this would not be true if the
	  command was typed at the A prompt:
	
	  " A:\>win" (without the quotation marks)
	
	  This would result in a "Bad command or file name error" because MS-DOS would
	  be searching for A:\WIN\WIN.COM.
	
	7. Group path entries together, moving executable files from more than one path
	  entry into a single directory. For example, if you use several utility
	  packages, you might want to group them into C:\UTIL instead of C:\NORTON,
	  C:\PCTOOLS, and C:\SK.
	
	  NOTE: This may make it harder to organize your drive.
	
	8. The SUBST command can be used to substitute a drive letter for a directory.
	  (If drive letters past E are used, it may be necessary to add or modify the
	  LASTDRIVE= statement in CONFIG.SYS.) The following commands demonstrate how
	  this is used:
	
	      C:\dos\subst i: c:\util
	      C:\dos\subst j: c:\c600a
	      path c:\dos;i:;i:\bats;i:\nu;j:\binb;j:\binr;j:\binp;
	
	  These lines could be in the AUTOEXEC.BAT file, or in a SETPATH.BAT file, which
	  could then be called as needed.
	
	  Because SUBST disguises the real directory structure, it can cause problems
	  for some applications and some DOS utilities. For example, you cannot remove
	  a SUBSTituted directory or FORMAT a SUBSTituted drive.
	
	  NOTE: SUBST should not be active when Microsoft Windows is being installed. To
	  display any SUBSTituted directories, type "SUBST" (without the quotation
	  marks) at the prompt with no parameters:
	
	      C:\>subst
	      I: => C:\util
	      J: => C:\c600a
	
	  To deactivate the SUBST command for these directories, type the following:
	
	  " C:\>SUBST I: /D
	  C:\>SUBST J: /D" (without the quotation marks)
	
	  For more information on SUBST and Windows, query on the following words:
	
	  SUBST and join and Windows and problems
	
	9. There are third party "PATH extenders" that fool COMMAND.COM into using a
	  longer PATH. Some are shareware and/or public domain.
	
	  Drawback: These programs may be dependent on particular MS-DOS versions and
	  may interfere with applications that expect a maximum PATH of 128 characters.
	
	10. Finally, as the 128-character limit is a limitation of the command
	  interpreter, COMMAND.COM, the limit can be bypassed entirely by not using
	  COMMAND.COM. MS-DOS version 2.00 introduced support for using an alternate
	  command interpreter (or "shell") with the CONFIG.SYS SHELL= command.
	
	  A third-party command interpreter called NDOS is supplied with Norton
	  Utilities version 6, along with a NDOS manual. NDOS is compatible with
	  MS_DOS 5.0. The path limit for NDOS is 244 characters. For more information,
	  contact:
	
	  Symantec, Peter Norton Group
	  10201 Torre Avenue
	  Cupertino, Ca. 95014-2132
	  (408) 253-9600
	
	  A third-party choice is the product 4DOS, by J.P. Software, which has a 256
	  character environment variable limit. For more information, contact:
	
	  J.P. Software
	  P.O. 1470
	  East Arlington, MA 02174
	  (617) 646-3975
	
	  Drawback: 4DOS and other command interpreters may not work with all
	  applications or all MS-DOS versions.
	
	All MS-DOS environment variables are limited by the COMMAND.COM input buffer
	length of 128 characters. The PATH statement and other environment variables
	cannot exceed 127 characters, including spaces. The total length of the
	statement is 128 bytes; however, the 128th is reserved for an "End-Of-String"
	NULL byte.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 4.01 4.01a 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch kbWinAdvServSearch kbWin2000AdvServSP1 kbWin2000ProSP1 kbwin2000ServSP1 kbWinNTSEnt400SP6a kbWinNTW400SP6a kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : :2000,2000 SP1,3.1,3.2,3.21,3.3,3.3a,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a,4.01,5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
