---
layout: page
title: "Q259599: SMS: Slow Response When You Link Collections"
permalink: /kb/259/Q259599/
---

## Q259599: SMS: Slow Response When You Link Collections

{% raw %}

	Article: Q259599
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you link a collection to another collection in the Systems Management
	Server (SMS) Administrator console, there may be a long delay before the
	populated Browse Collection window appears.
	
	CAUSE
	=====
	
	The Administrator console uses a complex set of queries to populate the Browse
	Collection window. It may take a long time to populate the window on a site with
	many collections.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Systems Management Server
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date     Size       File name     Platform
	  ------------------------------------------
	  4/10/00    538,624  Mmcbasui.dll  Intel
	  4/10/00  1,006,864  Mmcbasui.dll  Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	The method that is used by the SMS Administrator console to link collections has
	been optimized.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0 SP2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, use the appropriate method.
	
	Using the Hotfix Installer
	--------------------------
	
	NOTE: This method is for Intel-based site servers only. You must install this
	update manually on remote SMS Administrator consoles.
	
	1. Copy the hotfix folder structure to a share on your network. Q259599.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run Q259599.exe and follow the directions in the wizard. You can run the file
	  in Quiet mode by using the /s switch.
	
	Manual Installation
	-------------------
	
	To install the hotfix, follow these steps at the SMS site server:
	
	1. Stop the SMS_EXECUTIVE and the SMS_SITE_COMPONENT_MANAGER services.
	
	2. Quit all instances of the Administrator console that are running on the site
	  server.
	
	3. Replace the Mmcbasui.dll file in the <SMS_root>\Bin\I386 folder with
	  the version from the hotfix.
	
	4. Start the SMS_EXECUTIVE and the SMS_SITE_COMPONENT_MANAGER services.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
