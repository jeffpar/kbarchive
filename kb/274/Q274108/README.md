---
layout: page
title: "Q274108: SMS: How to Troubleshoot NDS Logon Point Creation Failures"
permalink: /kb/274/Q274108/
---

## Q274108: SMS: How to Troubleshoot NDS Logon Point Creation Failures

	Article: Q274108
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 05-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server (SMS) 2.0 has the ability to establish Novell NDS
	volume objects as logon points to an SMS site. It may occasionally be necessary
	to troubleshoot failures in the creation process of that logon point.
	
	You can enable logging for the SMS_NDS_LOGON_SERVER_MANAGER, which will produce
	an nd_logon.log file in the sms\logs directory on your site server. Review of
	this log will provide you with valuable information concerning the cause of any
	failures.
	
	MORE INFORMATION
	================
	
	There are two pieces of information that SMS requires to successfully connect to
	the Novell resource:
	
	- The security, as established in the Admin console, of a SITE SYSTEM
	  connection account.
	
	- The proper path to the volume object where the SMSLOGON folder will be
	  created.
	
	Troubleshooting Security
	------------------------
	
	1. Log on to the Site server as the account that was set as the Site System
	  connection account for NDS.
	
	  This will tell you whether the account can successfully authenticate to the
	  NDS tree.
	
	2. Then try to connect to the volume where the SMSLOGON folder will be created.
	  Manually create a directory and then delete it.
	
	  This process will tell you whether the connection account has the correct
	  credentials to create the logon point.
	
	Troubleshooting the Path
	------------------------
	
	By referencing the nd_logon.log, verify that the path selected was typed
	correctly. The correct path should be as follows:
	
	  \\NDS_TREE_Name\.volume_object.OU.O
	
	NOTE:
	
	- Depending on the Novell tree hierarchy, there may be more OUs (containers) in
	  the path. The spelling of the tree name and all the objects in that path is
	  of great importance.
	
	- The volume object needs to be the object as it appears in NWADMIN (Novell's
	  administrative utility), not just the name of the volume, such as "Apps" or
	  "Vol1." The volume object consists of the file server upon which the volume
	  is installed. For example, if a file server is called "FS1" and the volume is
	  "Vol1," the volume object would be "FS1_vol1." This object should be found in
	  the container in which the file server resides.
	
	REFERENCES
	==========
	
	For more information on integrating and installing Novell resources in SMS 2.0,
	see the "Integrating Systems Management Server 2.0 with Novell NetWare" white
	paper at the following Microsoft Web site:
	
	  http://www.microsoft.com/smsmgmt/deployment/smswithnovell.asp
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
