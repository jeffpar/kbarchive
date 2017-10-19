---
layout: page
title: "Q276354: Access Violation in the Metabase Causes Deadlock in WAM"
permalink: /kb/276/Q276354/
---

## Q276354: Access Violation in the Metabase Causes Deadlock in WAM

	Article: Q276354
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDSupport kbCOMIS kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications such as Microsoft FrontPage Server Extensions may deadlock because
	Web Application Manager (WAM) is waiting for the metabase.
	
	CAUSE
	=====
	
	The problem occurs because a first chance access violation (AV) occurs in the
	metadata handling code that causes a critical section to be orphaned, resulting
	in a deadlock on another thread.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Windows NT service pack that
	contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time    Version     Size     File name     Platform
	  -------------------------------------------------------------
	  1/25/2001  7:18:17 4.2.757.1   71,232   Metadata.dll  x86
	  1/25/2001  7:17:28 4.2.757.1   131,856  Metadata.dll  alpha
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Internet Information Server
	4.0.
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbDSupport kbCOMIS kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
