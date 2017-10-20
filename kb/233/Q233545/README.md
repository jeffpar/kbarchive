---
layout: page
title: "Q233545: SMS: Remote Control WinNT to WinNT Drops Connection"
permalink: /kb/233/Q233545/
---

## Q233545: SMS: Remote Control WinNT to WinNT Drops Connection

{% raw %}

	Article: Q233545
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you take Remote Control of a Windows NT Workstation computer from another
	computer that is running Windows NT, the UDP packets appear to get out of
	synchronization. After a few minutes, the client no longer receives input from
	the administrator. The administrator can still see the client mouse and keyboard
	input, but can no longer update the client. The administrator keyboard and mouse
	are non functional at that point.
	
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
	
	  Date          Time   Version       Size     File name    Platform
	  -----------------------------------------------------------------
	
	   4/2/99      7:22PM   1.2         326 KB   Sightnt.dll   Intel
	  5/21/99      1:25PM   1.2         167 KB   Wuser32.exe   Intel
	
	   4/2/99      7:23PM   1.2         635 KB   Sightnt.dll   Alpha
	  5/21/99      1:25PM   1.2         339 KB   Wuser32.exe   Alpha  
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	Additional query words: prodsms remotecontrol rc admin machine rem synch sync
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
