---
layout: page
title: "Q215130: Scheduler Routes &quot;Send&quot; Requests to Deleted Addresses"
permalink: kb/215/Q215130/
---

## Q215130: Scheduler Routes &quot;Send&quot; Requests to Deleted Addresses

	Article: Q215130
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbScheduler kbSender kbSMSSender
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) depends on accurate addressing for site-to-site
	communications. SMS 2.0 includes a status message system that displays warning
	or error messages that reflect the site's general condition.
	
	If you see a status message code of 3400 or 3500, there may be a poorly
	configured or nonfunctional site address. These codes may also occur if a site
	has exchanged data with a child site that has been improperly removed or has
	stopped working.
	
	These error messages occur when the SMS Scheduler component attempts to send data
	to a site that no longer exists in the site.
	
	When this issue occurs, you may see the following entry in the Sched.log file:
	
	  There is no address defined for site <site code>
	
	RESOLUTION
	==========
	
	To resolve this issue and prevent the status messages from appearing on the
	site, use either of the following methods:
	
	Method 1
	--------
	
	1. Create a folder on a computer that is running Microsoft Windows NT
	  Workstation or Server and has no SMS site system components (such as a Logon
	  Point or Distribution Point), and share the folder as SMS_SITE.
	
	2. Start the Administrator console for SMS.
	
	3. Click the Site Database\Site Hierarchy\<Site Name>\Site
	  Settings\Addresses node.
	
	4. Right-click in the right pane, point to New, and then click Standard Sender
	  Address.
	
	5. Type the destination site code that is referred to in the error message with
	  code 3400.
	
	6. In the Site Server Name box, type the server name.
	
	7. Configure an account that has rights on the server with the SMS_SITE share,
	  and then quit the console.
	
	8. After new files are no longer being added to the SMS_SITE share, remove the
	  share and wait to see if additional error messages occur.
	
	9. If there are no further error messages, remove the folder and the address. If
	  they continue, re-enable the share.
	
	Method 2
	--------
	
	Check for any "Send Request" entries at the beginning of a line in the Sched.log
	file, or use the "preinst.exe /deljob" command to clean up the files. The
	package status is likely to have a status of "Pending"; the request's file name
	contains the site code of the affected or orphaned site. The error messages stop
	occurring after you identify and remove these files.
	
	Check the SMS\Inboxes\Schedule.box\Outboxes\LAN folder for the file names that
	are referenced in the Sched.log file. Move these files to another folder, making
	sure to move only the files that contain the affected site's site code. Moving
	the wrong files can cause problems on a functional site. Check the Sched.log
	file later to confirm their removal. Status code 3400 should not be reported
	again for the orphaned site.
	
	To clean up the site by using the "preinst /deljob" command:
	
	1. On the parent site on which the job was created, open a command window.
	
	2. Confirm that the Preinst.exe file is located in a folder on the path, or
	  change to the SMS\Bin\<Platform> folder.
	
	3. Run the following command, where <sitecode> is the site code of the
	  affected site:
	
	  preinst /deljob:<sitecode>
	
	This cleans up all jobs or commands that point to the affected site code.
	
	4. After the job has been deleted, you must manually remove the "send" requests
	  from the parent site. To do this, open the SMS\Inboxes\Schedule.box folder
	  and remove any requests that point to the affected site.
	
	MORE INFORMATION
	================
	
	For more information about creating, configuring, or deleting addresses, see the
	Systems Management Server Administrator's Guide, Chapter 8, pages 268-270.
	
	For more information about the Preinst tool and its command-line switches, see
	the System Management Server 2.0 Resource Guide, Chapter 13, pages 362-363, from
	the Microsoft BackOffice 4.5 Resource Kit.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q200645 Dumpsend.exe: Display Send Request for SMS 2.0
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbScheduler kbSender kbSMSSender 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
