---
layout: page
title: "Q119827: PC Win: Err Msg: Error Occurred While Loading the Spelling..."
permalink: kb/119/Q119827/
---

## Q119827: PC Win: Err Msg: Error Occurred While Loading the Spelling...

	Article: Q119827
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After starting version 3.0 of Microsoft Mail for Windows, the following stop
	error message will occur when spell checking a message for the first time:
	
	  An error occurred while loading the spelling dictionary
	
	Upon subsequent requests to spell check, the spell check will succeed, but if the
	Windows Mail client is exited and restarted, the error occurs again.
	
	NOTE: This error has only been known to occur with version 3.0 of Microsoft Mail
	for Windows.
	
	CAUSE
	=====
	
	This error is caused by installing a Windows application, such as Microsoft Word
	version 6.0 for Windows, Microsoft Excel version 5.0 for Windows, or Microsoft
	Office Suite. These applications update the [MS Proofing Tools] section of the
	WIN.INI and replace MSSPELL.DLL/MSSP_AM.LEX with newer versions. These newer
	files are not compatible with version 3.0 of Microsoft Mail for Windows, but
	they are compatible with versions 3.0b and 3.2.
	
	RESOLUTION
	==========
	
	To resolve this problem upgrade to version 3.0b of Microsoft Mail for Windows
	that can be obtained from Microsoft Product Support Services (PSS). You can also
	undelete/reinstall MSSPELL.DLL and MSSP_AM.LEX in the WINDOWS\MSAPPS\PROOF
	directory, and change the reference in the WIN.INI Spelling 1033,0 line from the
	newer .DLL and .LEX to the older files, and restart Windows.
	
	MORE INFORMATION
	================
	
	Before installing a newer Windows application, a MSMAIL.INI and WIN.INI will
	have the following entries:
	
	MSMAIL.INI
	----------
	
	  [MS Proofing Tools]
	  Spelling=Spelling 1033,0
	  Custom Dict=Custom Dict 1
	
	  WIN.INI
	
	-------
	
	  [MS Proofing Tools]
	  Spelling 1033,0=C:\WINDOWS\MSAPPS\PROOF\MSSPELL.DLL,
	           C:\WINDOWS\MSAPPS\PROOF\MSSP_AM.LEX
	  Custom Dict 1=C:\MSMAIL\CUSTOM.DIC
	
	After installing a newer Windows application, like those mentioned above, a
	MSMAIL.INI and WIN.INI will have the following entries:
	
	MSMAIL.INI
	----------
	
	  [MS Proofing Tools]
	  Spelling=Spelling 1033,0
	  Custom Dict=Custom Dict 1
	
	WIN.INI
	-------
	
	  [MS Proofing Tools]
	  Spelling 1033,0=C:\WINDOWS\MSAPPS\PROOF\MSSPEL2.DLL,
	           C:\WINDOWS\MSAPPS\PROOF\MSSP2_EN.LEX
	  Custom Dict 1=C:\MSMAIL\CUSTOM.DIC
	  Spelling 2057,0=C:\WINDOWS\MSAPPS\PROOF\MSSPEL2.DLL,
	           C:\WINDOWS\MSAPPS\PROOF\MSSP2_EN.LEX
	  Thesaurus 1033,0=C:\WINDOWS\MSAPPS\PROOF\MSTHES.DLL,
	           C:\WINDOWS\MSAPPS\PROOF\MSTH_AM.LEX
	
	In addition, MSSPELL.DLL and MSSP_AM.LEX will be deleted from the
	WINDOWS\MSAPPS\PROOF directory.
	
	Additional query words: 3.00 Spelling
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
