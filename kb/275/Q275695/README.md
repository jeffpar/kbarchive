---
layout: page
title: "Q275695: SMS: Recovering from Wrong Sender Acct. on Secondary Site Server"
permalink: kb/275/Q275695/
---

## Q275695: SMS: Recovering from Wrong Sender Acct. on Secondary Site Server

	Article: Q275695
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When installing a Systems Management Server (SMS) secondary site server, you are
	prompted for a user name and password for the sender address. The secondary site
	uses this account to connect back to the parent site when transferring data up
	the hierarchy. If you accidentally enter an incorrect user name or password, the
	secondary site may not be able to inform the parent that the installation is
	complete, and the SMS Administrator console will not let you modify any
	properties for the new secondary site as it still believes it is not installed,
	or under construction.
	
	MORE INFORMATION
	================
	
	To enable the secondary site server to pass on the site control file that
	signals its completion, follow these steps:
	
	1. Enable the guest account on the parent's site server if it is a member
	  server, or in the domain of the parent site if it is a domain controller.
	
	2. In Windows Explorer, give the Everyone group full NTFS permissions to the
	  SMS\Inboxes\Despoolr.box\Receive directory on the parent site. Make a note of
	  the current file permissions before making the modification.
	
	3. If you specified an incorrect user name (or both an incorrect user name, and
	  password) during the secondary site installation, the secondary site will now
	  be able to connect to its parent, and you can proceed with step 5.
	
	4. If you specified an incorrect password but the correct user name during the
	  secondary site installation, temporarily rename this account on the parent
	  site. This will let the sender for the secondary site connect as a guest,
	  which has been granted access. If the account in question is the SMS service
	  account of the parent site, renaming an account that is in use is generally
	  not desirable. Instead, you could run SMS Setup on the parent site, and
	  specify a new SMS service account before renaming it.
	
	5. After the secondary site shows up in the Administrator console as installed,
	  navigate to the Site Settings\Addresses directory, and specify the correct
	  account properties.
	
	6. Change the NTFS file permissions back to the default setting in the
	  SMS\Inboxes\Despoolr.box\Receive directory.
	
	7. Disable the guest account if it was previously enabled.
	
	Another option is to completely reinstall the secondary site. However, unless you
	perform a CD-ROM-based installation, this causes the secondary site image to be
	transferred across the network again.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
