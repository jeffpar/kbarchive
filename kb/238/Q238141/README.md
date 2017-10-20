---
layout: page
title: "Q238141: SMS: Client Installation Adds Multiple Path Statements"
permalink: /kb/238/Q238141/
---

## Q238141: SMS: Client Installation Adds Multiple Path Statements

{% raw %}

	Article: Q238141
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug smsinst
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a Systems Management Server (SMS) client installation, the
	";C:\WINDOWS\SYSTEM\WBEM" path is added to the end of each path statement,
	regardless of whether or not the path statement already contains the path. If
	the Autoexec.bat file contains multiple path statements when you perform the SMS
	client installation, SMS adds the ";C:\WINDOWS\SYSTEM\WBEM" path to the end of
	each path statement.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date        Version    Size        File name     Platform
	  ---------------------------------------------------------
	  08/23/1999                    67   Compver.ini   Alpha
	  09/03/1999  1380.1017  7,200,879   Wbemsdk.exe   Alpha
	  08/23/1999                    67   Compver.ini   Intel
	  09/03/1999  1380.1017  3,822,227   Wbemsdk.exe   Intel
	
	
	
	NOTE: The hotfix for this issue is the same hotfix that is referenced in the
	following Microsoft Knowledge Base article (you should refer to this article
	when requesting this hotfix):
	
	  Q238144 Client Installation Corrupts Path Statement in Autoexec.bat
	
	WORKAROUND
	==========
	
	To work around this behavior, use the following steps:
	
	1. Click Start, click Run, type "sysedit" (without the quotation marks), and
	  then click OK.
	
	2. Edit the Autoexec.bat file and consolidate all path statements without adding
	  the ";C:\WINDOWS\SYSTEM\WBEM" path to the path statement.
	
	3. Save the file, and then quit Sysedit.
	
	4. Click Start, point to Settings, click Control Panel, and then double-click
	  Systems Management.
	
	5. On the Components tab, click Windows Management, and then click Repair.
	
	SMS reinstalls the Windows Management portion of the SMS client installation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 2.0.
	
	MORE INFORMATION
	================
	
	This behavior is confirmed to occur only with Microsoft Windows 95/98 clients at
	this time.
	
	Additional query words: prodsms wbem
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug smsinst 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
