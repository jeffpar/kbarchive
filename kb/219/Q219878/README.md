---
layout: page
title: "Q219878: &quot;Warning! Your Drive May Be Corrupt&quot; Starting Windows NT 4.0 SP4"
permalink: /kb/219/Q219878/
---

## Q219878: &quot;Warning! Your Drive May Be Corrupt&quot; Starting Windows NT 4.0 SP4

	Article: Q219878
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have Windows NT 4.0 Service Pack 4 (SP4) installed, you may see the
	following message when Chkdsk runs during a restart of Windows NT:
	
	  WARNING! Your drive may be corrupt. Please let AUTOCHK run.
	  Skipping AUTOCHK on a volume may lead to an unmountable volume.
	  Skipping AUTOCHK on a system drive may lead to an unusable system.
	  AUTOCHK resumed.
	
	The following message may also appear in your event viewer's Application log:
	
	  Event ID: 1001
	  Source: Autochk
	  Description: WARNING! Your drive may be corrupt. Please let AUTOCHK run.
	  Skipping AUTOCHK on a volume may lead to an unmountable volume.
	  Skipping AUTOCHK on a system drive may lead to an unusable system.
	  AUTOCHK resumed.
	
	CAUSE
	=====
	
	This message has been added to Chkdsk starting with SP4. It does not necessarily
	indicate that there is any problem on the hard disk. It is a warning that
	skipping Autochk (the automatic running of Chkdsk after an improper shutdown)
	might lead to problems on your hard disk. When a Windows NT-based computer is
	shut down improperly (for example, by a power failure), Autochk scans the hard
	disk the next time you start Windows NT.
	
	This message is displayed and is recorded in the Application log every time
	Chkdsk is run during startup, whether it was invoked by Autochk or manually by
	the user.
	
	MORE INFORMATION
	================
	
	For more information about the Autochk feature, see the following article in the
	Microsoft Knowledge Base:
	
	  Q187941 An Explanation of CHKDSK and the New /C and /I Switches
	
	
	Additional query words: checkdisk corruption
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
