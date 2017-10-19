---
layout: page
title: "Q131031: READ NOLOCK Behavior in Visual FoxPro"
permalink: /kb/131/Q131031/
---

## Q131031: READ NOLOCK Behavior in Visual FoxPro

	Article: Q131031
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The behavior of the READ NOLOCK command in Visual FoxPro is slightly different
	from its behavior in FoxPro version 2.x.
	
	MORE INFORMATION
	================
	
	READ NOLOCK alters the behavior of the READ command, so records are not
	automatically locked by the READ.
	
	In FoxPro version 2.x, issuing a READ NOLOCK command automatically disables all
	fields. Attempts to key data into the fields causes a high-pitched beep until a
	SHOW GETS LOCK command is issued.
	
	In Visual FoxPro, the beep is no longer heard. Instead, a "Record is read only"
	message appears on the status bar. A SHOW GETS LOCK command is still required to
	edit the fields.
	
	If buffering is enabled, the READ NOLOCK command overrides the locking behavior
	of the buffering mode that is in effect. If pessimistic locking is enabled, the
	record is not locked until the SHOW GETS LOCK command is issued. If optimistic
	locking is enabled, the record is locked at the time the SHOW GETS LOCK is
	issued, not at the time the record is written to disk.
	
	The TABLEUPDATE() and TABLEREVERT() commands should not be used in conjunction
	with READ NOLOCK. You should modify the application to use buffering completely
	or to use READ NOLOCK without enabling buffering.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
