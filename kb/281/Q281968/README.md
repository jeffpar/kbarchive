---
layout: page
title: "Q281968: &quot;No Sounds&quot; Sound Scheme May Cause STOP 0x50 Error Message"
permalink: /kb/281/Q281968/
---

## Q281968: &quot;No Sounds&quot; Sound Scheme May Cause STOP 0x50 Error Message

	Article: Q281968
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbsound kbtool kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you set the sound scheme to "No Sounds," the system may search for the
	"Close.wav" file on Application Close Events. If you have any network shares
	mapped as a local system drive or have a network share path in the system
	"PATH," and you are running programs or open windows from these network shares,
	on system shut down, the system closes these open programs or windows. When the
	system searches for the "Close.wav" file on a network share when you shut down
	your computer, you may receive a STOP 0x50 error message.
	
	
	CAUSE
	=====
	
	This problem can occur because when you set the sound scheme to "No Sounds," the
	system does not handle this setting correctly. When the system searches for the
	Close.wav file on network shares when you shut down your computer, a code bug in
	the Mup.sys file can cause a STOP 0x50 error messag.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time         Size      File name   Platform
	  -------------------------------------------------------
	  03/05/2001  02:06 PM     80,656    Mup.sys     Intel
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, place a fake Close.wav file in your %systemroot%
	folder to prevent the system from searching for the Close.wav file on a network
	share.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbsound kbtool kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTS400 kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
