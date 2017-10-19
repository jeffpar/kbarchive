---
layout: page
title: "Q92525: Using the Setup Toolkit Function StampResource()"
permalink: /kb/092/Q92525/
---

## Q92525: Using the Setup Toolkit Function StampResource()

	Article: Q92525
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The StampResource() subroutine from the Setup toolkit can be used by a Setup
	script to overwrite a resource in an .EXE or .DLL with the specified data. The
	subroutine is useful for customizing a file's resources for the current
	installation.
	
	The syntax of a StampResource() call is:
	
	    StampResource szSection$, szKey$, szDst$, wResType%, wResId%,
	                                                       szData$, cbData%
	
	The wResType% argument specifies the resource identification type. The possible
	values are as follows:
	
	  CURSOR        1
	  BITMAP        2
	  ICON          3
	  MENU          4
	  DIALOG        5
	  STRING        6
	  FONTDIR       7
	  FONT          8
	  ACCELERATOR   9
	  RCDATA        10
	  GROUP_CURSOR  12
	  GROUP_ICON    14
	  VERSION       16
	
	These values are the values of the appropriate RT_ constants defined in
	WINDOWS.H.
	
	StampResource() finds the resource identified by wResType% and wResId% in the
	file, and checks the size of the resource. If cbData% is less than or equal to
	the size of the original resource, StampResource() overwrites the first cbData%
	bytes of it; otherwise, it fails. Therefore, the script author must make sure
	that cbData% is less than or equal to the size of the original resource, and
	that the original resource is large enough to hold the expected data.
	
	MORE INFORMATION
	================
	
	The StampResource() subroutine can be used to overwrite a string resource in a
	file with a user's name, company, or serial number when the file is installed.
	
	To overwrite a string resource, it is important to understand how string
	resources are stored.
	
	A string table consists of one or more separate resources (or segments), each
	containing exactly 16 strings. The maximum length of each string is 255 bytes.
	One or more strings in a segment can be null or empty. The first byte in the
	string specifies the number of characters in the string. For null or empty
	strings, the first byte contains the value zero. The Windows Resource Compiler
	(RC) allocates 16 strings per segment and uses the identifier value to determine
	which segment is to contain the string. Strings with the same upper-12 bits in
	their identifiers are placed in the same segment.
	
	With StampResource(), the wResId% is used to identify the segment; it should be
	the upper-12 bits of the identifiers in the section plus 1. There is no way to
	specify a specific string ID to overwrite. StampResource() starts writing data
	at the beginning of the specified segment and continues until cbData% bytes have
	been written. Therefore, with each call to StampResource(), one should assume
	that any of the previous strings in the segment will be overwritten. Because of
	this, make sure the strings that you "stamp" never share a segment with
	"read-only" strings. To do this, make the upper-12 bits of your stamp-string
	string identifiers different from those of your read-only-string string
	identifiers.
	
	To write the new strings for the segment, fill in szData$ with the strings in the
	order of their identifiers. For simplicity's sake, it's recommended that the
	string IDs be consecutive (in the .RC file), starting with one whose lower-4
	bits are 0 (zero). The string with 0000 in the lower-4 bits of its identifier
	should go first. For each string, put its length followed by the string itself
	in szData$. The length of szData$ should not be longer than the total length of
	the original strings in the segment.
	
	For example, an application could set up three strings, which would be stamped
	with the user's name, the serial number, and the user's company name at
	installation time. The application's .RC file could be arranged as follows:
	
	  STRINGTABLE BEGIN
	  0x4500 "user name ------ Pad if necessary so you have room to use to"
	  0x4501 "serial number -- overwrite (total length of the new strings"
	  0x4502 "company name --- written must be less than the originals).  "
	  0x0001 "read-only string1"
	  0x0004 "read-only string2"
	  0x1007 "read-only string3"
	  0x1008 "read-only string4"
	  END
	
	To stamp these strings with information collected from the user at set-up time,
	call StampResource() from the Setup script with &H451 for wResId%. &H
	means the number following is in hexadecimal. &H451 is the upper-12 bits of
	the stamp-string string IDs plus 1.
	
	     szUser$="Jane Doe"
	     szSerial$="0123456789"
	     szCo$="ACME Corp"
	     szDat$=CHR$(LEN(szUser$))+szUser$+CHR$(LEN(szSerial$))+szSerial$
	     szDat$=szDat$+CHR$(LEN(szCo$))+szCo$
	     StampResource "Files","gen",DEST$,6,&H451,szDat$,LEN(szDat$)
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
