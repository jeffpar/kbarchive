---
layout: page
title: "Q164385: BUG: Large Result Sets May Become Corrupted in VFP"
permalink: /kb/164/Q164385/
---

## Q164385: BUG: Large Result Sets May Become Corrupted in VFP

	Article: Q164385
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500bug kbvfp600bug kbGrpDSFoxkbbuglist
	Last Modified: 02-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a cursor or view against an external table like those in SQL Server
	or any other server, the local representation of the records at the end of the
	result set may become corrupted. Data on the server itself is not affected.
	Occurrence of the corruption varies with the size of the result set and the
	settings of SYS(3050). Corruption may also occur with the default settings for
	SYS(3050). Corruption occurs after switching to another program or bringing up a
	new window like the Class Browser.
	
	RESOLUTION
	==========
	
	Following are some suggestions to avoid this problem:
	
	1. Maximize the buffer size by setting both SYS(3050,1) and SYS(3050,2) to the
	  value of SYS(1001).
	
	2. Do not use Class Browser concurrently or have projects or designers open when
	  using these queries or views, and, where possible, avoid moving other
	  application windows in front of Visual FoxPro during use of these cursors.
	
	3. Test cursor or view for the presence of corruption with the following
	  command:
	
	        LOCATE FOR AT(CHR(0))
	
	4. Install more memory.
	
	5. Work with smaller cursors, bringing down a smaller subset of the data.
	
	6. Limit the number of cursor open at any given time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	NOTE: This problem is rare and isolated to the specific conditions described in
	this article.
	
	MORE INFORMATION
	================
	
	Corruption depends upon available memory, the setting, if any, of SYS(3050), the
	number of records, number of fields and size of the fields. It seems that only
	very specific combinations cause the error. Changing a field size or adding or
	deleting a field may resolve the problem.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500bug kbvfp600bug kbGrpDSFox kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0b,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
