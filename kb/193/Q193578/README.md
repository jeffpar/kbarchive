---
layout: page
title: "Q193578: BUG: Rollback Causes File Label Corruption"
permalink: /kb/193/Q193578/
---

## Q193578: BUG: Rollback Causes File Label Corruption

	Article: Q193578
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbSSafe600bug
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a file is rolled back, previous "File Label" label comments are corrupted.
	The first eight characters of the label comment are removed. If you run Analyze
	in autofix mode (-f switch), it removes the entire corrupted label comment.
	
	A "File Label" is a label that is applied to an individual file, not a project. A
	project label is applied to an entire project and all its sub- projects. This
	error does not occur with project labels.
	
	RESOLUTION
	==========
	
	You can work around this problem by performing the steps in the following
	article instead of doing a rollback. The major benefit of this method is that it
	maintains all the history information.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q153493 HOWTO: Perform a RollBack Without Losing History
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new file and add it to the project with a comment of "original
	  comment".
	
	2. Check it out and make a change.
	
	3. Check it in with the comment "first comment".
	
	4. Label it with the label "first label" and the comment "first label comment".
	
	5. Check it out and make a change.
	
	6. Check it in with the comment "second comment".
	
	7. Label it with the label "second label" and the comment "second label
	  comment".
	
	8. Check it out and make a change.
	
	9. Check it in with the comment "third comment".
	
	10. Label it with the label "third label" and the comment "third label comment".
	
	11. Show history of the file. There should be five versions, with labels on
	  versions one, three, and five. Examine each of the Details to make sure that
	  all of the labels and comments are in tact.
	
	12. Click on version three.
	
	13. Click Rollback, and perform the rollback.
	
	RESULT: Examine each of the Details.
	
	NOTE: The first eight characters are missing from the label comment on version
	three.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500bug kbSSafe600bug 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
