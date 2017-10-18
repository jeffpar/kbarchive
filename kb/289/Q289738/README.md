---
layout: page
title: "Q289738: FIX: History of a Label Does Not Show the Files from Subproject"
permalink: kb/289/Q289738/
---

## Q289738: FIX: History of a Label Does Not Show the Files from Subproject

	Article: Q289738
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbSSExplorer kbDSupport kbGrpDSSSafe
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you label a project and then view the label in the history of a subproject,
	the files that are included in the label from that subproject do not show.
	
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
	
	+-----------------------------------------------------------------------+
	| Name         | Size      | Date     | Time    | Version    | Platform | 
	+-----------------------------------------------------------------------+
	| Analyze.exe  | 198,928   | 4/5/2001 | 3:06 PM | 06.00.9191 | x86      | 
	+-----------------------------------------------------------------------+
	| Ddconv.exe   | 294,160   | 4/5/2001 | 3:06 PM | none       | x86      | 
	+-----------------------------------------------------------------------+
	| Ddupd.exe    | 419,088   | 4/5/2001 | 3:06 PM | none       | x86      | 
	+-----------------------------------------------------------------------+
	| Ss.exe       | 396,048   | 4/5/2001 | 3:06 PM | none       | x86      | 
	+-----------------------------------------------------------------------+
	| Ssadmin.exe  | 12,048    | 4/5/2001 | 3:06 PM | 06.00.9191 | x86      | 
	+-----------------------------------------------------------------------+
	| Ssapi.dll    | 559,888   | 4/5/2001 | 3:06 PM | 06.00.9191 | x86      | 
	+-----------------------------------------------------------------------+
	| Ssarc.exe    | 497,936   | 4/5/2001 | 3:06 PM | 06.00.9191 | x86      | 
	+-----------------------------------------------------------------------+
	| Ssexp.exe    | 16,656    | 4/5/2001 | 3:06 PM | 06.00.9191 | x86      | 
	+-----------------------------------------------------------------------+
	| Ssgui.dll    | 1,135,376 | 4/5/2001 | 3:06 PM | 06.00.9191 | x86      | 
	+-----------------------------------------------------------------------+
	| Ssrestor.exe | 495,888   | 4/5/2001 | 3:06 PM | 06.00.9191 | x86      | 
	+-----------------------------------------------------------------------+
	| Ssscc.dll    | 1,412,880 | 4/5/2001 | 3:06 PM | 06.00.9191 | x86      | 
	+-----------------------------------------------------------------------+
	| Ssus.dll     | 480,528   | 4/5/2001 | 3:06 PM | 06.00.9191 | x86      | 
	+-----------------------------------------------------------------------+
	
	The self-extracting EXE should be:
	
	+----------------------------------------------------------------------+
	| Name          | Size      | Date     | Time     | Version | Platform | 
	+----------------------------------------------------------------------+
	| VSS9191en.exe | 2,727,936 | 4/9/2001 | 11:23 AM | none    | x86      | 
	+----------------------------------------------------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug was corrected in a hotfix for Visual SourceSafe 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project called LabelTest1.
	
	2. Create a sub-project of LabelTest1 called SubProject1.
	
	3. Add at least one file to each of the previous projects.
	
	4. Label the LabelTest1 project Build, and then locate the history of the
	  SubProject1 and view the label from the history.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSExplorer kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
