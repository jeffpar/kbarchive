---
layout: page
title: "Q104594: Tandberg Firmware Versions Required for Windows NT"
permalink: /kb/104/Q104594/
---

## Q104594: Tandberg Firmware Versions Required for Windows NT

{% raw %}

	Article: Q104594
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There are certain firmware revisions required for Tandberg tape drives to run
	with the Tandberg tape driver supplied in Windows NT version 3.1. If the
	firmware revision is out of date, you may receive the following error message:
	
	  Fatal translation error on tape in Drive 1.
	
	CAUSE
	=====
	
	Tandberg tape drives require a firmware revisions to be able to work correctly
	with the backup program that comes with Windows NT.
	
	RESOLUTION
	==========
	
	Tandberg tape drives require the following revisions:
	
	  Tandberg 3660     08:15
	  Tandberg 3820     04:08
	  Tandberg 4120     04:08
	  Tandberg 4220     05:10
	
	There are several ways to determine the firmware revision on a Tandberg tape
	drive. Some models have the revision printed on the back of the unit, others do
	not. If it is not printed on the outside of the tape unit, it can be found on an
	EPROM on the inside of the unit and may take the form
	
	  966040 I04:12 92x7511
	
	where 4:12 is the firmware revision number. If you do not know the firmware
	revision and cannot find out what it is, please contact the manufacturer. If the
	firmware revision is out of date, please contact the manufacturer and update the
	firmware.
	
	The manufacturer can be contacted at one of the following:
	
	  Tandberg Data in Norway
	  Kjeisasvelen 172
	  P.O. BOX 133 Kjelsas
	  N-0411 OSLO, Norway
	  Fax + 47 22 95 13 55
	  Phone 47 22 18 90 90
	  Email: vimo@tdata.no
	
	  -or-
	
	  Tandberg Data, INC.
	  2649 Townsgate Rd.
	  Suite 600
	  Westlake Village, CA 91361
	  Phone (800) 258-8285
	  Fax (805) 495-4186
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
