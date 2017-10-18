---
layout: page
title: "Q217206: PhoneSelectExtVersion Is Not Called When phoneOpen Is Called"
permalink: kb/217/Q217206/
---

## Q217206: PhoneSelectExtVersion Is Not Called When phoneOpen Is Called

	Article: Q217206
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When developing a TAPI 2.1 compliant application and when the application does
	an open line from the client using the call lineGetID(), it will return an index
	number based on the server (for example, 24 when only one phone is available to
	client) and subsequent phoneOpen calls will fail because the client actually has
	only access to one phone device as indicated by Tsec.ini.
	
	CAUSE
	=====
	
	When tracing this from the server, and when entering an extension version in
	phoneOpen, TAPI is properly calling TSPI_phoneSelectExtVersion but on the
	client, TAPI does not call TSPI_phoneSelectExtVersion.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File Name     Platform
	  -------------------------------------------------------------
	  2/12/99   11:48:17 AM          57kb    Remotesp.tsp  (x86)
	  2/12/99   12:54:39 PM          108kb   Tapi32.dll    (x86)
	  2/12/99   12:54:40 PM          150kb   Tapisrv.exe   (x86)
	
	  2/12/99   12:54:15 PM          101kb   Remotesp.tsp  (Alpha)
	  2/12/99   12:54:22 PM          192kb   Tapi32.dll    (Alpha)
	  2/12/99   12:54:25 PM          238kb   Tapisrv.exe   (Alpha)
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
