---
layout: page
title: "Q137701: PC Win: Using the U.K. Version of the Spelling Dictionary"
permalink: /kb/137/Q137701/
---

## Q137701: PC Win: Using the U.K. Version of the Spelling Dictionary

	Article: Q137701
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you want to use the United Kingdom (U.K.) version of the spelling
	dictionary with Microsoft Mail for PC Networks, you must make sure that the
	WIN.INI and MSMAIL.INI files are pointed to the correct .DLL files.
	
	NOTE: The spelling lines are one continuous line. They have been wrapped in this
	article for display purposes.
	
	Microsoft Mail puts special Spelling and Custom Dict 1 entries into the WIN.INI
	file (other Microsoft products share a single Spelling and Custom Dict 1 entry).
	For example, Microsoft Mail adds the following three lines to the [MS Proofing
	Tools] section of the WIN.INI file:
	
	  [MS Proofing Tools]
	  Spelling (Mail) 1033,0=C:\WIN31\MSAPPS\PROOF\MSSPELL.DLL,
	  C:\WIN31\MSAPPS\PROOF\MSSP_AM.LEX
	  Custom Dict 1=C:\WIN31\MSAPPS\PROOF\CUSTOM.DIC
	
	NOTE: Microsoft Mail does not modify existing Microsoft Windows applications to
	provide spell checking for the Mail clients.
	
	The MSMAIL.INI file also needs to have the following entry:
	
	  [MS Proofing Tools]
	  Spelling=<keyname>
	
	This entry specifies the name of an entry in the [MS Proofing Tools] section of
	your WIN.INI file. This entry gives the path to the spelling checker DLL file.
	
	There is no default value. The purpose of this entry is to let Mail use the same
	spelling checker you may already be using with another Microsoft application,
	such as Microsoft Word for Windows.
	
	MORE INFORMATION
	================
	
	In order to only use the U.K. version of the spelling files for Microsoft Mail,
	the following line needs to be in the WIN.INI file:
	
	  Spelling (Mail) 1033,0=C:\WINDOWS\MSAPPS\PROOF\MSSPELL.DLL
	  C:\WIN31\MSAPPS\PROOF\MSSP_BR.LEX
	
	The MSSP_BR.LEX should be in place instead of the default file MSSP_AM.LEX.
	
	Also, ensure that the file does exist in the above directory.
	
	In addition, the following line will need to be in the MSMAIL.INI file:
	
	  [MS Proofing Tools]
	  Spelling=Spelling (Mail) 1033,0
	
	Additional query words: 3.20 3.20a spell UK
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
