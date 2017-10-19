---
layout: page
title: "Q127768: PC Gen:Creating&#92;Copying Users for Test Postoffice w/ Real Data"
permalink: /kb/127/Q127768/
---

## Q127768: PC Gen:Creating&#92;Copying Users for Test Postoffice w/ Real Data

	Article: Q127768
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are times when you may need to create a test postoffice with live users
	and/or data from your system. The following are possible reasons for creating
	test postoffices follow:
	
	- Test environment for internal developers.
	
	- Testing an upgrade path.
	
	- Volumetric\benchmark planning.
	
	MORE INFORMATION
	================
	
	Depending upon the scope of testing required, you should be able to use one of
	the following prototypes:
	
	1. Exact copies of existing postoffices, complete with mail message files
	  (.MMFs) and message transfer agents (MTAs).
	
	  In this case you can do an MS-DOS XCOPY command of the existing postoffice to
	  a separate network. Factors to consider:
	
	   - Separate network is preferable so that any Ethernet or NetBIOS based
	     broadcasts will not conflict with regular business during testing.
	
	   - If you decide to rename these postoffices or networks, please see the
	     following article in the Microsoft Knowledge Base:
	
	  Q66007 PC Adm: Changing Network and Postoffice Names
	
	     If you are creating a multiple postoffice environment, keep in mind that
	     because mail moves via batch processing (MTA), you will need to select a
	     specific point in time to cease operation and copy the postoffices.
	
	2. Subset of the system with all the moving parts, but smaller volume and
	  quantities.
	
	  In this case, it is possible to create dummy postoffices using the same
	  install diskettes that you used to create the initial postoffices. This will
	  ensure that you have serial number integrity in the event of needing an MTA
	  on your system.
	
	  IMPORTANT: When you use the MoveUser utility, do not delete the user(s) from
	  the originating postoffice.
	
	  Once you have created the necessary postoffices, use the MOVEUSER.EXE utility
	  to move a set of users to the new postoffice. See page 336 of the version 3.2
	  of Microsoft Mail for PC Networks "Administrator's Guide" for directions on
	  using MOVEUSER.EXE.
	
	3. Select users for specific situation testing.
	
	  In this case, it is possible to create dummy postoffices using the same
	  installation diskettes that you used to create the initial postoffices. This
	  will ensure that you have serial number integrity in the event of needing an
	  MTA on your system.
	
	  IMPORTANT: When you use the MoveUser utility, do not delete the user(s) from
	  the originating postoffice.
	
	  Once you have selected the users for inclusion in the test, use the MoveUser
	  utility to move their accounts to the test postoffice. See page 336 of the
	  version 3.2 of Microsoft Mail for PC Networks "Administrator's Guide" for
	  directions on using MOVEUSER.EXE.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
