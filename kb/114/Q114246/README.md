---
layout: page
title: "Q114246: PC Adm: Effects of Changing Network or Postoffice Names"
permalink: kb/114/Q114246/
---

## Q114246: PC Adm: Effects of Changing Network or Postoffice Names

	Article: Q114246
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	Changing either the network or postoffice name in an existing Microsoft
	Mail postoffice affects the Microsoft Mail system in several ways. If you
	change names by selecting Config, Password from the Microsoft Mail
	Administrator program (ADMIN.EXE), the following will be true:
	
	- All mail that was sent prior to the name change contains the old address in
	  the file header. If anyone tries to reply to one of these messages, the mail
	  will not be delivered because the address is no longer valid.
	
	- All sent, unopened, and registered mail no longer contains the information
	  needed to successfully return a confirmation message to the originator
	  because the originator's address no longer exists.
	
	- All Personal Address Lists and Personal Address Books that contain addresses
	  with the old name must be updated by removing and re-adding each user whose
	  address has changed.
	
	- New address lists need to be exported to all external Microsoft Mail
	  postoffices and gateway-accessed mail systems.
	
	- All other postoffices should update their Network/Postoffice lists with the
	  Mail Administrator (ADMIN.EXE) External-Admin, Modify command.
	
	  NOTE: If the Network name is changed, there may be additional complications.
	
	   - If the network name already exists on other postoffices, those postoffices
	     will not be able to simply modify the name; they must delete the old name
	     and add the new postoffice name to the existing network list. These
	     postoffices will then have to get completely new address lists.
	
	   - If the postoffice that changed its Network name was the directory
	     synchronization (Dir-Sync) server, any requestor cannot simply change its
	     external definition for the Dir-Sync server postoffice, but is forced to
	     delete the definition with the old network name and create a new one. The
	     postoffices will also have to re-register the Dir-Sync server on the
	     requestor by issuing a Config, Dir-Sync, Requestor, Registration command.
	
	   - Modifying a network name is an "all or nothing" proposition. If there are
	     multiple postoffices in a network list, you cannot just change the network
	     name for some of the postoffices in the list. If the postoffice with the
	     changed network name is splitting away from a remaining network, you will
	     again have to delete, re-create, re-register, and update the address
	     lists.
	
	- All Microsoft Mail Remote (MS-DOS or Windows) users need new Data disks or
	  they will no longer be able to connect to the postoffice.
	
	- If you are using Schedule+, all user-granted access privileges must be
	  deleted and then re-added because the friendly name will no longer point to a
	  valid user mailbag ID.
	
	- If Schedule Distribution is being used, ALL POF files will have to be deleted
	  also. This file contains Assistant routing information in the specific user's
	  record, if one is designated by the user. If the Assistant's postoffice is
	  renamed, the 10 x 10 x 10 routing information becomes invalid.
	
	  This will cause two things to occur:
	
	   - The assistant will be denied access to the user's calendar file.
	
	   - The assistant will not receive the meeting request/response messages.
	
	Additional query words: 3.00 3.20 pal pab dirsync dirsynch admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
