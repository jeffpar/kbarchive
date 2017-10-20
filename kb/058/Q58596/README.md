---
layout: page
title: "Q58596: Mac Hyp: EnableNotify Can Disable Notification Alerts"
permalink: /kb/058/Q58596/
---

## Q58596: Mac Hyp: EnableNotify Can Disable Notification Alerts

{% raw %}

	Article: Q58596
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To disable notification alerts, use the following syntax:
	
	  msmail (enableNotify [, flag])
	
	If "flag" has the value "false", all forms of new mail notification (for example,
	alert windows, chimes, menu bar icons) are disabled.
	
	If "flag" is "true" (or no flag is specified and it defaults to "true"), the
	user's notification options are restored to the values in the Mail Preferences
	screen.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	

{% endraw %}
