---
layout: page
title: "Q133704: ISDN Bandwidth Capabilities of Windows NT"
permalink: /kb/133/Q133704/
---

## Q133704: ISDN Bandwidth Capabilities of Windows NT

{% raw %}

	Article: Q133704
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PPP Multilink Protocol (PPP MP) is a technology that provides up to 128
	kilobytes per second (kb/s) wire speeds on a single ISDN line by combining two
	B-channel calls. Each B-channel provides a 64 kb/s link.
	
	Microsoft supports Multilink Protocol starting with NT 4.0 and RAS.
	
	MORE INFORMATION
	================
	
	Channel Aggregation is a proprietary method designed by Digi International (the
	makers of Digiboard) that allows speeds greater than 64 kb/s using 2 B-
	channels. To attempt to use speeds greater than 64kb/s, use one of the following
	methods:
	
	Windows NT version 3.5x
	-----------------------
	
	Modify the phone book entry by editing the entry, clicking the ISDN button, and
	entering 2 in the Channels to Use category.
	
	Windows NT version 4.0
	----------------------
	
	1. In Dial-Up Networking, click More, click Edit entry and modem properties.
	
	2. Select Multiple Lines in the Dial using drop down list.
	
	3. Click Configure and enter a phone number for each line which you are using.
	
	
	For more technical information on the PPP Multilink Protocol, see RFC
	
	1. This RFC can be found on the World Wide Web at:
	
	  http://www.cis.ohio-state.edu/htbin/rfc/rfc1717.html
	
	For more general information regarding the PPP Multilink protocol or ISDN,
	connect to the following World Wide Web site:
	
	- http://alumni.caltech.edu/~dank/isdn/
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51 4.00
	
	=============================================================================
	

{% endraw %}
