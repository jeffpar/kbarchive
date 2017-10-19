---
layout: page
title: "Q186360: PRB: Visual Merge Doesn't Happen When Expected"
permalink: /kb/186/Q186360/
---

## Q186360: PRB: Visual Merge Doesn't Happen When Expected

	Article: Q186360
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are in the Visual SourceSafe Explorer and you have set the "Use visual
	merge" option to Yes, the Visual Merge window does not appear when you expect it
	to (that is, when merging a branched file, or merging a file that has been
	simultaneously checked out by two users).
	
	CAUSE
	=====
	
	Visual SourceSafe uses three files when performing a merge: a baseline file and
	two current files. In the case of a branched file, the baseline is the version
	of the file that was branched, and the current files are the latest versions of
	the branches. In the case of multiple checkouts, the baseline is the version of
	the file that was checked out, and the current files are the users' copies.
	
	The Visual Merge window appears only if both current files have been edited. If
	only one has been edited and the other is identical to the baseline, the visual
	merge window does not appear.
	
	STATUS
	======
	
	This behavior is by design. When performing a merge, Visual SourceSafe attempts
	to reconcile changes that were made to the current files. To do this, it makes
	two comparisons (it compares the baseline file to both current files). The
	Visual Merge window will only appear if each of the current files is different
	from the baseline.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	These steps reproduce an example of when the Visual Merge window does not
	appear:
	
	1. In the Visual SourceSafe Explorer, on the General tab, set the "Use visual
	  merge" option to Yes.
	
	Merging branches scenario:
	
	1. Create two new projects (for example, $/P1 and $/P2).
	
	2. Add a text file (for example, file1) to P1.
	
	3. Share file1 into P2 and branch after you share it. P1 and P2 now contain the
	  same version of file1.
	
	4. Check out file1 in P2 and modify it.
	
	5. Merge P2/File1 to P1/File1.
	
	Multiple checkout scenario:
	
	1. User1 checks out a file.
	
	2. User2 checks out the same file, changes it and then checks it in.
	
	3. User1 performs a "Get latest version" of the file.
	
	4. User1 chooses "Merge" on the Replace, Merge, Leave, Cancel or Help dialog
	  box.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q159270 How Visual SourceSafe's Merge Process Works
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by David de
	Groot, Microsoft Corporation
	
	
	Additional query words: kbSSExplorer kbDSupport kbdse kbSSafe500
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
