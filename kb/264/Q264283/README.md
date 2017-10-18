---
layout: page
title: "Q264283: PC Adm: Error Message: Recipients Mail Address Is Incorrect..."
permalink: kb/264/Q264283/
---

## Q264283: PC Adm: Error Message: Recipients Mail Address Is Incorrect...

	Article: Q264283
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send e-mail, you may receive immediate non-delivery reports
	(NDRs) that contain the following error message:
	
	  Recipients mail address is incorrect or does not exist.
	
	The global address list is displayed correctly and you can obtain details on
	users (therefore the .usr file exists and is valid). You can send e-mail to
	users on another postoffice by using the other postoffice's list and global
	address list.
	
	If you delete the definition in External-Admin, quit Admin, and then recreate the
	definition, you still receive the error message.
	
	CAUSE
	=====
	
	This issue can occur because of the postoffice definition or routing.
	
	RESOLUTION
	==========
	
	To resolve this issue, check for corrupted .xtn files or a corrupted Network.glb
	file:
	
	1. Run the Netdump utility against the postoffice to determine which .xtn file
	  is associated with that postoffice. The following is an example of the
	  netdump command line:
	
	  NETDUMP admin [-D[d|path]] [-Ffilename] [-Llogfile] -Ppassword
	
	  Check the second column from the right for the .xtn file. Check for that same
	  hexadecimal ID (hexid) in the Xtn folder on the MS Mail postofficess.
	
	2. Make sure that the .xtn file size is divisible by 698.
	
	3. If it is, try to address a message in the client, but do not use the global
	  address list, look under other postoffices. If all the postoffice definitions
	  that belong to that network are not displayed, the .xtn file is corrupted.
	
	4. Restore the .xtn file from a backup (if possible).
	
	5. If you cannot restore the .xtn file from a backup, delete the definitions in
	  External-Admin. Then quit Admin completely.
	
	6. Restart Admin and re-add the network name and all postoffices. This
	  re-creates the .xtn file for that network name.
	
	7. If the preceding steps do not resolve this issue, check the Network.glb file
	  for corruption. If the Network.glb file is corrupted, restore it from a
	  backup if possible.
	
	Additional query words: GAL
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	Issue type        : kbprb
	
	=============================================================================
	
