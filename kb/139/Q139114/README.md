---
layout: page
title: "Q139114: SNA Server Support for ASCII-EBCDIC Character Conversion"
permalink: /kb/139/Q139114/
---

## Q139114: SNA Server Support for ASCII-EBCDIC Character Conversion

{% raw %}

	Article: Q139114
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because IBM host systems and SNA-capable systems use the EBCDIC character set,
	an application programmer using the APPC, CPIC or LUA API interfaces on Windows,
	Windows 95, Windows NT, MS-DOS, or OS/2 must be able to convert these characters
	to/from the ASCII character set. SNA Server supports this capability using
	either:
	
	- the Common Service Verb (CSV) CONVERT and GET_CP_CONVERT_TABLE functions
	
	  -or-
	
	- the SNANLS API function, for Windows NT 4.0 (or later) and Windows 95 clients
	
	When using the CSV functions for ASCII-EBCDIC character conversion, various host
	and PC code page translation tables can be generated and used to accomodate the
	language-specific configuration differences of host and PC systems. For more
	information about these function calls, see the SNA Server APPC Programmer's
	Guide, Chapter 8 "Common Service Verbs". For 2.1/2.11, the APPC Programmer's
	Guide is included in helpfile format in <CDROM>\DOCS\HELP\SNA.HLP. For
	3.0, it is included in C:\SNA30gld\SDK\infoview.exe SNA.MVB.
	
	When using the SNANLS API on Windows NT 4.0 (or later versions), SNANLS uses the
	EBCDIC Win32 NLS files delivered as part of the Windows NT 4.0 Language Pack
	(see the \LANGPACK subdirectory on the Windows NT 4.0 CD-ROM). On Windows 95
	clients, the NLS files included with the SNA Server Windows 95 client are used
	by the SNANLS API. For more information on the SNANLS API and requirements, see
	the SNA National Language Support section within the SNA Server 3.0 "SDK
	Documentation" online help. Microsoft recommends using the SNANLS API for Win32
	applications that will be run on Windows NT and Windows 95 client machines.
	
	The remainder of this article describes how to use the Common Service Verb
	functions. While the Common Service Verb functions are documented in the APPC
	Programmer's Guide, they can also be used from a CPIC or LUA application.
	
	MORE INFORMATION
	================
	
	The following steps should be used to determine what SNA Server Common Service
	Verb (CSV) calls should be used by the application programmer:
	
	1. Determine conversion requirements
	
	  The CONVERT API call supports ASCII-to-EBCDIC and EBCDIC-to-ASCII conversion
	  of characters. The following character set (char_set) table options are
	  supported by the CONVERT call:
	
	     char_set   Description
	     --------   -----------------------------------------------------
	     SV_A      Only the following characters are converted:
	
	                  $ # @ A-Z 0-9
	
	     SV_AE     Only the following characters are converted:
	
	                  . $ # @ a-z A-Z 0-9
	
	     SV_G      SNA Server uses a user-defined type G conversion
	               table for character conversion. See below for more
	               information about type G conversion table.
	
	  See Appendix A of the IBM SNA Formats Guide (IBM doc #GA27-3136) for a
	  description of the A and AE character sets. For SV_A and SV_AE conversions,
	  trailing blanks (that is, blanks at the end of the source string) are
	  converted to blanks in either direction. In contrast, embedded blanks are
	  converted to 0x00 (NULL). If any source character is converted to 0x00, the
	  CONVERSION_ERROR secondary return_code is returned, though the conversion
	  will still be completed.
	
	  Type G conversion table
	  -----------------------
	  The Type G conversion table is user-defined. SNA Server ships with a default
	  type G conversion table called COMTBLG.DAT. This conversion table is
	  automatically installed on SNA Server Windows NT and SNA Server Windows 95
	  client machines, to <snaroot>\SYSTEM\COMTBLG.DAT. Here is how to enable
	  the this type G conversion table on the other client platforms:
	
	  On Windows 3.x, copy the COMTBLG.DAT file to the client machine and add a
	  COMTBLG entry to the [wnap] section of WIN.INI to point to this file. For
	  example:
	
	  "COMTBLG=C:\SNA.WIN\COMTBLG.DAT" (without the quotation marks)
	
	  The COMTBLG.DAT conversion table is composed of 32 lines of 32 characters
	  each. Each line represents 16 printable hexadecimal characters followed by a
	  carriage return and line feed. The first 16 lines provide ASCII-to-EBCDIC
	  conversion information while the second 16 lines provide EBCDIC-to-ASCII
	  conversion information.
	
	  When SNA Server performs the conversion, it uses the numeric equivalent of
	  each incoming character as a 0-origin index into the conversion table. This
	  index specifies the table location containing the hexadecimal value of the
	  converted character. For example, assume that the 32nd position in the table
	  contained 0x40. SNA Server would convert an incoming character with a value
	  of 32 to a value of 64 (0x40).
	
	2. If the above conversion tables are insufficient, a custom conversion table
	  must be generated.
	
	  The GET_CP_CONVERT_TABLE function supports the generation of a custom
	  conversion table which can then be used to create a custom conversion table
	  to replace the COMTBLG.DAT file shipped with SNA Server. The application
	  programmer passes the desired source code page (source_cp) and target code
	  page (target_cp), and receives the desired 256-byte conversion table. These
	  conversion tables can be concatenated together to form a custom
	  <snaroot>\system\COMTBLG.DAT file to replace the version included with
	  SNA Server. This conversion table can then be used when calling the CONVERT
	  function when the SV_G conversion table option is specified. The
	  GET_CP_CONVERT_TABLE function supports the following source and target code
	  pages:
	
	        ASCII code pages (also referred to as PC Character Sets)
	        --------------------------------------------------------
	
	  437 - English.  US IBM PC. Includes characters for English and most
	        other European languages. Countries using this code page include
	        those from Latin America, the United States and Australia.
	
	  850 - Multilingual (Latin I).  Includes characters for most of the
	        languages that use the Latin alphabet.  This includes Belgium,
	        Canada(French), Denmark, Finland, France, Germany, Italy,
	        Netherlands, Norway, Portugal, Spain, Sweden, Switzerland, and
	        United Kingdom.  Latin America, the United States and Australia
	        may also use this code page.
	
	  860 - Portuguese.  Includes specific character support for the
	        Portuguese of Portugal.
	
	  863 - Canadian-French.  Includes characters for English and
	        Canadian-French
	
	  865 - Slavic/Nordic (Latin II). Includes characters for the Slavic
	        languages that use the Latin alphabet.</ITEM></STEPS>
	
	
	       EBCDIC code pages (also referred to as host code pages)
	       -------------------------------------------------------
	
	  037 - United States, Australia, Belgium, Canada(English and,
	        French), Netherlands, Portugal
	
	  273 - Germany
	
	  277 - Denmark, Norway
	
	  278 - Sweden, Finland
	
	  280 - Italy
	
	  284 - Latin America, Spain
	
	  285 - United Kingdom
	
	  297 - France
	
	  500 - International, Switzerland (German and French)
	
	
	  NOTE: User defined code pages range from 65280 - 65534
	
	
	3. If the GET_CP_CONVERT_TABLE is not sufficient:
	
	If the above conversion tables are not sufficient, a user-written conversion
	table must be defined, or a custom character conversion routine must be
	implemented by the application programmer.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbprogramming sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
