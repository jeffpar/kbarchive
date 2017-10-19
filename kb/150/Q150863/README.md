---
layout: page
title: "Q150863: XADM: Mail Box Cleanup Agent has no Permissions"
permalink: /kb/150/Q150863/
---

## Q150863: XADM: Mail Box Cleanup Agent has no Permissions

	Article: Q150863
	Product(s): Microsoft Windows NT
	Version(s): winnt:Part 2
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Resource Kit Part 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Mail Box Cleanup Agent from the Microsoft Exchange
	Resource Kit, when you try to set permissions on the object from within the
	Microsoft Exchange Administrator program, the Permissions tab will not appear in
	the MB Cleanup Agent Properties Dialog box.
	
	RESOLUTION
	==========
	
	Open the Microsoft Exchange Administrator program with the /R command line
	switch. Select the Mailbox Cleanup Agent and press <SHIFT>+<ENTER>
	to get Raw Properties. Scroll down to NT-SECURITY-DESCRIPTOR and click the
	Editor button. A dialog will come up asking for the Editor Type. Select NT
	security descriptor and click OK. A permissions dialog will come that allows you
	to change permissions on the Mail Box Cleanup Agent.
	
	Additional query words: MCA
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : winnt:Part 2
	
	=============================================================================
	
