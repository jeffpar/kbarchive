---
layout: page
title: "Q200447: SMS: SMS.MSC Randomly Disappears"
permalink: /kb/200/Q200447/
---

## Q200447: SMS: SMS.MSC Randomly Disappears

{% raw %}

	Article: Q200447
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbMMC kbsms200 kbsms200bug kbsmsAdminkbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting the Microsoft Management Console (MMC), the following message is
	displayed:
	
	  Problem with Shortcut
	
	  The item 'sms.msc' that this shortcut refers to has been changed or moved.....
	
	The remainder of the message shows the nearest match and asks if you want to make
	the shortcut point to this item.
	
	CAUSE
	=====
	
	This message will appear if either of the following conditions is true:
	
	- The file cannot be located.
	
	- The user who is starting the Microsoft Management Console has insufficient
	  permissions to access the file.
	
	There is a known issue with the Microsoft Management Console (MMC). If the MMC
	fails to complete a normal shut down, the Sms.msc file may be removed from the
	system. As a result, the shortcut is not found when the Systems Management
	Server Administrator console is started.
	
	WORKAROUND
	==========
	
	Systems Management Server 2.0 comes with a file called Origmsc.cmd that will
	replace the missing Sms.msc. This command file will also replace the
	Explore.msc. To restore the original files, perform the following steps:
	
	1. Go to the SMS\BIN\<Platform> directory on the site server, where
	  <Platform> is the correct platform (i386 or Alpha) of the computer.
	
	  NOTE: If you are running this on a Remote Administrator user interface, the
	  directory would be SMSADMIN\Bin\<Platform> by default.
	
	2. Run the Origmsc.cmd file.
	
	3. When prompted, press a key to allow the process to continue.
	
	If you selected Yes in the earlier Problem With Shortcut box, the shortcut for
	the Systems Management Server Administrators Console would have been changed. If
	starting the Systems Management Server Administrator console brings up the Open
	With dialog box, you need to correct the Systems Management Server Administrator
	console shortcut to point to the correct Sms.msc file. To correct the shortcut,
	perform the following steps:
	
	1. Right-click the Start button and click Open All Users on the shortcut menu.
	
	2. Go to Programs\Systems Management Server.
	
	3. Right-click the Systems Management Server Administrator console and click
	  Properties on the shortcut menu.
	
	4. Click the Shortcut Index tab.
	
	5. Edit the Target field to reflect the following information:
	
	  <drive:>\SMS\bin\<Platform>\SMS.MSC
	
	  Where <drive:> is the drive that the site server is installed on and
	  <Platform> is the correct platform (i386 or Alpha) of the computer.
	  Note that if you are running this on a Remote Administrator UI, the correct
	  path is SMSADMIN\bin\platform.
	
	6. Click Apply, and then click OK.
	
	At this point, the problem should be corrected, and the Systems Management Server
	Administrator console should appear.
	
	NOTE: This process restores the original Sms.msc file to the system. If you had
	modifications to the Sms.msc that were deleted, you must reapply those changes.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft Management
	Console version 1.1.
	
	
	Additional query words: prodsms smsui mmc
	
	======================================================================
	Keywords          : kbMMC kbsms200 kbsms200bug kbsmsAdmin kbfaq
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
