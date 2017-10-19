---
layout: page
title: "Q198837: Connection Manager No Longer Works after Upgrade to Windows 98"
permalink: /kb/198/Q198837/
---

## Q198837: Connection Manager No Longer Works after Upgrade to Windows 98

	Article: Q198837
	Product(s): Internet Information Server
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Connection Manager profiles no longer work properly after you upgrade from
	Windows 95 to Windows 98 in DOS mode or from a previous version of DOS.
	
	CAUSE
	=====
	
	DOS does not understand long file names. The Windows 98 upgrade determines that
	the c:\progra~1\connec~1 directory where Connection Manager is located is
	actually the Internet Connection Wizard included with Windows 98. The upgrade
	process incorrectly modifies several files and directory locations in the
	registry. The previously configured connectoid will no longer work and may be
	removed from the Desktop.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- When you upgrade from Windows 95 to Windows 98, upgrade from Windows instead
	  of a DOS prompt or previous version of DOS.
	
	-OR-
	
	- If you must upgrade from DOS, you will need to reinstall the Connection
	  Manager connectiod that you created in Connection Manager Administration Kit
	  (CMAK). In most cases you can simply re-run the *.exe file you created. If
	  you no longer have the executable file, you may need to contact your
	  Corporate IT department or ISP who created the file. If you created the
	  profile from the IIS 4.0 CMAK, you will need to rebuild the profile by
	  running the CMAK Wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 98.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbWin95search kbWin98search kbiis400 kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
