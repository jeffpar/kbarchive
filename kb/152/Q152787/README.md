---
layout: page
title: "Q152787: Telephone Dialing In Colombia, France, and Finland"
permalink: /kb/152/Q152787/
---

## Q152787: Telephone Dialing In Colombia, France, and Finland

{% raw %}

	Article: Q152787
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 Telephony dialing properties may need to be modified when dialing
	in Colombia, France and Finland.
	
	MORE INFORMATION
	================
	
	Windows NT 4.0 includes Windows Telephony and the Telephony API (TAPI) version
	2.0. One of the features of Windows Telephony is the ability to automatically
	use the correct outside line access codes, long distance and international
	prefixes, and other dialing rules based on your location and the destination of
	a telephone call. You specify most of this information in the Dialing Properties
	sheet that is accessible through the Telephony Control Panel tool and through
	most programs that place telephone calls. Windows Telephony includes dialing
	rules for local, long distance, and international calls for over 230 different
	countries around the world; these rules are stored in the registry.
	
	From time to time, countries change their dialing rules; Microsoft distributes
	updates to the dialing rules through the World Wide Web and in new operating
	system releases as needed to keep up-to-date with these changes. In September,
	1996, Colombia will begin using new dialing rules; in October, 1996, France and
	Finland will begin using new dialing rules.
	
	Although the new rules had not gone into effect at the time Windows NT 4.0 was
	released to manufacturing, new dialing rules for these three countries have been
	included in Windows Telephony 2.0 in anticipation of these future changes. By
	the time systems preloaded with the local language versions of Windows NT 4.0
	are available in these countries, the changes will have gone into effect. If you
	will be using Windows NT 4.0 in France, Finland, or Colombia before the new
	dialing procedures are effective, you will need to enter phone numbers in their
	"dialable" format (specifying all digits that need to be dialed including access
	codes and prefixes), bypassing the Dialing Properties settings and the new
	dialing rules.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
