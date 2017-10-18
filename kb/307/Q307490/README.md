---
layout: page
title: "Q307490: Authoring MOM Reports With Access 2002 Is Not Recommended"
permalink: kb/307/Q307490/
---

## Q307490: Authoring MOM Reports With Access 2002 Is Not Recommended

	Article: Q307490
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Operations Manager 2000 
	- Microsoft Access 2002 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you author any new Microsoft Operations Manager (MOM) reports by using
	Microsoft Access 2002, MOM reporting may not work on Access 2000 due to
	compilation errors.
	
	CAUSE
	=====
	
	This behavior occurs because MOM reporting is developed by using Access 2000
	which also works on Access 2002. However, after reporting is opened by using
	Access XP, the corresponding Access database automatically changes all of its
	OLB references to revert to Access 2002 files. When the same Access database is
	used again in Access 2000, some of the OLB references do not change to refer to
	Access 2000 files. Because some referenced objects are not available, the
	compilation error occurs.
	
	WORKAROUND
	==========
	
	To work around this behavior:
	
	1. Start MOM reporting.
	
	2. On the File menu, click Enter Design Mode. When you do this, the design mode
	  of the Access database is displayed.
	
	3. On the View menu, click Code to open a Microsoft Visual Basic for
	  Applications (VBA) project for the Access database.
	
	4. On the Tools menu, click References to view a list of objects that are
	  referenced by the Access database.
	
	5. Click to clear the "Microsoft Graph 10.0 object library" check box.
	
	6. In the list of references, click to select the "Microsoft Graph 9.0 object
	  library" check box.
	
	7. Close the VBA project, and then quit Access.
	
	8. Start MOM reporting. Note that the feature works correctly.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbAccessSearch kbAccess2002 kbOpMan2000 kbOpMansearch kbAccess2002Search
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
