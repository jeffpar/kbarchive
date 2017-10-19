---
layout: page
title: "Q149442: Remote OLE Links Between Documents Are Broken"
permalink: /kb/149/Q149442/
---

## Q149442: Remote OLE Links Between Documents Are Broken

	Article: Q149442
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the component files used by an application are created on a shared network
	drive, the links established in the compound documents do not contain relative
	path specifications. An application based on the exchange of data between the
	various documents through OLE links will exhibit the following symptoms: If the
	users move the client files to their local drives, the links between the
	component files cannot be reestablished without unreasonable user intervention,
	and the application cannot function properly. The application will report
	various errors, such as "file not found."
	
	CAUSE
	=====
	
	When the component files are created on or saved to the network directory and
	then moved to identical relative positions on a different machine, the OLE links
	in compound documents are being broken. The same functionality works correctly
	if the files are originally created on the local drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest U.S. Service Pack for Windows NT. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
