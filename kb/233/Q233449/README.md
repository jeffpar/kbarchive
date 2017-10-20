---
layout: page
title: "Q233449: Business Planner: Unable to Start Personal Interviewer"
permalink: /kb/233/Q233449/
---

## Q233449: Business Planner: Unable to Start Personal Interviewer

{% raw %}

	Article: Q233449
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Business Planner 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Personal Interviewer in Microsoft Business Planner,
	you may return to the Business Planner home page.
	
	NOTE: If you attempt to manually open the Personal Interviewer database (the
	Msbp_pln.mdb file), you may receive the following error message:
	
	  You cannot use this name for the wizard file. Please choose another name.
	
	CAUSE
	=====
	
	This behavior can occur if the Msbp_pln.mdb file is damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods.
	
	Delete the Damaged Msbp_pln.mdb File
	------------------------------------
	
	To do this:
	
	1. Click Start, point to Find, and then click "Files or Folders."
	
	2. In the Named box, type "msbp_pln.mdb" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer, and then click Find Now.
	
	4. In the list of found files, right-click the Msbp_pln.mdb file.
	
	5. Click Delete, and then click Yes.
	
	Copy a New Msbp_pln.mdb File to Your Hard Disk
	----------------------------------------------
	
	To do this:
	
	1. Insert the Microsoft Office 2000 Disc 2 CD-ROM into your CD-ROM drive.
	
	2. Click Start, point to Find, and then click "Files or Folders."
	
	3. In the Named box, type "msbp_pln.mdb" (without the quotation marks).
	
	4. In the "Look in" box, click your CD-ROM drive, and then click Find Now.
	
	5. In the list of found files, right-click the Msbp_pln.mdb file, and then click
	  Copy.
	
	6. Close the Find: Files Named Msbp_pln.mdb window.
	
	7. Click Start, and then click Run.
	
	8. In the Open box, type "profiles" (without the quotation marks), and then
	  click OK.
	
	9. Double-click the <username> folder, where <username> is your
	  Microsoft Windows user name.
	
	10. Double-click the Personal folder.
	
	11. Right-click the Msbp2000 folder, and then click Paste.
	
	Additional query words: msbp corrupt
	
	======================================================================
	Keywords          : kberrmsg kbtool kbimu 
	Technology        : kbHomeMMsearch kbBusPlanner
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
