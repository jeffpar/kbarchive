---
layout: page
title: "Q227881: Index Server Process Terminates with Japanese Wordbreaker"
permalink: /kb/227/Q227881/
---

## Q227881: Index Server Process Terminates with Japanese Wordbreaker

	Article: Q227881
	Product(s): Internet Information Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Japanese Wordbreaker feature may cause the Index Server process to terminate
	unexpectedly.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  01/05/99  06:34p               122,961 Msir2jp.dll   (Alpha)
	  01/05/99  06:34p             1,218,388 Msir2jp.lex   (Alpha)
	
	  01/05/99  06:33p                86,097 Msir2jp.dll   (i386)
	  01/05/99  06:33p             1,218,388 Msir2jp.lex   (i386)
	
	These files replace the Nlgwbrkr.dll file.
	
	NOTE: You must run the following command from a command prompt after installing
	the fix:
	
	  Regsvr32 /s MSIR2JP.DLL
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Index Server version 1.1.
	
	MORE INFORMATION
	================
	
	Index Server has the ability to search text in multiple languages. The
	Wordbreaker is part of the technology that allows Index Server to do that.
	
	This problem does not occur with the version of the Japanese Wordbreaker feature
	included in Index Server 2.0.
	
	The Japanese Wordbreaker version 1.0 was packaged in a DLL named Nlgwbrkr.dll.
	The fix for this problem is to replace the Wordbreaker version 1.0 with the
	Wordbreaker version 2.0. The Wordbreaker 2.0 is packaged in a DLL named
	Msir2jp.dll and has an associated data file named Msir2p.lex. Register the DLL
	with Regsvr32 to handle the file name differences.
	
	Additional query words: 4.00 crash crashes c rashed
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110
	Version           : winnt:1.1
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
