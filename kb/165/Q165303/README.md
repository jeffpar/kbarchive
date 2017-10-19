---
layout: page
title: "Q165303: WD97: Unable to Apply Bullets, Numbers (Tracked Changes Enabled)"
permalink: /kb/165/Q165303/
---

## Q165303: WD97: Unable to Apply Bullets, Numbers (Tracked Changes Enabled)

	Article: Q165303
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbnumbering
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you turn on Track Changes and then delete some text, you will be unable to
	modify the bullet or numbering properties of that text if you deleted the
	paragraph mark of that paragraph.
	
	CAUSE
	=====
	
	This behavior is by design. The bullet or numbering status of the paragraph will
	remain unchanged until a new paragraph mark takes its place.
	
	WORKAROUND
	==========
	
	To retain the ability to apply or remove bullets or numbering to the paragraph,
	the paragraph mark must not be marked for deletion. You can "unmark" the
	paragraph for deletion by following these steps:
	
	1. Turn on the Show/Hide button on the Standard toolbar so your paragraph marks
	  are showing in the document.
	
	2. Select the paragraph mark at the end of the paragraph that you want to
	  "unmark" for deletion.
	
	3. On the Tools menu, point to Track Changes, and click Accept Or Reject
	  Changes.
	
	4. Click the Reject button to "unmark" the paragraph mark.
	
	5. Click the Close button to return to the document.
	
	You can now add or remove bullets or numbering to the deleted paragraph.
	
	MORE INFORMATION
	================
	
	For more information about tracking changes, click Contents And Index on the
	Help menu, click the Index tab in Word Help, type the following text
	
	  tracking changes, overview
	
	and then double-click the selected text to go to the "Track changes while you
	edit" topic. If you are unable to find the information you need, ask the Office
	Assistant.
	
	Or, see the following articles in the Microsoft Knowledge Base:
	
	  Q160112 WD97: Revision Marks Displayed/Printed in Wrong Location
	
	  Q163190 WD97: Track Changes Accept Button Does Not Accept Revision
	
	  Q163850 WD97: Tracked Changes Doesn't Find Revisions in Subdocument
	
	  Q165162 WD97: AutoNum Fields Don't Update When Deleted W/ Track Changes
	
	  Q164336 WD: Footnote Text Remains After Footnote Reference Deleted
	
	  Q163659 WD97: Deleted Text from Tracked Changes Appears in HTML
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
