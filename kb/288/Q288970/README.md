---
layout: page
title: "Q288970: SMS: RM Can't Process Transactions if Trans. ID Isn't in Sync"
permalink: /kb/288/Q288970/
---

## Q288970: SMS: RM Can't Process Transactions if Trans. ID Isn't in Sync

	Article: Q288970
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbServer kbsms200 kbReplMgr
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you restore a site, the site control file and the status summarizers of
	Componentstatus, System_status, Offerstatus and PKGstatus are not propagated to
	the parent and child sites. Even if the Transaction ID is not synchronized,
	Replmgr.log on the restored site does not log any error messages.
	
	CAUSE
	=====
	
	This behavior occurs because every site server sends transaction-based files in
	both directions to the parent and child sites in the hierarchy. If the
	recovering site's Transaction ID is of a lower number than any .trs files on the
	parent or child sites, the files are not processed.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this behavior, use the following steps in which the following
	three sample sitecodes are used:
	
	  M01 = central site
	  M02 = primary child site
	  M03 = secondary site under M02
	
	1. If the Replication Manager Transaction ID was recorded at the time of failure
	  on the restored site, multiply the number of days for which the site was down
	  by 1000, and then add this number to the current value of the Transaction ID.
	
	  a. Stop SMS_Executive and SMS_Site_Component_Manager.
	
	  b. Update this value on the recovered site (M02) server in the following
	     registry key:
	
	  HKLM\Software\Microsoft\SMS\Components\SMS_Replication_Manager\Transaction ID
	
	  c. Start SMS_Executive and SMS_Site_Component_Manager.
	
	2. If the Replication Manager Transaction ID was not recorded prior to the site
	  restoration, open the M02.trs file in the SMS\Inboxes\Replmgr.box\history
	  folder on the restored site's parent (M01) and all child sites (M03) of M02.
	
	  a. SMS\Inboxes\Replmgr.box\history on M01 site includes the file, M02.trs.
	
	  b. SMS\Inboxes\Replmgr.box\history on M02 site includes the files, M01.trs
	     and M03.trs.
	
	  c. SMS\Inboxes\Replmgr.box\history on M03 site includes the files, M01.trs
	     and M02.trs.
	
	  d. To determine the highest Transaction ID that was received from the
	     restored Primary site (M02), open the
	     \SMS\Inboxes\Replmgr.box\history\M02.trs file on the parent site (M01):
	
	  SMS_COMPONENT_STATUS_SUMMARIZER]
	  M02=7382
	  [SITECTRLCT2SRCSITE]
	  M03=7280
	  M02=7279
	  [SMS_SITE_SYSTEM_STATUS_SUMMARIZER]
	  M02=7378
	  [PKGSTATUSDATA]
	  M0100001|M02|NT4_RK|1=16
	  M0100001|M03|SMSSEC|1=17
	  M0100001|M03|["DISPLAY=\\SMSSEC\"]MSWNET:["SMS_SITE=M03"]\\SMSSEC\|2=18
	  M0100001|M02|["DISPLAY=\\NT4_RK\"]MSWNET:["SMS_SITE=M02"]\\NT4_RK\|2=18
	  M0100002|M02|["DISPLAY=\\NT4_RK\"]MSWNET:["SMS_SITE=M02"]\\NT4_RK\|2=1874
	  M0100002|M03|SMSSEC|1=1874
	  M0100002|M03|["DISPLAY=\\SMSSEC\"]MSWNET:["SMS_SITE=M03"]\\SMSSEC\|2=1874
	  M0100002|M02|NT4_RK|1=1874
	  M0100004|M03|SMSSEC|1=3350
	  M0100004|M02|NT4_RK|1=3350
	  M0100004|M02|["DISPLAY=\\NT4_RK\"]MSWNET:["SMS_SITE=M02"]\\NT4_RK\|2=3351
	  M0100004|M03|["DISPLAY=\\SMSSEC\"]MSWNET:["SMS_SITE=M03"]\\SMSSEC\|2=3351
	  M0100005|M02|NT4_RK|1=6865
	  M0100005|M02|["DISPLAY=\\NT4_RK\"]MSWNET:["SMS_SITE=M02"]\\NT4_RK\|2=6865
	  M0100005|M03|["DISPLAY=\\SMSSEC\"]MSWNET:["SMS_SITE=M03"]\\SMSSEC\|2=6866
	  M0100005|M03|SMSSEC|1=6866
	  [SMS_OFFER_STATUS_SUMMARIZER]
	  M02=6927
	  [PKGSRVREPLDATA]
	  M0100001=18
	  M0100002=1876
	  M0100004=3351
	  M0100005=6866
	
	  e. Look for the highest number, which in this case is 7382.
	
	  f. Add 20 to this number.
	
	  g. Stop SMS_Executive and SMS_Site_component_Manager.
	
	  h. Update this value on the recovered site (M02) server in the following
	     registry key:
	
	  HKLM\Software\Microsoft\SMS\Components\SMS_Replication_Manager\Transaction ID
	
	  i. Start SMS_Executive and SMS_Site_Component_Manager.
	
	MORE INFORMATION
	================
	
	Replication Manager is a thread component that handles both incoming and
	outgoing inter-site replication. Replication Manager packages the objects into
	replication files and hands them off to Scheduler as mini-jobs to be sent to the
	appropriate locations by a sender. Replication Manager also analyzes incoming
	files, and if appropriate, replicates the objects to appropriate directories on
	the server.
	
	Additional query words: prodsms recovery transaction id
	
	======================================================================
	Keywords          : kbServer kbsms200 kbReplMgr 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	
