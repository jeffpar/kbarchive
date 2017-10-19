---
layout: page
title: "Q317893: SMS: Sender Does Not Respond to Schedule or Rate Limit Changes"
permalink: /kb/317/Q317893/
---

## Q317893: SMS: Sender Does Not Respond to Schedule or Rate Limit Changes

	Article: Q317893
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbPackage
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience a problem when the Sender component of the Systems Management
	Server (SMS) Executive service has begun transmission of a package to a remote
	SMS server site. During the current site-sending job, the Sender component may
	not accept changes to the Address properties.
	
	Example
	-------
	
	The sender has begun sending a 600 megabyte (MB) file to a remote site, and the
	address for that remote site has a 50 percent bandwidth-use throttle or rate
	limit. If the rate limit is changed to 100 percent during the sending process,
	the sender thread does not detect the change to the address properties. When
	this occurs, the sender thread continues to send at the 50 percent limit.
	
	This limitation applies to both the rate limit and the outbox availability
	schedule. Because of this, if the schedule had been closed for this address
	after sending had begun in the earlier example, the large package file would
	still be sent to the remote site. The sender does not stop sending data to the
	destination site until it has completed the sending of any package that is
	currently in progress.
	
	Even if you try to stop the SMS Executive service, in progress send requests do
	not stop, and the SMS Executive service does not stop until the current sending
	job is done.
	
	CAUSE
	=====
	
	The sender thread loads an address' rate limit and schedule upon creation, and
	it does not refresh the address information while the package and instruction
	file are being sent. Because of this, the sender adjusts the sending rate
	according to the schedule when the thread is started, but it does not adjust for
	any changes that occur after the thread has been created.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English SMS 2.0 Post SP3 version of this fix should have the following file
	attributes or later:
	
	  Date         Time   Version        Size     File name    Platform
	  -----------------------------------------------------------------
	  01-Mar-2001  22:05  2.0.1493.3273   37,136  Connras.dll  Alpha 
	  01-Mar-2001  22:05  2.0.1493.3273  212,240  Sender.dll   Alpha 
	  01-Mar-2001  22:05  2.0.1493.3273   23,920  Connras.dll  Intel
	  01-Mar-2001  22:05  2.0.1493.3273  134,048  Sender.dll   Intel
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains these files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Hotfix Installation Instructions
	--------------------------------
	
	Apply this fix to all sites in the SMS hierarchy in which the sender needs to
	respond immediately to a change in the schedule or the bandwidth setting.
	
	Using the Hotfix Installer:
	
	NOTE: You can use this method only on Intel-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Note that
	  Q317893.exe is a Microsoft SMS Installer script that updates specific files
	  on your site server.
	
	2. Log on to the site server by using an account with administrative rights.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run the Q317893.exe tool, and then follow the directions in the wizard. You
	  can run the file in Quiet mode by using the /s switch.
	
	Manually Installing the Hotfix:
	
	1. Stop the SMS Site Component Manager and SMS Executive services on the site
	  server.
	
	2. Replace the Sender.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file that is included with the hotfix.
	
	3. Replace the Conras.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file that is included with the hotfix.
	
	4. Restart the SMS Site Component Manager and SMS Executive services.
	
	
	Additional query words: prodsms lansend
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbPackage 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
