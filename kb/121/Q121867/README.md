---
layout: page
title: "Q121867: PC Setup: Incorrect Disk Space Requirement for 3.2 Update"
permalink: /kb/121/Q121867/
---

## Q121867: PC Setup: Incorrect Disk Space Requirement for 3.2 Update

	Article: Q121867
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 11 of the Microsoft Mail version 3.2 "Administrator's Guide" incorrectly
	states that when a postoffice is updated, the Setup program backs up all the
	Mail system files, then removes them when the backup is successful. It asks that
	there be enough disk space on the server equal to the amount currently occupied
	by the server and client programs and the postoffice data files. However, the
	Setup program does not create a backup of the entire database, and therefore, it
	does not require as much disk space as it claims.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
