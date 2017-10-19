---
layout: page
title: "Q159214: How to Detect and Compare File Differences"
permalink: /kb/159/Q159214/
---

## Q159214: How to Detect and Compare File Differences

	Article: Q159214
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is common to encounter situations where you need to verify whether two disk
	files are identical. For example, you may observe unusual program behavior and
	suspect the file is damaged. Or two files may have the same byte count but
	different dates, and you wish to be certain they are identical. You may also be
	sending files to someone and, prior to sending, you wish to verify them against
	a master copy. In some cases, these files may be readable ASCII, and in other
	cases, binary. Sometimes, you may need to compare a local file to a questionable
	file at a remote site.
	
	The only way to positively verify the files are identical is by using the
	techniques listed below or ones that are similar. The file byte count and
	creation date are not reliable indications.
	
	If a file is suspect, often the solution taken is to recopy from a known good
	file. This may solve the problem, but prevents ever knowing for certain whether
	the original file was damaged. It can be important to determine this, as the
	file damage can indicate an underlying network or system problem. This article
	discusses how to compare files using utilities that are either commonly
	available or part of Windows NT and the Windows NT resource kit.
	
	MORE INFORMATION
	================
	
	For comparing a local file to a remote file, it is often best to use the Pkzip
	utility. Pkzip the file at both the local and remote sites. Then use pkzip -v to
	examine the CRC-32 value for the ZIP files. If the CRC-32 values are identical
	for the remote and local sites, then the files are absolutely identical. Because
	ZIPing a large file can take some time, it is often best to use the pkzip -e0
	(no compression) option, which is fastest.
	
	If a file is ZIPed with Pkzip before sending to a remote site, the embedded
	CRC-32 will ensure notification if the file is damaged in transit. This will be
	seen as an error during the unzip process. If there is no error, the file was
	conveyed without damage.
	
	For comparing two files or groups of files at a local site, there are several
	options: The Fc.exe and Comp.exe comparison utilities both ship with Windows NT.
	Windiff.exe ships with the Windows NT resource kit. Fc.exe is good for comparing
	two ASCII or binary files and has several different parameters. For example, use
	FC /b to compare two binary files.
	
	Comp.exe can be used to compare groups of files in two different directories. For
	example,
	
	COMP C:\Winnt\System32\*.dll \\Remotesys\C$\Winnt\System32\*.dll
	
	compares all DLLs in the indicated directories on two different computers.
	
	If you need to compare entire subdirectory trees, the WINDIFF utility from the
	Windows NT resource kit can be used. Windiff is a graphical Win32 utility. It is
	also excellent for doing detailed comparison between two ASCII files, such as
	source code. It graphically illustrates with colors the difference between the
	two ASCII files.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
