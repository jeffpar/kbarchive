---
layout: page
title: "Q178973: WD97: Inserted Wave Sound Icon in Text Box Resized, Causes Error"
permalink: kb/178/Q178973/
---

## Q178973: WD97: Inserted Wave Sound Icon in Text Box Resized, Causes Error

	Article: Q178973
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbsound kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you insert a Wave sound file object into a text box, resize it, and play
	it, the icon may return to its original size and may return the following
	message when you attempt to play it again:
	
	  Word cannot edit the Wave Sound.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods.
	
	Method 1: Insert the Object as a Link
	-------------------------------------
	
	1. Create the text box.
	
	2. With the insertion point in the text box, on the Insert menu, click Object,
	  and then click the Create From File tab.
	
	3. Click to clear the Float Over Text check box and click to select the Link To
	  File check box.
	
	4. Click Browse, find and select the wave file, and then click OK.
	
	Method 2: Enter an Extra Paragraph Mark into the Text Box
	---------------------------------------------------------
	
	1. Create the text box.
	
	2. Press ENTER to enter a second paragraph mark.
	
	3. Move the insertion point to the first paragraph mark and insert the wave
	  file.
	
	Method 3: Do Not Place the Wave File in a Text Box
	--------------------------------------------------
	
	Insert the wave sound file directly into your document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This problem was corrected in Microsoft
	Word 2000.
	
	Additional query words: re-size change size
	
	======================================================================
	Keywords          : kbsound kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
