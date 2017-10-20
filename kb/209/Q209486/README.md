---
layout: page
title: "Q209486: PC DB: Changing the Serial Number on an MS Mail Postoffice"
permalink: /kb/209/Q209486/
---

## Q209486: PC DB: Changing the Serial Number on an MS Mail Postoffice

{% raw %}

	Article: Q209486
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you change serial numbers on an MS Mail postoffice, you need to do more
	than just change the serial number.
	
	If you change a serial number and you do not perform the proper steps, you may
	experience some or all of the following problems:
	
	- Users cannot read new mail.
	
	- Users who are currently logged on receive various error messages until they
	  log off and log on again.
	
	- Remote mail users cannot gain access to their mail.
	
	- Asynchronous (async) postoffices cannot connect.
	
	MORE INFORMATION
	================
	
	To avoid the problems that are listed in the "Summary" section of this article,
	perform the following steps when you change a serial number:
	
	1. Prepare the new serial number:
	
	  a. Install new diskettes to a temporary directory, and make sure that you
	     install the access component for all gateways.
	
	  b. Turn on the global address list, if applicable.
	
	  c. Copy the Access.glb, Access2.glb, Access3.glb, and Admin.nme files from
	     old postoffice to new postoffice.
	
	2. Create new init disks for all remote mail users. You can send this
	  information as an attachment to the remote mail users. Tell these users to
	  download the e-mail and keep it in their mail until the update. All remote
	  mail users must receive this e-mail before the change or they will not be
	  able to get into mail.
	
	3. Send e-mail to all remote mail users to inform them of the change date.
	
	4. Send the new serial number information to all administrators of asynchronous
	  postoffices and inform them of the change date.
	
	5. To make sure that all users log on and download all mail before you change to
	  a new serial number:
	
	  a. Rename the P1 directory to Pold.
	
	  b. Send a message to all of the users on the postoffice.
	
	  c. Check the current time and date. Wait a short amount of time, and then
	     check the MMF directory to make sure that all MMF files have been updated.
	
	  d. For any MMF files that are not updated, start the Administrator program
	     and recover the user's password, and then log on to and off from the
	     client to download all the user's mail, or the user will be unable to read
	     any mail that is currently on the server.
	
	6. Rename the existing Master.glb file to Oldmast.glb.
	
	7. Add the new serial numbered Master.glb file.
	
	8. Rename Pold to P1.
	
	9. Make sure that all of the administrators of asynchronous postoffices have
	  changed your serial number in the external setup.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.2a,3.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
