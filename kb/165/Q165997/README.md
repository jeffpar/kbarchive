---
layout: page
title: "Q165997: Unable to Execute Server-side Include (.stm) Files"
permalink: /kb/165/Q165997/
---

## Q165997: Unable to Execute Server-side Include (.stm) Files

	Article: Q165997
	Product(s): Internet Information Server
	Version(s): Winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access server-side Include files (.stm), you may receive one of the
	following error messages:
	
	  Requested header was not found
	
	  -OR-
	
	  Internet Explorer cannot open http://%path%/.stm
	
	CAUSE
	=====
	
	This can occur if the IUSR_Computername account does not have proper Windows
	NTFS permissions set (read/execute) for the Ssinc.dll file. This dll file is
	responsible for processing server-side Include files (.stm). By default, it is
	located in the %Winnt%\System32\Inetsrv directory.
	
	NOTE: The location of your Ssinc.dll file may be different than the one specified
	above.
	
	WORKAROUND
	==========
	
	Apply the appropriate permissions (read/execute) to the Ssinc.dll file.
	
	MORE INFORMATION
	================
	
	For more information about setting up Server-Side includes with different
	extensions, please see the following article in the Microsoft Knowledge Base:
	
	  Q161562 : Setting Up Server-Side Includes with Different Extension
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : Winnt:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
