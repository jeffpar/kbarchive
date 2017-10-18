---
layout: page
title: "Q242547: Roaming Profiles Are Not Deleted from the Local Hard Disk"
permalink: kb/242/Q242547/
---

## Q242547: Roaming Profiles Are Not Deleted from the Local Hard Disk

	Article: Q242547
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP3,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP3, 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Workstation versions 4.0 SP3, 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you implement a system policy to delete the locally cached user profile when
	the user logs off, the locally cached user profile may not be deleted in Spanish
	Windows NT 4.0.
	
	CAUSE
	=====
	
	This issue is known to occur only in the Spanish version of Windows NT. Some of
	the registry keys related to the logon sound are localized while the associated
	.wav file names are not. This causes the audio compression manager to open the
	MSACM and Priority V4.00 keys (shown below) under the current user's SID as
	opposed to opening them under the default user.
	
	  1 -
	  \REGISTRY\USER\S-1-5-21-1515338695-2011171286-569397357-1020\Software\Microsoft\Multimedia\Audio
	  Compression Manager\MSACM
	
	  1 -
	  \REGISTRY\USER\S-1-5-21-1515338695-2011171286-569397357-1020\Software\Microsoft\Multimedia\Audio
	  Compression Manager\\Priority v4.00
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
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
	
	The Spanish-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  10/05/99  09:09a               93,968  Msacm32.dll   Intel
	  10/05/99  06:13a               26,896  Msacm32.drv   Intel
	  10/05/99  09:09a               245,008 Msacm32.dll   Alpha
	  10/05/99  06:13a                65,296 Msacm32.drv   Alpha
	
	
	
	The fix closes the keys listed above when the user logs off if they are opened
	under the current user's SID. Although the problem is specific to Spanish
	Windows NT, this fix applies to all localizations including U.S. English.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search
	Version           : winnt:4.0 SP3,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
