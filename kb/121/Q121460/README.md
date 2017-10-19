---
layout: page
title: "Q121460: Common Object File Format (COFF)"
permalink: /kb/121/Q121460/
---

## Q121460: Common Object File Format (COFF)

	Article: Q121460
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:3.5
	Operating System(s): 
	Keyword(s): kbOSWinNT310 kbOSWinNT351
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT uses a special format for the executable (image) files and object
	files. The format used in these files are referred to as Portable Executable
	(PE) or Common Object File Format (COFF) files. The name Portable Executable
	refers to the fact that executable files can run on more than one platform. This
	article describes in detail the internal features of PE/COFF file formats and
	its parameters.
	
	MORE INFORMATION
	================
	
	The PE/COFF file headers consist of a MS-DOS stub, file signature, COFF Header,
	and Optional Header. An object file contains only the COFF Header, but an image
	file contains all the headers described above. The most important of these
	headers is the COFF header. The table below describes the information stored in
	the COFF header.
	
	Offset Size Field               Description
	------ ---- ------------------- -----------------------------------------------
	0       2   Machine             Number identifying type of target machine.
	2       2   Number of Sections  Number of sections; indicates size of the
	                               Section Table, which immediately follows
	                               the headers.
	4       4   Time/Date Stamp     Time and date the file was created.
	8       4   Pointer to Symbol   Offset, within the COFF file, of the symbol
	           Table               table.
	12      4   Number of Symbols   Number of entries in the symbol table.
	                               This data can be used in locating the
	                               string table, which immediately follows
	                               the symbol table.
	16      2   Optional Header     Size of the optional header, which is
	           Size                included for executable files but not
	                               object files. An object file should have a
	                               value of 0 here.
	18      2   Characteristics     Flags indicating attributes of the file.
	
	Windows NT Software Development Kit (SDK) provides a utility called DUMPBIN.
	DUMPBIN is a 32-bit tool that displays information about 32-bit Common Object
	File Format (COFF) binary files. DUMPBIN runs only from a command prompt. You
	can use DUMPBIN to examine the following kinds of COFF files: object files,
	standard libraries of COFF objects, executable files, and dynamic-link library
	(DLL) files.
	
	To run DUMPBIN, use the following syntax:
	
	  DUMPBIN [options] [files]
	
	The following are options parameters and definitions for DUMPBIN:
	
	  /ALL
	  /ARCHIVEMEMBERS
	  /DISASM
	  /EXPORTS
	  /HEADERS
	  /IMPORTS
	  /LINENUMBERS
	  /LINKERMEMBER[:{1|2}]
	  /OUT:filename
	  /PDATA
	  /RAWDATA[:{NONE|BYTES|SHORTS|LONGS}[,#]]
	  /RELOCATIONS
	  /SECTION:name
	  /SUMMARY
	  /SYMBOLS
	
	Options          Definition
	---------------- -------------------------------------------------------
	/ALL             Setting this option causes DUMPBIN to display all
	                available information except code disassembly.
	
	/ARCHIVEMEMBERS  Setting this option causes DUMPBIN to display minimal
	                information about member objects in a library.
	
	/DISASM          Setting this option causes DUMPBIN to show disassembly
	                of code sections, using symbols if present in the file.
	
	/EXPORTS         This option causes DUMPBIN to list all definitions
	                exported from an executable file or DLL.
	
	/HEADERS         Setting this option causes DUMPBIN to display the file
	                header and the header for each section. When used with a
	                library, displays the header for each member object.
	
	/IMPORTS         This option causes DUMPBIN to list all definitions
	                imported to an executable file or DLL.
	
	/LINENUMBERS     Setting this option causes DUMPBIN to show COFF line
	                numbers. Line numbers exist in an object file if it was
	                compiled with /Zi. An executable file or DLL contains
	                COFF line numbers if it was linked with /DEBUG and
	                /DEBUGTYPE:COFF option.
	
	/LINKERMEMBER [[:{1|2}]]
	                Setting this option causes DUMPBIN to list public symbols
	                defined in a library. Specify the 1 argument to display
	                symbols in object order, along with their offsets. Specify
	                the 2 argument to display offsets and index numbers of
	                objects, then list the symbols in alphabetical order along
	                with the object index for each. To get both outputs,
	                specify /LINKERMEMBER without the number argument.
	
	/OUT:<filename>  This option specifies a filename for the output.
	
	/RAWDATA [[:{BYTES|SHORTS|LONGS|NONE}[[,number]]]]
	                Setting this option causes DUMPBIN to display the raw
	                contents of each section in the file. The arguments
	                control the format of the display, as follows:
	     Argument - Result
	     BYTES    - The default. Contents are displayed in hexadecimal bytes,
	                and also as ASCII if they have a printed representation.
	     SHORTS   - Contents are displayed in hexadecimal words.
	     LONGS    - Contents are displayed in hexadecimal longwords.
	     NONE     - Raw data is suppressed. This is useful to control the
	                output of /ALL.
	     number   - Displayed lines are set to a width that holds number
	                values per line.
	
	/RELOCATIONS     Setting this option causes DUMPBIN to display any
	                relocations in the object or image.
	
	/SECTION: <section>
	             This option restricts the output to information on the
	             specified section.
	
	/SUMMARY      Setting this option causes DUMPBIN to display minimal
	             information about sections, including total size. This
	             option is the default if no other option is specified
	             in a DUMPBIN command.
	
	/SYMBOLS      Setting this option causes DUMPBIN to display the COFF symbol
	             table. Symbol tables exist in all object files. A COFF symbol
	             table appears in an image file only if it is linked with
	             /DEBUG /DEBUGTYPE:COFF
	
	Additional query words: prodnt 3.10 entry NTS NTW
	
	======================================================================
	Keywords          : kbOSWinNT310 kbOSWinNT351 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:3.5
	
	=============================================================================
	
