---
layout: page
title: "Q186845: WD97: Picture Wrapping Changes from No Wrap to Around Wrap"
permalink: /kb/186/Q186845/
---

## Q186845: WD97: Picture Wrapping Changes from No Wrap to Around Wrap

	Article: Q186845
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraphic kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Microsoft Word 97 document containing a picture with top and
	bottom wrapping in Microsoft Word 7.x for Windows 95, the picture will be
	contained within a frame with wrapping set to around rather than to no wrapping.
	
	CAUSE
	=====
	
	The document was created in Word 97 and saved in the format of Word 6.0/95. The
	version of the converter that you are using does not properly convert a picture
	with top and bottom wrapping to a picture in a frame with no wrapping. The
	converter actually sets the text wrapping in the frame to Around rather than
	None. (Click Frame on the Format menu.)
	
	RESOLUTION
	==========
	
	To correct this problem, obtain Microsoft Word 97 Service Release 2 (SR-2).
	
	Temporary Workaround
	--------------------
	
	Once you have opened the document in Word 7.x, you will need to change the text
	wrapping setting to None and then reposition the graphic. To do this, follow
	these steps:
	
	1. Open the document in Word 7.x.
	
	2. Click once to select the object.
	
	3. On the Format menu, click Frame.
	
	4. Under Text Wrapping, click None, and then click OK.
	
	5. Reposition the frame if necessary.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Office 97
	Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q162602 WD97: Questions About Saving in the Word 6.0/95 File Format
	
	  Q157088 WD97: Limitations Converting Documents from Word 97 to 6.x/7.0
	
	  Q177289 WD97: Why Are Two Word 6.0/95 Converters Listed in Save As Type?
	
	Additional query words: wrap
	
	======================================================================
	Keywords          : kbgraphic kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
