---
layout: page
title: "Q192671: SMS: Remote Control Blue Screens with Dell GX1 and ATI Rage 3D"
permalink: /kb/192/Q192671/
---

## Q192671: SMS: Remote Control Blue Screens with Dell GX1 and ATI Rage 3D

{% raw %}

	Article: Q192671
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Remote Control to connect to a Dell GX 1 computer with an ATI Rage 3D
	Pro graphics adapter running Microsoft Windows 95, the client computer may
	display a fatal error.
	
	The blue screen error "A fatal exception 0e has occurred at 0157:bff9a25b" may be
	displayed if the client is using a version of the driver later than 4.03 and
	earlier than 5.24 of the ATI adapter drivers. Version 4.03 of the ATI driver did
	not exhibit this problem.
	
	WORKAROUND
	==========
	
	To work around this problem, you can disable hardware acceleration. To do this,
	perform the following steps on the Windows 95 computer:
	
	1. On the Start menu, point to Settings and then click Control Panel.
	
	2. Double-click the Display icon and then click the Settings tab.
	
	3. Click Advanced Properties and then click the Performance tab.
	
	4. Slide the indicator bar from Full to None.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain an updated driver from Dell. This problem is
	known to be resolved in version 5.24 of the driver; other versions may or may
	not resolve the issue.
	
	MORE INFORMATION
	================
	
	To obtain the version 5.24 of the ATI driver, contact Dell Computer
	Corporation.
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	This has been reported to occur on any computer with an ATI Rage video adapter.
	New drivers can be found at:
	
	  www.atitech.com
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: prodsms machine win95 win 95 win98 98 9x win9x
	
	======================================================================
	Keywords          : kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
