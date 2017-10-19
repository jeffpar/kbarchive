---
layout: page
title: "Q252856: Inbox Manager Does Not Update the Permissions on CAP Folders"
permalink: /kb/252/Q252856/
---

## Q252856: Inbox Manager Does Not Update the Permissions on CAP Folders

	Article: Q252856
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbConfig kbSecurity kbServer kbsms200 kbsms200bug kbCAP kbInboxMgr kbUpgrade
	Last Modified: 27-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the reasons that the Inbox Manager does not update
	permissions on client access point (CAP) folders after you upgrade Systems
	Management Server (SMS) version 2.0 Released to Manufacturing (RTM) to SMS
	Service Pack 1 (SP1).
	
	MORE INFORMATION
	================
	
	After the CAP and inboxes are created, the Inbox Manager does not reset the
	share and folder permissions in the CAP. The only time that the permissions are
	set is when the CAP is created or being re-created (for example, the Inbox
	Manager detects that the CAP or inbox folders are missing).
	
	The administrator can modify the default permissions if they need to be changed.
	
	In SMS version 2.0 (RTM), the CAP share permissions had been configured as:
	
	+-------------------------------+
	| Administrators | Full Control | 
	+-------------------------------+
	| Users          | Change       | 
	+-------------------------------+
	| Guests         | Change       | 
	+-------------------------------+
	
	In SMS SP1, SMS Service Pack 2 (SP2), and Service Pack 3 (SP3), the share
	permissions changed to Everyone - Full Control.
	
	In SMS version 2.0, the \Cap_xxx folder had the same NTFS file system permissions
	as the share.
	
	In SMS SP1, the \Cap_xxx folder permissions changed to:
	
	+-------------------------------+
	| Administrators | Full Control | 
	+-------------------------------+
	| Users          | Read         | 
	+-------------------------------+
	| Guests         | Read         | 
	+-------------------------------+
	
	In SMS SP2 and SMS SP3, the \Cap_xxx folder permissions have been modified to:
	
	+-----------------------------------+
	| Administrators | Full Control     | 
	+-----------------------------------+
	| Users          | Read and Execute | 
	+-----------------------------------+
	| Guest          | Read and Execute | 
	+-----------------------------------+
	
	The following folders: \Clicomp.box, \Clidata.box, \Clifiles.box, \Offerinf.box,
	and \Pkginfo.box in the CAP folder are configured with Read NTFS permissions for
	SMS RTM version and SMS SP1.
	
	The following folders: \Clicomp.box, \Clidata.box, \Clifiles.box, \Offerinf.box,
	and \Pkginfo.box in the CAP folder are configured with Read and Execute NTFS
	permissions for SMS SP2 and SMS SP3.
	
	The following folders: \Ccr.box, \Ddr.box, \Inventry.box, \Sinv.box, and
	\Statmsgs.box had been set to Change NTFS permissions in SMS version 2.0, but
	the folders have been modified to Special Access permissions (Read, Write, and
	Execute) in SMS SP1, SMS SP2, and SMS SP3.
	
	
	REFERENCES
	==========
	
	CAP folders are listed in Appendix A of the Systems Management Server 2.0
	Resource Guide.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbSecurity kbServer kbsms200 kbsms200bug kbCAP kbInboxMgr kbUpgrade 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
