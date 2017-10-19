---
layout: page
title: "Q168460: SMS: &quot;SMSEXEC.EXE - Lost Delayed-Write Data&quot; Error"
permalink: /kb/168/Q168460/
---

## Q168460: SMS: &quot;SMSEXEC.EXE - Lost Delayed-Write Data&quot; Error

	Article: Q168460
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbMaintMan smsmaintman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Systems Management Server logon server is out of disk space when the
	Maintenance Manager service attempts to write to its Domain.ini file during a
	normal cycle, a dialog box appears on the Systems Management Server site server,
	with the following message:
	
	  SMSEXEC.EXE - Lost Delayed-Write Data:
	  The system was attempting to transfer file data from buffers to
	  <hex>\SERVER\VOLUME\SMS\logon.srv\DOMAIN._._. The write operation
	  failed, and only some of the data may have been written to the file. saying
	  essentially a "Lost delayed write occurred writing
	  \\<server>\<vol>\SMS\LOGON.SRV\DOMAIN._N_...".
	
	The Maintenance Manager thread will stop responding (as evidenced by no activity
	in the Maintman.log), and .raw files will back up until you click OK.
	
	CAUSE
	=====
	
	Maintenance Manager does not test for adequate disk space before attempting to
	write to the files it maintains on the logon servers.
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- Ensure that the Systems Management Server logon servers are properly
	  maintained, and do not run out of disk space.
	
	  -or-
	
	- Create adequate disk space on the Systems Management Server logon server,
	  then click OK in the dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. This problem was corrected in the latest Microsoft
	Systems Management Server 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbMaintMan smsmaintman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
