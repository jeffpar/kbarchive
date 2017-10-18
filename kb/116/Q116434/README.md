---
layout: page
title: "Q116434: PC Ext: EXTERNAL.INI Equivalents to -Qx Command-Line Options"
permalink: kb/116/Q116434/
---

## Q116434: PC Ext: EXTERNAL.INI Equivalents to -Qx Command-Line Options

	Article: Q116434
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The External Mail program contains undocumented EXTERNAL.INI file entries
	equivalent to the -Qx command-line options.
	
	The following EXTERNAL.INI file entries are meant for advanced developers and
	product support personnel to help them debug programs and troubleshoot problems.
	Because of the technical and cryptic nature of the reports, they can be
	misleading to less technical users. These entries are designed to be used in
	conjunction with the documented LogVerbose and LogSession entries.
	
	The four EXTERNAL.INI file entries are as follows:
	
	DebugMessages
	-------------
	
	This entry is equivalent to the -Q1 command-line option. It reports detailed I/O
	activity when EXTERNAL.EXE is scanning and delivering mail.
	
	DebugXCSI
	---------
	
	This entry is equivalent to the -Q2 command-line option. It reports additional
	information that is useful for troubleshooting modem problems. For more detailed
	information, see Knowledge Base article Q80272.
	
	
	DebugP1
	-------
	
	This entry is equivalent to the -Q3 command-line option. It reports the state of
	the P1 files.
	
	NOTE: The -Q3 option was not available prior to Mail 3.0.
	
	DebugMemoryUsage
	----------------
	
	This entry is equivalent to the -Q4 command-line option. It does not log any
	information into the SESSION.LOG file, but displays memory usage on the
	EXTERNAL.EXE screen. The critical information is the value of the field
	beginning with "F" in the upper-left corner of the screen.
	
	Additional query words: 3.20 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	
