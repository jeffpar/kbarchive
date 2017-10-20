---
layout: page
title: "Q237690: SMS: Err Msg: The Redirector Has Timed Out to &#92;&#92;&lt;SMS Server&gt;"
permalink: /kb/237/Q237690/
---

## Q237690: SMS: Err Msg: The Redirector Has Timed Out to &#92;&#92;&lt;SMS Server&gt;

{% raw %}

	Article: Q237690
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kberrmsg kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a redirector time out occurs on the Systems Management Server logon server,
	a blank window may be displayed or you may receive the following error message:
	
	  Event ID: 3013 Source: Rdr
	  "The redirector has timed out to \\<sms logon server>."
	
	The Pcmwin.log file may contain the following text:
	
	  [05/03/99 13:54:38] Package Command Manager ==> Polling .....
	  [05/03/99 13:54:38] Package Command Manager ==> Attempting to refresh package collection from logon server.
	  [05/03/99 13:54:39] Package Command Manager ==> Connected to logon server: \\S768AA0\SMS_SHR\pcmins.box
	  [05/03/99 13:54:39] Package Command Manager ==> Looking for instruction file: \\S768AA0\SMS_SHR\pcmins.box\76801009.INS
	  [05/03/99 13:55:29] Package Command Manager ==> Packages after filter: 6
	  [05/03/99 13:55:29] Package Command Manager ==> New packages found.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Systems Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time     Size         File Name      Platform
	  -----------------------------------------------------
	  06/22/99   1:12pm     454,032    Pcmwin16.exe   x86
	  06/22/99   1:12pm     470,448    Pcmwin32.exe   x86
	  06/22/99   1:11pm   1,175,312    Pcmwin32.exe   Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, replace the Pcmwin32.exe file in the
	<SMS_root>\Site.srv\Maincfg.box\Client.src\<Platform>.bin folder
	using the latest version.
	
	Maintenance Manager replicates the updated file to the Systems Management Server
	logon servers on the next work cycle.
	
	To update the clients running Pcmwin32, either manually run the Upgrade.bat batch
	file on each client computer or follow the instructions in the following article
	in the Microsoft Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
