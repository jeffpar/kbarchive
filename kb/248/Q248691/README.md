---
layout: page
title: "Q248691: INFO: DDUPD Takes Data Folder Rather Than Srcsafe.ini on Command"
permalink: kb/248/Q248691/
---

## Q248691: INFO: DDUPD Takes Data Folder Rather Than Srcsafe.ini on Command

	Article: Q248691
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): _IK kbSSafe500 kbSSafe600 _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DDUPD utility in Visual SourceSafe 6.0 requires the user to provide the path
	to the data folder, not the path to the Srcsafe.ini file.
	
	MORE INFORMATION
	================
	
	The DDCONV utility can take as an argument either the path to the data folder
	or, by using the -m switch, the path to the Srcsafe.ini file:
	
	  " DDCONV ..\data
	
	  DDCONV C:\Program Files\Microsoft Visual Studio\Common\VSS\Data
	
	  DDCONV -m ..\SrcSafe.ini
	
	  DDCONV -m C:\Program Files\Microsoft Visual Studio\Common\VSS\SrcSafe.ini "
	  (without the quotation marks)
	
	The DDUPD utility can only take the path to the data folder:
	
	  " DDUPD ..\data
	
	  DDUPD C:\Program Files\Microsoft Visual Studio\Common\VSS\Data " (without the
	  quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK kbSSafe500 kbSSafe600 _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
