---
layout: page
title: "Q229097: SMS: Possible Helpdesk TCP and UDP Port Conflicts"
permalink: /kb/229/Q229097/
---

## Q229097: SMS: Possible Helpdesk TCP and UDP Port Conflicts

{% raw %}

	Article: Q229097
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Client computers may experience conflicts between ports used by the Systems
	Management Server Helpdesk function and by other applications. The existence of
	a conflicting port can manifest itself in various ways, including, but not
	limited to, general protection (GP) faults on the client computers, application
	errors, and the Remote Control Agent hanging.
	
	The Systems Management Server Helpdesk function uses the following ports during
	its operations:
	
	  Purpose                    Port
	  -------------------------------
	
	  Verification of Rights     1761
	  Remote Control             1762
	  Remote Reboot              1761
	  Remote Chat                1763
	  File Transfer              1764
	  Remote Execute             1761
	
	Use the following steps to determine if a conflict exists:
	
	1. Disable the Systems Management Server Remote Control Agent (Wuser32.exe).
	
	2. Restart the computer.
	
	3. Run the command "netstat -a" (without the quotation marks).
	
	If the above ports are listed (TCP and/or UDP) then a conflict exists.
	
	CAUSE
	=====
	
	The UDP/TCP ports cannot be shared between applications.
	
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
	
	The English-language version of this software update should have the following
	file attributes or later:
	
	  Date        Time    Version  Size     File name     Platform
	  ------------------------------------------------------------
	  03/23/2000  09:27p  786      649,488  Sightnt.dll   alpha
	  07/24/1999  01:41a  786      134,928  Wchat32.exe   alpha
	  04/07/2000  02:56a  786      157,968  Wslave32.exe  alpha
	  04/03/2000  11:43p  786      346,384  Wuser32.exe   alpha
	  03/23/2000  09:26p  786      333,008  Sightnt.dll   x86
	  07/24/1999  01:41a  786       63,216  Wchat32.exe   x86
	  04/07/2000  02:54a  786       77,936  Wslave32.exe  x86
	  04/03/2000  11:41p  786      170,720  Wuser32.exe   x86
	
	The German-language version of this software update should have the following file attributes (different time stamps) or later:
	
	  Date        Time    Version  Size     File name     Platform
	  ------------------------------------------------------------
	  03/23/2000  08:27p  786      649,488  Sightnt.dll   alpha
	  07/24/1999  12:41a  786      134,928  Wchat32.exe   alpha
	  04/07/2000  01:56a  786      157,968  Wslave32.exe  alpha
	  04/19/2000  00:21a  786      346,384  Wuser32.exe   alpha
	  03/23/2000  08:27p  786      333,008  Sightnt.dll   x86
	  07/24/1999  12:41a  786       63,216  Wchat32.exe   x86
	  04/07/2000  01:54a  786       77,936  Wslave32.exe  x86
	  04/19/2000  12:20a  786      170,720  Wuser32.exe   x86
	
	This software update is only avalaible for Windows NT clients.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use a NetBIOS session for Remote Control rather
	than IP sockets.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The new allocated ports are: 2701, 2702, 2703 and 2704. The following table
	describes the new allocated ports:
	
	  sms-rcinfo    2701/tcp   SMS RCINFO
	  sms-rcinfo    2701/udp   SMS RCINFO
	  sms-remctrl   2702/tcp   SMS REMCTRL 
	  sms-remctrl   2702/udp   SMS REMCTRL
	  sms-chat      2703/tcp   SMS CHAT
	  sms-chat      2703/udp   SMS CHAT
	  sms-xfer      2704/tcp   SMS XFER
	  sms-xfer      2704/udp   SMS XFER
	
	To install the hotfix, perform the following steps on the Systems Management
	Server site server:
	
	1. In the SMS\Site.srv\<Platform>.bin directory on the site server,
	  replace the Sightnt.dll file with the version obtained from the hotfix.
	
	2. In the SMS\Site.srv\Maincfg.box\Client.src\<Platform>.bin directory on
	  the site server, replace the Wuser32.exe, Chat32.exe, and Wslave32.exe files
	  with the version obtained from the hotfix.
	
	At the next Maintenance Manager work cycle, the files are replicated to the
	SMS\Logon.srv\<Platform>.bin directory on all Systems Management Server
	logon servers. Subsequently, new clients get the new .exe file and the existing
	clients can be updated. To update the existing clients, either manually run
	Upgrade.bat on each client or follow the instructions in the following article
	located in the Microsoft Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
