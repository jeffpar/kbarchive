---
layout: page
title: "Q170873: WD97: IPF Viewing Name or Path on Linked Floating Picture"
permalink: /kb/170/Q170873/
---

## Q170873: WD97: IPF Viewing Name or Path on Linked Floating Picture

	Article: Q170873
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraphic kbwordvba
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a linked, floating picture into a Microsoft Word 97 document,
	select it, and then try to view the SourcePath and SourceName properties in
	Visual Basic for Applications, you may receive the following error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	Clicking the Details button gives the following message:
	
	  WINWORD caused an invalid page fault in module MSO97.DLL.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR-1).
	
	To work around this problem, use one of the following methods.
	
	Method 1: Use a Different Visual Basic for Applications Command
	---------------------------------------------------------------
	
	Instead of using the following two commands
	
	  ?Selection.ShapeRange(1).linkformat.sourcepath
	  ?Selection.ShapeRange(1).linkformat.sourcename
	
	use the following single command to return both the source name and the source
	path:
	
	  ?Selection.ShapeRange(1).linkformat.SourceFullName
	
	Method 2: Change the Type of Picture
	------------------------------------
	
	Change the pictures from floating to inline or framed before running the Visual
	Basic for Applications code to view the SourceName or SourcePath properties.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	MORE INFORMATION
	================
	
	The problem occurs when you insert a linked, floating picture and then try to
	view the path and name information through Visual Basic for Applications. This
	can be done by inserting and selecting the linked, floating, starting the Visual
	Basic editor, and using the Immediate window to enter the following commands:
	
	  ?Selection.ShapeRange(1).linkformat.sourcepath
	  ?Selection.ShapeRange(1).linkformat.sourcename
	
	Immediately after you execute the second Visual Basic for Applications command
	you will receive the Invalid Page Fault (IPF). Executing only one command will
	not generate the IPF. The order in which you execute the commands has no effect
	on the IPF.
	
	REFERENCES
	==========
	
	For more information about floating objects, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q161692 WD97: Problems With Float Over Text Objects
	
	  Q155804 WD97: Inserted Picture or Drawing Object Moves Down Page
	
	  Q167738 WD97: Can't See or Manipulate Objects (and Other Odd Behavior)
	
	  Q155802 WD97: Word Doesn't Find "Float Over Text" Objects
	
	Additional query words: sr1 release1 general protection GPF crash 8.0 8.00
	
	======================================================================
	Keywords          : kbgraphic kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
