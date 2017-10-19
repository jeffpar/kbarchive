---
layout: page
title: "Q166221: Can't Use Fully Qualified LU Name in Print Session Properties"
permalink: /kb/166/Q166221/
---

## Q166221: Can't Use Fully Qualified LU Name in Print Session Properties

	Article: Q166221
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The APPC tab in the Print Session Properties dialog box will not allow a user to
	exit the dialog box unless the Local LU Alias is entered. This prevents the user
	from using Fully Qualified LU names.
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem. To resolve this problem, obtain the
	hotfix mentioned below.
	
	NOTE: In order to use the Fully Qualified Name you must do the following:
	
	1. Select the Remote APPC LU alias in the drop down list. This must be done
	  first because the Local LU Alias depends on what is selected in the Remote
	  APPC LU Alias field.
	
	2. Select the Local LU Alias.
	
	3. Select the Fully Qualified Name radio button and fill in the Fully Qualified
	  Name value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
