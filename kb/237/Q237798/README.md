---
layout: page
title: "Q237798: BUG: SSRESTOR Fails with &quot;Error reading from file&quot;"
permalink: kb/237/Q237798/
---

## Q237798: BUG: SSRESTOR Fails with &quot;Error reading from file&quot;

	Article: Q237798
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): _IK kbSSafe500bug kbSSafe600bug kbSSExplorer _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to restore an archive file, you receive the following error
	message:
	
	  "Error reading from file" "<SourceSafe path file>" <physical
	  filename>
	
	For example:
	
	  "Error reading from file" "$/Project1/Test.exe" aghaaaaa
	
	CAUSE
	=====
	
	The restore process doesn't restore the file correctly. The file exists in the
	Visual SourceSafe (VSS) explorer but the physical file is not in the data
	directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	  Q220876 HOWTO: Restore an Entire Database Archive with Restore Wizard
	
	Additional information can be found in the Visual SourceSafe product
	documentation by searching for these titles:
	
	- restore databases
	
	- VSS Administrator
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK kbSSafe500bug kbSSafe600bug kbSSExplorer _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
