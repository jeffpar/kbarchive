---
layout: page
title: "Q134215: BUG: OLE SUBCLASS: Subclassing of OleControl/OLE Unspecified"
permalink: kb/134/Q134215/
---

## Q134215: BUG: OLE SUBCLASS: Subclassing of OleControl/OLE Unspecified

	Article: Q134215
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 26-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an OleControl is subclassed, the following error message appears in Visual
	FoxPro:
	
	  OLE error code 0x80004005: Unspecified error.
	
	Visual FoxPro 5.0 generates this error message:
	
	  Object class is invalid for this container.
	
	
	WORKAROUND
	==========
	
	Create a new class with the name you want based on the subclass that was just
	created.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. To create a new class, type the following code in the Command window:
	
	        CREATE CLASS comm1 OF comms AS olecontrol
	
	2. Select the "Create Control" option and then select the Microsoft Comm
	  Control.
	
	3. Click OK.
	
	4. When the Class Designer comes up, save and close the new class.
	
	5. To try to rename the new class, type the following in the Command window:
	
	        RENAME CLASS comm1 OF comms TO mycomm
	
	At this point, Visual FoxPro generates the error.
	
	Additional query words: OLE control kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kberrmsg kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
