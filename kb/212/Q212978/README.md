---
layout: page
title: "Q212978: SMS: Description of Preinst.exe for SMS 2.0"
permalink: kb/212/Q212978/
---

## Q212978: SMS: Description of Preinst.exe for SMS 2.0

	Article: Q212978
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes Preinst.exe for Systems Management Server (SMS) 2.0. You
	can find this tool in the Support folder on the SMS CD-ROM, or in the System
	Management Server 2.0 Resource Guide included with Microsoft BackOffice Resource
	Kit 4.5. This article supplements the information contained in the System
	Management Server 2.0 Resource Guide.
	
	MORE INFORMATION
	================
	
	Preinst.exe is a supplemental tool that you can use to manage site hierarchy,
	primarily between parent and child SMS 2.0 sites.
	
	You can run Preinst.exe with the following eight command-line switches:
	
	- /deinstall:<sitecode>
	  Starts an uninstallation of a specified child site, and removes the child site
	  from the parent's database.
	
	- /deljob:<sitecode>
	  Deletes all jobs destined for the specified site. This switch deletes the .job
	  files in the Sms\Inboxes\Schedule.box folder, the associated .p and .i files
	  in the Sms\Inboxes\Schedule.box\ToSend folder, and the associated .srq or
	  .srs files in the Sms\Inboxes\Schedule.box\Outboxes\<sender> and
	  Sms\Inboxes\Schedule.box\Requests folders.
	
	- /delsite:{sitecode,parentsite}
	  Deletes the specified child site from the database where it is run. This
	  switch also deletes all jobs destined for the child site. This switch does
	  not uninstall the secondary site.
	
	- /dump
	  You can only run this switch on a primary site server. The switch writes out
	  copies of the site control files for the site where it is run and its child
	  sites.
	
	- /stopsite
	  Stops all SMS Server services on the site where it is run. This switch also
	  stops SMS services on remote Client Access Point (CAP) servers for the site.
	  This switch does not affect the local Logon Point service
	  (SMS_NT_Logon_Discovery_Agent) if the site server is running on a domain
	  controller, nor does it affect remote logon point servers.
	
	- /syncchild:<sitecode>
	  This switch is similar to attaching a child site to its parent. The parent
	  site sends all configuration information (for example, advertisements and
	  collections) to the specified child site.
	
	
	- /syncparent
	  Causes the current site and all its child sites to send site control files to
	  their parent sites.
	
	- /upgrade:<sitecode>
	  Performs a push install to upgrade the designated secondary site. This switch
	  uses the existing versions of the primary site server's files.
	
	REFERENCES
	==========
	
	For additional information, refer to the Systems Management Server 2.0 Resource
	Guide (page 362).
	
	Additional query words: hman bounce services cycle executive
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
