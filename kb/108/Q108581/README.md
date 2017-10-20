---
layout: page
title: "Q108581: Setting Up VI POSIX Editor for Windows NT 3.1"
permalink: /kb/108/Q108581/
---

## Q108581: Setting Up VI POSIX Editor for Windows NT 3.1

{% raw %}

	Article: Q108581
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.1 
	-------------------------------------------------------------------------------
	
	To successfully execute the VI POSIX Editor that ships with the Windows NT
	Resource Kit, you must correctly setup the system environment. The Windows
	NT "Resource Kit Tools Help" helpfile does not give all the information
	needed to configure VI for use with Windows NT 3.1. To correctly setup VI
	for use within Windows NT 3.1, perform the following steps:
	
	1. In the Control Panel window, choose the System icon.
	
	2. In "User Environment Variables for <user>" box, enter the following
	  environment variables:
	
	  TERM = ansi
	  TERMCAP = //<drive letter in ALL CAPS>/<dir>/<termcap
	  filename>
	  _POSIX_TERM = on
	  tmp = //<drive letter in ALL CAPS>/<dir>
	  path = <drive letter>:\<vi executable location>
	
	- The TERM variable needs to have a value that matches an entry in the TERMCAP
	  file; by default, this entry is named ansi. Make sure the word "ansi" is
	  lowercase.
	
	- The TERMCAP variable contains the full path of the TERMCAP file including the
	  TERMCAP filename itself. You must use the POSIX style naming convention and
	  the drive letter must be in uppercase. You can customize the entry in the
	  TERMCAP file according to your usual command prompt window size; if you
	  usually use a window that's not 80 columns-by- 25 lines, change the CO entry
	  to match the number of columns, and change the LI entry to match the number
	  of lines. For example, if you usually use a 100 column-by-60 line window, the
	  CO entry would be "co#100" and the LI entry would be "li#60". There is an
	  example of a TERMCAP file later in this document.
	
	- The POSIX_TERM variable must be set to "on" to use the terminal emulation
	  portion of the POSIX server.
	
	- The TMP variable must be set to any valid directory, you must use the POSIX
	  style naming convention, and the drive letter must be in uppercase. The drive
	  letter itself must be located on an NTFS volume. If /tmp is not located on an
	  NTFS volume, then you will only be able to launch vi from any local root
	  directory.
	
	
	- The PATH variable needs to include the directory where the vi executable
	  resides, to be able to run it from anywhere. You should use the standard
	  MS-DOS naming convention.
	
	Example
	-------
	
	If the directory of the TERMCAP file and the location of "tmp" is on drive
	D, AND VI.EXE is located in the D:\reskit\posix directory, then the
	environment variable entries should be the following:
	
	  TERM = ansi
	  TERMCAP = //D/etc/termcap       (Drive letter must be in ALL
	  CAPS)
	  _POSIX_TERM = on
	  tmp = //D/etc                   (Drive letter must be in ALL
	  CAPS)
	  path = d:\reskit\posix
	
	You can verify that these environment variables are set correctly by typing
	"set" from the command prompt. However, do not initialize these environment
	variables using "set" because they will disappear when you exit the VDM.
	Always use the System applet.
	
	The TERMCAP file must have the following entries to work under Windows NT:
	
	li|ansi|psx_ansi|:\ 
	
	            :co#80:li#25:\ 
	            :am:pt:ms:bw:\ 
	            :cl=\E[2J:cm=\E[%i%d;%dH:ce=\E[K:cd=\E[J:\ 
	            :sf=\E[S:sr=\E[T:\ 
	             :ho=\E[H:sc=\E[s:rc=\E[u:up=\E[A:d=^J:nd=\E[C:le=^H:\ 
	             :ku=\E[A:kd=\E[V:kr=\E[C:kl=\E[D:kb=^H:\ 
	             :so=\E[7m:se=\E[m:mr=\E[7m:me=\E[0m:\ 
	
	WARNING: Having the "tmp" variable set to a POSIX-style path causes
	problems with other applications that look for "tmp" because they expect
	the "tmp" variable to be set to a standard MS-DOS style naming convention,
	and may fail when it is not.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
