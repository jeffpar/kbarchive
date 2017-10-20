---
layout: page
title: "Q145700: HOWTO: How the Server Use Is Determined by OLE"
permalink: /kb/145/Q145700/
---

## Q145700: HOWTO: How the Server Use Is Determined by OLE

{% raw %}

	Article: Q145700
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an OLE Automation client requests an object that can be provided by more
	than one server, OLE uses a predefined set of rules to determine which server is
	used to supply that object. This article lists the order used by OLE when
	providing objects.
	
	MORE INFORMATION
	================
	
	Each object that can be provided to an OLE Automation client can be identified
	by an unique 64-bit number called a CLSID. The system registry contains a key
	called CLSID (immediately off of HKEY_CLASSES_ROOT), which has as subkeys every
	CLSID registered on the system. The subkeys of each CLSID hold information for
	each object, including the path and filename of the server(s) that can be used
	to provide that object, according to this table:
	
	  Key               Server
	  ---------------------------------------------------------------------
	  InprocServer      16-bit DLL (in-process) server
	  InprocServer32    32-bit DLL (in-process) server
	  OutprocServer     16-bit EXE (out-of-process) server
	  OutprocServer32   32-bit EXE (out-of-process) server
	
	It is possible (and completely allowed by OLE) to have more than one of the above
	keys beneath a given CLSID. If this situation occurs, OLE uses a predefined
	order to determine which server is used to provide an object. This decision is
	based both on the bitness of the potential OLE Automation client and the bitness
	of the operating system. OLE uses this order:
	
	1. In-process (DLL) server of same bitness as the client
	
	2. 32-bit local server (only for 16-bit clients on a 32-bit OS)
	
	3. Out of process server of same bitness as client
	
	4. Out of process server of other bitness as client
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbOLE
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
